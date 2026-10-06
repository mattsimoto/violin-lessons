'use strict';
function renderSherlockRoom(){
 const room=$('sherlockRoom');room.hidden=!current.secret;
 if(!current.secret){document.querySelector('.view-tabs').hidden=false;document.querySelector('.transport').hidden=false;document.querySelector('.tempo').hidden=false;$('sequence').hidden=false;setPracticeView(practiceView);return;}
 $('sherlockChoices').replaceChildren(...SHERLOCK_COLLECTION.map(song=>{const b=document.createElement('button');b.type='button';b.dataset.sherlock=song.id;b.setAttribute('aria-pressed',String(song===current));b.textContent=song.title;const small=document.createElement('small');small.textContent=song.pending?'Load your score':song.type.replace('Secret song · ','');b.append(small);b.onclick=()=>{selectLesson(song.id);if(!song.pending)setPracticeView('sheet');};return b;}));
 const source=$('sherlockSource');source.hidden=!current.sourceUrl;source.href=current.sourceUrl||'#';source.textContent=current.sourceLabel||'';
 $('sherlockImport').hidden=!current.id.startsWith('holmes-')||current.id==='holmes-barcarolle';
 $('sherlockImportStatus').textContent=current.pending?'Your score is needed for accurate note-by-note playback.':current.imported?'Your score is loaded on this browser. Written order; repeats and ornaments are not expanded.':'';
 for(const cls of ['.view-tabs','.transport','.tempo'])document.querySelector(cls).hidden=!!current.pending;
 $('sequence').hidden=!!current.pending;
 if(current.pending){$('fingerStage').hidden=true;$('sheetStage').hidden=true;}
 else setPracticeView(practiceView);
}
function parseSherlockXML(text){
 if(text.length>2000000)throw Error('Use a violin-only MusicXML smaller than 2 MB.');
 const doc=new DOMParser().parseFromString(text,'application/xml');
 if(doc.querySelector('parsererror')||doc.documentElement.tagName!=='score-partwise')throw Error('Choose an uncompressed score-partwise MusicXML file (.musicxml or .xml), rather than a PDF or .mxl.');
 const parts=Array.from(doc.querySelectorAll('score-part'));
 const violin=parts.find(p=>/violin|violino/i.test(p.querySelector('part-name')?.textContent||''));
 const part=Array.from(doc.documentElement.children).find(p=>p.tagName==='part'&&p.getAttribute('id')===(violin||parts[0])?.getAttribute('id'));
 if(!part)throw Error('No violin part found. Export the violin part alone.');
 let divisions=1,meter='4/4',tempo=60,chosenVoice=null,total=0;const measures=[];
 const value=(node,selector)=>node.querySelector(selector)?.textContent?.trim();
 for(const [mi,m] of Array.from(part.children).filter(n=>n.tagName==='measure').entries()){
  let cursor=0;const events=[];
  for(const el of m.children){
   if(el.tagName==='attributes'){
    const d=value(el,'divisions');if(d){divisions=Number(d);if(!Number.isFinite(divisions)||divisions<=0)throw Error('Invalid note duration divisions.');}
    const beats=value(el,'time beats'),unit=value(el,'time beat-type');if(beats&&unit){if(!/^\d+$/.test(beats)||!/^\d+$/.test(unit))throw Error('Use a score with a simple time signature.');meter=beats+'/'+unit;}
   }else if(el.tagName==='direction'){
    const q=Number(el.querySelector('sound')?.getAttribute('tempo'));if(q>0&&mi===0)tempo=Math.min(120,Math.max(30,q));
   }else if(el.tagName==='backup'||el.tagName==='forward'){
    const d=Number(value(el,'duration'))/divisions;cursor+=el.tagName==='backup'?-d:d;
   }else if(el.tagName==='note'&&!el.querySelector('grace')){
    const voice=value(el,'voice')||'1',staff=value(el,'staff')||'1',duration=Number(value(el,'duration'))/divisions;
    if(!Number.isFinite(duration)||duration<=0)throw Error('A note has no valid duration.');
    abcDuration(duration);
    if(chosenVoice===null&&el.querySelector('pitch'))chosenVoice=voice;
    const isChosen=voice===(chosenVoice||'1')&&staff==='1';
    if(isChosen){
     if(el.querySelector('chord'))throw Error('Export a single melody voice; this importer does not support simultaneous chord notes.');
     let name='R';
     if(!el.querySelector('rest')){
      const step=value(el,'pitch step'),oct=Number(value(el,'pitch octave')),alter=Number(value(el,'pitch alter')||0);
      if(!/^[A-G]$/.test(step)||!Number.isInteger(oct)||![-1,0,1].includes(alter))throw Error('Unsupported pitch. Use standard violin notation.');
      const midi=(oct+1)*12+sherlockPitchClass[step]+alter;
      if(midi<55||midi>89)throw Error('This violin guide supports G3 through F6. Export a part within that range.');
      name=step+(alter===1?'#':alter===-1?'b':'')+oct;
     }
     events.push({at:cursor,name,beats:duration,tie:!!el.querySelector('tie[type="start"]')});
    }
    if(!el.querySelector('chord'))cursor+=duration;
   }
  }
  events.sort((a,b)=>a.at-b.at);const notes=[];let end=0;
  for(const e of events){if(e.at<end-0.00001)throw Error('Overlapping voices found. Export only the violin melody.');if(e.at>end+0.00001)notes.push({name:'R',beats:e.at-end});notes.push({name:e.name,beats:e.beats,tie:e.tie});end=e.at+e.beats;}
  const full=Number(meter.split('/')[0])*4/Number(meter.split('/')[1]);
  if(!Number.isFinite(full)||full<=0||full>32)throw Error('Unsupported meter.');
  if(!notes.length)notes.push({name:'R',beats:full});
  else if(mi>0&&end<full-0.00001)notes.push({name:'R',beats:full-end});
  total+=notes.length;if(total>5000)throw Error('Use a shorter violin part (maximum 5,000 note events).');
  measures.push({number:mi+1,meter,tempo,notes});
 }
 if(!measures.some(m=>m.notes.some(n=>n.name!=='R')))throw Error('No playable melody was found. Export the violin part alone.');
 return {measures,tempo,notes:measures.flatMap(m=>m.notes.map(n=>sherlockNote(n,m)))};
}
function buildImportedScore(lesson,barsPerLine){
 let abc=`X:1\nT:${lesson.title}\nM:${lesson.measures[0].meter}\nL:1/4\nK:C clef=treble\n`,segments=[],i=0,lastMeter=lesson.measures[0].meter;
 lesson.measures.forEach((m,mi)=>{if(m.meter!==lastMeter){abc+=`[M:${m.meter}] `;lastMeter=m.meter;}const accidentals=new Map();for(const n of m.notes){const v=lesson.notes[i],start=abc.length;abc+=(v.rest?'':`"^${tabLabel(v)}"`)+(v.rest?'z':abcPitch(v,accidentals))+abcDuration(v.beats)+(v.tie?'-':'');segments.push({sourceIndex:i++,start,end:abc.length,duration:v.beats});abc+=' ';}abc+=mi===lesson.measures.length-1?'|]':'| ';if((mi+1)%barsPerLine===0)abc+='\n';});return {abc,segments};
}
function restoreSherlockScores(){for(const song of SHERLOCK_COLLECTION.filter(s=>s.pending)){try{const xml=localStorage.getItem('little-strings-score-'+song.id);if(xml)Object.assign(song,parseSherlockXML(xml),{pending:false,imported:true,longScore:true});}catch{/* Ignore invalid/stale local score data. */}}}
function initSherlockRoom(){
 $('closeSherlock').onclick=()=>selectLesson(MusicTracks.next('violin',violinTrack,completed));
 $('sherlockFile').onchange=async event=>{
  const file=event.target.files[0],song=current;if(!file)return;
  try{if(file.size>2000000)throw Error('Use a violin-only MusicXML smaller than 2 MB.');const xml=await file.text(),parsed=parseSherlockXML(xml);Object.assign(song,parsed,{pending:false,imported:true,longScore:true});let saved=true;try{localStorage.setItem('little-strings-score-'+song.id,xml);}catch{saved=false;}if(current===song){selectLesson(song.id);setPracticeView('sheet');$('sherlockImportStatus').textContent=saved?'Score loaded and saved on this browser. Written order; repeats and ornaments are not expanded.':'Score loaded for this session; browser storage is unavailable.';}}
  catch(error){$('sherlockImportStatus').textContent=error.message;}
  event.target.value='';
 };
}
