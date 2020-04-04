var scrollTop = $(window).scrollTop();
if (scrollTop > 20) {
  $(".navbar").addClass("scrolled");
  $(".navbar").addClass("hidden");
  $(".navbar").addClass("notransition");
}

$(document).ready(function(e) {
  var _previousScrollTop = 0;

  function checkScroll() {
    var scrollTop = $(window).scrollTop();
    // let navbarHeight = $(".navbar").height();

    if (scrollTop > 20) {
      $(".navbar").addClass("scrolled");

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
    } else {
      $(".navbar").removeClass("scrolled");
      $(".navbar").removeClass("hidden");
      $(".navbar").removeClass("notransition");
    }
  }

  if ($(".navbar").length > 0) {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 20) {
      $(".navbar").addClass("scrolled");
      $(".navbar").addClass("hidden");
      $(".navbar").addClass("notransition");
    }
    $(window).on("scroll load resize", function() {
      checkScroll();
    });
  }
});
