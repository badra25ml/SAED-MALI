

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

// add table

// Array of image sources
var images = [
  'elo.jpg',
  'b.png',
  'c.png'
];

// How many rows we want, excluding the top header
var rowCount = 6;
// How many columns we want, excluding the left header
var columnCount = 6;

// Wait for DOM Content to load
document.addEventListener('DOMContentLoaded', function() {
  // Get the carousel div
  var carousel = document.getElementById('carousel');

  // Iterate over every images
  for (var i = 0; i < images.length; i++) {
    // Create a new table for the image
    var table = document.createElement('table');
    // Append the table to the carousel
    carousel.appendChild(table);

    // Create a new table head for the table
    var tableHead = document.createElement('thead');
    // Append the table body to the table
    table.appendChild(tableHead);

    // Create a dedicated table row for the header 
    var tableHeadRow = document.createElement('tr');
    // Append the table row to the table head
    tableHead.appendChild(tableHeadRow);

    // Create a dedicated table header for the left column
    var tableHeadHeader = document.createElement('th');
    // Add a space to the table data cell
    tableHeadHeader.innerHTML = '&nbsp;';
    tableHeadHeader.scope = 'col';
    // Append the table data cell to the tablerow
    tableHeadRow.appendChild(tableHeadHeader);

    for (var rowIndex = 0; rowIndex < rowCount; rowIndex++) {
      // Create a new table header
      var tableHeader = document.createElement('th');
      // Add the index to the table data cell
      tableHeader.innerHTML = rowIndex;
      tableHeader.scope = 'col';
      // Append the table data cell to the tablerow
      tableHeadRow.appendChild(tableHeader);
    }

    // Create a new table body for the table
    var tableBody = document.createElement('tbody');
    // Append the table body to the table
    table.appendChild(tableBody);

    for (var columnIndex = 0; columnIndex < columnCount; columnIndex++) {
      // Create a new table data cell
      var tableRow = document.createElement('tr');
      // Append the table data cell to the row
      tableBody.appendChild(tableRow);

      // Create a new table header
      var tableRowHeader = document.createElement('th');
      // Add the index to the table data cell
      tableRowHeader.innerHTML = columnIndex;
      tableRowHeader.scope = 'row';
      // Append the table data cell to the tablerow
      tableRow.appendChild(tableRowHeader);

      for (var rowIndex = 0; rowIndex < rowCount; rowIndex++) {
        // Create a new table data cell
        var tableDataCell = document.createElement('td');
        // Add a click event listener to the table data cell
        tableDataCell.addEventListener('click', function(event) {
          // Add 'selected' class to the table data cell
          // WARNING: Do not use the tableDataCell variable, because it will equal to the last cell
          event.target.classList.add('selected');
        });
        // Append the table data cell to the tablerow
        tableRow.appendChild(tableDataCell);
      }
    }
  }
});

                  //  .page-header
                  //     h2(itemprop='headline')
                  //       | NOS REFERENCES - En barrage
                  //   | &#x9;&#x9;&#x9;
                  //   div(itemprop='articleBody')
                  //     table(style='width: 921px;')
                  //       thead
                  //         tr
                  //           td(style='background-color: #1d85a7; width: 78px;', colspan='2')
                  //             p
                  //               span(style='color: #ffffff;')
                  //                 strong Date d&eacute;but
                  //           td(style='background-color: #1d85a7; width: 60px;')
                  //             p
                  //               span(style='color: #ffffff;')
                  //                 strong Date fin
                  //           td(style='background-color: #1d85a7; width: 124px;')
                  //             p
                  //               span(style='color: #ffffff;')
                  //                 strong Pays
                  //           td(style='background-color: #1d85a7; width: 307px;')
                  //             p
                  //               span(style='color: #ffffff;')
                  //                 strong Mission
                  //           td(style='background-color: #1d85a7; width: 157px;')
                  //             p
                  //               span(style='color: #ffffff;')
                  //                 strong Client
                  //           td(style='background-color: #1d85a7; width: 175px;')
                  //             p
                  //               span(style='color: #ffffff;')
                  //                 strong Financement
                  //       tbody
                  //         tr
                  //           td(style='width: 28px;')
                  //             p 1
                  //           td(style='width: 50px;')
                  //             p 2015
                  //           td(style='width: 60px;')
                  //             p 2015
                  //           td(style='width: 124px;')
                  //             p Mali
                  //           td(style='width: 307px;')
                  //             p
                  //               | contr&ocirc;le et la surveillance des travaux de r&eacute;habilitation de&nbsp; huit (08) Micro -Barrages dans la r&eacute;gion de Kayes, dans le cadre du projet Irrigation de Proximit&eacute; du PAPAM
                  //           td(style='width: 157px;')
                  //             p
                  //               strong AGETIER-Mali
                  //           td(style='width: 175px;')
                  //             p FIDA
                  //         tr
                  //           td(style='width: 28px;')
                  //             p 2
                  //           td(style='width: 50px;')
                  //             p 2015
                  //           td(style='width: 60px;')
                  //             p 2015
                  //           td(style='width: 124px;')
                  //             p Mali
                  //           td(style='width: 307px;')
                  //             p
                  //               | Contr&ocirc;le et surveillance des Travaux d&rsquo;am&eacute;nagement de la plaine de Kadjila et du bas fond (barrage) de Molasso,cercle et&nbsp; r&eacute;gion de Sikasso
                  //           td(style='width: 157px;')
                  //             p
                  //               strong Minist&egrave;re du D&eacute;veloppement Rural
                  //           td(style='width: 175px;')
                  //             p UE et la Coop&eacute;ration Allemand
                  //         tr
                  //           td(style='width: 28px;')
                  //             p 3
                  //           td(style='width: 50px;')
                  //             p 2012
                  //           td(style='width: 60px;')
                  //             p 2013
                  //           td(style='width: 124px;')
                  //             p Burkina Faso
                  //           td(style='width: 307px;')
                  //             p
                  //               | ETUDE D&rsquo;ACTUALISATION, SUIVI ET CONTR&Ocirc;LE&nbsp; DES TRAVAUX DE CONSTRUCTION DU BARRAGE DE WABESSAN, PROVINCE DE SISSILI, REGION DU CENTRE OUEST
                  //           td(style='width: 157px;')
                  //             p
                  //               strong AGETEER
                  //           td(style='width: 175px;')
                  //             p Budget de l&rsquo;&Eacute;tat gestion 2012 Burkina
                  //         tr
                  //           td(style='width: 28px;')
                  //             p 4
                  //           td(style='width: 50px;')
                  //             p 2012
                  //           td(style='width: 60px;')
                  //             p 2013
                  //           td(style='width: 124px;')
                  //             p Burkina Faso
                  //           td(style='width: 307px;')
                  //             p
                  //               | ETUDE D&rsquo;ACTUALISATION, SUIVI, CONTR&Ocirc;LE&nbsp; DES TRAVAUX DE CONSTRUCTION DU BARRAGE DE SARRE COMMUNE DE KOMBISSIRI, PROVINCE DU BAZEGA, REGION DU CENTRE SUD
                  //           td(style='width: 157px;')
                  //             p
                  //               strong AGETEER
                  //           td(style='width: 175px;')
                  //             p Budget de l&rsquo;&Eacute;tat gestion 2012 Burkina
                  //         tr
                  //           td(style='width: 28px;')
                  //             p 5
                  //           td(style='width: 50px;')
                  //             p 2010
                  //           td(style='width: 60px;')
                  //             p 2010
                  //           td(style='width: 124px;')
                  //             p Mali
                  //           td(style='width: 307px;')
                  //             p
                  //               | &Eacute;tudes techniques de pr&eacute;faisabilit&eacute; de la microcentrale de BILY dans la r&eacute;gion de Kayes.
                  //           td(style='width: 157px;')
                  //             p
                  //               strong Minist&egrave;re de l&rsquo;&eacute;nergie, des mines et de l&rsquo;eau
                  //           td(style='width: 175px;')
                  //             p banque mondiale (IDA)
                  //         tr
                  //           td(style='width: 28px;')
                  //             p 6
                  //           td(style='width: 50px;')
                  //             p 2008
                  //           td(style='width: 60px;')
                  //             p 2008
                  //           td(style='width: 124px;')
                  //             p Mali
                  //           td(style='width: 307px;')
                  //             p
                  //               | &Eacute;tudes techniques de faisabilit&eacute; de la microcentrale hydro &eacute;lectrique de Faroko1 dans la r&eacute;gion de Sikasso.
                  //           td(style='width: 157px;')
                  //             p
                  //               strong Minist&egrave;re de l&rsquo;&eacute;nergie, des mines et de l&rsquo;eau
                  //           td(style='width: 175px;')
                  //             p Budget National
                  //             p 2008
                  //         tr
                  //           td(style='width: 28px;') &nbsp;
                  //           td(style='width: 50px;') &nbsp;
                  //           td(style='width: 60px;') &nbsp;
                  //           td(style='width: 124px;') &nbsp;
                  //           td(style='width: 307px;') &nbsp;
                  //           td(style='width: 157px;') &nbsp;
                  //           td(style='width: 175px;') &nbsp;
                  //          // fin nos refferences en BARRAGE
