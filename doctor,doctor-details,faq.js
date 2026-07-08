"use strict";

/* =====================================
   Mobile Main Navigation
===================================== */

const menuButton = document.querySelector(".list_1");
const navBar = document.querySelector(".nav-bar");
const mainMobileMenu = document.getElementById("main_ul");

function updateNavigationHeight() {
  if (!navBar || !navBar.classList.contains("open_2")) return;
  navBar.style.height = `${navBar.scrollHeight}px`;
}

function openMainNavigation() {
  if (!menuButton || !navBar) return;
  menuButton.classList.add("active");
  navBar.classList.add("open_2");
  menuButton.setAttribute("aria-expanded", "true");
  navBar.style.height = `${navBar.scrollHeight}px`;
}

function closeMainNavigation() {
  if (!menuButton || !navBar) return;
  menuButton.classList.remove("active");
  navBar.classList.remove("open_2");
  menuButton.setAttribute("aria-expanded", "false");
  navBar.style.height = "0px";
}

function toggleMainNavigation() {
  if (!menuButton || !navBar) return;
  navBar.classList.contains("open_2") ? closeMainNavigation() : openMainNavigation();
}

if (menuButton && navBar) {
  menuButton.addEventListener("click", toggleMainNavigation);
  menuButton.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleMainNavigation(); }
  });
}

/* =====================================
   Mobile Dropdown Menus
===================================== */

const mobileMenuItems = document.querySelectorAll("#main_ul > .has-menu");

function closeMobileSubmenu(menuItem) {
  const submenu = menuItem.querySelector(".menu_2");
  const menuHeader = menuItem.querySelector(".head-menu");
  const icon = menuItem.querySelector(".head-menu i");
  if (submenu) { submenu.classList.remove("open"); submenu.style.height = "0px"; }
  if (menuHeader) menuHeader.setAttribute("aria-expanded", "false");
  if (icon) { icon.classList.remove("fa-minus"); icon.classList.add("fa-plus"); }
}

function openMobileSubmenu(menuItem) {
  const submenu = menuItem.querySelector(".menu_2");
  const menuHeader = menuItem.querySelector(".head-menu");
  const icon = menuItem.querySelector(".head-menu i");
  if (!submenu || !menuHeader) return;
  submenu.classList.add("open");
  submenu.style.height = `${submenu.scrollHeight}px`;
  menuHeader.setAttribute("aria-expanded", "true");
  if (icon) { icon.classList.remove("fa-plus"); icon.classList.add("fa-minus"); }
}

function toggleMobileSubmenu(menuItem) {
  const submenu = menuItem.querySelector(".menu_2");
  if (!submenu) return;
  const isOpen = submenu.classList.contains("open");
  mobileMenuItems.forEach((other) => { if (other !== menuItem) closeMobileSubmenu(other); });
  isOpen ? closeMobileSubmenu(menuItem) : openMobileSubmenu(menuItem);
  requestAnimationFrame(updateNavigationHeight);
}

mobileMenuItems.forEach((menuItem) => {
  const menuHeader = menuItem.querySelector(".head-menu");
  if (!menuHeader) return;
  menuHeader.addEventListener("click", (e) => { e.preventDefault(); toggleMobileSubmenu(menuItem); });
  menuHeader.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleMobileSubmenu(menuItem); }
  });
});

/* =====================================
   Close Mobile Menu After Navigation
===================================== */

if (mainMobileMenu) {
  const mobileLinks = mainMobileMenu.querySelectorAll(".no-menu > a, .menu_2 a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth > 991) return;
      closeMainNavigation();
      mobileMenuItems.forEach((menuItem) => closeMobileSubmenu(menuItem));
    });
  });
}

/* =====================================
   Close Mobile Menu From Outside
===================================== */

document.addEventListener("click", (e) => {
  if (!menuButton || !navBar || window.innerWidth > 991 || !navBar.classList.contains("open_2")) return;
  if (!navBar.contains(e.target) && !menuButton.contains(e.target)) {
    closeMainNavigation();
    mobileMenuItems.forEach((menuItem) => closeMobileSubmenu(menuItem));
  }
});

/* =====================================
   Window Resize
===================================== */

window.addEventListener("resize", () => {
  if (!menuButton || !navBar) return;
  if (window.innerWidth > 991) {
    navBar.style.height = "";
    navBar.classList.remove("open_2");
    menuButton.classList.remove("active");
    menuButton.setAttribute("aria-expanded", "false");
    mobileMenuItems.forEach((menuItem) => closeMobileSubmenu(menuItem));
    return;
  }
  updateNavigationHeight();
});

/* =====================================
   Escape Key
===================================== */

document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  if (navBar && navBar.classList.contains("open_2")) {
    closeMainNavigation();
    mobileMenuItems.forEach((menuItem) => closeMobileSubmenu(menuItem));
  }
});

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

/* =====================================
   Doctor Search + Filter
===================================== */

const searchInput = document.getElementById("doctorSearch");
const categorySelect = document.getElementById("doctorCategory");
const doctorCards = document.querySelectorAll(".doctor-card");

function filterDoctors() {
  const query = searchInput ? searchInput.value.toLowerCase() : "";
  const category = categorySelect ? categorySelect.value.toLowerCase() : "";

  doctorCards.forEach((card) => {
    const name = card.querySelector("h3")?.textContent.toLowerCase() || "";
    const spec = card.querySelector(".doctor-card-body p")?.textContent.toLowerCase() || "";

    const matchesSearch = !query || name.includes(query) || spec.includes(query);
    const matchesCategory = !category || spec.includes(category);

    card.style.display = matchesSearch && matchesCategory ? "" : "none";
  });
}

if (searchInput) searchInput.addEventListener("input", filterDoctors);
if (categorySelect) categorySelect.addEventListener("change", filterDoctors);
