const translations = {};
let currentLanguage = null;

document.addEventListener("DOMContentLoaded", () => {
  const languageSelect = document.getElementById("language-select");

  if (languageSelect) {
    languageSelect.addEventListener("change", (event) => {
      const selectedLanguage = event.target.value;
      if (selectedLanguage !== currentLanguage) {
        // Save the selected language to localStorage before redirecting
        localStorage.setItem('selectedLanguage', selectedLanguage);
        window.location.href = `https://dennishelavani.github.io/wadi-rum-shaar-night/${selectedLanguage}/index.html`;
        console.log( window.location.href);
      }
    });
  }
});

async function loadTranslation(lang, url_path) {
  if (translations[lang]) {
    // If the translations for the selected language are already loaded, no need to fetch again
    currentLanguage = lang;
    return;
  }

  let basePath = `/${lang}/`;

  try {
    const response = await fetch(`${url_path}/${lang}.json`);
    if (!response.ok) {
      throw new Error(`Could not load ${url_path}${lang}.json`);
    }
    const data = await response.json();
    translations[lang] = data;
    currentLanguage = lang;
  } catch (error) {
    console.error("Error loading translation:", error);
  }
}

function setTextContent(id, text) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = text;
  }
}

function setTextContentByClass(className, text) {
  const elements = document.querySelectorAll(`.${className}`);
  elements.forEach((element) => {
    element.textContent = text;
  });
}

