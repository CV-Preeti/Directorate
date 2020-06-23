window.onscroll=function(){ myfunction()};
var main_nav=document.getFlementByClassName('main_nav');
var sticky = main_nav.OffsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myfunction() {
  if (window.pageYOffset >= sticky) {
    main_nav.classList.add("sticky");
  } else {
    main_nav.classList.remove("sticky");
  }
}




