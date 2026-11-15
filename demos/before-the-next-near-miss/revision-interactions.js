"use strict";
document.querySelectorAll('.r2-flip').forEach(button=>button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));button.querySelector('.r2-front').hidden=open;button.querySelector('.r2-back').hidden=!open;}));
document.querySelectorAll('.r2-hotspot').forEach(button=>button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));document.getElementById(button.getAttribute('aria-controls')).hidden=!open;}));
