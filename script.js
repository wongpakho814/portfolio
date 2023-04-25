// Navbar
const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");

const navbarScrollEvent = () => {
  if (window.scrollY >= navbarOffsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  sections.forEach((section, i) => {
    if (window.scrollY >= section.offsetTop - 10) {
      navbarLinks.forEach((navbarLink) => {
        navbarLink.classList.remove("change");
      });
      navbarLinks[i].classList.add("change");
    }
  });
};
// End of navbar

// Progress bar
const progress = document.querySelector(".progress-bars-wrapper");
const progressBarPercents = [97, 89, 85, 87, 80, 70, 50];

const progressScrollEvent = () => {
  if (window.scrollY + window.innerHeight >= progress.offsetTop) {
    document.querySelectorAll(".progress-percent").forEach((element, i) => {
      element.style.width = `${progressBarPercents[i]}%`;
      element.previousElementSibling.firstElementChild.textContent =
        progressBarPercents[i];
    });
  }
};
// End of progress bar

navbarScrollEvent();
progressScrollEvent();

window.addEventListener("scroll", () => {
  navbarScrollEvent();
  progressScrollEvent();
});

window.addEventListener("resize", () => {
  window.location.reload();  
});
