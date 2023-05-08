<<<<<<< HEAD
let storing = {};
const url = 'http://0.0.0.0:5001/api/v1/status/';
window.onload = (function () {
  $("input[type=checkbox]").click(function () {
    if(this.checked) {
      storing[$(this).data('id')] = $(this).data('name');
      $(".amenities h4").text(Object.values(storing).join(', '));
    } else {
      delete storing[$(this).data('id')];
      if (Object.values(storing).length === 0) {
	$(".amenities h4").html("&nbsp;");
      }
      else {
	$(".amenities h4").text(Object.values(storing).join(', '));
	}
      }
  });
  $.get(url, function (data, status) {
    if (status === 'success') {
      $('#api_status').addClass('available');
    }
  });
  $.ajax({
    type: "POST",
    url: "http://0.0.0.0:5001/api/v1/places_search/",
    dataType: "json",
    contentType: "application/json",
    data: '{}',
    success: function (data, status, jQxhr) {
      for (let i = 0; i < data.length; i++) {
	let eachplace = data[i];
	console.log(eachplace);
	$(".places").append('<article><div class="title"><h2>'
				   + eachplace.name
				   + '</h2><div class="price_by_night">$'
				   + eachplace.price_by_night
				   + '</div></div><div class="information"><div class="max_guest"><i class="fa fa-users fa-3x" aria-hidden="true"></i><br />'
				   + eachplace.max_guest
				   + ' Guests'
				   + '</div><div class="number_rooms"><i class="fa fa-bed fa-3x" aria-hidden="true"></i><br />'
				   + eachplace.number_rooms
				   + ' Bedrooms'
				   + '</div><div class="number_bathrooms"><i class="fa fa-bath fa-3x" aria-hidden="true"></i><br />'
				   + eachplace.number_bathrooms
				   + ' Bathroom'
				   + '</div></div><div class="user"><strong>Owner: '
//				   + users[place.user_id]
				   +'</strong></div><div class="description">'
				   + eachplace.description
				   + '</div></article>');
	}
      }
    });
  });
=======
$(document).ready(function(){
    let checkedAmenities = {};
    $("input[type=checkbox]").change(function(){
        if ($(this).prop('checked')) {
            amenityIds[$(this).attr('data-id')] = $(this).attr('data-name');
          }
          else if (!$(this).prop('checked')) {
            delete amenityIds[$(this).attr('data-id')];
          }
          if (Object.keys(amenityIds).length === 0) {
            $('div.amenities h4').html('&nbsp');
          } else {
            $('div.amenities h4').text(Object.values(amenityIds).join(', '));
          }
    });
    $ajax('http://0.0.0.0:5001/api/v1/status/').done(function(data){
        if (data.status === "ok"){
            $("div#api_status").addClass('available');
        } 
        else{
            $("div#api_status").removeClass('available');
        }
    });
    $('.filters Buttton').click(function(){
        $ajax({
            type: "POST",
            url: "http://0.0.0.0:5001/api/v1/places_search/",
            contentType: 'application/json',
            data: JSON.stringify({ })
        }).done(function(places){
        $('section.places').empt();
        $('section.places').append("<h1>Places</h1>");
        for (place of places){
            const template = `
            <article>
            <div class="title">
            <h2>${place.name}</h2>
            <div class="price_by_night">
          $${place.price_by_night}
          </div>
            </div>
            <div class="information">
            <div class="max_guest">
            <i class="fa fa-users fa-3x" aria-hidden="true"></i>
    
            <br />
    
          ${place.max_guest} Guests
    
          </div>
            <div class="number_rooms">
            <i class="fa fa-bed fa-3x" aria-hidden="true"></i>
    
            <br />
    
          ${place.number_rooms} Bedrooms
          </div>
            <div class="number_bathrooms">
            <i class="fa fa-bath fa-3x" aria-hidden="true"></i>
    
            <br />
    
          ${place.number_bathrooms} Bathroom
    
          </div>
            </div>
            <div class="description">
    
          ${place.description}
    
          </div>
            </article>
            `;
            $('section.places').append(template);
        }
    });
    })
});
>>>>>>> secondary_hsppie