async function setLanguage(lang, url_path) {
  await loadTranslation(lang, url_path);

  if (translations[lang]) {
    const t = translations[lang];

    // Helper function to safely set text content

    // Set header translations
    setTextContent("nav-about", translations[lang].header.about);
    setTextContent("nav-home", translations[lang].header.home);
    setTextContent("nav-tours", translations[lang].header.tours);
    setTextContent("nav-faq", translations[lang].header.faq);
    setTextContent("nav-contact", translations[lang].header.contact);
    setTextContent("nav-book-tour", translations[lang].header.book_tour);
    setTextContent("nav-subtour1", translations[lang].header.nav_subtour1);
    setTextContent("nav-subtour2", translations[lang].header.nav_subtour2);
    setTextContent("nav-subtour3", translations[lang].header.nav_subtour3);
    setTextContent("nav-subtour4", translations[lang].header.nav_subtour4);

    // Set hero translations
    setTextContent("hero-heading-first", translations[lang].hero.heading_first);
    setTextContent(
      "hero-heading-second",
      translations[lang].hero.heading_second
    );
    setTextContent(
      "hero-description-text",
      translations[lang].hero.description_text
    );
    setTextContent("hero-button", translations[lang].hero.button);

    // Set about translations
    setTextContent("about-heading", translations[lang].about.about_heading);
    setTextContent("about_paragraph", translations[lang].about.about_paragraph);

    // Set history translation
    setTextContent(
      "history_heading",
      translations[lang].history.history_heading
    );
    setTextContent(
      "history_paragraph",
      translations[lang].history.history_paragraph
    );

    // Set tour translations
    setTextContent("tour_heading", translations[lang].tour.tour_heading);
    setTextContent("tour_title_1", translations[lang].tour.tour_title_1);
    setTextContent("tour_title_2", translations[lang].tour.tour_title_2);
    setTextContent("tour_title_3", translations[lang].tour.tour_title_3);
    setTextContent("tour_title_4", translations[lang].tour.tour_title_4);
    setTextContent(
      "tour_paragraph_1",
      translations[lang].tour.tour_paragraph_1
    );
    setTextContent(
      "tour_paragraph_2",
      translations[lang].tour.tour_paragraph_2
    );
    setTextContent(
      "tour_paragraph_3",
      translations[lang].tour.tour_paragraph_3
    );
    setTextContent(
      "tour_paragraph_4",
      translations[lang].tour.tour_paragraph_4
    );
    setTextContentByClass("tour_button", translations[lang].tour.tour_button);

    // Set spinner translations
    setTextContent(
      "spinner_heading",
      translations[lang].spinner.spinner_heading
    );
    setTextContent(
      "spinner_title_1",
      translations[lang].spinner.spinner_title_1
    );
    setTextContent(
      "spinner_title_2",
      translations[lang].spinner.spinner_title_2
    );
    setTextContent(
      "spinner_title_3",
      translations[lang].spinner.spinner_title_3
    );
    setTextContent(
      "spinner_title_4",
      translations[lang].spinner.spinner_title_4
    );
    setTextContent(
      "spinner_title_5",
      translations[lang].spinner.spinner_title_5
    );

    // Set FAQ translations
    setTextContent("faq_heading", translations[lang].faq.faq_heading);
    setTextContent("faq_question_1", translations[lang].faq.faq_question_1);
    setTextContent("faq_question_2", translations[lang].faq.faq_question_2);
    setTextContent("faq_question_3", translations[lang].faq.faq_question_3);
    setTextContent("faq_question_4", translations[lang].faq.faq_question_4);
    setTextContent("faq_question_5", translations[lang].faq.faq_question_5);
    setTextContent("faq_question_6", translations[lang].faq.faq_question_6);
    setTextContent("faq_question_7", translations[lang].faq.faq_question_7);
    setTextContent("faq_question_8", translations[lang].faq.faq_question_8);
    setTextContent("answer1", translations[lang].faq.faq_answer_1);
    setTextContent("answer2", translations[lang].faq.faq_answer_2);
    setTextContent("answer3", translations[lang].faq.faq_answer_3);
    setTextContent("answer4", translations[lang].faq.faq_answer_4);
    setTextContent("answer5", translations[lang].faq.faq_answer_5);
    setTextContent("answer6", translations[lang].faq.faq_answer_6);
    setTextContent("answer7", translations[lang].faq.faq_answer_7);
    setTextContent("answer8", translations[lang].faq.faq_answer_8);

    // Set gallery translations
    setTextContent("gallery_heading", translations[lang].gallery.heading);
    setTextContent("gallery-button", translations[lang].gallery.button);

    // Set CTA translations
    setTextContent("cta-heading", translations[lang].cta.heading);
    setTextContent("cta-paragraph", translations[lang].cta.paragraph);
    setTextContent("cta-button", translations[lang].cta.button);

    // Set footer translations
    setTextContent("footer-home", translations[lang].footer.home);
    setTextContent("footer-tours", translations[lang].footer.tours);
    setTextContent("footer-about", translations[lang].footer.about);
    setTextContent("footer-contact", translations[lang].footer.contact);
    setTextContent("footer-book", translations[lang].footer.book);
    setTextContent("footer-faq", translations[lang].footer.faq);

    setTextContent(
      "contact-page-heading",
      translations[lang].contact_page.header
    );
    setTextContent(
      "contact-page-paragraph",
      translations[lang].contact_page.paragraph
    );
    setTextContent(
      "contact-page-website",
      translations[lang].contact_page.website
    );
    setTextContent(
      "contact-page-address",
      translations[lang].contact_page.address
    );
    setTextContent(
      "contact-page-question",
      translations[lang].contact_page.question
    );
    setTextContent("submit", translations[lang].contact_page.submit);
    setTextContent(
      "contact-page-full-name",
      translations[lang].contact_page.full_name
    );
    setTextContent(
      "contact-page-email-address-form",
      translations[lang].contact_page.email_adress
    );
    setTextContent(
      "contact-page-email-address",
      translations[lang].contact_page.email
    );
    setTextContent(
      "contact-page-message",
      translations[lang].contact_page.message
    );
    setTextContent("contact-page-phone", translations[lang].contact_page.phone);

    setTextContent(
      "booking-page-heading",
      translations[lang].booking_page.heading
    );
    setTextContent(
      "booking-page-paragraph",
      translations[lang].booking_page.paragraph
    );

    setTextContent("booking-page-cta", translations[lang].booking_page.cta);
    setTextContent(
      "booking-page-tour-type-heading",
      translations[lang].booking_page.tour_type_heading
    );
    setTextContent("tour_type_1", translations[lang].booking_page.tour_type_1);
    setTextContent("tour_type_2", translations[lang].booking_page.tour_type_2);
    setTextContent("tour_type_3", translations[lang].booking_page.tour_type_3);
    setTextContent("tour_type_4", translations[lang].booking_page.tour_type_4);
    setTextContent(
      "sub-tour-heading",
      translations[lang].booking_page.sub_tour_heading
    );
    setTextContent(
      "sub-tour-placeholder",
      translations[lang].booking_page.sub_tour_placeholder
    );
    setTextContent(
      "booking-page-number-people",
      translations[lang].booking_page.num_people
    );
    setTextContent(
      "booking-page-check-in",
      translations[lang].booking_page.check_in
    );
    setTextContent(
      "booking-page-comments",
      translations[lang].booking_page.comments
    );
    setTextContent("book", translations[lang].booking_page.booking_button);

    setTextContent("all-tours-heading", translations[lang].all_tours.heading),
      setTextContent(
        "all-tours-paragraph",
        translations[lang].all_tours.paragraph
      ),
      setTextContent("all-tours-h2-1", translations[lang].all_tours.h2_1),
      setTextContent("all-tours-h2-2", translations[lang].all_tours.h2_2),
      setTextContent("all-tours-h2-3", translations[lang].all_tours.h2_3),
      setTextContent("all-tours-h2-4", translations[lang].all_tours.h2_4),
      setTextContentByClass("btn", translations[lang].all_tours.btn),
      setTextContent("all_tours_title_1", translations[lang].all_tours.h3_1),
      setTextContent("all_tours_title_2", translations[lang].all_tours.h3_2),
      setTextContent("all_tours_title_3", translations[lang].all_tours.h3_3),
      setTextContent("all_tours_title_4", translations[lang].all_tours.h3_4),
      setTextContent("all_tours_title_5", translations[lang].all_tours.h3_5),
      setTextContent("all_tours_title_6", translations[lang].all_tours.h3_6),
      setTextContent("all_tours_title_7", translations[lang].all_tours.h3_7),
      setTextContent("all_tours_title_8", translations[lang].all_tours.h3_8),
      setTextContent("all_tours_title_9", translations[lang].all_tours.h3_9),
      setTextContent("all_tours_title_10", translations[lang].all_tours.h3_10),
      setTextContent("all_tours_title_11", translations[lang].all_tours.h3_11),
      setTextContent("all_tours_title_12", translations[lang].all_tours.h3_12),
      setTextContent(
        "all_tours_parahraph_1",
        translations[lang].all_tours.tour_paragraph_1
      ),
      setTextContent(
        "all_tours_parahraph_2",
        translations[lang].all_tours.tour_paragraph_2
      ),
      setTextContent(
        "all_tours_parahraph_3",
        translations[lang].all_tours.tour_paragraph_3
      ),
      setTextContent(
        "all_tours_parahraph_4",
        translations[lang].all_tours.tour_paragraph_4
      ),
      setTextContent(
        "all_tours_parahraph_5",
        translations[lang].all_tours.tour_paragraph_5
      ),
      setTextContent(
        "all_tours_parahraph_6",
        translations[lang].all_tours.tour_paragraph_6
      ),
      setTextContent(
        "all_tours_parahraph_7",
        translations[lang].all_tours.tour_paragraph_7
      ),
      setTextContent(
        "all_tours_parahraph_8",
        translations[lang].all_tours.tour_paragraph_8
      ),
      setTextContent(
        "all_tours_parahraph_9",
        translations[lang].all_tours.tour_paragraph_9
      ),
      setTextContent(
        "all_tours_parahraph_10",
        translations[lang].all_tours.tour_paragraph_10
      ),
      setTextContent(
        "all_tours_parahraph_11",
        translations[lang].all_tours.tour_paragraph_11
      ),
      setTextContent(
        "all_tours_parahraph_12",
        translations[lang].all_tours.tour_paragraph_12
      ),
      setTextContent(
        "1day-tour-page-heading",
        translations[lang].one_day_tours.heading
      ),
      setTextContent(
        "1day-tours-page-paragraph",
        translations[lang].one_day_tours.paragraph
      ),
      setTextContent(
        "tour_general_tour_1",
        translations[lang].one_day_tours.tour_1
      ),
      setTextContent(
        "tour_general_tour_2",
        translations[lang].one_day_tours.tour_2
      ),
      setTextContent(
        "tour_general_tour_3",
        translations[lang].one_day_tours.tour_3
      ),
      setTextContent(
        "tour_general_tour_4",
        translations[lang].one_day_tours.tour_4
      ),
      setTextContent("tour_tour_1", translations[lang].one_day_tours.tour_1),
      setTextContent("tour_tour_2", translations[lang].one_day_tours.tour_2),
      setTextContent("tour_tour_3", translations[lang].one_day_tours.tour_3),
      setTextContent("tour_tour_4", translations[lang].one_day_tours.tour_4),
      setTextContentByClass(
        "list_price_header",
        translations[lang].one_day_tours.list_price_header
      ),
      setTextContentByClass(
        "list_price_included",
        translations[lang].one_day_tours.list_price_included
      ),
      setTextContentByClass(
        "list_visit_header",
        translations[lang].one_day_tours.list_visit_header
      ),
      setTextContentByClass(
        "list_highlight_header",
        translations[lang].one_day_one_night_tours.list_highlight_header
      ),
      setTextContent(
        "one_day_tour_paragraph_1",
        translations[lang].one_day_tours.tour_parahraph_1
      ),
      setTextContent(
        "one_day_tour_paragraph_2",
        translations[lang].one_day_tours.tour_parahraph_2
      ),
      setTextContent(
        "one_day_tour_paragraph_3",
        translations[lang].one_day_tours.tour_parahraph_3
      ),
      setTextContent(
        "one_day_tour_paragraph_4",
        translations[lang].one_day_tours.tour_parahraph_4
      ),
      setTextContentByClass(
        "book-button",
        translations[lang].one_day_tours.book_tour
      ),
      setTextContentByClass(
        "included_tea",
        translations[lang].one_day_tours.included_tea
      ),
      setTextContentByClass(
        "included_water",
        translations[lang].one_day_tours.included_water
      ),
      setTextContentByClass(
        "included_lunch",
        translations[lang].one_day_tours.included_lunch
      ),
      setTextContentByClass(
        "included_dinner",
        translations[lang].one_day_tours.included_dinner
      ),
      setTextContentByClass(
        "included_breakfast",
        translations[lang].one_day_tours.included_breakfast
      ),
      setTextContentByClass(
        "included_sunset",
        translations[lang].one_day_tours.included_sunset
      ),
      setTextContentByClass(
        "included_south_desert",
        translations[lang].one_day_tours.included_south_desert
      ),
      setTextContent(
        "one_day_tour_price_1",
        translations[lang].one_day_tours.price_1
      ),
      setTextContent(
        "one_day_tour_price_2",
        translations[lang].one_day_tours.price_2
      ),
      setTextContent(
        "one_day_tour_price_3",
        translations[lang].one_day_tours.price_3
      ),
      setTextContent(
        "one_day_tour_price_4",
        translations[lang].one_day_tours.price_4
      ),
      setTextContent(
        "one_day_tour_price_5",
        translations[lang].one_day_tours.price_5
      ),
      setTextContent(
        "one_day_tour_price_6",
        translations[lang].one_day_tours.price_6
      ),
      setTextContent(
        "one_day_tour_price_7",
        translations[lang].one_day_tours.price_7
      ),
      setTextContent(
        "one_day_tour_price_8",
        translations[lang].one_day_tours.price_8
      ),
      setTextContent(
        "one_day_tour_price_9",
        translations[lang].one_day_tours.price_9
      ),
      setTextContent(
        "one_day_tour_price_10",
        translations[lang].one_day_tours.price_10
      ),
      setTextContent(
        "one_day_one_night_tour_price_1",
        translations[lang].one_day_one_night_tours.price_1
      ),
      setTextContent(
        "one_day_one_night_tour_price_2",
        translations[lang].one_day_one_night_tours.price_2
      ),
      setTextContent(
        "one_day_one_night_tour_price_3",
        translations[lang].one_day_one_night_tours.price_3
      ),
      // setTextContent("one_day_one_night_tour_price_4",translations[lang].one_day_one_night_tours.price_4),
      setTextContent(
        "one_day_one_night_tour_price_5",
        translations[lang].one_day_one_night_tours.price_5
      ),
      setTextContent(
        "one_day_one_night_tour_price_6",
        translations[lang].one_day_one_night_tours.price_6
      ),
      setTextContent(
        "one_day_one_night_tour_price_7",
        translations[lang].one_day_one_night_tours.price_7
      ),
      // setTextContent("one_day_one_night_tour_price_8",translations[lang].one_day_one_night_tours.price_8),
      setTextContent(
        "one_day_one_night_tour_price_9",
        translations[lang].one_day_one_night_tours.price_9
      ),
      setTextContent(
        "one_day_one_night_tour_price_10",
        translations[lang].one_day_one_night_tours.price_10
      ),
      setTextContent(
        "one_day_one_night_tour_price_11",
        translations[lang].one_day_one_night_tours.price_11
      ),
      // setTextContent("one_day_one_night_tour_price_12",translations[lang].one_day_one_night_tours.price_12),

      setTextContentByClass(
        "visit_khor",
        translations[lang].one_day_tours.visit_khor
      ),
      setTextContentByClass(
        "visit_ain_abu",
        translations[lang].one_day_tours.visit_ain_abu
      ),
      setTextContentByClass(
        "visit_wadi_khazali",
        translations[lang].one_day_tours.visit_wadi_khazali
      ),
      setTextContentByClass(
        "visit_red_sand",
        translations[lang].one_day_tours.visit_red_sand
      ),
      setTextContentByClass(
        "visit_little_rock",
        translations[lang].one_day_tours.visit_little_rock
      ),
      setTextContentByClass(
        "visit_anfishieyh",
        translations[lang].one_day_tours.visit_anfishieyh
      ),
      setTextContentByClass(
        "visit_umm_bridge",
        translations[lang].one_day_tours.visit_umm_bridge
      ),
      setTextContentByClass(
        "visit_geber_amra",
        translations[lang].one_day_tours.visit_geber_amra
      ),
      setTextContentByClass(
        "visit_burda_rock",
        translations[lang].one_day_tours.visit_burda_rock
      ),
      setTextContentByClass(
        "visit_khashaba",
        translations[lang].one_day_tours.visit_khashaba
      ),
      setTextContentByClass(
        "visit_wadi_rum_landscape",
        translations[lang].one_day_tours.visit_wadi_rum_landscape
      ),
      setTextContentByClass(
        "visit_jebel_al_hash",
        translations[lang].one_day_tours.visit_jebel_al_hash
      ),
      setTextContent(
        "gallery_heading_1",
        translations[lang].one_day_tours.gallery_heading
      ),
      setTextContent(
        "gallery_heading_2",
        translations[lang].one_day_tours.gallery_heading
      ),
      setTextContent(
        "gallery_heading_3",
        translations[lang].one_day_tours.gallery_heading
      ),
      setTextContent(
        "1day-1night-tour-page-heading",
        translations[lang].one_day_one_night_tours.heading
      ),
      setTextContent(
        "one_day_one_night_h1",
        translations[lang].one_day_one_night_tours.highlight_1
      ),
      setTextContent(
        "one_day_one_night_h2",
        translations[lang].one_day_one_night_tours.highlight_2
      ),
      setTextContent(
        "one_day_one_night_h3",
        translations[lang].one_day_one_night_tours.highlight_3
      ),
      setTextContent(
        "one_day_one_night_h4",
        translations[lang].one_day_one_night_tours.highlight_4
      ),
      setTextContent(
        "one_day_one_night_h5",
        translations[lang].one_day_one_night_tours.highlight_5
      ),
      setTextContent(
        "one_day_one_night_h6",
        translations[lang].one_day_one_night_tours.highlight_6
      ),
      setTextContent(
        "one_day_one_night_h7",
        translations[lang].one_day_one_night_tours.highlight_7
      ),
      setTextContent(
        "one_day_one_night_h8",
        translations[lang].one_day_one_night_tours.highlight_8
      ),
      setTextContent(
        "one_day_one_night_h9",
        translations[lang].one_day_one_night_tours.highlight_9
      ),
      setTextContent(
        "one_day_one_night_h10",
        translations[lang].one_day_one_night_tours.highlight_10
      ),
      setTextContent(
        "one_day_one_night_h11",
        translations[lang].one_day_one_night_tours.highlight_11
      ),
      setTextContent(
        "one_day_one_night_h12",
        translations[lang].one_day_one_night_tours.highlight_12
      ),
      setTextContent(
        "one_day_one_night_h13",
        translations[lang].one_day_one_night_tours.highlight_13
      ),
      setTextContent(
        "one_day_one_night_h14",
        translations[lang].one_day_one_night_tours.highlight_14
      ),
      setTextContent(
        "one_d_one_n_description_one",
        translations[lang].one_day_one_night_tours.description_tour_1
      ),
      setTextContent(
        "one_d_one_n_description_two",
        translations[lang].one_day_one_night_tours.description_tour_2
      ),
      setTextContent(
        "one_d_one_n_description_three",
        translations[lang].one_day_one_night_tours.description_tour_3
      ),
      setTextContent(
        "hike_general_hike_1",
        translations[lang].hiking.hike_hike_1
      ),
      setTextContent(
        "hike_general_hike_2",
        translations[lang].hiking.hike_hike_2
      ),
      setTextContent(
        "hike_general_hike_3",
        translations[lang].hiking.hike_hike_3
      ),
      setTextContent("hh_1", translations[lang].hiking.hike_hike_1),
      setTextContent("hh_2", translations[lang].hiking.hike_hike_2),
      setTextContent("hh_3", translations[lang].hiking.hike_hike_3),
      setTextContent("hike_title_1", translations[lang].all_tours.h3_5),
      setTextContent("hike_title_2", translations[lang].all_tours.h3_6),
      setTextContent("hike_title_3", translations[lang].all_tours.h3_7),
      setTextContentByClass(
        "hiking-duration",
        translations[lang].hiking.duration
      ),
      setTextContentByClass("hiking-price", translations[lang].hiking.price),
      setTextContent(
        "hh_descption_one",
        translations[lang].hiking.description_tour_1
      ),
      setTextContent(
        "hh_descption_two",
        translations[lang].hiking.description_tour_2
      ),
      setTextContent(
        "hh_descption_three",
        translations[lang].hiking.description_tour_3
      ),
      setTextContent(
        "hiking-tour-page-heading",
        translations[lang].hiking.header
      ),
      setTextContent(
        "hiking-tour-page-paragraph",
        translations[lang].hiking.paragraph
      ),
      setTextContent(
        "hiking_gallery_heading_1",
        translations[lang].hiking.gallery
      ),
      setTextContent(
        "hiking_gallery_heading_2",
        translations[lang].hiking.gallery
      ),
      setTextContent(
        "hiking_gallery_heading_3",
        translations[lang].hiking.gallery
      ),
      setTextContentByClass(
        "included_lunch_two",
        translations[lang].two_nights_tours.included_lunch_two
      ),
      setTextContent(
        "two_nights_gallery_heading_1",
        translations[lang].two_nights_tours.gallery
      ),
      setTextContent(
        "two_nights_gallery_heading_2",
        translations[lang].two_nights_tours.gallery
      ),
      setTextContent(
        "2nights-tour-page-heading",
        translations[lang].two_nights_tours.heading
      ),
      setTextContent(
        "2night-paragraph",
        translations[lang].two_nights_tours.paragraph
      ),
      setTextContent(
        "two_n_tour_one",
        translations[lang].two_nights_tours.tour_1
      ),
      setTextContent(
        "two_n_tour_two",
        translations[lang].two_nights_tours.tour_2
      ),
      setTextContent(
        "two_n_tour_tour_one",
        translations[lang].two_nights_tours.tour_1
      ),
      setTextContent(
        "two_n_tour_tour_two",
        translations[lang].two_nights_tours.tour_2
      ),
      setTextContent(
        "two_n_description_one",
        translations[lang].two_nights_tours.description_tour_1
      ),
      setTextContent(
        "two_n_description_two",
        translations[lang].two_nights_tours.description_tour_2
      ),
      setTextContentByClass(
        "included_camping_starts",
        translations[lang].two_nights_tours.included_camping_starts
      ),
      setTextContent(
        "highlight_1",
        translations[lang].two_nights_tours.highlight_1
      ),
      setTextContent(
        "highlight_2",
        translations[lang].two_nights_tours.highlight_2
      ),
      setTextContent(
        "highlight_3",
        translations[lang].two_nights_tours.highlight_3
      ),
      setTextContent(
        "highlight_4",
        translations[lang].two_nights_tours.highlight_4
      ),
      setTextContent(
        "highlight_5",
        translations[lang].two_nights_tours.highlight_5
      ),
      setTextContent(
        "highlight_6",
        translations[lang].two_nights_tours.highlight_6
      ),
      setTextContent(
        "highlight_7",
        translations[lang].two_nights_tours.highlight_7
      ),
      setTextContent(
        "highlight_8",
        translations[lang].two_nights_tours.highlight_8
      ),
      setTextContent(
        "highlight_9",
        translations[lang].two_nights_tours.highlight_9
      ),
      setTextContent(
        "highlight_10",
        translations[lang].two_nights_tours.highlight_10
      ),
      setTextContent(
        "two_n_price_1",
        translations[lang].two_nights_tours.price_1
      ),
      setTextContent(
        "two_n_price_2",
        translations[lang].two_nights_tours.price_2
      ),
      setTextContent(
        "two_n_price_3",
        translations[lang].two_nights_tours.price_3
      ),
      // setTextContent("two_n_price_4",translations[lang].two_nights_tours.price_4),
      setTextContent(
        "two_n_price_5",
        translations[lang].two_nights_tours.price_5
      ),
      setTextContent(
        "two_n_price_6",
        translations[lang].two_nights_tours.price_6
      ),
      setTextContent(
        "two_n_price_7",
        translations[lang].two_nights_tours.price_7
      ),
      // setTextContent("two_n_price_8",translations[lang].two_nights_tours.price_8)

      localStorage.setItem("selectedLanguage", lang);

    // Update the dropdown to reflect the selected language
    const languageSelect = document.getElementById("language-select");
    if (languageSelect) {
      languageSelect.value = lang;
    }
  }
}

