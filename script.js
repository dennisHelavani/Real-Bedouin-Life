

const elements = document.querySelectorAll(".animate-on-scrollY");
let lastScrollPosition = 0;
function checkPosition() {
  const windowHeight = window.innerHeight;
  const scrollPosition = window.scrollY || window.pageYOffset;

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top + scrollPosition;

    if (elementTop - windowHeight <= 0) {
      element.classList.add("showY");
    } else {
      element.classList.remove("showY");
    }
  });
}

window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  let scrollDirection = scrollPosition > lastScrollPosition ? "down" : "up";
  lastScrollPosition = scrollPosition;

  let opacity = 1 - scrollPosition / 300;
  let opacity_slower = 1 - scrollPosition / 150;
  let translateY = Math.min(scrollPosition / 3, 250); // Adjust the divisor to control the translation speed

  const heroHeadingWrap = document.querySelector(".hero-heading-wrap");
  const heroHeadingSecond = document.getElementById("hero-heading-second");
  const heroHeadingDescription = document.querySelector(".hero-description");

  heroHeadingWrap.style.opacity = opacity;
  heroHeadingSecond.style.opacity = opacity;
  heroHeadingDescription.style.opacity = opacity_slower;

  heroHeadingWrap.style.transform = `translateY(${translateY}px)`;
  heroHeadingSecond.style.transform = `translateY(${translateY}px)`;
  heroHeadingDescription.style.transform = `translateY(${translateY}px)`;

  // Add class to elements when scrolling down, remove when scrolling up
  if (scrollDirection === "down") {
    elements.forEach((element) => {
      if (element.classList.contains("showY")) {
        element.classList.remove("showY");
      }
    });
  } else {
    checkPosition();
  }
});




document.addEventListener("DOMContentLoaded", () => {
  // const historyCardBlocks = document.querySelectorAll(".history-card-block");
  const footer = document.querySelectorAll("footer");

  const elements = [...footer];
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1, // Adjust based on when you want to trigger the animation
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Start listening to scroll events when the element is in view
        window.addEventListener("scroll", onScroll);
      } else {
        // Stop listening to scroll events when the element is out of view
        window.removeEventListener("scroll", onScroll);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  elements.forEach((element) => observer.observe(element));

  const onScroll = () => {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;
    const thresholdPercentage = 0.90;
    const thresholdPosition = viewportHeight * thresholdPercentage;

    elements.forEach((element) => {
      const bounding = element.getBoundingClientRect();
      const elementTop = bounding.top + scrollPosition;
      const elementMiddle = elementTop + bounding.height / 2;

      // Calculate distance from the threshold position
      const distanceFromThreshold = Math.abs(
        elementMiddle - (scrollPosition + thresholdPosition)
      );
      const threshold = viewportHeight * thresholdPercentage;

      // Check if the element has already crossed the threshold position
      if (elementMiddle < scrollPosition + thresholdPosition) {
        element.style.opacity = 1;
        element.style.transform = `translateY(0px)`;
      } else {
        let opacity = 1 - distanceFromThreshold / threshold;
        opacity = Math.max(0, Math.min(1, opacity)); // Ensure opacity is between 0 and 1

        let translateY = Math.min(distanceFromThreshold / 3, 150); // Adjust the divisor to control the translation speed

        element.style.opacity = opacity;
        element.style.transform = `translateY(${translateY}px)`;
      }
    });
  };
});

// FAQ Section
const answers = [
  "Make sure to pack lightweight clothing, sunscreen, a hat, and plenty of water.",
  "The typical tour lasts between 2 to 4 hours, depending on the package you choose.",
  "The best time to visit is from March to May and September to November, when the weather is mild.",
  "Yes, all meals are provided during the tour, including traditional Bedouin dishes.",
  "Yes, the tour is suitable for children. We offer family-friendly packages.",
];

function showAnswer(index) {
  const faqItem = document.querySelector(`.faq-item:nth-child(${index})`);
  let answerElement = faqItem.querySelector(".faq-answer");
  const arrowElement = document.getElementById(`arrow-${index}`);

  // If the answer element doesn't exist, create it
  if (!answerElement) {
    answerElement = document.createElement("div");
    answerElement.classList.add("faq-answer");
    answerElement.innerHTML = `<p>${answers[index - 1]}</p>`;
    faqItem.appendChild(answerElement);
  }

  // Toggle the display of the answer
  if (answerElement.style.display === "block") {
    answerElement.style.display = "none";
    arrowElement.src = "images/arrow-down.png"; // Change back to original arrow image
  } else {
    answerElement.style.display = "block";
    arrowElement.src = "images/arrow-up.png"; // Change to new arrow image
  }
}

// // Pulse animation below
document.querySelectorAll(".faq-item").forEach((item) => {
  let isPulsing = false; // Initialize a flag to track if the animation is active

  item.addEventListener("mouseenter", () => {
    if (!isPulsing) {
      // Check if the animation is not already active
      isPulsing = true;
      item.classList.add("pulsing");
    }
  });

  item.addEventListener("animationiteration", () => {
    if (isPulsing) {
      // Check if the animation is active
      isPulsing = false;
      item.classList.remove("pulsing");
    }
  });

  item.addEventListener("mouseleave", () => {
    if (isPulsing) {
      // Check if the animation is active
      isPulsing = false;
      item.classList.remove("pulsing");
    }
  });
});
