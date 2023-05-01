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
const progressBarPercents = [95, 90, 85, 75, 75, 70, 70];

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

// Contact form
const sendEmail = () => {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  const serviceID = "service_bdei54t";
  const templateID = "template_zmjxg2p";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message has been sent successfully :)");
    })
    .catch((err) => console.log(err));
};
// End of contact form

navbarScrollEvent();
progressScrollEvent();

window.addEventListener("scroll", () => {
  navbarScrollEvent();
  progressScrollEvent();
});

window.addEventListener("resize", () => {
  window.location.reload();
});
