// Navbar
(function ($) {
  $(function () {
    //  open and close nav
    $("#navbar-toggle").click(function () {
      $("nav ul").slideToggle();
    });

    // Hamburger toggle
    $("#navbar-toggle").on("click", function () {
      this.classList.toggle("active");
    });

    // If a link has a dropdown, add sub menu toggle.
    $("nav ul li a:not(:only-child)").click(function (e) {
      $(this).siblings(".navbar-dropdown").slideToggle("slow");

      // Close dropdown when select another dropdown
      $(".navbar-dropdown").not($(this).siblings()).hide("slow");
      e.stopPropagation();
    });

    // Click outside the dropdown will remove the dropdown class
    $("html").click(function () {
      $(".navbar-dropdown").hide();
    });
  });
})(jQuery);

// Page scrolling
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(
    ".home, .about-us, .founders, #footer, .product-home, #product-list, #maps, #founders,#location-list,#diamond-search,#made-in-india,#maps,.maps_div,.why_us"
  ); // Selecting sections by their classes
  const sectionOffsets = Array.from(sections).map(
    (section) => section.offsetTop
  ); // Get offsets of each section
  let currentSectionIndex = 0;

  function scrollToSection(index) {
    sections[index].scrollIntoView({ behavior: "smooth" });
  }

  window.addEventListener(
    "wheel",
    function (event) {
      event.preventDefault();
      const deltaY = event.deltaY;
      const direction = deltaY > 0 ? 1 : -1; // Check scroll direction
      const windowHeight = window.innerHeight;
      const currentScrollPosition = window.scrollY;

      // Determine the target section index based on the scroll direction
      if (direction === 1) {
        // Scrolling down
        for (let i = 0; i < sectionOffsets.length; i++) {
          if (sectionOffsets[i] > currentScrollPosition + windowHeight / 2) {
            currentSectionIndex = i;
            break;
          }
        }
      } else {
        // Scrolling up
        for (let i = sectionOffsets.length - 1; i >= 0; i--) {
          if (sectionOffsets[i] < currentScrollPosition + windowHeight / 2) {
            currentSectionIndex = i === 0 ? 0 : i - 1; // Ensures not to go below the first section
            break;
          }
        }
      }

      // Scroll to the target section
      scrollToSection(currentSectionIndex);
    },
    { passive: false }
  );
});

// Animations
document.addEventListener("DOMContentLoaded", function () {
  const diamon1 = document.querySelector(".diamon1");

  // Function to trigger the animation
  function triggerAnimation() {
    diamon1.classList.add("animate");
    setTimeout(() => {
      diamon1.classList.remove("animate");
    }, 1200);
  }

  // Add scroll event listener to window
  window.addEventListener("scroll", triggerAnimation);
});

window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  var offset = scrollPosition / 5;

  var diamond2 = document.querySelector(".diamond2");
  diamond2.style.left = Math.min(-390, offset) + "px";
});

//Animation on scroll

$(window).scroll(function () {
  var sections = [
    "#about-us",
    "#founders",
    "#product-home",
    "#product-list",
    "#location-list",
    ".made-in-india",
    "#diamond-search",
    ".manu_div1",
    ".manu_div2",
    ".manu_div3",
    ".manu_div4",
    ".manu_div5",
    ".manu_div6",
    ".manu_div7",
    ".manu_div8",
    ".maps_div",
    ".why_us",
  ];

  sections.forEach(function (section) {
    var $section = $(section);
    if ($section.length) {
      var sectionPosition = $section.offset().top;
      var windowPosition = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (windowPosition + windowHeight >= sectionPosition) {
        $section.addClass("in-view");
      } else {
        $section.removeClass("in-view");
      }
    }
  });
});

// Data Table
$(document).ready(function () {
  $("#diamondtb").DataTable();
});
