"use strict";
/* =====================================
   FAQ Accordion
===================================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  if (!question) return;

  question.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");

    // Close all
    faqItems.forEach((other) => other.classList.remove("open"));

    // Toggle current
    if (!isOpen) item.classList.add("open");
  });
});
