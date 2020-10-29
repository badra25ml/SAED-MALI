

// function initMap() {
//   // Create a map object and specify the DOM element for display.
//   var map = new google.maps.Map(document.getElementById('Map'){
//     center: {lat: 12.6125547, lng: -8.1356026},
//     scrollwheel: false,
//     zoom: 5 }); 
// }; 
// initMap();
// Slider for "Nos moyens materiels page"
function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
}
// filter on "Nos Projets page"

function filter(e){
  let valu = document.getElementsByClassName("btn-filter");
  valu.onClick = function changeContent(e){
    // document.getElementById('nos-projets').innerHTML = "";
    
  }
  valu.onClick()
}
filter()




jQuery(document).ready(function ($) {

  jQuery('#checkbox').change(function(){
  setInterval(function () {
      moveRight();
  }, 3000);
});

var slideCount = jQuery('#slider ul li').length;
var slideWidth = jQuery('#slider ul li').width();
var slideHeight = jQuery('#slider ul li').height();
var sliderUlWidth = slideCount * slideWidth;

jQuery('#slider').css({ width: slideWidth, height: slideHeight });

jQuery('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

jQuery('#slider ul li:last-child').prependTo('#slider ul');

function moveLeft() {
  jQuery('#slider ul').animate({
      left: + slideWidth
  }, 200, function () {
      jQuery('#slider ul li:last-child').prependTo('#slider ul');
      jQuery('#slider ul').css('left', '');
  });
};

function moveRight() {
  $('#slider ul').animate({
      left: - slideWidth
  }, 200, function () {
      jQuery('#slider ul li:first-child').appendTo('#slider ul');
      jQuery('#slider ul').css('left', '');
  });
};

jQuery('a.control_prev').click(function () {
  moveLeft();
});

jQuery('a.control_next').click(function () {
  moveRight();
});

});    



// function clearMenus() {
//   $(backdrop).remove()
//   $(toggle).each(function (e) {
//     var $parent = getParent($(this))
//     if (!$parent.hasClass('open')) return
//     $parent.trigger(e = $.Event('hide.bs.dropdown'))
//     if (e.isDefaultPrevented()) return
//     $parent.removeClass('open').trigger('hidden.bs.dropdown')
//   })
// }


// PDF utility for nos moyens page

document.getElementById("theFrame").contentWindow.onload = function() {
  this.document.getElementsByTagName("img")[0].style.width="100%";
  };