'use strict';
const ACC_UNITS=["Meet the instrument", "Your first melodies", "Find the bass buttons", "Bring both hands together", "Your first performance"];
const ACC_LESSONS=[
  {
    "id": "acc-hold",
    "title": "Meet your accordion",
    "unit": 0,
    "skill": "Setup & posture",
    "tip": "Your Loretto Universal has a piano keyboard on the right and a 120-button Stradella board on the left. Use a chair and adjust both shoulder straps before playing.",
    "steps": [
      "Keep feet supported and shoulders relaxed. Ask a helper if the instrument is heavy.",
      "Rest the left hand through the bass strap. Keep the right wrist level.",
      "Find the air-release button; use it gently to reposition the bellows without notes. Never force the bellows shut."
    ],
    "notes": [
      {
        "rest": true,
        "beats": 4
      },
      {
        "rest": true,
        "beats": 4
      }
    ],
    "check": {
      "prompt": "Which side plays the piano keys?",
      "options": [
        "Right hand",
        "Left hand",
        "Both hands"
      ],
      "answer": 0
    },
    "meter": "4/4"
  },
  {
    "id": "acc-bellows",
    "title": "A breath for one note",
    "unit": 0,
    "skill": "Bellows control",
    "tip": "Release the bellows fastening straps. A key needs gentle airflow to sound; pushing a key harder does not make a better tone.",
    "steps": [
      "Find C4: the white key before a pair of black keys, near the middle of the keyboard.",
      "Play C with your right thumb (1), gently opening for four beats.",
      "Release the key, pause, then close gently for four beats. The arrows are suggested phrase directions."
    ],
    "notes": [
      {
        "midi": 60,
        "finger": 1,
        "beats": 4
      },
      {
        "rest": true,
        "beats": 4
      },
      {
        "midi": 60,
        "finger": 1,
        "beats": 4
      },
      {
        "rest": true,
        "beats": 4
      }
    ],
    "check": {
      "prompt": "How should the bellows move?",
      "options": [
        "Gently and steadily",
        "As hard as possible",
        "Only with no key held"
      ],
      "answer": 0
    },
    "meter": "4/4"
  },
  {
    "id": "acc-c",
    "title": "Find middle C",
    "unit": 0,
    "skill": "Right thumb \u00b7 C4",
    "tip": "The enlarged window follows the lesson notes. The full keyboard shows where that window sits on your 41-key instrument.",
    "steps": [
      "Find a pair of black keys. C is the white key immediately before it toward the low end.",
      "Rest thumb 1 on C4. Sound four separated notes.",
      "Let each key return fully before the next sound."
    ],
    "notes": [
      {
        "midi": 60,
        "finger": 1,
        "beats": 1
      },
      {
        "midi": 60,
        "finger": 1,
        "beats": 1
      },
      {
        "midi": 60,
        "finger": 1,
        "beats": 1
      },
      {
        "midi": 60,
        "finger": 1,
        "beats": 1
      },
      {
        "rest": true,
        "beats": 4
      }
    ],
    "check": {
      "prompt": "Which finger is number 1?",
      "options": [
        "Thumb",
        "Index",
        "Little finger"
      ],
      "answer": 0
    },
    "meter": "4/4"
  },
  {
    "id": "acc-five",
    "title": "Five fingers, five keys",
    "unit": 1,
    "skill": "C\u2013D\u2013E\u2013F\u2013G",
    "tip": "Right fingers: thumb 1, index 2, middle 3, ring 4, little 5. Put one finger on each white key C4 through G4.",
    "steps": [
      "Play C\u2013D\u2013E\u2013F\u2013G without stretching the fingers flat.",
      "Come back G\u2013F\u2013E\u2013D\u2013C. Keep a rounded, relaxed hand.",
      "Use a small, steady bellows motion."
    ],
    "notes": [
      {
        "midi": 60,
        "finger": 1,
        "beats": 1
      },
      {
        "midi": 62,
        "finger": 2,
        "beats": 1
      },
      {
        "midi": 64,
        "finger": 3,
        "beats": 1
      },
      {
        "midi": 65,
        "finger": 4,
        "beats": 1
      },
      {
        "midi": 67,
        "finger": 5,
        "beats": 1
      },
      {
        "midi": 65,
        "finger": 4,
        "beats": 1
      },
      {
        "midi": 64,
        "finger": 3,
        "beats": 1
      },
      {
        "midi": 62,
        "finger": 2,
        "beats": 1
      },
      {
        "midi": 60,
        "finger": 1,
        "beats": 4
      }
    ],
    "check": {
      "prompt": "Which right finger plays G in this five-note position?",
      "options": [
        "5 \u00b7 little finger",
        "1 \u00b7 thumb",
        "2 \u00b7 index"
      ],
      "answer": 0
    },
    "meter": "4/4"
  },
  {
    "id": "acc-rhythm",
    "title": "Play, hold, rest",
    "unit": 1,
    "skill": "Quarter & half notes",
    "tip": "A rest means release the keys and keep counting. You can change bellows direction during the rest.",
    "steps": [
      "Count 1, 2, 3, 4 out loud.",
      "Hold a two-beat note for both counts; release for a rest.",
      "Try at 45 BPM if the changes feel hurried."
    ],
    "notes": [
      {
        "midi": 60,
        "finger": 1,
        "beats": 2
      },
      {
        "rest": true,
        "beats": 2
      },
      {
        "midi": 62,
        "finger": 2,
        "beats": 1
      },
      {
        "midi": 64,
        "finger": 3,
        "beats": 1
      },
      {
        "rest": true,
        "beats": 2
      },
      {
        "midi": 65,
        "finger": 4,
        "beats": 2
      },
      {
        "midi": 67,
        "finger": 5,
        "beats": 2
      }
    ],
    "check": {
      "prompt": "What do you do during a rest?",
      "options": [
        "Release keys and keep the pulse",
        "Stop counting",
        "Hold the last key"
      ],
      "answer": 0
    },
    "meter": "4/4"
  },
  {
    "id": "acc-hotcross",
    "title": "Hot Cross Buns",
    "unit": 1,
    "skill": "Traditional \u00b7 right-hand melody",
    "tip": "Play this familiar tune using fingers 1, 2, and 3. This is a simple teaching arrangement of the traditional melody.",
    "steps": [
      "Start on E with middle finger 3.",
      "Keep D under 2 and C under 1.",
      "The quick repeated notes are half a beat each. Slow down and count \u201c1 and 2 and\u201d."
    ],
    "notes": [
      {
        "midi": 64,
        "finger": 3,
        "beats": 1
      },
      {
        "midi": 62,
        "finger": 2,
        "beats": 1
      },
      {
        "midi": 60,
        "finger": 1,
        "beats": 2
      },
      {
        "midi": 64,
        "finger": 3,
        "beats": 1
      },
      {
        "midi": 62,
        "finger": 2,
        "beats": 1
      },
      {
        "midi": 60,
        "finger": 1,
        "beats": 2
      },
      {
        "midi": 60,
        "finger": 1,
        "beats": 0.5
      },
      {
        "midi": 60,
        "finger": 1,
        "beats": 0.5
      },
      {
        "midi": 60,
        "finger": 1,
        "beats": 0.5
      },
      {
        "midi": 60,
        "finger": 1,
        "beats": 0.5
      },
      {
        "midi": 62,
        "finger": 2,
        "beats": 0.5
      },
      {
        "midi": 62,
        "finger": 2,
        "beats": 0.5
      },
      {
        "midi": 62,
        "finger": 2,
        "beats": 0.5
      },
      {
        "midi": 62,
        "finger": 2,
        "beats": 0.5
      },
      {
        "midi": 64,
        "finger": 3,
        "beats": 1
      },
      {
        "midi": 62,
        "finger": 2,
        "beats": 1
      },
      {
        "midi": 60,
        "finger": 1,
        "beats": 2
      }
    ],
    "check": {
      "prompt": "Which three notes make the opening?",
      "options": [
        "E\u2013D\u2013C",
        "C\u2013D\u2013E",
        "G\u2013F\u2013E"
      ],
      "answer": 0
    },
    "meter": "4/4"
  },
  {
    "id": "acc-mary",
    "title": "Mary Had a Little Lamb",
    "unit": 1,
    "skill": "Traditional \u00b7 five-note melody",
    "tip": "Keep the C\u2013G hand position. The little finger reaches G; the hand stays relaxed.",
    "steps": [
      "Learn the first two bars before the whole tune.",
      "Let the two-beat notes ring while counting.",
      "Change bellows direction at a phrase boundary if comfortable."
    ],
    "notes": [
      {
        "midi": 64,
        "finger": 3,
        "beats": 1
      },
      {
        "midi": 62,
        "finger": 2,
        "beats": 1
      },
      {
        "midi": 60,
        "finger": 1,
        "beats": 1
      },
      {
        "midi": 62,
        "finger": 2,
        "beats": 1
      },
      {
        "midi": 64,
        "finger": 3,
        "beats": 1
      },
      {
        "midi": 64,
        "finger": 3,
        "beats": 1
      },
      {
        "midi": 64,
        "finger": 3,
        "beats": 2
      },
      {
        "midi": 62,
        "finger": 2,
        "beats": 1
      },
      {
        "midi": 62,
        "finger": 2,
        "beats": 1
      },
      {
        "midi": 62,
        "finger": 2,
        "beats": 2
      },
      {
        "midi": 64,
        "finger": 3,
        "beats": 1
      },
      {
        "midi": 67,
        "finger": 5,
        "beats": 1
      },
      {
        "midi": 67,
        "finger": 5,
        "beats": 2
      },
      {
        "midi": 64,
        "finger": 3,
        "beats": 1
      },
      {
        "midi": 62,
        "finger": 2,
        "beats": 1
      },
      {
        "midi": 60,
        "finger": 1,
        "beats": 1
      },
      {
        "midi": 62,
        "finger": 2,
        "beats": 1
      },
      {
        "midi": 64,
        "finger": 3,
        "beats": 1
      },
      {
        "midi": 64,
        "finger": 3,
        "beats": 1
      },
      {
        "midi": 64,
        "finger": 3,
        "beats": 1
      },
      {
        "midi": 64,
        "finger": 3,
        "beats": 1
      },
      {
        "midi": 62,
        "finger": 2,
        "beats": 1
      },
      {
        "midi": 62,
        "finger": 2,
        "beats": 1
      },
      {
        "midi": 64,
        "finger": 3,
        "beats": 1
      },
      {
        "midi": 62,
        "finger": 2,
        "beats": 1
      },
      {
        "midi": 60,
        "finger": 1,
        "beats": 4
      }
    ],
    "check": {
      "prompt": "How do you keep a long note steady?",
      "options": [
        "Keep airflow even",
        "Press the key harder",
        "Shake the bellows"
      ],
      "answer": 0
    },
    "meter": "4/4"
  },
  {
    "id": "acc-bass-c",
    "title": "Find the marked C bass",
    "unit": 2,
    "skill": "Left finger 4 \u00b7 root bass",
    "tip": "In the root-bass row, C is normally the tactile landmark. Verify your marked button is C by sounding it; the photos cannot establish a button\u2019s pitch.",
    "steps": [
      "Feel the marked button without looking. Play it and confirm C with a teacher or reference tone.",
      "Use left ring finger 4 on C root bass. In this map, the bellows edge is at the top.",
      "C major is one row farther from the bellows in the same slanted column."
    ],
    "notes": [
      {
        "left": {
          "root": "C",
          "row": "bass",
          "finger": 4
        },
        "beats": 2
      },
      {
        "rest": true,
        "beats": 2
      },
      {
        "left": {
          "root": "C",
          "row": "bass",
          "finger": 4
        },
        "beats": 2
      },
      {
        "rest": true,
        "beats": 2
      }
    ],
    "check": {
      "prompt": "Which bass row has individual root notes?",
      "options": [
        "Root bass",
        "Major chord",
        "Minor chord"
      ],
      "answer": 0
    },
    "meter": "4/4"
  },
  {
    "id": "acc-bass-chord",
    "title": "Bass, chord, bass, chord",
    "unit": 2,
    "skill": "C bass 4 \u00b7 C major 3",
    "tip": "Use ring finger 4 on C bass and middle finger 3 on C major. They sit in the same slanted column; the major row is farther from the bellows.",
    "steps": [
      "Locate C root bass and the C major chord button.",
      "Alternate short bass and chord sounds on each beat.",
      "Lift fully between beats. Keep the wrist free under the strap."
    ],
    "notes": [
      {
        "left": {
          "root": "C",
          "row": "bass",
          "finger": 4
        },
        "beats": 1
      },
      {
        "left": {
          "root": "C",
          "row": "major",
          "finger": 3
        },
        "beats": 1
      },
      {
        "left": {
          "root": "C",
          "row": "bass",
          "finger": 4
        },
        "beats": 1
      },
      {
        "left": {
          "root": "C",
          "row": "major",
          "finger": 3
        },
        "beats": 1
      },
      {
        "left": {
          "root": "C",
          "row": "bass",
          "finger": 4
        },
        "beats": 1
      },
      {
        "left": {
          "root": "C",
          "row": "major",
          "finger": 3
        },
        "beats": 1
      },
      {
        "left": {
          "root": "C",
          "row": "bass",
          "finger": 4
        },
        "beats": 1
      },
      {
        "left": {
          "root": "C",
          "row": "major",
          "finger": 3
        },
        "beats": 1
      }
    ],
    "check": {
      "prompt": "What does one major-chord button do?",
      "options": [
        "Sounds a chord",
        "Plays only a root note",
        "Moves the bellows"
      ],
      "answer": 0
    },
    "meter": "4/4"
  },
  {
    "id": "acc-neighbors",
    "title": "C, F, and G neighbors",
    "unit": 2,
    "skill": "The circle of fifths",
    "tip": "In the diagram, F is the neighboring column toward the flats side (left), and G is toward the sharps side (right). These labels describe the chart, not the way a worn instrument feels.",
    "steps": [
      "From the verified C button, feel one column to F and one to G.",
      "Play F bass, C bass, G bass, then C bass.",
      "Move the whole hand gently. Do not stretch across several columns."
    ],
    "notes": [
      {
        "left": {
          "root": "F",
          "row": "bass",
          "finger": 4
        },
        "beats": 2
      },
      {
        "left": {
          "root": "C",
          "row": "bass",
          "finger": 4
        },
        "beats": 2
      },
      {
        "left": {
          "root": "G",
          "row": "bass",
          "finger": 4
        },
        "beats": 2
      },
      {
        "left": {
          "root": "C",
          "row": "bass",
          "finger": 4
        },
        "beats": 2
      }
    ],
    "check": {
      "prompt": "Which two columns neighbor C?",
      "options": [
        "F and G",
        "D and E",
        "A and B"
      ],
      "answer": 0
    },
    "meter": "4/4"
  },
  {
    "id": "acc-waltz",
    "title": "A little waltz pulse",
    "unit": 3,
    "skill": "3/4 \u00b7 bass, chord, chord",
    "tip": "Count 1\u20132\u20133. Play root bass on 1, then the major chord on 2 and 3. This is an original accompaniment drill.",
    "steps": [
      "Use left 4 for bass and 3 for major chords.",
      "Keep the chord taps lighter and shorter than the bass.",
      "Practice C, F, G, then C; pause between rounds."
    ],
    "notes": [
      {
        "left": {
          "root": "C",
          "row": "bass",
          "finger": 4
        },
        "beats": 1
      },
      {
        "left": {
          "root": "C",
          "row": "major",
          "finger": 3
        },
        "beats": 1
      },
      {
        "left": {
          "root": "C",
          "row": "major",
          "finger": 3
        },
        "beats": 1
      },
      {
        "left": {
          "root": "F",
          "row": "bass",
          "finger": 4
        },
        "beats": 1
      },
      {
        "left": {
          "root": "F",
          "row": "major",
          "finger": 3
        },
        "beats": 1
      },
      {
        "left": {
          "root": "F",
          "row": "major",
          "finger": 3
        },
        "beats": 1
      },
      {
        "left": {
          "root": "G",
          "row": "bass",
          "finger": 4
        },
        "beats": 1
      },
      {
        "left": {
          "root": "G",
          "row": "major",
          "finger": 3
        },
        "beats": 1
      },
      {
        "left": {
          "root": "G",
          "row": "major",
          "finger": 3
        },
        "beats": 1
      },
      {
        "left": {
          "root": "C",
          "row": "bass",
          "finger": 4
        },
        "beats": 1
      },
      {
        "left": {
          "root": "C",
          "row": "major",
          "finger": 3
        },
        "beats": 1
      },
      {
        "left": {
          "root": "C",
          "row": "major",
          "finger": 3
        },
        "beats": 1
      }
    ],
    "check": {
      "prompt": "How many beats are in each 3/4 bar?",
      "options": [
        "Three",
        "Four",
        "Two"
      ],
      "answer": 0
    },
    "meter": "3/4"
  },
  {
    "id": "acc-both",
    "title": "Two hands, one pulse",
    "unit": 3,
    "skill": "Melody & bass together",
    "tip": "Hold a right-hand C for four beats while the left hand alternates bass and chord. Only the first event asks for a new right-hand attack; following tied notes stay held.",
    "steps": [
      "Practice each hand on its own first.",
      "Start both hands together on beat 1.",
      "Keep C under right thumb 1 while the left changes. Release before the next bar."
    ],
    "notes": [
      {
        "midi": 60,
        "finger": 1,
        "beats": 1,
        "left": {
          "root": "C",
          "row": "bass",
          "finger": 4
        },
        "tie": true
      },
      {
        "midi": 60,
        "finger": 1,
        "beats": 1,
        "left": {
          "root": "C",
          "row": "major",
          "finger": 3
        },
        "tie": true
      },
      {
        "midi": 60,
        "finger": 1,
        "beats": 1,
        "left": {
          "root": "C",
          "row": "bass",
          "finger": 4
        },
        "tie": true
      },
      {
        "midi": 60,
        "finger": 1,
        "beats": 1,
        "left": {
          "root": "C",
          "row": "major",
          "finger": 3
        }
      },
      {
        "midi": 60,
        "finger": 1,
        "beats": 1,
        "left": {
          "root": "C",
          "row": "bass",
          "finger": 4
        },
        "tie": true
      },
      {
        "midi": 60,
        "finger": 1,
        "beats": 1,
        "left": {
          "root": "C",
          "row": "major",
          "finger": 3
        },
        "tie": true
      },
      {
        "midi": 60,
        "finger": 1,
        "beats": 1,
        "left": {
          "root": "C",
          "row": "bass",
          "finger": 4
        },
        "tie": true
      },
      {
        "midi": 60,
        "finger": 1,
        "beats": 1,
        "left": {
          "root": "C",
          "row": "major",
          "finger": 3
        }
      }
    ],
    "check": {
      "prompt": "What changes while the right C stays held?",
      "options": [
        "The left bass/chord button",
        "The right-hand pitch",
        "Nothing"
      ],
      "answer": 0
    },
    "meter": "4/4"
  },
  {
    "id": "acc-ode",
    "title": "Ode to Joy",
    "unit": 3,
    "skill": "Beethoven melody \u00b7 right hand",
    "tip": "A beginner arrangement of the opening melody, in C. First learn the melody alone; left-hand coordination comes next.",
    "steps": [
      "Stay in the five-note position C through G.",
      "Give dotted notes one and a half beats.",
      "Shape four-bar phrases with steady airflow."
    ],
    "notes": [
      {
        "midi": 64,
        "finger": 3,
        "beats": 1
      },
      {
        "midi": 64,
        "finger": 3,
        "beats": 1
      },
      {
        "midi": 65,
        "finger": 4,
        "beats": 1
      },
      {
        "midi": 67,
        "finger": 5,
        "beats": 1
      },
      {
        "midi": 67,
        "finger": 5,
        "beats": 1
      },
      {
        "midi": 65,
        "finger": 4,
        "beats": 1
      },
      {
        "midi": 64,
        "finger": 3,
        "beats": 1
      },
      {
        "midi": 62,
        "finger": 2,
        "beats": 1
      },
      {
        "midi": 60,
        "finger": 1,
        "beats": 1
      },
      {
        "midi": 60,
        "finger": 1,
        "beats": 1
      },
      {
        "midi": 62,
        "finger": 2,
        "beats": 1
      },
      {
        "midi": 64,
        "finger": 3,
        "beats": 1
      },
      {
        "midi": 64,
        "finger": 3,
        "beats": 1.5
      },
      {
        "midi": 62,
        "finger": 2,
        "beats": 0.5
      },
      {
        "midi": 62,
        "finger": 2,
        "beats": 2
      },
      {
        "midi": 64,
        "finger": 3,
        "beats": 1
      },
      {
        "midi": 64,
        "finger": 3,
        "beats": 1
      },
      {
        "midi": 65,
        "finger": 4,
        "beats": 1
      },
      {
        "midi": 67,
        "finger": 5,
        "beats": 1
      },
      {
        "midi": 67,
        "finger": 5,
        "beats": 1
      },
      {
        "midi": 65,
        "finger": 4,
        "beats": 1
      },
      {
        "midi": 64,
        "finger": 3,
        "beats": 1
      },
      {
        "midi": 62,
        "finger": 2,
        "beats": 1
      },
      {
        "midi": 60,
        "finger": 1,
        "beats": 1
      },
      {
        "midi": 60,
        "finger": 1,
        "beats": 1
      },
      {
        "midi": 62,
        "finger": 2,
        "beats": 1
      },
      {
        "midi": 64,
        "finger": 3,
        "beats": 1
      },
      {
        "midi": 62,
        "finger": 2,
        "beats": 1.5
      },
      {
        "midi": 60,
        "finger": 1,
        "beats": 0.5
      },
      {
        "midi": 60,
        "finger": 1,
        "beats": 2
      }
    ],
    "check": {
      "prompt": "How long is a dotted quarter note?",
      "options": [
        "One and a half beats",
        "One beat",
        "Two beats"
      ],
      "answer": 0
    },
    "meter": "4/4"
  },
  {
    "id": "acc-cg",
    "title": "A change to G7",
    "unit": 4,
    "skill": "Root bass & seventh chord",
    "tip": "G7 is on the seventh-chord row, two rows farther from the bellows than the major row. Use left middle finger 3 for this first chord drill.",
    "steps": [
      "Find G root bass. Trace the same slanted column to the seventh row.",
      "Play C bass/C major, then G bass/G7.",
      "Finish with C so you can hear the return home."
    ],
    "notes": [
      {
        "left": {
          "root": "C",
          "row": "bass",
          "finger": 4
        },
        "beats": 1
      },
      {
        "left": {
          "root": "C",
          "row": "major",
          "finger": 3
        },
        "beats": 1
      },
      {
        "left": {
          "root": "G",
          "row": "bass",
          "finger": 4
        },
        "beats": 1
      },
      {
        "left": {
          "root": "G",
          "row": "seventh",
          "finger": 3
        },
        "beats": 1
      },
      {
        "left": {
          "root": "C",
          "row": "bass",
          "finger": 4
        },
        "beats": 1
      },
      {
        "left": {
          "root": "C",
          "row": "major",
          "finger": 3
        },
        "beats": 1
      },
      {
        "left": {
          "root": "G",
          "row": "bass",
          "finger": 4
        },
        "beats": 1
      },
      {
        "left": {
          "root": "G",
          "row": "seventh",
          "finger": 3
        },
        "beats": 1
      },
      {
        "left": {
          "root": "C",
          "row": "bass",
          "finger": 4
        },
        "beats": 4
      }
    ],
    "check": {
      "prompt": "Where is G7?",
      "options": [
        "G column, seventh row",
        "C column, major row",
        "G column, root-bass row"
      ],
      "answer": 0
    },
    "meter": "4/4"
  },
  {
    "id": "acc-duet",
    "title": "Little Bellows Dance",
    "unit": 4,
    "skill": "Original \u00b7 two-hand piece",
    "tip": "A short original piece with right-hand notes and a steady left-hand accompaniment. Learn one bar at a time.",
    "steps": [
      "Play the right-hand line alone.",
      "Play the left-hand pattern alone with 4 for root and 3 for chord.",
      "Put them together slowly; both highlighted contacts sound on the same beat."
    ],
    "notes": [
      {
        "midi": 60,
        "finger": 1,
        "beats": 1,
        "left": {
          "root": "C",
          "row": "bass",
          "finger": 4
        }
      },
      {
        "midi": 64,
        "finger": 3,
        "beats": 1,
        "left": {
          "root": "C",
          "row": "major",
          "finger": 3
        }
      },
      {
        "midi": 67,
        "finger": 5,
        "beats": 1,
        "left": {
          "root": "C",
          "row": "bass",
          "finger": 4
        }
      },
      {
        "midi": 64,
        "finger": 3,
        "beats": 1,
        "left": {
          "root": "C",
          "row": "major",
          "finger": 3
        }
      },
      {
        "midi": 65,
        "finger": 4,
        "beats": 1,
        "left": {
          "root": "F",
          "row": "bass",
          "finger": 4
        }
      },
      {
        "midi": 64,
        "finger": 3,
        "beats": 1,
        "left": {
          "root": "F",
          "row": "major",
          "finger": 3
        }
      },
      {
        "midi": 62,
        "finger": 2,
        "beats": 1,
        "left": {
          "root": "G",
          "row": "bass",
          "finger": 4
        }
      },
      {
        "midi": 62,
        "finger": 2,
        "beats": 1,
        "left": {
          "root": "G",
          "row": "seventh",
          "finger": 3
        }
      },
      {
        "midi": 60,
        "finger": 1,
        "beats": 1,
        "left": {
          "root": "C",
          "row": "bass",
          "finger": 4
        }
      },
      {
        "midi": 62,
        "finger": 2,
        "beats": 1,
        "left": {
          "root": "C",
          "row": "major",
          "finger": 3
        }
      },
      {
        "midi": 64,
        "finger": 3,
        "beats": 1,
        "left": {
          "root": "C",
          "row": "bass",
          "finger": 4
        }
      },
      {
        "midi": 67,
        "finger": 5,
        "beats": 1,
        "left": {
          "root": "C",
          "row": "major",
          "finger": 3
        }
      },
      {
        "midi": 65,
        "finger": 4,
        "beats": 1,
        "left": {
          "root": "G",
          "row": "bass",
          "finger": 4
        }
      },
      {
        "midi": 62,
        "finger": 2,
        "beats": 1,
        "left": {
          "root": "G",
          "row": "seventh",
          "finger": 3
        }
      },
      {
        "midi": 60,
        "finger": 1,
        "beats": 1,
        "left": {
          "root": "C",
          "row": "bass",
          "finger": 4
        }
      },
      {
        "midi": 60,
        "finger": 1,
        "beats": 1,
        "left": {
          "root": "C",
          "row": "major",
          "finger": 3
        }
      }
    ],
    "check": {
      "prompt": "What do two highlighted hands mean?",
      "options": [
        "Play both together",
        "Choose either one",
        "Play only the bass"
      ],
      "answer": 0
    },
    "meter": "4/4"
  },
  {
    "id": "acc-finale",
    "title": "Your first complete performance",
    "unit": 4,
    "skill": "Beginner finale \u00b7 melody & chords",
    "tip": "Repeat Little Bellows Dance with an opening rest and a held finish. Keep a comfortable pulse; you decide when the piece feels ready.",
    "steps": [
      "Count one silent bar before starting.",
      "Play all four bars without rushing. Change bellows only when comfortable.",
      "Finish with C and listen as the sound fades. Then take the quick check."
    ],
    "notes": [
      {
        "rest": true,
        "beats": 4
      },
      {
        "midi": 60,
        "finger": 1,
        "beats": 1,
        "left": {
          "root": "C",
          "row": "bass",
          "finger": 4
        }
      },
      {
        "midi": 64,
        "finger": 3,
        "beats": 1,
        "left": {
          "root": "C",
          "row": "major",
          "finger": 3
        }
      },
      {
        "midi": 67,
        "finger": 5,
        "beats": 1,
        "left": {
          "root": "C",
          "row": "bass",
          "finger": 4
        }
      },
      {
        "midi": 64,
        "finger": 3,
        "beats": 1,
        "left": {
          "root": "C",
          "row": "major",
          "finger": 3
        }
      },
      {
        "midi": 65,
        "finger": 4,
        "beats": 1,
        "left": {
          "root": "F",
          "row": "bass",
          "finger": 4
        }
      },
      {
        "midi": 64,
        "finger": 3,
        "beats": 1,
        "left": {
          "root": "F",
          "row": "major",
          "finger": 3
        }
      },
      {
        "midi": 62,
        "finger": 2,
        "beats": 1,
        "left": {
          "root": "G",
          "row": "bass",
          "finger": 4
        }
      },
      {
        "midi": 62,
        "finger": 2,
        "beats": 1,
        "left": {
          "root": "G",
          "row": "seventh",
          "finger": 3
        }
      },
      {
        "midi": 60,
        "finger": 1,
        "beats": 1,
        "left": {
          "root": "C",
          "row": "bass",
          "finger": 4
        }
      },
      {
        "midi": 62,
        "finger": 2,
        "beats": 1,
        "left": {
          "root": "C",
          "row": "major",
          "finger": 3
        }
      },
      {
        "midi": 64,
        "finger": 3,
        "beats": 1,
        "left": {
          "root": "C",
          "row": "bass",
          "finger": 4
        }
      },
      {
        "midi": 67,
        "finger": 5,
        "beats": 1,
        "left": {
          "root": "C",
          "row": "major",
          "finger": 3
        }
      },
      {
        "midi": 65,
        "finger": 4,
        "beats": 1,
        "left": {
          "root": "G",
          "row": "bass",
          "finger": 4
        }
      },
      {
        "midi": 62,
        "finger": 2,
        "beats": 1,
        "left": {
          "root": "G",
          "row": "seventh",
          "finger": 3
        }
      },
      {
        "midi": 60,
        "finger": 1,
        "beats": 1,
        "left": {
          "root": "C",
          "row": "bass",
          "finger": 4
        }
      },
      {
        "midi": 60,
        "finger": 1,
        "beats": 1,
        "left": {
          "root": "C",
          "row": "major",
          "finger": 3
        }
      },
      {
        "midi": 60,
        "finger": 1,
        "beats": 4,
        "left": {
          "root": "C",
          "row": "major",
          "finger": 3
        }
      }
    ],
    "check": {
      "prompt": "How should you practice a difficult bar?",
      "options": [
        "Slow it down and repeat it",
        "Skip every rest",
        "Force the bellows"
      ],
      "answer": 0
    },
    "meter": "4/4"
  }
];

ACC_UNITS.push('Scales · new note patterns');
ACC_LESSONS.push(...BEGINNER_SCALES.accordion);

for(const lesson of BEGINNER_SCALES.accordion)for(const n of lesson.notes)if(n.midi===70)n.spelling='B♭4';
