const form = document.querySelector('.bookform');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const tel = document.querySelector('#tel');
const date = document.querySelector('#date');
const starttime = document.querySelector('time');

document.addEventListener("DOMContentLoaded", function () {
    
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });

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

const tiles = document.getElementsByClassName('tile');

for (let i = 0; i < tiles.length; i++) {
 
  tiles[i].addEventListener('mouseover', (e) => {
    
    if (e.clientX > (tiles[i].parentElement.clientWidth / 2)) 		{
      tiles[i].parentElement.classList.add('left');
    } else {
      tiles[i].parentElement.classList.remove('left');
    }

  });
}

  form.addEventListener("submit", event => {
    event.preventDefault()
    console.log(`Form submitted to ${form.action}`);
    console.log(`Name: ${name.value}`);
    console.log(`Email: ${email.value}`);
    console.log(`What Time: ${whattime.value}`);
    console.log(`Date: ${date.value}`);
    form.reset();
  });      
