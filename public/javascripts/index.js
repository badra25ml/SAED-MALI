

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