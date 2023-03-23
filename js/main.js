const elLinkContainer = document.querySelector(".links-container");
const elToggleBtn = document.querySelector(".toggle-btn");
const elFixedNav = document.querySelector(".nav-center");
const elLinks = document.querySelectorAll(".scroll-link");
const elTopLink = document.querySelector(".top-link");

elToggleBtn.addEventListener("click", function () {
  elLinkContainer.classList.toggle("show-links");
});

window.addEventListener("scroll", function () {
  if (window.pageYOffset > elFixedNav.getBoundingClientRect().height) {
    elFixedNav.classList.add("fixed-top");
  } else {
    elFixedNav.classList.remove("fixed-top");
  }

  if (this.window.pageYOffset > 500) {
    elTopLink.classList.add("show-up-link");
  } else {
    elTopLink.classList.remove("show-up-link");
  }
});

elLinks.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    elLinkContainer.classList.remove("show-links");
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const containeHeight = elLinkContainer.getBoundingClientRect().height;
    const navHeight = elFixedNav.getBoundingClientRect().height;
    const fixedNav = elFixedNav.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;
    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 100) {
      position = position + containeHeight;
    }
    console.log(position);
    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzeFuxrpKSzzcbd466aevO62ydFOyU58G-ggBf_-XTdcY0JdKhbB5Nkn6SMsHGxw_fT/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.textContent = "Message sent succesfully";
      setTimeout(() => {
        msg.textContent = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => {
      msg.textContent = "You message dosn't send";
      msg.style.color = "red";
      setTimeout(() => {
        msg.textContent = "";
      }, 5000);
      form.reset();
    });
});
