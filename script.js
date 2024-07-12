document.querySelectorAll('.header a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      const offset = 100; // Adjust as needed for fixed header height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      // Custom easing function for slower animation
      const easing = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

      const duration = 1000; // Animation duration in milliseconds
      const startTime = performance.now();

      function scroll() {
          const elapsed = performance.now() - startTime;
          const progress = easing(Math.min(elapsed / duration, 1));

          window.scrollTo({
              top: offsetPosition * progress,
              behavior: 'smooth'
          });

          if (elapsed < duration) {
              requestAnimationFrame(scroll);
          }
      }

      scroll();
  });
});



window.addEventListener('scroll', function() {
  var header = document.getElementById('navbar');
  var header_logo_text_one= document.getElementById('logo-name-part-one');
  var header_logo_text_two= document.getElementById('logo-name-part-two');
  var headerLinks = header.querySelectorAll('a');
  var dropdown = document.getElementById('dropdown');



  if (window.scrollY > window.innerHeight/2) {
    header.style.boxShadow = ' 0 4px 8px rgba(0, 0, 0, 0.2)';
      header.style.background = 'white';
      // dropdown.style.background='white';
      header_logo_text_one.style.color = 'black';

      header_logo_text_two.style.color = 'black';
      
      for (var i = 0; i < headerLinks.length; i++) {
        headerLinks[i].style.color = '#b88255'; // Assuming you want black text on white background
    }
  } else {
      header.style.background = 'transparent';
      //  header.style.boxShadow = 'none';
      header_logo_text_one.style.color = '#fff';
      header_logo_text_two.style.color = '#fff';
      for (var i = 0; i < headerLinks.length; i++) {
        headerLinks[i].style.color = '#fff'; 
        header.style.boxShadow = 'none';// Assuming you want black text on white background
    }
  }
});


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




// // FAQ Section
// const answers = [
//   "Make sure to pack lightweight clothing, sunscreen, a hat, and plenty of water.",
//   "The typical tour lasts between 2 to 4 hours, depending on the package you choose.",
//   "The best time to visit is from March to May and September to November, when the weather is mild.",
//   "Yes, all meals are provided during the tour, including traditional Bedouin dishes.",
//   "Yes, the tour is suitable for children. We offer family-friendly packages.",
// ];

// function showAnswer(index) {
//   const faqItem = document.querySelector(`.faq-item:nth-child(${index})`);
//   let answerElement = faqItem.querySelector(".faq-answer");
//   const arrowElement = document.getElementById(`arrow-${index}`);

//   // If the answer element doesn't exist, create it
//   if (!answerElement) {
//     answerElement = document.createElement("div");
//     answerElement.classList.add("faq-answer");
//     answerElement.innerHTML = `<p>${answers[index - 1]}</p>`;
//     faqItem.appendChild(answerElement);
//   }

//   // Toggle the display of the answer
//   if (answerElement.style.display === "block") {
//     answerElement.style.display = "none";
//     arrowElement.src = "images/arrow-down.png"; // Change back to original arrow image
//   } else {
//     answerElement.style.display = "block";
//     arrowElement.src = "images/arrow-up.png"; // Change to new arrow image
//   }
// }


