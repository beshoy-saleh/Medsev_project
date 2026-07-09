document.addEventListener("DOMContentLoaded", function() {

  // =========================================
  // 1. MOBILE MENU TOGGLE
  // =========================================
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", function() {
      navLinks.classList.toggle("show-menu");
      
      const icon = mobileMenuBtn.querySelector("i");
      if (navLinks.classList.contains("show-menu")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });
  }

  // =========================================
  // 2. DYNAMIC ACTIVE LINKS
  // =========================================
  // Gets the exact HTML file name you are currently looking at
  const currentPath = window.location.pathname.split("/").pop() || "index.html"; 
  const allNavLinks = document.querySelectorAll(".nav-links li a");
  
  allNavLinks.forEach(link => {
    link.classList.remove("active"); // Clear all blue highlights first
    
    // If the link's href matches the current file, highlight it!
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });

  // =========================================
  // 3. STICKY NAVBAR & SCROLL-TO-TOP
  // =========================================
  const navbar = document.querySelector(".main-navbar");
  const scrollTopBtn = document.querySelector(".scroll-top-btn");

  window.addEventListener("scroll", function() {
    
    // Make the navbar sticky after scrolling down 150 pixels
    if (window.scrollY > 150) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }

    // Show the "Scroll to Top" button after scrolling down 300 pixels
    if (scrollTopBtn) {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add("show");
      } else {
        scrollTopBtn.classList.remove("show");
      }
    }
  });

  // Click event to smoothly glide back to the top
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // =========================================
  // 4. FORM INTERCEPTION (PREVENT RELOAD)
  // =========================================
  const allForms = document.querySelectorAll("form");
  
  allForms.forEach(form => {
    form.addEventListener("submit", function(event) {
      // Prevents the browser's default habit of refreshing the page immediately
      event.preventDefault(); 
      
      // Simulate a successful form submission
      alert("Thank you! Your submission has been received successfully.");
      
      // Clear the input fields
      form.reset(); 
    });
  });

});