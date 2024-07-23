document.querySelectorAll(".header a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    const offset = 100; // Adjust as needed for fixed header height
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    // Custom easing function for slower animation
    const easing = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const duration = 1000; // Animation duration in milliseconds
    const startTime = performance.now();

    function scroll() {
      const elapsed = performance.now() - startTime;
      const progress = easing(Math.min(elapsed / duration, 1));

      window.scrollTo({
        top: offsetPosition * progress,
        behavior: "smooth",
      });

      if (elapsed < duration) {
        requestAnimationFrame(scroll);
      }
    }

    scroll();
  });
});

window.addEventListener("scroll", function () {
  var header = document.getElementById("navbar");
  var header_logo_text_one = document.getElementById("logo-name-part-one");
  var header_logo_text_two = document.getElementById("logo-name-part-two");
  var headerLinks = header.querySelectorAll("a");

  var mediaQuery = window.matchMedia(
    "(min-width: 321px) and (max-width: 480px)"
  );

  if (!mediaQuery.matches) {
    if (window.scrollY > window.innerHeight / 2) {
      header.style.boxShadow = " 0 4px 8px rgba(0, 0, 0, 0.2)";
      header.style.background = "white";
      header_logo_text_one.style.color = "black";

      header_logo_text_two.style.color = "black";
      // scroll.style.opacity = "0";

      for (var i = 0; i < headerLinks.length; i++) {
        headerLinks[i].style.color = "#b88255"; // Assuming you want black text on white background
      }
    } else {
      header.style.background = "transparent";
      //  header.style.boxShadow = 'none';
      header_logo_text_one.style.color = "#fff";
      // scroll.style.opacity = "1";
      header_logo_text_two.style.color = "#fff";
      for (var i = 0; i < headerLinks.length; i++) {
        headerLinks[i].style.color = "#fff";
        header.style.boxShadow = "none"; // Assuming you want black text on white background
      }
    }
  } else {
    header.style.boxShadow = " 0 4px 8px rgba(0, 0, 0, 0.2)";
    header.style.background = "white";
    // dropdown.style.background='white';
    header_logo_text_one.style.color = "black";

    header_logo_text_two.style.color = "black";
    // scroll.style.opacity = "0";
    for (var i = 0; i < headerLinks.length; i++) {
      headerLinks[i].style.color = "#b88255"; // Assuming you want black text on white background
    }
  }
});

let lastScrollPosition = 0;
window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  let scrollDirection = scrollPosition > lastScrollPosition ? "down" : "up";
  lastScrollPosition = scrollPosition;

  let opacity = 1 - scrollPosition / 300;
  let opacity_slower = 1 - scrollPosition / 150;

  let translateY = Math.min(scrollPosition / 3, 250); // Adjust the divisor to control the translation speed
  // let translateY_scroll = Math.min(scrollPosition / 2, 250);
  const heroHeadingWrap = document.querySelector(".hero-heading-wrap");
  const heroHeadingSecond = document.getElementById("hero-heading-second");
  const heroHeadingDescription = document.querySelector(".hero-description");
  // const scroll = document.querySelector(".demo");

  heroHeadingWrap.style.opacity = opacity;
  heroHeadingSecond.style.opacity = opacity;
  heroHeadingDescription.style.opacity = opacity_slower;
  // scroll.style.opacity = opacity_slower;

  heroHeadingWrap.style.transform = `translateY(${translateY}px)`;
  heroHeadingSecond.style.transform = `translateY(${translateY}px)`;
  heroHeadingDescription.style.transform = `translateY(${translateY}px)`;
  // scroll.style.transform = `translateY(${translateY}px)`;
});

document.querySelectorAll(".faq-question-wrap").forEach((wrap) => {
  var questionElement = wrap.querySelector(".faq-question");
  var answerId = questionElement.getAttribute("data-answer");
  var answerElement = document.getElementById(answerId);
  var arrowElement = wrap.querySelector(".arrow-img");

  // Initially hide the answer
  answerElement.classList.add('faq-answer');

  wrap.addEventListener("click", function () {
    var parentItem = wrap.parentElement;
    var isActive = parentItem.classList.contains('active');

    // Collapse all other items
    document.querySelectorAll(".faq-item").forEach((item) => {
      item.classList.remove('active');
      var otherAnswerId = item.querySelector(".faq-question").getAttribute("data-answer");
      var otherAnswerElement = document.getElementById(otherAnswerId);
      otherAnswerElement.style.maxHeight = '0';
      otherAnswerElement.style.opacity = '0';
    });

    if (isActive) {
      // Hide this one
      parentItem.classList.remove('active');
      answerElement.style.maxHeight = '0';
      answerElement.style.opacity = '0';
      questionElement.style.color = "#b88255";
      arrowElement.src = "images/arrow-down.png";
    } else {
      // Show this one
      parentItem.classList.add('active');
      answerElement.style.maxHeight = answerElement.scrollHeight + "px";
      answerElement.style.opacity = '1';
      questionElement.style.color = "#f0a500";
      arrowElement.src = "images/arrow-up.png";
    }
  });
});


// Mobile Menu
document
  .getElementById("hamburger-menu")
  .addEventListener("click", function () {
    var nav = document.querySelector("nav");
    var overlay = document.querySelector(".overlay");

    if (
      nav.classList.contains("active") &&
      overlay.classList.contains("active")
    ) {
      nav.classList.remove("active");
      overlay.classList.remove("active");
    } else {
      nav.classList.add("active");
      overlay.classList.add("active");
    }
  });

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function () {
    var nav = document.querySelector("nav");
    var overlay = document.querySelector(".overlay");
    nav.classList.remove("active");
    overlay.classList.remove("active");
  });
});


// modifyingc the text of the main page
function adjustContent() {
  var mediaQuery = window.matchMedia("(max-width: 480px)");
  var descriptionText = document.getElementById("description-text");

  if (mediaQuery.matches) {
    // For screens smaller than 480px, change the content
    descriptionText.innerHTML = "Discover the magic of Wadi Rum with me, Mohammad. Come and live the dream of Wadi Rum";
  } else {
    // For larger screens, revert to the original content
    descriptionText.innerHTML = "Discover the magic of Wadi Rum with me, Mohammad. Born and raised in this mystical desert, I follow the footsteps of my ancestors, who were hunters in these ancient mountains. My love for the desert runs deep, and I want to share this passion for Wadi Rum with you. Let me guide you through the rocks, dunes, sand, and ancient caravan routes, revealing sights that will surpass your wildest dreams. Come and live the magic of Wadi Rum with me.";
  }
}

// Adjust content on initial load
adjustContent();

// Adjust content on window resize
window.addEventListener("resize", adjustContent);