function getSavedLanguage() {
  const savedLang = localStorage.getItem("selectedLanguage");
  return savedLang || getDefaultLanguage();
}

function getDefaultLanguage() {
  const lang = navigator.language || navigator.userLanguage || "en";
  return lang.split("-")[0].toLowerCase();
}

function adjustContent() {
  const lang = getSavedLanguage();
  if (!translations[lang]) {
    return;
  }

  const mediaQuery = window.matchMedia("(max-width: 480px)");
  if (mediaQuery.matches) {
    setTextContent(
      "hero-description-text",
      translations[lang].hero.description_text_short
    );
  } else {
    setTextContent(
      "hero-description-text",
      translations[lang].hero.description_text
    );
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  // Get the current URL path
  const currentPath = window.location.pathname;

  // Extract the language part from the path (e.g., 'en' from '/wadi-rum-shaar-night/en/index.html')
  const langFromPath = currentPath.split('/')[2];
  
  // Determine the language from the path or fallback to saved language
  const lang = langFromPath || getSavedLanguage();
  
  // Store the full URL up to and including the language directory
  const url_path = window.location.origin + currentPath.substring(0, currentPath.indexOf(langFromPath) + langFromPath.length);

  // Call setLanguage with the determined language
  await setLanguage(lang, url_path);

  // Adjust content on initial load and on window resize
  adjustContent();
  
  // Re-adjust content on resize and click events
  window.addEventListener("resize", adjustContent);
  window.addEventListener("click", adjustContent);

  console.log(url_path); // For debugging, this will output the constructed URL path
});

