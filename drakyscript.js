let songs = [];
let filteredSongs = [];
let currentIndex = 0;
let isPlaying = false;

const SAMPLE_AUDIO = "audio/sample.mp3";

const songGrid = document.getElementById("song-grid");
const audio = document.getElementById("audio");

const playerCover = document.getElementById("player-cover");
const playerTitle = document.getElementById("player-title");
const playerArtist = document.getElementById("player-artist");
const playBtn = document.getElementById("play-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const seekBar = document.getElementById("seek-bar");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const volumeBar = document.getElementById("volume-bar");
const expandBtn = document.getElementById("expand-btn");

const miniTitle = document.getElementById("mini-title");
const miniArtist = document.getElementById("mini-artist");
const miniPlay = document.getElementById("mini-play");
const miniPrev = document.getElementById("mini-prev");
const miniNext = document.getElementById("mini-next");

const expandedPlayer = document.getElementById("expanded-player");
const collapseBtn = document.getElementById("collapse-btn");
const expandedCover = document.getElementById("expanded-cover");
const expandedTitle = document.getElementById("expanded-title");
const expandedArtist = document.getElementById("expanded-artist");
const expandedPlay = document.getElementById("expanded-play");
const expandedPrev = document.getElementById("expanded-prev");
const expandedNext = document.getElementById("expanded-next");
const expandedSeekBar = document.getElementById("expanded-seek-bar");
const expandedCurrentTime = document.getElementById("expanded-current-time");
const expandedDuration = document.getElementById("expanded-duration");

const gradients = [
  "linear-gradient(135deg, #667eea, #764ba2)",
  "linear-gradient(135deg, #f093fb, #f5576c)",
  "linear-gradient(135deg, #4facfe, #00f2fe)",
  "linear-gradient(135deg, #43e97b, #38f9d7)",
  "linear-gradient(135deg, #fa709a, #fee140)",
  "linear-gradient(135deg, #a18cd1, #fbc2eb)",
  "linear-gradient(135deg, #fccb90, #d57eeb)",
  "linear-gradient(135deg, #84fab0, #8fd3f4)",
  "linear-gradient(135deg, #e0c3fc, #8ec5fc)",
  "linear-gradient(135deg, #f6d365, #fda085)",
];

async function loadSongs() {
  try {
    const res = await fetch("songs.json");
    songs = await res.json();
    filteredSongs = [...songs];
    renderSongs(filteredSongs);
    if (songs.length > 0) loadSong(0);
  } catch (err) {
    console.error("Could not load songs.json:", err);
    songGrid.innerHTML = `<div style="padding:30px; color:var(--text-muted); text-align:center;"><p>🎵 Song list unavailable.</p></div>`;
  }
}

function renderSongs(list) {
  songGrid.innerHTML = "";
  list.forEach((song, index) => {
    const card = document.createElement("article");
    card.className = "card";
    const gradient = gradients[index % gradients.length];

    card.innerHTML = `
      <div class="card-cover" style="background:${gradient}; display:flex; align-items:center; justify-content:center; font-size:2rem; position:relative;">
        🎵
      </div>
      <div class="card-body">
        <div class="card-title">${song.title}</div>
        <div class="card-artist">${song.artist}</div>
      </div>
    `;

    card.addEventListener("click", () => {
      currentIndex = index;
      loadSong(index);
      playAudio();
      showExpandedPlayer();
    });

    songGrid.appendChild(card);
  });
}

function loadSong(index) {
  const song = filteredSongs[index];
  if (!song) return;

  audio.src = "audio/sample.mp3";

  playerTitle.innerText = song.title;
  playerArtist.innerText = song.artist;
  if (playerCover) playerCover.style.display = "none";

  if (miniTitle) miniTitle.innerText = song.title;
  if (miniArtist) miniArtist.innerText = song.artist;

  if (expandedTitle) expandedTitle.innerText = song.title;
  if (expandedArtist) expandedArtist.innerText = song.artist;
  if (expandedCover) expandedCover.style.display = "none";
}

function playAudio() {
  audio.play()
    .then(() => { isPlaying = true; updatePlayButtons("⏸"); })
    .catch(e => console.error("Playback error:", e));
}

function pauseAudio() {
  audio.pause();
  isPlaying = false;
  updatePlayButtons("▶");
}

function updatePlayButtons(icon) {
  playBtn.innerText = icon;
  if (miniPlay) miniPlay.innerText = icon;
  if (expandedPlay) expandedPlay.innerText = icon;
}

playBtn.addEventListener("click", () => isPlaying ? pauseAudio() : playAudio());
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % filteredSongs.length;
  loadSong(currentIndex);
  playAudio();
});
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + filteredSongs.length) % filteredSongs.length;
  loadSong(currentIndex);
  playAudio();
});

