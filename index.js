console.log("welcome to Spotify");
let songsIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let mastePlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressbar");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Warriyo - Mortals",
    filePath: "songs/1.mp3",
    coverPath: "/covers/1.jpg",
  },
  {
    songName: "Cielo - Huma-Huma",
    filePath: "songs/2.mp3",
    coverPath: "/covers/2.jpg",
  },
  {
    songName: "DEAF KEV - Invincible",
    filePath: "songs/3.mp3",
    coverPath: "/covers/3.jpg",
  },
  {
    songName: "Different Heaven & EH!DE - My Heart",
    filePath: "songs/4.mp3",
    coverPath: "/covers/4.jpg",
  },
  {
    songName: "Janji-Heroes-Tonight-feat-Johnning",
    filePath: "songs/5.mp3",
    coverPath: "/covers/5.jpg",
  },
  {
    songName: "Anuv Jain - HUSN",
    filePath: "songs/6.mp3",
    coverPath: "/covers/6.jpg",
  },
  {
    songName: "Bajre Da Sitta-Rashmeet Kaur x Deep Kalsi",
    filePath: "songs/7.mp3",
    coverPath: "/covers/3.jpg",
  },
  {
    songName: "jarvis - sigma",
    filePath: "songs/8.m4a",
    coverPath: "/covers/7.jpg",
  },
  {
    songName: "sail bea",
    filePath: "songs/9.mp3",
    coverPath: "/covers/8.jpg",
  },
  {
    songName: "ve kamlya",
    filePath: "songs/10.m4a",
    coverPath: "/covers/9.jpg",
  },
  {
    songName: " Dhoom Machale - Pritam",
    filePath: "songs/11.mp3",
    coverPath: "/covers/10.jpg",
  },
  {
    songName: " Khada Hu Aaj Bhi Wahi  - Syntunes",
    filePath: "songs/12.mp3",
    coverPath: "/covers/1.jpg",
  },
  {
    songName: " favourite - Isabel Rose",
    filePath: "songs/13.mp3",
    coverPath: "/covers/2.jpg",
  },
];

songItems.forEach((element, i) => {
  console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    mastePlay.classList.remove("fa-play-circle");
    mastePlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    mastePlay.classList.remove("fa-pause-circle");
    mastePlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

audioElement.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  //update seeekbar
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  myProgressBar.value = progress;
});
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songsIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `songs/${songsIndex + 1}.mp3`;
      masterSongName.innerText = songs[songsIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songsIndex >= 12) {
    songsIndex = 0;
  } else {
    songsIndex += 1;
  }
  audioElement.src = `songs/${songsIndex + 1}.mp3`;
  masterSongName.innerText = songs[songsIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
document.getElementById("previous").addEventListener("click", () => {
  if (songsIndex <= 12) {
    songsIndex = 0;
  } else {
    songsIndex -= 1;
  }
  audioElement.src = `songs/${songsIndex + 1}.mp3`;
  masterSongName.innerText = songs[songsIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
