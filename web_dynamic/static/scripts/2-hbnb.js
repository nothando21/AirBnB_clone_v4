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
	$('.amenities h4').html("&nbsp;");
	} else {
	  $(".amenities h4").text(Object.values(storing).join(', '));
	  }
      }
  });
  $.get(url, function (data, status) {
    if (status === 'success') {
      $('#api_status').addClass('available');
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
});
>>>>>>> secondary_hsppie
