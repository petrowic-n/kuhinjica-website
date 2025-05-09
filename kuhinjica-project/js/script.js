/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/*=============== SHOW MENU ===============*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*=============== HIDDEN MENU ===============*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU ON LINK CLICK ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
// dodaje eventlistener na svaku nav__link klasu
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // kad je visina viewport-a veca od 50 dodaj bg-header klasu
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== ANIMATIONS ===============*/
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".scroll-top, .scroll-left, .scroll-right"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show"); // dodaje klasu show
        } else {
          entry.target.classList.remove("show"); // uklanja klasu show
        }
      });
    },
    { threshold: 0.4 }
  ); // animacija se pokrece kad je element 40% ucitan

  elements.forEach((el) => observer.observe(el));
});
