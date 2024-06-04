document.addEventListener('DOMContentLoaded', (event) => {
    const audio = document.getElementById('scrollSound');
    const soundButton = document.getElementById('soundButton');
    let scrollTimeout;

    const playSound = () => {
        if (audio.paused) {
            audio.play().catch((error) => {
                console.log('Audio playback failed: ', error);
            });
        }
    };

    const stopSound = () => {
        if (!audio.paused) {
            audio.pause();
        }
    };

    const onScroll = () => {
        playSound();

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            stopSound();
        }, 150); // 150ms delay to detect when scrolling stops
    };

    const enableSound = () => {
        soundButton.style.display = 'none'; // Hide the button after enabling sound
        window.addEventListener('scroll', onScroll);
    };

    soundButton.addEventListener('click', enableSound);
});