if (miniPlay) miniPlay.addEventListener("click", () => isPlaying ? pauseAudio() : playAudio());
if (miniNext) miniNext.addEventListener("click", () => nextBtn.click());
if (miniPrev) miniPrev.addEventListener("click", () => prevBtn.click());

if (expandedPlay) expandedPlay.addEventListener("click", () => isPlaying ? pauseAudio() : playAudio());
if (expandedNext) expandedNext.addEventListener("click", () => nextBtn.click());
if (expandedPrev) expandedPrev.addEventListener("click", () => prevBtn.click());

function showExpandedPlayer() { if (expandedPlayer) expandedPlayer.classList.add("visible"); }
function hideExpandedPlayer() { if (expandedPlayer) expandedPlayer.classList.remove("visible"); }
if (expandBtn) expandBtn.addEventListener("click", showExpandedPlayer);
if (collapseBtn) collapseBtn.addEventListener("click", hideExpandedPlayer);

audio.addEventListener("timeupdate", () => {
  const val = audio.currentTime;
  seekBar.value = val;
  currentTimeEl.innerText = formatTime(val);
  if (expandedSeekBar) expandedSeekBar.value = val;
  if (expandedCurrentTime) expandedCurrentTime.innerText = formatTime(val);
});

audio.addEventListener("loadedmetadata", () => {
  const dur = audio.duration;
  seekBar.max = dur;
  durationEl.innerText = formatTime(dur);
  if (expandedSeekBar) expandedSeekBar.max = dur;
  if (expandedDuration) expandedDuration.innerText = formatTime(dur);
});

audio.addEventListener("ended", () => nextBtn.click());

seekBar.addEventListener("input", () => audio.currentTime = seekBar.value);
if (expandedSeekBar) expandedSeekBar.addEventListener("input", () => audio.currentTime = expandedSeekBar.value);
volumeBar.addEventListener("input", () => audio.volume = volumeBar.value);

function formatTime(s) {
  if (isNaN(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec < 10 ? "0" + sec : sec}`;
}

const menuItems = document.querySelectorAll(".menu-item");
const navLinks = document.querySelectorAll(".nav-link");

const pages = {
  "Home": document.getElementById("page-home"),
  "Artists": document.getElementById("page-artists"),
  "Releases": document.getElementById("page-releases"),
  "Events": document.getElementById("page-events"),
  "Podcasts": document.getElementById("page-podcasts"),
  "Store": document.getElementById("page-store"),
  "News": document.getElementById("page-news"),
  "Profile": document.getElementById("page-profile"),
  "About": document.getElementById("page-about"),
  "Contacts": document.getElementById("page-contacts"),
};

function switchPage(pageName) {
  Object.values(pages).forEach(p => { if (p) p.style.display = "none"; });
  if (pages[pageName]) {
    pages[pageName].style.display = "block";
  } else {
    pages["Home"].style.display = "block";
  }
  menuItems.forEach(link => {
    link.classList.toggle("active", link.innerText.trim() === pageName);
  });
  navLinks.forEach(link => {
    link.style.color = link.dataset.page === pageName ? "var(--text)" : "var(--text-muted)";
  });
}

menuItems.forEach(item => {
  item.addEventListener("click", e => { e.preventDefault(); switchPage(item.innerText.trim()); });
});
navLinks.forEach(item => {
  item.addEventListener("click", e => { e.preventDefault(); switchPage(item.dataset.page); });
});

const genreButtons = document.querySelectorAll(".genre-chip");

genreButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    genreButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const genre = btn.dataset.genre;
    filteredSongs = genre === "All"
      ? [...songs]
      : songs.filter(s => s.genre && s.genre.toLowerCase().includes(genre.toLowerCase()));

    renderSongs(filteredSongs);
  });
});

loadSongs();
