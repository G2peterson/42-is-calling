const el = (id) => document.getElementById(id);

const statusLine = el("statusLine");
const sceneImg = el("sceneImg");
const portrait = el("portrait");
const dialogue = el("dialogue");
const speakerName = el("speakerName");
const chapterTag = el("chapterTag");
const dialogueText = el("dialogueText");
const nextBtn = el("nextBtn");
const signOffBtn = el("signOffBtn");
const travelBtn = el("travelBtn");
const clearBtn = el("clearBtn");

let currentChapterKey = null;
let lineIndex = 0;
let currentLines = [];

function setStatus(text){
  statusLine.textContent = text;
}

function showSceneImage(path){
  if (!path){
    sceneImg.style.opacity = "0";
    sceneImg.src = "";
    return;
  }
  sceneImg.src = path;
  sceneImg.style.opacity = "1";
}

function setPortrait(charKey){
  const ch = STORY.characters[charKey];
  if (!ch || !ch.portrait){
    portrait.style.display = "none";
    portrait.src = "";
    return;
  }
  portrait.src = ch.portrait;
  portrait.style.display = "block";
}

function showDialogue(show){
  dialogue.style.display = show ? "block" : "none";
}

function renderLine(){
  const line = currentLines[lineIndex];
  if (!line){
    signOff();
    return;
  }

  const ch = STORY.characters[line.speaker] || STORY.characters.narr;
  speakerName.textContent = ch.name || "Narration";
  chapterTag.textContent = STORY.chapters[currentChapterKey]?.tag || "";

  setPortrait(line.speaker);
  dialogueText.textContent = line.text;
  showDialogue(true);
}

function startChapter(chKey){
  const ch = STORY.chapters[chKey];
  if (!ch){
    setStatus("Missing chapter: " + chKey);
    return;
  }

  currentChapterKey = chKey;
  currentLines = ch.lines || [];
  lineIndex = 0;

  setStatus(ch.tag);
  showSceneImage(ch.sceneImg);

  // When a chapter is active, we still keep the star drift behind the scene image.
  renderLine();
}

function next(){
  lineIndex += 1;
  if (lineIndex >= currentLines.length){
    signOff();
    return;
  }
  renderLine();
}

function signOff(){
  showDialogue(false);
  portrait.style.display = "none";
  portrait.src = "";
  setStatus("Travel mode");
}

function travelMode(){
  signOff();
  // Keep last scene image visible if you want “chapter still on screen”
  // or clear it for pure travel.
  // For now we keep it unless user hits Clear Screen.
  setStatus("Travel mode");
}

function clearScreen(){
  signOff();
  showSceneImage(null);
  setStatus("Travel mode");
}

nextBtn.addEventListener("click", next);
signOffBtn.addEventListener("click", signOff);
travelBtn.addEventListener("click", travelMode);
clearBtn.addEventListener("click", clearScreen);

document.querySelectorAll("[data-go]").forEach((btn) => {
  btn.addEventListener("click", () => startChapter(btn.getAttribute("data-go")));
});

// Boot in travel mode with no chapter loaded
setStatus("Travel mode");
