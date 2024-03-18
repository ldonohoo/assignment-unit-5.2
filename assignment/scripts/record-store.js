// Lisa Donohoo
// Prime Academy
// Tier 1 Week 5 
// Assignment 5.2



// audio file (free no license or attribution required for personal use)
// declare audio file as a global otherwise could not pause play operation?
const funkyMusic = new Audio();
funkyMusic.src = "media/funk6-80693.mp3";
funkyMusic.loop = true;

// event listener for spinning record
document.querySelector(".spinning-record").addEventListener("click", PlayMusic);

// function to play music when clicked, and pause (turn off) when clicked again
//      (controlled by .playing class on the img element)
function PlayMusic() {
    let spinningRecord = document.querySelector(".spinning-record");
    if (spinningRecord.classList.contains("playing")) {
        funkyMusic.pause();
    } else {
        funkyMusic.play();
    }
    spinningRecord.classList.toggle("playing");
}


