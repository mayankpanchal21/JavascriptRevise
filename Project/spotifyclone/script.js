let audio = new Audio('songs/1.mp3');
let index = 0;
let play = document.getElementById('masterplay');
let progressbar = document.getElementById('progressbar');


// song play using playbtn
play.addEventListener('click',()=>{
    if(audio.paused || audio.currentTime<=0){
        audio.play();
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
    }
    else{
        audio.pause();
        play.classList.remove('fa-pause');   
        play.classList.add('fa-play');
    }
});
