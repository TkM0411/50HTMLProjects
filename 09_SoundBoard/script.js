const sounds = ['Arrow', 'Alarm', 'CarHorn', 'Beeps' , 'TrainHorn', 'Rocket']
sounds.forEach(sound => {
    const button = document.createElement('button');
    button.classList.add('btn');
    button.innerHTML = sound;
    button.addEventListener('click', () => {
        stopsSongs();
        document.getElementById(sound).play();
    });
    document.getElementById('buttons').appendChild(button);
});

function stopsSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    });
}