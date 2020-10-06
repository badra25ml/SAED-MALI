

function initMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('widget').getElementByClassName('widget-content'), {
    center: {lat: 12.6125547, lng: -8.1356026},
    scrollwheel: false,
    zoom: 5 }); 
}; 
initMap();

// $("#fr").click(function(event){
// 	event.preventDefault();
// 	$.get( "/french", function( data ) {
// 		document.location.reload(true);
// 	});
// });

// $("#ba").click(function(event){
// 	event.preventDefault();
// 	$.get( "/bambara", function( data ) {
// 		document.location.reload(true);
// 		});	
// });

