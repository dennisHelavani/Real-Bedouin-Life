const translations = {};

async function loadTranslation(lang) {
  const response = await fetch(`translation/${lang}.json`);
  const data = await response.json();
  translations[lang] = data;
}

async function setLanguage(lang) {
  if (!translations[lang]) {
    await loadTranslation(lang);
  }

  // Set header translations
  document.getElementById("nav-about").textContent = translations[lang].header.about;
  // document.getElementById("nav-home").textContent = translations[lang].header.home;
  document.getElementById("nav-tours").textContent = translations[lang].header.tours;
  document.getElementById("nav-faq").textContent = translations[lang].header.faq;
  document.getElementById("nav-contact").textContent = translations[lang].header.contact;
  document.getElementById("nav-book-tour").textContent = translations[lang].header.book_tour;

  // Set hero translations
  document.getElementById("hero-heading-first").textContent = translations[lang].hero.heading_first;
  document.getElementById("hero-heading-second").textContent = translations[lang].hero.heading_second;
  document.getElementById("hero-description-text").textContent = translations[lang].hero.description_text;
  document.getElementById("hero-button").textContent = translations[lang].hero.button;

  // Set about translations
  document.getElementById("about-heading").textContent = translations[lang].about.about_heading;
  document.getElementById("about_paragraph").textContent = translations[lang].about.about_paragraph;

  // Set history translation
  document.getElementById("history_heading").textContent = translations[lang].history.history_heading;
  document.getElementById("history_paragraph").textContent = translations[lang].history.history_paragraph;

  // Set tour translations
  document.getElementById("tour_heading").textContent = translations[lang].tour.tour_heading;
  document.getElementById("tour_title_1").textContent = translations[lang].tour.tour_title_1;
  document.getElementById("tour_title_2").textContent = translations[lang].tour.tour_title_2;
  document.getElementById("tour_title_3").textContent = translations[lang].tour.tour_title_3;
  document.getElementById("tour_title_4").textContent = translations[lang].tour.tour_title_4;
  document.getElementById("tour_paragraph_1").textContent = translations[lang].tour.tour_paragraph_1;
  document.getElementById("tour_paragraph_2").textContent = translations[lang].tour.tour_paragraph_2;
  document.getElementById("tour_paragraph_3").textContent = translations[lang].tour.tour_paragraph_3;
  document.getElementById("tour_paragraph_4").textContent = translations[lang].tour.tour_paragraph_4;
  document.getElementById("tour_button").textContent = translations[lang].tour.tour_button;

  // Set spinner translations
  document.getElementById("spinner_heading").textContent = translations[lang].spinner.spinner_heading;
  document.getElementById("spinner_title_1").textContent = translations[lang].spinner.spinner_title_1;
  document.getElementById("spinner_title_2").textContent = translations[lang].spinner.spinner_title_2;
  document.getElementById("spinner_title_3").textContent = translations[lang].spinner.spinner_title_3;
  document.getElementById("spinner_title_4").textContent = translations[lang].spinner.spinner_title_4;
  document.getElementById("spinner_title_5").textContent = translations[lang].spinner.spinner_title_5;

  // Set FAQ translations
  document.getElementById("faq_heading").textContent = translations[lang].faq.faq_heading;
  document.getElementById("faq_question_1").textContent = translations[lang].faq.faq_question_1;
  document.getElementById("faq_question_2").textContent = translations[lang].faq.faq_question_2;
  document.getElementById("faq_question_3").textContent = translations[lang].faq.faq_question_3;
  document.getElementById("faq_question_4").textContent = translations[lang].faq.faq_question_4;
  document.getElementById("faq_question_5").textContent = translations[lang].faq.faq_question_5;
  document.getElementById("faq_question_6").textContent = translations[lang].faq.faq_question_6;
  document.getElementById("faq_question_7").textContent = translations[lang].faq.faq_question_7;
  document.getElementById("faq_question_8").textContent = translations[lang].faq.faq_question_8;
  document.getElementById("answer1").textContent = translations[lang].faq.faq_answer_1;
  document.getElementById("answer2").textContent = translations[lang].faq.faq_answer_2;
  document.getElementById("answer3").textContent = translations[lang].faq.faq_answer_3;
  document.getElementById("answer4").textContent = translations[lang].faq.faq_answer_4;
  document.getElementById("answer5").textContent = translations[lang].faq.faq_answer_5;
  document.getElementById("answer6").textContent = translations[lang].faq.faq_answer_6;
  document.getElementById("answer7").textContent = translations[lang].faq.faq_answer_7;
  document.getElementById("answer8").textContent = translations[lang].faq.faq_answer_8;

  // Set gallery translations
  document.getElementById("gallery_heading").textContent = translations[lang].gallery.heading;
  document.getElementById("gallery-button").textContent = translations[lang].gallery.button;

  // Set CTA translations
  document.getElementById("cta-heading").textContent = translations[lang].cta.heading;
  document.getElementById("cta-paragraph").textContent = translations[lang].cta.paragraph;
  document.getElementById("cta-button").textContent = translations[lang].cta.button;

  // Set footer translations
  document.getElementById("footer-home").textContent = translations[lang].footer.home;
  document.getElementById("footer-tours").textContent = translations[lang].footer.tours;
  document.getElementById("footer-about").textContent = translations[lang].footer.about;
  document.getElementById("footer-contact").textContent = translations[lang].footer.contact;

  // Set copyright translations
  document.getElementById("copyright").textContent = translations[lang].copy_right;

  // Save the selected language to localStorage
  localStorage.setItem('selectedLanguage', lang);

  // Update the dropdown to reflect the selected language
  const languageSelect = document.getElementById("language-select");
  languageSelect.value = lang;
}

function getSavedLanguage() {
  const savedLang = localStorage.getItem('selectedLanguage');
  return savedLang || getDefaultLanguage();
}

function getDefaultLanguage() {
  const lang = navigator.language || navigator.userLanguage || "en";
  return lang.split("-")[0].toLowerCase();
}

function adjustContent() {
  const lang = getSavedLanguage();
  const mediaQuery = window.matchMedia("(max-width: 480px)");

  var descriptionText = document.getElementById("description-text");

  if (mediaQuery.matches) {
    // For screens smaller than 480px, change the content
    document.getElementById("hero-description-text").innerHTML = translations[lang].hero.description_text_short;
  } else {
    // For larger screens, revert to the original content
    document.getElementById("hero-description-text").innerHTML = translations[lang].hero.description_text;
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const lang = getSavedLanguage();
  await setLanguage(lang);

  document.getElementById("language-select").addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
  });

  // Adjust content on initial load and on window resize
  adjustContent();
  window.addEventListener("resize", adjustContent);
  window.addEventListener("click", adjustContent);
  document.getElementById("language-select").addEventListener("change", adjustContent);
});
