//Get user's current location 
navigator.geolocation.getCurrentPosition(function(position) {

  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;  

  console.log(latitude + " " + longitude);

  var latitudeString = latitude.toString();
  var longitudeString = longitude.toString();

  console.log(latitudeString + " " + longitudeString);

  var trimLatitude = latitudeString.substring(0, 5);
  var trimLongitude = longitudeString.substring(0, 5);

  console.log(trimLatitude + " " + trimLongitude);

  //Get weather for user's current location
  var getWeather = $.ajax({
    type: 'GET',
    url: "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=" + trimLatitude + "&lon=" + trimLongitude + "&APPID=4b3ff62e3ed31d05cb44a014d891b7e6"
  });
  //Once received do stuff with data!
  getWeather.done(function(data) {
    var location = data.name;
    console.log(location);

	  	//Set user location on page
	  $(".location").html(location);
	});

});