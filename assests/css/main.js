// $(window).scroll(function(){
//     var sticky = $('header'),
//         scroll = $(window).scrollTop();
  
//     if (scroll >= 100) sticky.addClass('stickyHeader');
//     else sticky.removeClass('stickyHeader');
//   });

  window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("stickyHeader");
  } else {
    header.classList.remove("stickyHeader");
  }
}