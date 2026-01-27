const allAudioKeys = document.querySelectorAll(`.key`);

function getAudio(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const audioKey = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // break the method
    audio.currentTime = 0; //rewind to start when key press in quick succession
    audio.play();
    audioKey.classList.add('playing')
} 

function removeTransition(e) {
    if(e.propertyName !== 'transform') return; // skip if is not a transform

    this.classList.remove('playing');
}

window.addEventListener('keydown', getAudio);

allAudioKeys.forEach(key => key.addEventListener('transitionend', removeTransition))