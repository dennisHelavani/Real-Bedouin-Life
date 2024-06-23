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
  
  const heroHeadingDescription = document.querySelector(".hero-description");

  heroHeadingWrap.style.opacity = opacity;
  heroHeadingDescription.style.opacity = opacity_slower;

  heroHeadingWrap.style.transform = `translateY(${translateY}px)`;
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
