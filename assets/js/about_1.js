"use strict";

/* =====================================
   Mobile Main Navigation
===================================== */

const menuButton = document.querySelector(".list_1");
const navBar = document.querySelector(".nav-bar");
const mainMobileMenu = document.getElementById("main_ul");

function updateNavigationHeight() {
  if (!navBar || !navBar.classList.contains("open_2")) {
    return;
  }

  navBar.style.height = `${navBar.scrollHeight}px`;
}

function openMainNavigation() {
  if (!menuButton || !navBar) {
    return;
  }

  menuButton.classList.add("active");
  navBar.classList.add("open_2");

  menuButton.setAttribute("aria-expanded", "true");

  navBar.style.height = `${navBar.scrollHeight}px`;
}

function closeMainNavigation() {
  if (!menuButton || !navBar) {
    return;
  }

  menuButton.classList.remove("active");
  navBar.classList.remove("open_2");

  menuButton.setAttribute("aria-expanded", "false");

  navBar.style.height = "0px";
}

function toggleMainNavigation() {
  if (!menuButton || !navBar) {
    return;
  }

  const isOpen = navBar.classList.contains("open_2");

  if (isOpen) {
    closeMainNavigation();
  } else {
    openMainNavigation();
  }
}

if (menuButton && navBar) {
  menuButton.addEventListener("click", toggleMainNavigation);

  menuButton.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleMainNavigation();
    }
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

  if (submenu) {
    submenu.classList.remove("open");
    submenu.style.height = "0px";
  }

  if (menuHeader) {
    menuHeader.setAttribute("aria-expanded", "false");
  }

  if (icon) {
    icon.classList.remove("fa-minus");
    icon.classList.add("fa-plus");
  }
}

function openMobileSubmenu(menuItem) {
  const submenu = menuItem.querySelector(".menu_2");
  const menuHeader = menuItem.querySelector(".head-menu");
  const icon = menuItem.querySelector(".head-menu i");

  if (!submenu || !menuHeader) {
    return;
  }

  submenu.classList.add("open");
  submenu.style.height = `${submenu.scrollHeight}px`;

  menuHeader.setAttribute("aria-expanded", "true");

  if (icon) {
    icon.classList.remove("fa-plus");
    icon.classList.add("fa-minus");
  }
}

function toggleMobileSubmenu(menuItem) {
  const submenu = menuItem.querySelector(".menu_2");

  if (!submenu) {
    return;
  }

  const isOpen = submenu.classList.contains("open");

  mobileMenuItems.forEach((otherItem) => {
    if (otherItem !== menuItem) {
      closeMobileSubmenu(otherItem);
    }
  });

  if (isOpen) {
    closeMobileSubmenu(menuItem);
  } else {
    openMobileSubmenu(menuItem);
  }

  requestAnimationFrame(updateNavigationHeight);
}

mobileMenuItems.forEach((menuItem) => {
  const menuHeader = menuItem.querySelector(".head-menu");

  if (!menuHeader) {
    return;
  }

  menuHeader.addEventListener("click", (event) => {
    event.preventDefault();
    toggleMobileSubmenu(menuItem);
  });

  menuHeader.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleMobileSubmenu(menuItem);
    }
  });
});

/* =====================================
   Close Mobile Menu After Navigation
===================================== */

if (mainMobileMenu) {
  const mobileLinks = mainMobileMenu.querySelectorAll(
    ".no-menu > a, .menu_2 a",
  );

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth > 991) {
        return;
      }

      closeMainNavigation();

      mobileMenuItems.forEach((menuItem) => {
        closeMobileSubmenu(menuItem);
      });
    });
  });
}

/* =====================================
   Close Mobile Menu From Outside
===================================== */

