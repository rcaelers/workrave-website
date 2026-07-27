(function () {
  var navbar = document.querySelector(".navbar");
  if (!navbar) {
    return;
  }

  var previousScrollTop = 0;

  function checkScroll() {
    var scrollTop = window.scrollY;

    if (scrollTop > 20) {
      navbar.classList.add("scrolled");

      var scrollDelta = scrollTop - previousScrollTop;
      previousScrollTop = scrollTop;

      if (scrollDelta < 0) {
        navbar.classList.remove("hidden");
      } else if (scrollDelta > 0) {
        navbar.classList.add("hidden");
        var openToggle = navbar.querySelector(".dropdown.show .dropdown-toggle");
        if (openToggle && window.bootstrap) {
          bootstrap.Dropdown.getOrCreateInstance(openToggle).hide();
        }
      }
    } else {
      navbar.classList.remove("scrolled", "hidden", "notransition");
    }
  }

  if (window.scrollY > 20) {
    navbar.classList.add("scrolled", "hidden", "notransition");
  }

  window.addEventListener("scroll", checkScroll);
  window.addEventListener("load", checkScroll);
  window.addEventListener("resize", checkScroll);
})();
