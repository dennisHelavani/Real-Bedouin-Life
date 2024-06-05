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


// FAQ Section and Its answers
const answers = [
    "Make sure to pack lightweight clothing, sunscreen, a hat, and plenty of water.",
    "The typical tour lasts between 2 to 4 hours, depending on the package you choose.",
    "The best time to visit is from March to May and September to November, when the weather is mild.",
    "Yes, all meals are provided during the tour, including traditional Bedouin dishes.",
    "Yes, the tour is suitable for children. We offer family-friendly packages."
];

function showAnswer(index) {
    document.getElementById('faq-answer').textContent = answers[index - 1];
}
// Pulse animation below
document.querySelectorAll('.faq-item').forEach(item => {
    let isPulsing = false; // Initialize a flag to track if the animation is active
  
    item.addEventListener('mouseenter', () => {
      if (!isPulsing) { // Check if the animation is not already active
        isPulsing = true;
        item.classList.add('pulsing');
      }
    });
  
    item.addEventListener('animationiteration', () => {
      if (isPulsing) { // Check if the animation is active
        isPulsing = false;
        item.classList.remove('pulsing');
      }
    });
  
    item.addEventListener('mouseleave', () => {
      if (isPulsing) { // Check if the animation is active
        isPulsing = false;
        item.classList.remove('pulsing');
      }
    });
  });
  

// Coonecting by API to a trip advisor
fetch('your-reviews-api-endpoint')
    .then(response => response.json())
    .then(reviews => {
        const reviewBlock = document.querySelector('.review-block');
        reviewBlock.innerHTML = ''; // Clear existing reviews
        reviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review');
            reviewElement.innerHTML = `
                <p>"${review.text}"</p>
                <p class="client">- ${review.author}</p>
            `;
            reviewBlock.appendChild(reviewElement);
        });
    })
    .catch(error => console.error('Error fetching reviews:', error));


// Spinner Gallery Mover
let currentPosition = 0;
const spinnerContainerWidth = document.querySelector('.spinner-container').offsetWidth;
const numItems = document.querySelectorAll('.spinner-item').length;
const itemWidth = spinnerContainerWidth / numItems;

function rotateSpinner() {
    currentPosition -= itemWidth;
    if (currentPosition <= -spinnerContainerWidth) {
        currentPosition = 0;
    }
    document.querySelector('.spinner-container').style.transform = `translateX(${currentPosition}px)`;
}

setInterval(rotateSpinner, 3000); // Change image every 3 seconds