document.addEventListener("click", (event) => {
  if (
    !menuButton ||
    !navBar ||
    window.innerWidth > 991 ||
    !navBar.classList.contains("open_2")
  ) {
    return;
  }

  const clickedInsideMenu = navBar.contains(event.target);
  const clickedMenuButton = menuButton.contains(event.target);

  if (!clickedInsideMenu && !clickedMenuButton) {
    closeMainNavigation();

    mobileMenuItems.forEach((menuItem) => {
      closeMobileSubmenu(menuItem);
    });
  }
});

/* =====================================
   Hospital Video Popup
===================================== */

const hospitalSection = document.querySelector(".hos");

const hospitalTabsContainer =
  hospitalSection?.querySelector(".my_hos_row") || null;

const playVideoButton = hospitalSection?.querySelector("#play_v") || null;

const videoPopup = hospitalSection?.querySelector(".video_popup") || null;

const videoCloseButton = hospitalSection?.querySelector(".video_close") || null;

const videoOverlay = hospitalSection?.querySelector(".overlay") || null;

const hospitalTitle = hospitalSection?.querySelector("#my_title") || null;

const hospitalVideo =
  hospitalSection?.querySelector(".video_popup iframe") || null;

const originalVideoSource = hospitalVideo
  ? hospitalVideo.getAttribute("src")
  : "";

function openVideoPopup() {
  if (!videoPopup || !videoOverlay) {
    return;
  }

  if (
    hospitalVideo &&
    originalVideoSource &&
    !hospitalVideo.getAttribute("src")
  ) {
    hospitalVideo.setAttribute("src", originalVideoSource);
  }

  videoPopup.style.display = "block";
  videoOverlay.style.display = "block";

  document.body.style.overflow = "hidden";

  videoCloseButton?.focus();
}

function closeVideoPopup() {
  if (!videoPopup || !videoOverlay) {
    return;
  }

  videoPopup.style.display = "none";
  videoOverlay.style.display = "none";

  document.body.style.overflow = "";

  /*
    Removing and restoring the iframe source
    stops the YouTube video after closing.
  */

  if (hospitalVideo && originalVideoSource) {
    hospitalVideo.setAttribute("src", "");
  }

  playVideoButton?.focus();
}

if (
  hospitalSection &&
  hospitalTabsContainer &&
  playVideoButton &&
  videoPopup &&
  videoOverlay &&
  hospitalTitle
) {
  playVideoButton.addEventListener("click", openVideoPopup);

  videoCloseButton?.addEventListener("click", closeVideoPopup);

  videoOverlay.addEventListener("click", closeVideoPopup);

  const hospitalTabs = hospitalTabsContainer.querySelectorAll(":scope > div");

  hospitalTabs.forEach((tab) => {
    const tabLink = tab.querySelector("a");

    tabLink?.addEventListener("click", (event) => {
      event.preventDefault();
    });

    tab.addEventListener("click", () => {
      hospitalTabs.forEach((item) => {
        item.classList.remove("click");
      });

      tab.classList.add("click");

      hospitalSection.classList.add("fade");

      setTimeout(() => {
        hospitalTitle.textContent =
          tab.dataset.title || "Hospital Introduction";

        hospitalSection.classList.remove("fade");
      }, 180);
    });
  });
}

/* =====================================
   Keyboard Controls
===================================== */

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") {
    return;
  }

  if (videoPopup && videoPopup.style.display === "block") {
    closeVideoPopup();
    return;
  }

  if (navBar && navBar.classList.contains("open_2")) {
    closeMainNavigation();

    mobileMenuItems.forEach((menuItem) => {
      closeMobileSubmenu(menuItem);
    });
  }
});

/* =====================================
   Window Resize
===================================== */

window.addEventListener("resize", () => {
  if (!menuButton || !navBar) {
    return;
  }

  if (window.innerWidth > 991) {
    navBar.style.height = "";
    navBar.classList.remove("open_2");

    menuButton.classList.remove("active");
    menuButton.setAttribute("aria-expanded", "false");

    mobileMenuItems.forEach((menuItem) => {
      closeMobileSubmenu(menuItem);
    });

    return;
  }

  updateNavigationHeight();
});
