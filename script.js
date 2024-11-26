const form = document.querySelector('.bookform');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const tel = document.querySelector('#tel');
const date = document.querySelector('#date');
const starttime = document.querySelector('time');

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
    
const videoContainer = document.querySelector(".video-slider")
const videos = document.querySelector(".videos")
const videoItems = videos.querySelectorAll("video")
const totalVideos = videoItems.length
let translate = 0

function updateArrowVisibility() {
  const leftArrow = document.querySelector(".arrow-left")
  const rightArrow = document.querySelector(".arrow-right")

  if (translate === 0) {
    leftArrow.style.display = "none"
  } else {
    leftArrow.style.display = "block"
  }

  if (translate === -(totalVideos - 1) * 100) {
    rightArrow.style.display = "none"
  } else {
    rightArrow.style.display = "block"
  }
}

function pauseAllVideos() {
  videoItems.forEach((video) => {
    video.pause()
  })
}

function slide(direction) {
  if (direction === "left" && translate < 0) {
    translate += 100
  }

  if (direction === "right" && translate > -(totalVideos - 1) * 100) {
    translate -= 100
  }

  videos.style = `translate:${translate}%;`
  pauseAllVideos()
  updateArrowVisibility()
}

updateArrowVisibility()

videoContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("arrow-left")) {
    slide("left")
  }

  if (event.target.classList.contains("arrow-right")) {
    slide("right")
  }
})
    
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

  form.addEventListener("submit", event => {
    event.preventDefault()
    console.log(`Form submitted to ${form.action}`);
    console.log(`Name: ${name.value}`);
    console.log(`Email: ${email.value}`);
    console.log(`Phone: ${tel.value}`);
    console.log(`Participants: ${participants.value}`);
    console.log(`Event Type: ${eventtype.value}`);
    console.log(`Start Time: ${starttime.value}`);
    console.log(`End Time: ${endtime.value}`);
    console.log(`Date: ${date.value}`);
    console.log(`Something Else: ${somethingelse.value}`);
    form.reset();
  });      
