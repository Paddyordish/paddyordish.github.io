'use strict';
(() => {
  const $ = id => document.getElementById(id);
  const slider = $('position');
  const found = new Set();
  let stage = 'experiment', playing = false, frame = 0, previous = 0, playhead = 0;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ns = 'http://www.w3.org/2000/svg';
  for (let i = 0; i < 58; i++) {
    const star = document.createElementNS(ns, 'circle');
    star.setAttribute('cx', String((i * 137.51 + 21) % 760));
    star.setAttribute('cy', String((i * 63.81 + 14) % 330));
    star.setAttribute('r', i % 7 === 0 ? '1.4' : '.7');
    star.setAttribute('fill', '#dce8ff');
    star.setAttribute('opacity', String(.16 + (i % 5) * .08));
    $('stars').append(star);
  }
  // Exact overlap of apparent circular discs: Sun radius 84, Moon radius 90.
  function covered(value) {
    const d = Math.abs((value - 50) * 4.4), r = 84, R = 90;
    if (d >= r + R) return 0;
    if (d <= R - r) return 1;
    const a = Math.acos((d*d + r*r - R*R) / (2*d*r));
    const b = Math.acos((d*d + R*R - r*r) / (2*d*R));
    const lens = r*r*a + R*R*b - .5*Math.sqrt((-d+r+R)*(d+r-R)*(d-r+R)*(d+r+R));
    return Math.max(0, Math.min(1, lens / (Math.PI*r*r)));
  }
  function render() {
    const v = Number(slider.value), x = 160 + v * 4.4, c = covered(v);
    const kind = c === 1 ? 'total' : c > 0 ? 'partial' : 'none';
    // Never label a rounded-up partial eclipse as 100%.
    const percent = c === 1 ? '100' : c > 0 ? (Math.floor(c*1000)/10).toFixed(1) : '0';
    $('moon').setAttribute('transform', `translate(${x} 181)`);
    $('moon-label').setAttribute('x', x);
    $('corona').setAttribute('opacity', c === 1 ? '1' : '0');
    $('glow').setAttribute('opacity', String(1-c));
    $('coverage').textContent = percent;
    $('phase').textContent = kind === 'total' ? 'TOTALITY' : kind === 'partial' ? 'PARTIAL ECLIPSE' : v < 50 ? 'BEFORE THE ECLIPSE' : 'AFTER THE ECLIPSE';
    const text = kind === 'total' ? 'The Moon covers the Sun’s whole bright face. Its outer atmosphere, the corona, comes into view.' : kind === 'partial' ? 'The Moon covers part of the Sun’s face. Follow the slider towards the centre to find totality.' : v < 50 ? 'Move the Moon towards the Sun to begin.' : 'The Sun is visible again. Move the Moon back to explore.';
    $('observation').textContent = text;
    $('scene-desc').textContent = `${$('phase').textContent}. ${percent}% of the Sun’s face is covered. ${text}`;
    slider.setAttribute('aria-valuetext', `${percent}% covered, ${kind === 'none' ? 'no eclipse' : kind + ' eclipse'}`);
    $('capture').disabled = stage !== 'experiment' || kind === 'none' || found.has(kind);
    $('capture').textContent = kind === 'none' ? 'Find an eclipse to collect' : found.has(kind) ? '✓ ' + (kind === 'total' ? 'Total' : 'Partial') + ' eclipse collected' : '＋ Collect ' + kind + ' eclipse';
    $('explain-button').textContent = found.size === 2 ? 'Explain your discovery →' : 'Collect both to continue';
    $('partial').classList.toggle('collected', found.has('partial'));
    $('centre').classList.toggle('collected', found.has('total'));
    $('sky').style.background = c === 1 ? 'radial-gradient(ellipse at 50% 60%, #18263d, #080e1b 80%)' : '';
    return kind;
  }
  function stop() {
    playing = false; cancelAnimationFrame(frame); previous = 0;
    $('play').textContent = reducedMotion ? '→ Next phase' : '▶ Play crossing';
  }
  function showStage(next) {
    stage = next;
    ['experiment','explain'].forEach((s,i) => {
      $(s).hidden = s !== next;
      $('step'+(i+1)).classList.toggle('active', s === next);
      if (s === next) $('step'+(i+1)).setAttribute('aria-current','step');
      else $('step'+(i+1)).removeAttribute('aria-current');
    });
  }
  slider.addEventListener('input', () => {stop(); $('control-hint').textContent = 'Drag, tap or use arrow keys'; render();});
  $('partial').addEventListener('click', () => {stop();slider.value = '30'; $('control-hint').textContent = 'Partial eclipse found — click Collect partial eclipse above'; render();});
  $('centre').addEventListener('click', () => {stop();slider.value = '50'; $('control-hint').textContent = 'Total eclipse found — click Collect total eclipse above'; render();});
  $('capture').addEventListener('click', () => {
    stop(); const kind = render();
    if (stage !== 'experiment' || kind === 'none') return;
    found.add(kind);
    const log = $(kind+'-log'); log.classList.add('done'); log.querySelector('span').textContent = '✓';
    $('collected').textContent = `${found.size} / 2 observations collected`;
    $('explain-button').disabled = found.size !== 2;
    $('collect-hint').textContent = found.size === 2 ? 'Both collected. Time to explain what you saw.' : kind === 'total' ? 'Click Find partial eclipse below the slider, then Collect partial eclipse.' : 'Click Find total eclipse below the slider, then Collect total eclipse.';
    render();
  });
  function tick(now) {
    if (!playing) return;
    if (!previous) previous = now;
    const before = playhead;
    playhead = Math.min(100, playhead + Math.min(now-previous,100)/180);
    previous = now;
    // Keep fractional progress outside the stepped input: high-refresh displays
    // can otherwise round every small frame increment back to the same value.
    const checkpoint = before < 30 && playhead >= 30 && !found.has('partial') ? 30 : before < 50 && playhead >= 50 ? 50 : null;
    if (checkpoint !== null) {
      slider.value = String(checkpoint); render(); stop();
      $('control-hint').textContent = checkpoint === 30 ? 'Paused — click Collect partial eclipse above' : 'Paused — click Collect total eclipse above';
      return;
    }
    slider.value = String(playhead); render();
    if (playhead >= 100) {
      stop(); $('control-hint').textContent = 'Crossing complete — move the Moon to explore again';
    } else frame = requestAnimationFrame(tick);
  }
  $('play').addEventListener('click', () => {
    if (reducedMotion) {
      const v = Number(slider.value); slider.value = v < 30 ? '30' : v < 50 ? '50' : v < 70 ? '70' : v < 100 ? '100' : '0'; render(); return;
    }
    if (playing) {stop();return;}
    if (Number(slider.value) >= 100) slider.value = '0';
    playing = true; previous = 0; playhead = Number(slider.value);
    $('control-hint').textContent = 'Playing — pause whenever you want to collect';
    $('play').textContent = 'Ⅱ Pause crossing'; frame = requestAnimationFrame(tick);
  });
  document.addEventListener('visibilitychange', () => {if (document.hidden) stop();});
  $('explain-button').addEventListener('click', () => {
    stop();showStage('explain');render();
    $('explain').querySelector('h2').focus();
  });
  document.querySelectorAll('[data-answer]').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('[data-answer]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    const correct = button.dataset.answer === 'moon';
    $('feedback').classList.toggle('success', correct);
    $('feedback').textContent = correct ? 'Discovery complete! The Moon moved between Earth and the Sun, blocking our view. The Sun kept shining.' : button.dataset.answer === 'out' ? 'Look again: the Sun’s face reappears after the Moon passes. Did the Sun switch off, or did something block our view?' : 'Earth’s shadow on the Moon causes a lunar eclipse. In this solar eclipse, which object passed in front of the Sun?';
    if (correct) {
      $('step2').textContent = '✓ Discovery complete';
      document.querySelectorAll('[data-answer]').forEach(b => b.disabled = true);
    }
  }));
  $('reset').addEventListener('click', () => {
    stop(); found.clear(); slider.value = '0';
    ['partial','total'].forEach(s => {$(s+'-log').classList.remove('done');$(s+'-log').querySelector('span').textContent = '○';});
    [slider,$('play'),$('partial'),$('centre')].forEach(el => el.disabled = false);
    $('explain-button').disabled = true;
    $('collected').textContent = '0 / 2 observations';
    $('collect-hint').textContent = 'Collect both observations to continue.';
    $('control-hint').textContent = 'Drag, tap or use arrow keys';
    $('feedback').textContent = ''; $('feedback').className = '';
    document.querySelectorAll('[data-answer]').forEach(b => {b.removeAttribute('aria-pressed'); b.disabled = false;});
    $('step2').innerHTML = '<span>02</span> Explain';
    showStage('experiment');render();$('experiment').querySelector('h2').focus();
  });
  $('teacher').addEventListener('click', () => {
    const expanded = $('teacher').getAttribute('aria-expanded') === 'true';
    $('teacher').setAttribute('aria-expanded', String(!expanded));$('teacher-notes').hidden = expanded;
  });
  [slider,$('play'),$('partial'),$('centre')].forEach(el => el.disabled = false);
  stop();showStage('experiment');render();
})();

