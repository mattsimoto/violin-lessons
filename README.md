# Little Strings

A browser-based music learning app with **violin and ukulele paths**, visual finger placement, synthesized practice audio, complete practice scores, and learner profiles. Hosted at [mattsimoto.github.io/violin-lessons](https://mattsimoto.github.io/violin-lessons/).

## Violin milestone

The complete violin version, including the hidden 221B Baker Street lesson, is preserved on [`milestone/violin-221b-2026-10-02`](https://github.com/mattsimoto/violin-lessons/tree/milestone/violin-221b-2026-10-02), starting at commit `e92003643f01f00834d86dbcfc76808222416a9b`. It remains independently recoverable as the multi-instrument app evolves.

## Learning experience

- Choose violin or ukulele on the home page.
- Each nickname has its own progress for both instruments, lesson presentation style (young learner with a helper, older learner, or adult), daily lesson goal, XP, and practice-day streak.
- Ukulele has 30 lessons in ten units, with Learn → Practice → Quick check stages. Every lesson is available from the start. Skip ahead or revisit any lesson; opening a lesson does not mark it complete.
- Each ukulele lesson includes two shuffled questions with retry feedback. In-app checks test understanding, not performance accuracy. Playing practice is self-reported.
- New completions award 20 XP. Review does not award duplicate XP. Missed days carry no penalty or loss of progress.
- Ukulele lessons can be read aloud using the browser's speech support. Both paths work with keyboard controls and small screens.

## Profiles and saving

Profiles live in browser localStorage under `little-strings-learners-v1`. No sign-in, server, or third-party account is needed. They are device-local practice profiles, not authenticated or private accounts. Export/import JSON moves progress between devices; imports add profiles and preserve existing profiles. The original violin progress is migrated to the first learner on the first visit. Violin reset clears only the active learner's violin completion list.

Clearing browser data removes local profiles. Export a backup for durable personal progress. GitHub stores the application code, not learners' data.

## Instruments

### Violin

28 lessons, ten levels, single notes, double stops, animated proportionate fingerboard guides, tab labels, synthesized reference audio, loops, adjustable tempo, and full-score playback highlighting. Core lessons use first position; the 221B bonus uses suggested third/sixth-position shifts on E. A violin has no physical frets: the guide lines represent semitone locations.

Tap the Little Strings logo three times quickly on the violin page for 221B, or open `violin.html?song=221b`. Legacy home-page `?song=221b` URLs redirect to the violin page. The bonus is a manually entered 36-measure practice adaptation of the Patrick Gowers theme from the user's supplied automated Songscription score. It retains rests, ties, 3/4 → 1/4 → 3/4, and the 77 → 74 BPM change. The measure-4 mordent is omitted, and F3/B♭3 in measure 34 are raised an octave for violin. This is not a verified transcription of the original orchestral score. The uploaded band recording is not redistributed.

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

No production build step. Tests use Node 22.22.2+ or 24.15+ and jsdom: `npm install && npm test`. They verify all ukulele scores, note durations, chord voicings, fret-marker placement, checkpoints, free lesson navigation, profile isolation, migration, XP, and the retained violin/221B flow. Run a local HTTP server from the repository directory, for example `python -m http.server 8080`, then visit localhost:8080. GitHub Pages deploys the main branch. Synthesized triangle tones are practice references, not recordings of real instruments. The app does not use a microphone or evaluate instrumental performance.

Next substantial features: teacher-reviewed repertoire, phrase looping, user-managed accounts and cross-device synchronization, and supported MusicXML imports with fingering review.

## Intermediate and advanced curriculum

Both paths remain open: any learner can jump ahead or revisit a lesson without changing completion. Existing lesson IDs and profile progress are retained. These are guided practice studies, not graded qualifications.

Violin adds 12 lessons: two-note slurs, dotted rhythm, **Meadow Path**; first-to-third shifts, third-position ladder, **Window Light**; sixteenths, moving drone double stops, **Two Voices at Dawn**; fifth-position shifts, four-note slurs, **The Long Way Home**. Higher notes carry explicit suggested finger and hand-position metadata. Diagrams extend to the highest location in the piece, and the sheet score shows slurs. The reference synthesizer provides pitches and durations; it does not reproduce bow articulation or dynamics. A teacher can check shifting and bow technique.

Ukulele adds 12 lessons: syncopation, fingerpicking, **Lantern Walk**; Dm/E7, Bb partial barre, **Evening Letters**; upper frets, movable closed major chords, **Paper Kites**; sixteenths, Cmaj7/Am7, **A small concert**. Each includes practice instructions, two shuffled checks, finger diagrams, and score playback. Partial barres connect shared finger contacts; the fretboard expands through fret 12. Single-note fingerpicking diagrams show the sounding contact; lesson instructions describe holding the underlying shape. Reference playback models plucked events, not a recorded performance. All new pieces are original studies; accompaniment studies are clearly identified.

Technique references: [Violin Online positions](https://www.violinonline.com/shifting.htm), [Ukulele Tricks barre technique](https://ukuleletricks.com/improve-barre-chords-on-ukulele/), and [Ukulele Tricks chord reference](https://ukuleletricks.com/ukulele-chords/). No source teaching copy or arrangements are reproduced.
