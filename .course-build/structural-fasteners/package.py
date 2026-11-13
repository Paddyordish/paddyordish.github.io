from pathlib import Path
from zipfile import ZipFile, ZipInfo
import hashlib, json
root=Path.cwd();spec=json.loads((root/'.course-build/structural-fasteners/package-map.json').read_text());out=root/spec['output'];out.parent.mkdir(parents=True,exist_ok=True)
with ZipFile(out,'w',allowZip64=True) as z:
 for e in spec['entries']:
  name=e['archive'];assert not name.startswith('/') and '..' not in Path(name).parts
  p=root/e['source'];data=p.read_bytes();assert len(data)==e['bytes'] and hashlib.sha256(data).hexdigest()==e['sha256'],e['source']
  i=ZipInfo(name,tuple(e['date_time']));i.compress_type=e['compress_type'];i.external_attr=e['external_attr'];i.create_system=e['create_system'];z.writestr(i,data,compresslevel=6)
with ZipFile(out) as z:
 assert z.testzip() is None
 assert len(z.namelist())==len(spec['entries'])
 for e in spec['entries']:assert hashlib.sha256(z.read(e['archive'])).hexdigest()==e['sha256'],e['archive']
print('Verified all '+str(len(spec['entries']))+' original export files; ZIP CRC passed.')
print('SCORM ZIP SHA256: '+hashlib.sha256(out.read_bytes()).hexdigest())
