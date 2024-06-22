// var prevScrollpos = window.pageYOffset;

// Ensure the navbar is hidden on page load
// window.onload = function() {
//     document.getElementById("navbar").style.top = "0px";
//     document.getElementById("navbar").style.backgroundColor = "transparent";
    
// };

// window.onscroll = function() {
//     var currentScrollPos = window.pageYOffset;
//     var navbar = document.getElementById("navbar");


//     if(currentScrollPos >= 0 && currentScrollPos <400){
//       navbar.style.top = "0px";
//     }
//     // Check if the user has scrolled more than 100px
//     else if (currentScrollPos > 400) {
//         // Add a class to show the navbar if it doesn't already have it
    
//         if (prevScrollpos > currentScrollPos) {
//             navbar.style.top = "0px";
//         } else {
//             navbar.style.top = "0px";
//         }
//     } else {
//         // Hide the navbar if the scroll position is less than or equal to 100px
//         navbar.style.top = "0px";   
//     }
//     prevScrollpos = currentScrollPos;
// };

window.addEventListener('scroll', function() {
  var header = document.getElementById('navbar');
  var header_logo_text_one= document.getElementById('logo-name-part-one');
  var header_logo_text_two= document.getElementById('logo-name-part-two');
  var headerLinks = header.querySelectorAll('a');


  if (window.scrollY > window.innerHeight/2) {
    header.style.boxShadow = ' 0 4px 8px rgba(0, 0, 0, 0.2)';
      header.style.background = 'white';
      header_logo_text_one.style.color = 'black';
      header_logo_text_two.style.color = 'black';
      
      for (var i = 0; i < headerLinks.length; i++) {
        headerLinks[i].style.color = '#b88255'; // Assuming you want black text on white background
    }
  } else {
      header.style.background = 'transparent';
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


