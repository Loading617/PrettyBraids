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

var slideIndex = 5;
showDivs(slideIndex);

function plusDivs(n) {  
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i,
      x = document.getElementsByClassName("video-slide"),
      y = document.getElementsByTagName("video");
  
  if (n > x.length) {
    slideIndex = 5
  }
  
  if (n < 1) {
    slideIndex = x.length
  }
  
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
    y[i].pause();
  }
  
  x[slideIndex-1].style.display = "block";
  
}

var playerSettings = {
      controls : ['play-large'],
      fullscreen : { enabled: false},
      resetOnEnd : true,
      hideControls  :true,
  clickToPlay:true,
      keyboard : false,
    }

const players = Plyr.setup('.js-player', playerSettings);

 players.forEach(function(instance,index) {
            instance.on('play',function(){
                players.forEach(function(instance1,index1){
                  if(instance != instance1){
                        instance1.pause();
                    }
                });
            });
        });

$('.video-section').on('translated.owl.carousel', function (event) {
  players.forEach(function(instance,index1){
                  instance.pause();
                });
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
