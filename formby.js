'use strict';
function mountFormbyRoom(){
let formbyClicks=0,formbyClickTimer;
const formbyRoom=document.createElement('section');formbyRoom.id='formbyRoom';formbyRoom.hidden=true;formbyRoom.className='formby-room';formbyRoom.innerHTML=`<p class="eyebrow">A SECRET UKULELE ROOM</p><h2>Turned out nice again.</h2><p>Six George Formby song choices. Play an animated preparation drill, then use the linked song resource for the actual arrangement.</p><p class="small">The drills use your normal G–C–E–A tuning. Some songbooks use another tuning. External resources may contain mature music-hall lyrics; a helper can choose what suits the learner. Songbook links include paid editions.</p><div class="formby-grid">${FORMBY_SONGS.map(song=>`<article><h3>${song.title}</h3><p>${song.focus}</p><button data-formby="${song.id}">Practice chord drill →</button><a href="${song.source}" target="_blank" rel="noopener noreferrer">${song.sourceLabel} ↗</a></article>`).join('')}</div><button id="closeFormby">Back to the regular path</button>`;document.querySelector('.track-selector').after(formbyRoom);
formbyRoom.querySelectorAll('[data-formby]').forEach(b=>b.onclick=()=>{chooseUkeLesson(b.dataset.formby);setUkeStage('practice');document.querySelector('#ukeTitle').scrollIntoView({behavior:'smooth',block:'start'});});document.getElementById('closeFormby').onclick=()=>{formbyRoom.hidden=true;chooseUkeLesson(MusicTracks.next('ukulele',ukeTrack,ukeDone));};
document.querySelector('.brand').addEventListener('click',event=>{event.preventDefault();clearTimeout(formbyClickTimer);formbyClicks++;if(formbyClicks===4){formbyClicks=0;formbyRoom.hidden=false;formbyRoom.scrollIntoView({behavior:'smooth',block:'start'});}else formbyClickTimer=setTimeout(()=>formbyClicks=0,1500);});

}
mountFormbyRoom();
