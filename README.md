# Little Strings

A browser-based music learning app with **violin, ukulele, and accordion paths**, visual finger placement, synthesized practice audio, complete practice scores, and learner profiles. Hosted at [mattsimoto.github.io/violin-lessons](https://mattsimoto.github.io/violin-lessons/).

## Violin milestone

The complete violin version, including the hidden 221B Baker Street lesson, is preserved on [`milestone/violin-221b-2026-10-02`](https://github.com/mattsimoto/violin-lessons/tree/milestone/violin-221b-2026-10-02), starting at commit `e92003643f01f00834d86dbcfc76808222416a9b`. It remains independently recoverable as the multi-instrument app evolves.

## Learning experience

- Choose violin, ukulele, or accordion on the home page.
- Each nickname has its own progress for all three instruments, lesson presentation style (young learner with a helper, older learner, or adult), daily lesson goal, XP, and practice-day streak.
- Ukulele has 30 lessons in ten units, with Learn → Practice → Quick check stages. Beginner, Intermediate, and Advanced are separate tracks. All three tracks are accessible immediately. Skip ahead or revisit any lesson; opening one never marks it or earlier lessons complete.
- Each ukulele lesson includes two shuffled questions with retry feedback. In-app checks test understanding, not performance accuracy. Playing practice is self-reported.
- New completions award 20 XP. Review does not award duplicate XP. Missed days carry no penalty or loss of progress.
- Ukulele lessons can be read aloud using the browser's speech support. All paths work with keyboard controls and small screens.

## Profiles and saving

Profiles live in browser localStorage under `little-strings-learners-v1`. No sign-in, server, or third-party account is needed. They are device-local practice profiles, not authenticated or private accounts. Export/import JSON moves progress between devices; imports add profiles and preserve existing profiles. The original violin progress is migrated to the first learner on the first visit. Violin reset clears only the active learner's violin completion list.

Clearing browser data removes local profiles. Export a backup for durable personal progress. GitHub stores the application code, not learners' data.

## Instruments

### Violin

29 lessons, ten levels, single notes, double stops, animated proportionate fingerboard guides, tab labels, synthesized reference audio, loops, adjustable tempo, and full-score playback highlighting. Core lessons use first position; the 221B bonus uses suggested third/sixth-position shifts on E. A violin has no physical frets: the guide lines represent semitone locations.

Tap the Little Strings logo ten times quickly on the violin page for 221B, or open `violin.html?song=221b`. Legacy home-page `?song=221b` URLs redirect to the violin page. The bonus is a manually entered 36-measure practice adaptation of the Patrick Gowers theme from the user's supplied automated Songscription score. It retains rests, ties, 3/4 → 1/4 → 3/4, and the 77 → 74 BPM change. The measure-4 mordent is omitted, and F3/B♭3 in measure 34 are raised an octave for violin. This is not a verified transcription of the original orchestral score. The uploaded band recording is not redistributed.

### Ukulele

Standard **high-G tuning: G4 C4 E4 A4**, for soprano, concert, or tenor. Baritone and low-G alternatives are not configured. Chord arrays are in G–C–E–A order: C `0003`, Am `2000`, F `2010`, G7 `0212`, G `0232`. Markers sit **behind** each physical fret wire and show finger numbers; tab labels show string/fret. Flip view mirrors the diagram.

Curriculum: hold/tune/pluck → fretted notes and C major → Rain Rain Go Away → C/Am/F → rhythm/rests/G7 → transitions → Frère Jacques and Lightly Row melodies → Skip to My Lou accompaniment → G and down-up strumming → original chord practice piece. Traditional tunes are newly entered simplified practice arrangements. Frère Jacques has an octave-adapted closing cadence for high-G tuning. Skip to My Lou is a harmony chart; reference playback sounds the chords rather than the sung melody.

Foundational tuning/chord references: [Fender ukulele tuning](https://www.fender.com/articles/setup/how-to-tune-a-ukulele) and [Fender beginner chords](https://www.fender.com/articles/chords/ukulele-chords-for-beginners). Their arrangements and teaching copy are not reproduced.

## Files and development

- `index.html`: instrument selection hub.
- `learners.js`, `learning.css`: shared profiles and learning UI.
- `violin.html`, `app.js`, `sherlock.js`, `style.css`: violin course.
- `ukulele.html`, `ukulele.js`, `uke-data.js`, `ukulele.css`: ukulele course.
- `vendor/abcjs-basic-min.js`: bundled abcjs 6.7.1 (MIT; included license).

No production build step. Tests use Node 22.22.2+ or 24.15+ and jsdom: `npm install && npm test`. They verify all ukulele scores, note durations, chord voicings, fret-marker placement, checkpoints, free navigation across tracks without implied completion, exact secret-logo triggers, accordion two-hand score mappings and 41/120 diagrams, profile isolation, migration, XP, and the retained violin/221B flow. Run a local HTTP server from the repository directory, for example `python -m http.server 8080`, then visit localhost:8080. GitHub Pages deploys the main branch. Synthesized tones are practice references, not recordings of real instruments. The app does not use a microphone or evaluate instrumental performance.

Next substantial features: teacher-reviewed repertoire, phrase looping, user-managed accounts and cross-device synchronization, and supported MusicXML imports with fingering review.

## Intermediate and advanced curriculum

Both instruments have separate Beginner → Intermediate → Advanced tracks. Violin Beginner retains all 16 lessons; ukulele Beginner retains all 18. Violin Intermediate contains seven lessons, including its song finale; the other subsequent tracks contain six lessons ; all tracks are open without prerequisites. Users may jump ahead or revisit any track without changing completion. Existing lesson IDs and profile progress are retained. These are guided practice studies, not graded qualifications.

Violin adds 12 lessons: two-note slurs, dotted rhythm, **Meadow Path**; first-to-third shifts, third-position ladder, **Window Light**; sixteenths, moving drone double stops, **Two Voices at Dawn**; fifth-position shifts, four-note slurs, **The Long Way Home**. Higher notes carry explicit suggested finger and hand-position metadata. Diagrams extend to the highest location in the piece, and the sheet score shows slurs. The reference synthesizer provides pitches and durations; it does not reproduce bow articulation or dynamics. A teacher can check shifting and bow technique.

Ukulele adds 12 lessons: syncopation, fingerpicking, **Lantern Walk**; Dm/E7, Bb partial barre, **Evening Letters**; upper frets, movable closed major chords, **Paper Kites**; sixteenths, Cmaj7/Am7, **A small concert**. Each includes practice instructions, two shuffled checks, finger diagrams, and score playback. Partial barres connect shared finger contacts; the fretboard expands through fret 12. Single-note fingerpicking diagrams show the sounding contact; lesson instructions describe holding the underlying shape. Reference playback models plucked events, not a recorded performance. All new pieces are original studies; accompaniment studies are clearly identified.

Technique references: [Violin Online positions](https://www.violinonline.com/shifting.htm), [Ukulele Tricks barre technique](https://ukuleletricks.com/improve-barre-chords-on-ukulele/), and [Ukulele Tricks chord reference](https://ukuleletricks.com/ukulele-chords/). No source teaching copy or arrangements are reproduced.

`tracks.js` defines track membership, completion gates, and shared track cards. Main progress counts refer to the selected track, not the entire instrument catalog. Previously recorded intermediate/advanced progress is preserved, but those tracks require their prerequisite completion to open. Resetting or undoing prerequisites locks subsequent tracks again without deleting their saved lessons. The 221B easter egg stays independent of the track gates.

## Noble Maiden Fair

The final Intermediate violin lesson uses the complete 33-bar arrangement supplied in the user's screenshot, credited to composer Patrick Doyle and arranger Lauren Williams. It retains G major, 3/4, opening rests, dotted rhythms, slurs, and ties, including the E sustained across bars 16–17. Suggested fingerings use first position, and the score highlights individual events while tied pitches sustain during continuous playback. The supplied score has no tempo marking; 60 BPM is a practice default. This is manually entered from the supplied image, not an original arrangement. Beginner remains 16 lessons; this finale becomes the seventh Intermediate requirement before Advanced opens. Existing completion IDs are retained.

`noble.js` contains the source-bar event data and lesson metadata. The standard notation builder now accepts meter and G-major key signature options, rests, and explicit ties as well as slurs. Tests verify 33 bars, 99 beats, key/meter, event mapping, tie counts, and the updated track gate.


## Accordion Beginner track

Sixteen lessons tailored to the supplied Loretto Universal piano-accordion photographs: 41 keys (F3–A6) and a six-row, 120-button Stradella bass board. Beginner covers posture, air release, gentle bellows movement, C4 and five-finger C–G notes, rhythm/rests, Hot Cross Buns, Mary Had a Little Lamb, the C bass landmark, alternating bass/chord, F/C/G neighbors, 3/4 waltz accompaniment, sustained melody over accompaniment, Ode to Joy, G7, and two original two-hand pieces. Each has Learn / Practice / Check, read-aloud support, direct navigation, and isolated profile progress. No Intermediate/Advanced accordion content is represented as finished yet.

Finger view renders an enlarged piano-key window with numbered active contacts, an expandable 41-key locator, a central bass-button window with active left finger, and an expandable 120-button map. Bass rows run from bellows edge outward: counterbass, root bass, major, minor, seventh, diminished. Central chart columns are B♭–F–C–G–D. C is shown as the expected tactile landmark, but its actual pitch must be verified; photographs cannot confirm tuning or register selection. Bellows directions are suggested phrase cues, not measured movements. Fingerings are suggested beginner choices.

Sheet view has aligned treble and bass staves, per-event seeking and highlighting, right-finger and left-button annotations, rests, ties, 3/4 or 4/4, tempo, loop, and synthesized reference pitches. Stradella sevenths omit the fifth, matching the common standard. Acoustic reed registration and instrument voicing can vary. Sources for layout checks: [Stradella overview](https://www.accordions.com/index/art/stradella.shtml) and [120-bass layout/chord reference](https://accordionchords.com/stradella-bass-layouts/120-bass-accordion-chart/). All diagrams and exercises are newly generated; uploaded photographs are not redistributed.

## Hidden George Formby room

Four successive logo clicks on `ukulele.html` reveal six song-resource cards: Leaning on a Lamp Post, When I’m Cleaning Windows, It’s Turned Out Nice Again, With My Little Ukulele in My Hand, Riding in the TT Races, and Fanlight Fanny. Each provides an animated original accompaniment preparation drill with the existing fingerboard, strum direction, and score tools. Drills are explicitly distinct from the actual songs, do not award regular-course progress/XP, and are not claimed to reproduce song melodies or exact charts. All cards link external free song resources; Riding in the TT Races uses a community chart whose accuracy and tuning need checking. No lyrics, recordings, or unprovided copyrighted song notation are copied into the app. External tuning and lyric suitability should be checked with the learner/helper.

New files: `accordion.html`, `accordion.css`, `accordion-data.js`, `accordion.js`, `formby-data.js`, `formby.js`. Existing profile exports migrate with empty accordion progress; new exports/imports include accordion completion and award history.

## Expanded Sherlock collection

Ten successive violin-logo clicks open two playable entries: the preserved user-supplied Granada theme, Offenbach’s complete Barcarolle melody (167 events / 162 quarter-note beats, 6/8, first position). Barcarolle uses the publicly accessible 8notes violin MIDI at https://media.8notes.com/school/midi/violin/offenbach_barcarole.mid; initial accompaniment-only silence is removed, with principal melody pitches retained; MIDI ornaments are omitted and their principal notes restored to eighth-note timing. Finger and sheet views, tempo, seeking, looping, and highlighting work for both entered pieces. Each bonus is excluded from normal progress and XP.

The Woman, Waltz for John and Mary, and The Game Is On have been removed from the collection for now, at the user’s request. The score import helpers remain available for future additions; no upload controls appear for the current two songs.
