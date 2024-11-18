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

// Video Slider
(function ($) {
    $.fn.sliderVideo = function (options) {
        options = $.extend({
            scrollerSelector: '.slider-video-scroll',
            itemSelector: '.slider-video-item',
            aspectSelect: '.slider-video-aspect',
            navLeftSelector: '.slider-video-left',
            navRightSelecto: '.slider-video-right',
            scrollTime: 500,
            animationTime: 300,
            visibleItems: 2,
            itemsGap: 10,
            aspectRation: 0.625
        }, options);

        var $slider = $(this);
        var $scroller = $slider.find(options.scrollerSelector);
        var $aspect = $slider.find(options.aspectSelect);
        var $items = $slider.find(options.itemSelector);
        var $navLeft = $slider.find(options.navLeftSelector);
        var $navRight = $slider.find(options.navRightSelecto);
        $items.bind('click', onItemClick);
        $navLeft.bind('click', onNavLeftClick);
        $navRight.bind('click', onNavRightClick);
        $slider.bind('scrollToIndex', function (event, index) {
            scrollToIndex(index);
        });

        initializeSize();
        initializeOrigin();
        initializeNavigation();

        function initializeSize() {
            $aspect.height($aspect.width() * options.aspectRation);
            $scroller.width((50 * $items.length) + '%');

            var itemWidth = $aspect.width() / options.visibleItems;
            var itemHeight = itemWidth * options.aspectRation;
            var positionTop = ($aspect.height() - itemHeight) / 2;
            $items.each(function (i) {
                $(this).css({
                    top: positionTop,
                    left: i * (itemWidth + options.itemsGap),
                    width: itemWidth - options.itemsGap + 'px',
                    height: itemHeight + 'px'
                })
            });
        }

        function initializeOrigin() {
            var aspectScrollLeft = $aspect.scrollLeft()
            $items.each(function (i) {
                var $item = $(this);
                if ($item.position().left > aspectScrollLeft) {
                    $item.css({
                        'transform-origin': '100% 50%'
                    });
                } else {
                    $item.css({
                        'transform-origin': '0 50%'
                    });
                }
            })
        }

        function initializeNavigation() {
            var visibleItems = getVisibleItems();

            $navLeft.toggle(visibleItems.first().prev().length > 0);
            $navRight.toggle(visibleItems.last().next().length > 0);
        }

        function onItemClick() {
            var $item = $(this);

            if ($item.is(".active")) {
                $item.removeClass('active');
                toggleVideo($item, false);
                initializeSize();

                $item.addClass('active-out');
                setTimeout(function () {
                    $item.removeClass('active-out');
                }, options.animationTime)
            }
            else {
                $item.css({
                    width: $aspect.width(),
                    height: $aspect.height(),
                    left: $aspect.scrollLeft(),
                    top: 0
                });
                $item.addClass('active');
                setTimeout(function () {
                    toggleVideo($item, true);
                }, 300)
            }
        }

        function onNavRightClick() {
            scrollTo(1);
        }

        function onNavLeftClick() {
            scrollTo(-1);
        }


        function toggleVideo($item, status) {
            $item.find('.slider-video-pic').toggle(!status);
            $item.find('.slider-video-play').toggle(status);
            var frame = $item.find('iframe')[0];
            frame.contentWindow.postMessage('{"event":"command","func":"' + (status ? 'playVideo' : 'pauseVideo') + '","args":""}', '*')
        }

        function scrollTo(direction) {

            if ($items.is('.active')) {
                var $active = $('.slider-video-item').filter('.active');
                var $next = direction > 0 ? $active.next() : $active.prev();
                if ($next.length) {
                    scrollToIndex($next.index());
                    $active.trigger('click');
                    setTimeout(function () {
                        $next.trigger('click');
                        initializeNavigation();
                    }, options.scrollTime)
                }
            } else {
                var visibleItems = getVisibleItems();

                if (direction > 0) {
                    scrollToIndex(visibleItems.last().next().index());
                } else {
                    scrollToIndex(visibleItems.first().prev().index());
                }
            }
        }

        function scrollToIndex(index) {
            var $item = $items.eq(index);
            if ($item.length) {
                var itemWidth = $aspect.width() / options.visibleItems;

                var itemLeft = $item.position().left;
                var targetPosition = null;

                if (itemLeft > $aspect.scrollLeft() + $aspect.width()) {
                    targetPosition = itemLeft - itemWidth - options.itemsGap;
                } else if (itemLeft < $aspect.scrollLeft()) {
                    targetPosition = itemLeft;
                }

                if (targetPosition != null) {
                    $aspect.animate({ scrollLeft: targetPosition + 'px' }, options.scrollTime, function () {
                        initializeOrigin();
                        initializeNavigation();
                    });
                }
            }
        }

        function getVisibleItems() {
            return $items.filter(function (i) {
                var posLeft = $(this).position().left;
                return posLeft >= $aspect.scrollLeft() && posLeft < $aspect.scrollLeft() + $aspect.width();
            });
        }

    };
})(jQuery);

$(function() {
  $('.slider-video').sliderVideo();
})

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
