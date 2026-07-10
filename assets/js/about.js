"use strict";

(() => {
  /* =====================================
     Statistics Counters
  ===================================== */

  const counters = document.querySelectorAll(".counter");
  const statisticsSection = document.querySelector(".hospital-statistics");

  let countersStarted = false;

  function animateCounter(counter) {
    const target = Number(counter.dataset.target);

    if (!Number.isFinite(target)) {
      counter.textContent = "0";
      return;
    }

    counter.textContent = "0";

    const duration = 1800;
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      /* Smooth ease-out animation */

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const currentValue = Math.floor(target * easedProgress);

      counter.textContent = currentValue.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target.toLocaleString();
      }
    }

    requestAnimationFrame(updateCounter);
  }

  function startCounters() {
    if (countersStarted || counters.length === 0) {
      return;
    }

    countersStarted = true;

    counters.forEach((counter) => {
      animateCounter(counter);
    });
  }

  if (statisticsSection && counters.length > 0) {
    if ("IntersectionObserver" in window) {
      const statisticsObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            startCounters();
            observer.unobserve(entry.target);
          });
        },
        {
          threshold: 0.25,
        },
      );

      statisticsObserver.observe(statisticsSection);
    } else {
      startCounters();
    }
  }

  /* =====================================
     Testimonials Slider
  ===================================== */

  const testimonials = [
    {
      name: "John Mic",
      image: "assets/images/about_patient1.png",
      text: "The doctors and nurses were professional, supportive, and attentive throughout my treatment. I felt safe and well cared for during every visit.",
    },
    {
      name: "Jac Wilson",
      image: "assets/images/about_patient2.png",
      text: "Mediserv Hospital provided excellent medical support. The staff explained every step clearly and made my entire experience comfortable.",
    },
    {
      name: "David Mark",
      image: "assets/images/about_patient3.png",
      text: "I received fast and reliable care from a highly experienced medical team. I truly appreciate their professionalism and kindness.",
    },
  ];

  const testimonialContent = document.querySelector(".testimonial-content");

  const testimonialImage = document.getElementById("testimonialImage");

  const testimonialName = document.getElementById("testimonialName");

  const testimonialText = document.getElementById("testimonialText");

  const previousButton = document.getElementById("previousTestimonial");

  const nextButton = document.getElementById("nextTestimonial");

  let currentTestimonialIndex = 0;
  let testimonialInterval = null;
  let testimonialTimeout = null;

  function testimonialElementsExist() {
    return Boolean(
      testimonialContent &&
      testimonialImage &&
      testimonialName &&
      testimonialText,
    );
  }

  function displayTestimonial(index) {
    if (!testimonialElementsExist()) {
      return;
    }

    const testimonial = testimonials[index];

    if (!testimonial) {
      return;
    }

    if (testimonialTimeout) {
      clearTimeout(testimonialTimeout);
    }

    testimonialContent.classList.add("changing");

    testimonialTimeout = setTimeout(() => {
      testimonialImage.src = testimonial.image;

      testimonialImage.alt = testimonial.name;

      testimonialName.textContent = testimonial.name;

      testimonialText.textContent = testimonial.text;

      testimonialContent.classList.remove("changing");

      testimonialTimeout = null;
    }, 250);
  }

  function showNextTestimonial() {
    currentTestimonialIndex =
      (currentTestimonialIndex + 1) % testimonials.length;

    displayTestimonial(currentTestimonialIndex);
  }

  function showPreviousTestimonial() {
    currentTestimonialIndex =
      (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;

    displayTestimonial(currentTestimonialIndex);
  }

  function stopAutoPlay() {
    if (!testimonialInterval) {
      return;
    }

    clearInterval(testimonialInterval);
    testimonialInterval = null;
  }

  function startAutoPlay() {
    if (!testimonialElementsExist() || testimonials.length < 2) {
      return;
    }

    stopAutoPlay();

    testimonialInterval = setInterval(showNextTestimonial, 5000);
  }

  function restartAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
  }

  if (testimonialElementsExist()) {
    displayTestimonial(currentTestimonialIndex);

    startAutoPlay();
  }

  nextButton?.addEventListener("click", () => {
    showNextTestimonial();
    restartAutoPlay();
  });

  previousButton?.addEventListener("click", () => {
    showPreviousTestimonial();
    restartAutoPlay();
  });

  /* Pause only while browser tab is hidden */

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopAutoPlay();
    } else {
      startAutoPlay();
    }
  });

  /* =====================================
     Back To Top
  ===================================== */

  const backToTopButton = document.getElementById("backToTop");

  function updateBackToTopButton() {
    if (!backToTopButton) {
      return;
    }

    backToTopButton.classList.toggle("show", window.scrollY > 500);
  }

  if (backToTopButton) {
    updateBackToTopButton();

    window.addEventListener("scroll", updateBackToTopButton, {
      passive: true,
    });

    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  /* =====================================
     Theme Toggle
  ===================================== */

  const themeToggleButton = document.getElementById("themeToggle");

  const themeStorageKey = "mediserv-theme";

  function getSavedTheme() {
    try {
      return localStorage.getItem(themeStorageKey);
    } catch (error) {
      return null;
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(themeStorageKey, theme);
    } catch (error) {
      /* Storage may be unavailable */
    }
  }

  function updateThemeIcon(isDark) {
    if (!themeToggleButton) {
      return;
    }

    const icon = themeToggleButton.querySelector("i");

    if (!icon) {
      return;
    }

    icon.classList.toggle("fa-sun", !isDark);

    icon.classList.toggle("fa-moon", isDark);

    themeToggleButton.setAttribute("aria-pressed", String(isDark));

    themeToggleButton.setAttribute(
      "aria-label",
      isDark ? "Activate light mode" : "Activate dark mode",
    );
  }

  function applyTheme(theme) {
    const isDark = theme === "dark";

    document.body.classList.toggle("dark-mode", isDark);

    updateThemeIcon(isDark);
  }

  const savedTheme = getSavedTheme();

  applyTheme(savedTheme === "dark" ? "dark" : "light");

  themeToggleButton?.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark-mode");

    const newTheme = isDark ? "light" : "dark";

    applyTheme(newTheme);
    saveTheme(newTheme);
  });

  /* =====================================
     Newsletter Form
  ===================================== */

  const newsletterForm = document.querySelector(".newsletter-form");

  newsletterForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!newsletterForm.checkValidity()) {
      newsletterForm.reportValidity();
      return;
    }

    alert("Thank you for subscribing to our newsletter.");

    newsletterForm.reset();
  });

  /* =====================================
     Feedback Form
  ===================================== */

  const feedbackForm = document.querySelector(".feedback-form");

  feedbackForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!feedbackForm.checkValidity()) {
      feedbackForm.reportValidity();
      return;
    }

    alert("Thank you. Your feedback has been submitted.");

    feedbackForm.reset();
  });

  /* =====================================
     Cleanup
  ===================================== */

  window.addEventListener("beforeunload", () => {
    stopAutoPlay();

    if (testimonialTimeout) {
      clearTimeout(testimonialTimeout);
    }
  });
})();
