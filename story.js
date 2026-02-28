// Book 1, Comet Run
// Cast: Karina, Kaya, Chaz, Kepler
// Note: Ship 67 stays grounded until a pilot can keep margin and meet the goal.

const STORY = {
  meta: {
    title: "42 Is Calling",
    book: "Book 1, Comet Run"
  },

  characters: {
    karina: { name: "Karina", portrait: "assets/characters/karina.png" },
    kaya:   { name: "Kaya",   portrait: "assets/characters/kaya.png" },
    chaz:   { name: "Chaz",   portrait: "assets/characters/chaz.png" },
    kepler: { name: "Kepler", portrait: "assets/characters/kepler.png" },
    narr:   { name: "Narration", portrait: "" }
  },

  // Each chapter is a sequence of "lines"
  // A line can set scene image, speaker, and text.
  chapters: {
    "1": {
      tag: "Chapter 1, Selection",
      sceneImg: "assets/scenes/01_school.png",
      lines: [
        { speaker: "narr", text: "Karina stared at the problem until the numbers stopped looking like noise and started looking like a path." },
        { speaker: "narr", text: "A new message flashed on screens across Earth.\n\nKepler had arrived.\nHe needed captains." },
        { speaker: "karina", text: "If I can solve it, I can help.\nIf I can help, I should." },
        { speaker: "narr", text: "When the results came in, Karina’s assignment shocked her.\n\nShip 1." }
      ]
    },

    "2": {
      tag: "Chapter 2, Roommate",
      sceneImg: "assets/scenes/02_roommate.png",
      lines: [
        { speaker: "narr", text: "Her roommate read the list twice to be sure it was real." },
        { speaker: "narr", text: "Then she pointed at the screen and laughed like it was impossible." },
        { speaker: "narr", text: "‘You got Ship 1.’" },
        { speaker: "karina", text: "That’s… the first ship." },
        { speaker: "narr", text: "Karina didn’t feel proud.\nShe felt responsible." }
      ]
    },

    "3": {
      tag: "Chapter 3, Meet Kepler",
      sceneImg: "assets/scenes/03_meet_kepler.png",
      lines: [
        { speaker: "kepler", text: "One ship, one mission, one responsibility." },
        { speaker: "kepler", text: "Your fleet will succeed by margin.\nNot by speed." },
        { speaker: "karina", text: "Then why give me Ship 1?" },
        { speaker: "kepler", text: "Because you solved the problem.\nAnd you stayed calm." },
        { speaker: "narr", text: "Karina looked down the launch bay.\nShips lined up like tools waiting for hands." },
        { speaker: "karina", text: "I don’t want Ship 1.\nI want… 42." },
        { speaker: "kepler", text: "Why 42?" },
        { speaker: "karina", text: "Because it’s a reminder.\nThere’s always more than one way to be right." },
        { speaker: "narr", text: "Kepler paused, then nodded once.\n\n“Fine.”" }
      ]
    },

    "4A": {
      tag: "Chapter 4A, Chaz",
      sceneImg: "assets/scenes/04A_chaz.png",
      lines: [
        { speaker: "narr", text: "Some captains wanted the fastest path.\nThe loudest win.\nThe biggest headline." },
        { speaker: "chaz", text: "We burn hard, we get there first, we come back first.\nThat’s the whole point." },
        { speaker: "karina", text: "The point is to come back.\nWith margin." },
        { speaker: "chaz", text: "Margin is just fear wearing a math costume." },
        { speaker: "narr", text: "Karina didn’t argue.\nShe watched.\nShe measured.\nAnd she let him go." }
      ]
    },

    "4B": {
      tag: "Chapter 4B, Kaya",
      sceneImg: "assets/scenes/04B_kaya.png",
      lines: [
        { speaker: "narr", text: "Karina turned and saw a familiar face.\nA face from childhood.\nA name she hadn’t said out loud in years." },
        { speaker: "kaya", text: "Karina?" },
        { speaker: "karina", text: "Kaya… you made it." },
        { speaker: "kaya", text: "I got assigned to 42.\nThen you picked it.\nSo they bumped me to Ship 1." },
        { speaker: "karina", text: "You should’ve kept 42." },
        { speaker: "kaya", text: "No.\nYou chose it for a reason.\nI trust your reason." }
      ]
    },

    "5A": {
      tag: "Chapter 5A, Parade",
      sceneImg: "assets/scenes/05A_parade.png",
      lines: [
        { speaker: "narr", text: "When the first water hit the tanks back home, Earth cheered." },
        { speaker: "chaz", text: "Call it a six, seven.\nGood enough.\nTell them to throw the confetti." },
        { speaker: "narr", text: "Karina watched the celebration from above.\nNot jealous.\nJust quiet." },
        { speaker: "karina", text: "If that’s six, seven…\nthen we’re bringing back forty-two." }
      ]
    },

    "5B": {
      tag: "Chapter 5B, Quiet Win",
      sceneImg: "assets/scenes/05B_return.png",
      lines: [
        { speaker: "narr", text: "Some victories happen with cameras.\nSome happen with checklists." },
        { speaker: "karina", text: "Full load.\nFuel intact.\nSystems green." },
        { speaker: "kaya", text: "No parade for that." },
        { speaker: "karina", text: "Good.\nThen we can keep working." }
      ]
    },

    "6": {
      tag: "Chapter 6, Return",
      sceneImg: "assets/scenes/06_comet_landing.png",
      lines: [
        { speaker: "narr", text: "Ship 42 came home heavy.\nNot fast.\nNot first.\nBut full." },
        { speaker: "narr", text: "In the hangars, one ship sat untouched.\nA perfect ship with an empty seat." },
        { speaker: "kepler", text: "Ship 67 will wait." },
        { speaker: "kepler", text: "It launches when a pilot can keep margin and still meet the goal." }
      ]
    },

    "7": {
      tag: "Chapter 7, Epilogue",
      sceneImg: "assets/scenes/07_epilogue.png",
      lines: [
        { speaker: "narr", text: "Kepler didn’t celebrate like humans did.\nHe announced the next phase like it was the next page in a manual." },
        { speaker: "kepler", text: "The comet run was lesson one." },
        { speaker: "kepler", text: "Phase two begins now.\nInfrastructure.\nThe belt.\nThe long work." },
        { speaker: "narr", text: "Karina and Kaya walked toward their ships.\nNot for glory.\nFor the future." },
        { speaker: "kaya", text: "Ready?" },
        { speaker: "karina", text: "Always." }
      ]
    }
  }
};
