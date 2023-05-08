$(document).ready(function(){
    let checkedAmenities = {};
    let checkedStates = {};
    let checkedcities = {};
    $("input[type=checkbox]").change(function(){
        if ($(this).prop('checked')) {
            checkedAmenities[$(this).attr(':data-id')] = $(this).attr(':data-name');
            checkedStates[$(this).attr(":state_id")] = $(this).attr(':state_name');
            checkedcities[$(this).attr(":city_id")] = $(this).attr(':city_name');
          }
          else if (!$(this).prop('checked')) {
            delete checkedAmenities[$(this).attr('data-id')];
            delete checkedAmenities[$(this).attr(':state_id')];
            delete checkedAmenities[$(this).attr(':city_id')];
          }
          if (Object.keys(checkedAmenities).length === 0 || Object.keys(checkedStates).length === 0 || Object.keys(checkedcities).length === 0 ) {
            $('div.amenities h4').html('&nbsp');

          } else {
            $('div.amenities h4').text(Object.values(checkedAmenities).join(', '));
            $('div.locations h4').text(Object.values(checkedStates).join(', '));

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
    });
    
});