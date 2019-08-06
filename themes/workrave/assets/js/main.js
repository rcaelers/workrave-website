$(document).ready(function(e) {
  var _previousScrollTop = 0;

  function checkScroll() {
    var scrollTop = $(window).scrollTop();
    let navbarHeight = $(".navbar").height();

    if (scrollTop > 2 * navbarHeight) {
      $(".navbar").addClass("scrolled");
    } else {
      $(".navbar").removeClass("scrolled");
    }

    var scrollDelta = scrollTop - _previousScrollTop;
    _previousScrollTop = scrollTop;

    if (scrollDelta < 0) {
      $(".navbar").removeClass("hidden");
    } else if (scrollDelta > 0) {
      $(".navbar").addClass("hidden");
      try {
        $(".dropdown.show .dropdown-toggle", $(".navbar")).dropdown("toggle");
      } catch (e) {}
    }
  }

  if ($(".navbar").length > 0) {
    $(window).on("scroll load resize", function() {
      checkScroll();
    });
  }
});
