var currentDateTime = newDate()
var year = currentDateTime.getFullYear()
var month = (currentDateTime.getMonth() + 1) 
var date = (currentDateTime.getDate() + 1)
var hour = (currentDateTime.getHours() + 1)

if (date < 10) {
    date = "0" + date
}

if (month < 10) {
    month = "0" + month
}

var dateTomorrow = year + "-" + month + "-" + date;
var dateElem = document.querySelector("#date")
var timeElem = document.querySelector("#time")

dateElem.setAttribute ("date", time)

starttimeElem.onchange = function() {
    endtimeElem.setAttribute ("min", this.value)
}

document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });

// Active Link Highlighting
  function highlightActiveSection() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (
        window.pageYOffset >= sectionTop - 50 &&
        window.pageYOffset < sectionTop + sectionHeight - 50
      ) {
        const id = section.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  // Fade-in Effect
  navbar.style.opacity = 0;
  let opacity = 0;
  const fadeIn = setInterval(() => {
    if (opacity < 1) {
      opacity += 0.1;
      navbar.style.opacity = opacity;
    } else {
      clearInterval(fadeIn);
    }
  }, 50);
});
