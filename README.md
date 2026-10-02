# Little Strings

A mobile-friendly visual violin tutor built for a beginning player. Open `index.html` directly or serve this folder as a static website. No package installation or account is needed.

## Included

- 16 lessons across six stages: open strings and bowing, first melodies, string crossings, fourth finger, alternative finger patterns, and harmony.
- First-position fingerboard with numbered contact points, string highlights, and proportional semitone spacing. Flip the string display to match the preferred viewing direction.
- Animated song and exercise playback, synthesized pitch references, 30–120 BPM tempo, loop, pause, restart, and note-by-note navigation.
- Clickable pitch-reference treble staff and beat lengths in the sequence (the staff displays the current pitch, not a complete engraved score).
- Static explorer for all first-position semitones from open string to fourth finger; two-note chord shapes on adjacent strings.
- Device-local practice progress, with a confirmation before reset. Completion is self-reported, with no microphone or pitch grading.
- Links to 8notes, MuseScore, and an external fingering reference. External scores are not scraped, copied, imported, or automatically animated.

## Play on a phone

In repository **Settings → Pages**, select **GitHub Actions** as the build source. Then run **Publish Little Strings** in the Actions tab (or push another commit). After successful deployment, open:

https://mattsimoto.github.io/violin-lessons/

Add that page to your phone's home screen if desired. There is no offline service worker in this version.

## Teaching details

Fingers: 0 = open, 1 = index, 2 = middle, 3 = ring, 4 = pinky. Standard tuning: G3 D4 A4 E5. All diagrams use first position. The distance from the nut is proportional to `1 - 2^(-semitones/12)`, with a fixed display scale; it is not a tape-placement measurement for a physical instrument. Fingering choices are explicit per note, so fourth-finger A on D can coexist with open A. A teacher may choose other fingerings.

The built-in traditional melodies and Beethoven excerpt are newly entered, simplified arrangements of public-domain compositions. Website-specific arrangements and scans have not been reused. The app's timing follows each note's beat value. The reference sound is a triangle oscillator, not a sampled violin. The current-note staff spells sharps explicitly; it does not engrave measures or key signatures.

## Curriculum content

Lesson data is near the top of `app.js`. Each note stores `s` (0=G, 1=D, 2=A, 3=E), `semi` (semitones above the open string), and `beats`. Double stops store `voices` plus `beats`. Add an explicit string assignment rather than inferring one from pitch alone. Keep pitches in the supported 0–7 semitone range until the finger-pattern renderer is extended.

Next useful expansions: teacher-reviewed repertoire, an import flow for permitted MusicXML files with explicit fingering review, phrase selection, and higher-position diagrams. PDF and website URLs alone do not encode reliable animated fingering.
