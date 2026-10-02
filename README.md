# Little Strings

A mobile-friendly visual violin tutor built for a beginning player. Open `index.html` directly or serve this folder as a static website. No package installation or account is needed.

## Included

- 16 lessons across six stages: open strings and bowing, first melodies, string crossings, fourth finger, alternative finger patterns, and harmony.
- First-position fingerboard with numbered contact points, string highlights, and proportional semitone spacing. Flip the string display to match the preferred viewing direction.
- Animated song and exercise playback, synthesized pitch references, 30–120 BPM tempo, loop, pause, restart, and note-by-note navigation.
- Finger view for a single note’s placement, and Sheet music view for the full current lesson, song, or chord. Engraved rhythms, accidentals, and ties follow the same note data as playback. The current note highlights in orange; clicking or keyboard-selecting a score note seeks playback.
- Static explorer for all first-position semitones from open string to fourth finger; two-note chord shapes on adjacent strings.
- Device-local practice progress, with a confirmation before reset. Completion is self-reported, with no microphone or pitch grading.
- Links to 8notes, MuseScore, and an external fingering reference. External scores are not scraped, copied, imported, or automatically animated.

## Play on a phone

In repository **Settings → Pages**, select **GitHub Actions** as the build source. Then run **Publish Little Strings** in the Actions tab (or push another commit). After successful deployment, open:

https://mattsimoto.github.io/violin-lessons/

Add that page to your phone's home screen if desired. There is no offline service worker in this version.

## Teaching details

Fingers: 0 = open, 1 = index, 2 = middle, 3 = ring, 4 = pinky. Standard tuning: G3 D4 A4 E5. Core lessons use first position. The hidden 221B lesson includes suggested third- and sixth-position shifts on E. The distance from the nut is proportional to `1 - 2^(-semitones/12)`, with a fixed display scale; it is not a tape-placement measurement for a physical instrument. Fingering choices are explicit per note, so fourth-finger A on D can coexist with open A. A teacher may choose other fingerings.

The built-in traditional melodies and Beethoven excerpt are newly entered, simplified arrangements of public-domain compositions. Website-specific arrangements and scans have not been reused. The app's timing follows each note's beat value. The reference sound is a triangle oscillator, not a sampled violin. Finger view has a current-note pitch reference. Sheet music view engraves the full practice arrangement in 4/4 with explicit accidentals, measures, and ties for sustained notes crossing bar lines. Short exercises may end with a partial measure. The bundled abcjs 6.7.1 notation renderer is MIT licensed; its license is included under vendor/.

## Curriculum content

Lesson data is near the top of `app.js`. Each note stores `s` (0=G, 1=D, 2=A, 3=E), `semi` (semitones above the open string), and `beats`. Double stops store `voices` plus `beats`. Add an explicit string assignment rather than inferring one from pitch alone. Keep pitches in the supported 0–7 semitone range until the finger-pattern renderer is extended.

Next useful expansions: teacher-reviewed repertoire, an import flow for permitted MusicXML files with explicit fingering review, phrase selection, and higher-position diagrams. PDF and website URLs alone do not encode reliable animated fingering.


## Hidden 221B Baker Street lesson

Tap the Little Strings logo three times quickly, or open `?song=221b`. This bonus stays outside the 16-lesson learning path and completion count. It uses a manually entered 36-measure violin practice adaptation of the Patrick Gowers theme from the score supplied by the user. It retains 3/4, the one-bar 1/4 change, the 77-to-74 BPM change, rests, and ties. The small mordent in measure 4 is omitted; the F3/B♭3 pair in measure 34 is raised an octave for violin. Source material was an automated Songscription transcription and has not been checked against the original orchestral score. The app synthesizes the melody; it does not play or redistribute the uploaded band recording. Higher-position fingerings are suggestions for teacher review.

The bonus data and its adaptation notes live in `sherlock.js`.
