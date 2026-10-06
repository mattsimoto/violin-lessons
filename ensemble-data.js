'use strict';
const ENSEMBLE_INSTRUMENTS=['violin','ukulele','accordion'];
const ENSEMBLE_NAMES={violin:'Violin',ukulele:'Ukulele',accordion:'Accordion'};
const ENSEMBLE_CHORDS={C:{root:60,tones:[60,64,67],frets:[0,0,0,3],fingers:[0,0,0,3]},F:{root:65,tones:[65,69,72],frets:[2,0,1,0],fingers:[2,0,1,0]},G7:{root:67,tones:[67,71,77],frets:[0,2,1,2],fingers:[0,2,1,3]}};
const ensembleMidi=name=>({C:0,D:2,E:4,F:5,G:7,A:9,B:11}[name[0]]+(Number(name.slice(-1))+1)*12);
const ensemblePitch=midi=>['C','C♯','D','D♯','E','F','F♯','G','G♯','A','A♯','B'][midi%12]+(Math.floor(midi/12)-1);
const ensembleTune=notes=>notes.map(n=>({midi:ensembleMidi(Array.isArray(n)?n[0]:n),beats:Array.isArray(n)?n[1]:1}));
const ENSEMBLE_SONGS=[
 {id:'ens-twinkle',title:'Twinkle, Twinkle, Little Star',lead:'violin',meter:'4/4',tempo:64,credit:'Traditional melody · simple C-major trio arrangement',melody:ensembleTune(['C4','C4','G4','G4','A4','A4',['G4',2],'F4','F4','E4','E4','D4','D4',['C4',2],'G4','G4','F4','F4','E4','E4',['D4',2],'G4','G4','F4','F4','E4','E4',['D4',2],'C4','C4','G4','G4','A4','A4',['G4',2],'F4','F4','E4','E4','D4','D4',['C4',2]]),harmony:['C',['F','C'],['F','C'],['G7','C'],'C',['C','G7'],'C',['C','G7'],'C',['F','C'],['F','C'],['G7','C']]},
 {id:'ens-ode',title:'Ode to Joy',lead:'violin',meter:'4/4',tempo:64,credit:'Beethoven melody · simplified rhythm and C-major trio arrangement',melody:ensembleTune(['E4','E4','F4','G4','G4','F4','E4','D4','C4','C4','D4','E4',['E4',2],['D4',2],'E4','E4','F4','G4','G4','F4','E4','D4','C4','C4','D4','E4',['D4',2],['C4',2]]),harmony:['C','G7','C',['C','G7'],'C','G7','C',['G7','C']]},
 {id:'ens-frere',title:'Frère Jacques',lead:'violin',meter:'4/4',tempo:60,credit:'Traditional melody · simplified rhythm; everyone starts together (not a round)',melody:ensembleTune(['C4','D4','E4','C4','C4','D4','E4','C4','E4','F4',['G4',2],'E4','F4',['G4',2],'G4','A4','G4','F4','E4',['C4',3],'G4','A4','G4','F4','E4',['C4',3],'C4','G3',['C4',2],'C4','G3',['C4',2]]),harmony:['C','C','C','C','G7','C','G7','C','C','C']},
 {id:'ens-buns',title:'Hot Cross Buns',lead:'ukulele',meter:'4/4',tempo:60,credit:'Traditional melody · simplified rhythm, plucked ukulele with quiet sustained backing',melody:ensembleTune(['E4','D4',['C4',2],'E4','D4',['C4',2],'C4','C4','C4','C4','D4','D4','D4','D4','E4','D4',['C4',2]]),harmony:['C','C','C','G7','C']},
 {id:'ens-mary',title:'Mary Had a Little Lamb',lead:'ukulele',meter:'4/4',tempo:60,credit:'Traditional melody · pluck the melody rather than strum it',melody:ensembleTune(['E4','D4','C4','D4','E4','E4',['E4',2],'D4','D4',['D4',2],'E4','G4',['G4',2],'E4','D4','C4','D4','E4','E4','E4','E4','D4','D4','E4','D4',['C4',4]]),harmony:['C','C','G7','C','C','C','G7','C']},
 {id:'ens-row',title:'Lightly Row',lead:'ukulele',meter:'4/4',tempo:60,credit:'Traditional melody · a short, simplified trio version',melody:ensembleTune(['G4','E4',['E4',2],'F4','D4',['D4',2],'C4','D4','E4','F4','G4','G4',['G4',2],'G4','E4',['E4',2],'F4','D4',['D4',2],'C4','E4','G4','G4',['C4',4]]),harmony:['C','G7','C','C','C','G7','C','C']},
 {id:'ens-morning',title:'Morning in the Meadow',lead:'accordion',meter:'4/4',tempo:56,credit:'Original five-note melody and arrangement for Little Strings',melody:ensembleTune(['C4','D4',['E4',2],'E4','F4',['G4',2],'G4','F4','E4','D4',['C4',4],'C4','E4','G4','E4','F4','E4',['D4',2],'E4','D4','C4','D4',['C4',4]]),harmony:['C','C','G7','C','C','G7','G7','C']},
 {id:'ens-waltz',title:'A Little Lantern Waltz',lead:'accordion',meter:'3/4',tempo:54,credit:'Original five-note waltz and arrangement for Little Strings',melody:ensembleTune(['C4','E4','G4',['F4',2],'E4','D4','F4','G4',['E4',2],'C4','C4','D4','E4','F4','E4','D4','G4','F4','D4',['C4',3]]),harmony:['C','F','G7','C','C','G7','G7','C']},
 {id:'ens-dance',title:'The Garden Gate Dance',lead:'accordion',meter:'4/4',tempo:64,credit:'Original five-note melody and arrangement for Little Strings',melody:ensembleTune(['C4','C4','E4','G4','F4','F4','E4','D4','G4','G4','F4','D4',['C4',4],'E4','G4','E4','C4','F4','E4','D4','D4','G4','F4','E4','D4',['C4',4]]),harmony:['C','F','G7','C','C','G7','G7','C']}
];
function ensembleViolin(midi){const opens=[55,62,69,76];let s=midi>=76?3:midi>=69?2:midi>=62?1:0;const semi=midi-opens[s],finger=[0,1,1,2,2,3,3,4][semi];if(finger===undefined)throw Error('Violin pitch outside first position');return {s,semi,finger,midi};}
function ensembleUkulele(midi){const positions={60:[1,0,0],62:[1,2,2],64:[2,0,0],65:[2,1,1],67:[0,0,0],69:[3,0,0],71:[3,2,2],72:[3,3,3]};const p=positions[midi];if(!p)throw Error('Ukulele pitch outside beginner melody range');return {s:p[0],fret:p[1],finger:p[2],midi};}
function ensembleAccordion(midi){return {midi,finger:{60:1,62:2,64:3,65:4,67:5}[midi]||1};}
function buildEnsemble(song){
 const barBeats=Number(song.meter.split('/')[0]),steps=[];let beat=0;
 for(const n of song.melody){for(let b=0;b<n.beats;b++){
  const within=beat%barBeats,harmony=song.harmony[Math.floor(beat/barBeats)]||'C',chordName=Array.isArray(harmony)?harmony[within<2?0:1]:harmony,chord=ENSEMBLE_CHORDS[chordName],parts={};
  const bowStart=within===0||barBeats===4&&within===2;
  parts.violin=song.lead==='violin'?{...ensembleViolin(n.midi),beats:1,tie:b<n.beats-1,continue:b>0}:{...ensembleViolin(chord.root),beats:1,tie:within<(barBeats===3?2:within<2?1:3),continue:!bowStart};
  parts.ukulele=song.lead==='ukulele'?{...ensembleUkulele(n.midi),beats:1,tie:b<n.beats-1,continue:b>0}:bowStart?{chord:chordName,beats:1}:{rest:true,beats:1};
  const left=within===0?{root:chordName==='G7'?'G':chordName,type:'bass',finger:4}:within===2||barBeats===3&&within===1?{root:chordName==='G7'?'G':chordName,type:chordName==='G7'?'seventh':'major',finger:3}:null;
  parts.accordion=song.lead==='accordion'?{...ensembleAccordion(n.midi),beats:1,tie:b<n.beats-1,continue:b>0,left}:{...ensembleAccordion(chord.root),beats:1,tie:Array.isArray(harmony)?within%2===0:within<barBeats-1,continue:Array.isArray(harmony)?within%2!==0:within>0,left};
  steps.push({beat:beat++,bar:Math.floor((beat-1)/barBeats)+1,chord:chordName,parts});
 }}
 return steps;
}
