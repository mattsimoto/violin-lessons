'use strict';
window.MusicTracks=(()=>{
 const names=['Beginner','Intermediate','Advanced'];
 const ids={"violin":[["open","bow","first","three","hotcross","mary","cross","dmajor","twinkle","fourth","ode","lowtwo","gmajor","minor","double","arpeggio"],["slur-pairs","dotted-study","meadow-piece","shift-third","third-ladder","third-piece"],["sixteenth-bows","harmony-moving","harmony-piece","fifth-position","four-note-slurs","violin-capstone"]],"ukulele":[["hold","tune","pluck","frets","scale","rain","chord-c","chord-am","chord-f","pulse","chord-g7","changes","frere","lightly","skip","chord-g","upstrokes","first-piece"],["syncopation","fingerpick","interlude-uke","minor-family","barre-bb","minor-piece"],["upper-frets","movable-major","upper-piece","sixteenths","seventh-colors","uke-capstone"]]};
 const list=(instrument,track)=>ids[instrument][track];
 const count=(instrument,track,done)=>list(instrument,track).filter(id=>done.has(id)).length;
 const complete=(instrument,track,done)=>count(instrument,track,done)===list(instrument,track).length;
 const unlocked=(instrument,track,done)=>names.slice(0,track).every((_,i)=>complete(instrument,i,done));
 const of=(instrument,id)=>ids[instrument].findIndex(group=>group.includes(id));
 const next=(instrument,track,done)=>list(instrument,track).find(id=>!done.has(id))||list(instrument,track)[0];
 function render(element,instrument,active,done,onSelect){
  element.innerHTML=names.map((name,i)=>{const open=unlocked(instrument,i,done),n=count(instrument,i,done),total=list(instrument,i).length;return `<button class="track-card ${active===i?'selected':''}" data-track="${i}" ${open?'':'disabled'} aria-pressed="${active===i}"><strong>${name}${open?'':' · Locked'}</strong><span>${n} / ${total} practiced</span><small>${open?(complete(instrument,i,done)?'Complete · revisit anytime':i===0?'Start here · build your foundation':'Ready to practice'):'Complete '+names[i-1]+' to open'}</small></button>`;}).join('');
  element.querySelectorAll('[data-track]').forEach(b=>b.onclick=()=>{const track=Number(b.dataset.track);if(unlocked(instrument,track,done))onSelect(track);});
 }
 return {names,list,count,complete,unlocked,of,next,render};
})();
