/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("show");
      });
    }
  };
  showMenu("nav-toggle", "nav-menu");
  
  /*===== REMOVE MENU MOBILE =====*/
  const navLink = document.querySelectorAll(".nav__link");
  function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show");
  }
  navLink.forEach((n) => n.addEventListener("click", linkAction));
  
  /*===== SCROLL ACTIVE LINK =====*/
  const sections = document.querySelectorAll("section[id]");
  function scrollActive() {
    const scrollY = window.scrollY;
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 58;
      const sectionId = current.getAttribute("id");
      const link = document.querySelector(`.nav__menu a[href*=${sectionId}]`);
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link.classList.add("active-link");
      } else {
        link.classList.remove("active-link");
      }
    });
  }
  window.addEventListener("scroll", scrollActive);
  
  /*===== SCROLL REVEAL ANIMATION =====*/
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2000,
    delay: 200
  });
  
  sr.reveal(".home__title, .about__img, .skills__subtitle, .skills__text");
  sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", { delay: 400 });
  sr.reveal(".home__social-icon", { interval: 200 });
  sr.reveal(".service__card, .contact__input", { interval: 200 });
  