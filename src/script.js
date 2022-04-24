let player = document.getElementById('player-sc');
let pauseButton = document.getElementById('pause');
let songName = document.getElementById('song-title');
var paused = true;
let songs = [['Comfy beats', 'Lilypichu'], 
             ['Cherry Wine', 'grentperez'], 
             ['I Know a Place', 'Chevy'], 
             ['Two Dimensions', 'EASHA'], 
             ['the way you say hello', 'tiffi'], 
             ['cliché', 'mxmtoon'], 
             ['Sunshine & Butterflies', 'Lilypichu'], 
             ['Morning Coffee', 'chevy'], 
             ['best part', 'sora.wav'], 
             ['wii date', 'City Girl'], 
             ['Sway', 'Galdive'], 
             ['Poetry', 'Galdive'],
             ['All In My Head', 'Eli Noir'], 
             ['Weakness', 'Eli Noir'], 
             ['Nobody Else', 'Em Beihold'], 
             ['First Date', 'frad'], 
             ['bossa uh', 'potsu']];

const GET_VOLUME = "getVolume",
      GET_DURATION = "getDuration",
      GET_POSITION = "getPosition",
      GET_CURRENT_SOUND_INDEX = "getCurrentSoundIndex",
      IS_PAUSED = "isPaused";

const LOAD_PROGRESS = "loadProgress",
      PLAY_PROGRESS = "playProgress",
      SEEK = "seek",
      READY = "ready"

const PLAY = "play",
      PAUSE = "pause",
      TOGGLE = "toggle",
      SEEK_TO = "seekTo",
      SET_VOLUME = "setVolume",
      NEXT = "next",
      PREV = "prev",
      SKIP = "skip"

var songIndex = 0;

function doAction(action, value){
    let obj = {method: action}
    if (value !== undefined) obj.value = value;
    console.log(obj);
    player.contentWindow.postMessage(JSON.stringify(obj), 'https://w.soundcloud.com/player/');
}
function getUIData(){
    doAction(GET_CURRENT_SOUND_INDEX);
    doAction(IS_PAUSED);
}

document.getElementById('play-pause').addEventListener('click', function () {
    doAction(TOGGLE);
    getUIData();
});
document.getElementById('skip-forward').addEventListener('click', function () {
    if (songIndex == songs.length - 1) doAction(SKIP, 0);
    else doAction(NEXT);
    doAction(SEEK_TO, 0);
    getUIData();
});
document.getElementById('skip-backward').addEventListener('click', function () {
    if (songIndex == 0) doAction(SKIP, songs.length - 1);
    else doAction(PREV);
    doAction(SEEK_TO, 0);
    getUIData();
});

window.addEventListener('message', function (e) {
    var data;
    var method;
    var value;
    try {
        data = JSON.parse(e.data);
        method = data.method;
        value = data.value;
    }
    catch { return false; }

    if (method === GET_CURRENT_SOUND_INDEX) {
        songName.innerHTML = `${songs[value][0]} <br>- ${songs[value][1]}`;
        songIndex = value;
    }
    else if (method === IS_PAUSED){
        if (value) pauseButton.classList.add('hidden');
        else pauseButton.classList.remove('hidden');
    }
});