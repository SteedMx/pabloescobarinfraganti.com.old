$(window).scroll(function() {
  $("section div").each(function() {
    $(this).css('margin-top', $(window).scrollTop() - $(this).parent().position().top);
    console.log();
  });
});

$(document).ready(function() {
  <!-- not working -->
  window.scrollTo(600, 0);
});
