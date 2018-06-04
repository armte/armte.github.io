var lat;
var long;
var weather;
var celsius = true;
var iconArray = { {id: 200, day: "https://github.com/armte/LWA-FCC4/img/thunderstorm-sun.png", dayColor: "#2EA7E0",
                            night: "https://github.com/armte/LWA-FCC4/img/thunderstorm-night.png"},
                  {id: 201, day: "https://github.com/armte/LWA-FCC4/img/thunderstorm.png", dayColor: "#DCDDDD",
                            night: "https://github.com/armte/LWA-FCC4/img/thunderstorm-night.png"},
                  {id: 202, day: "https://github.com/armte/LWA-FCC4/img/thunderstorm.png", dayColor: "#DCDDDD",
                            night: "https://github.com/armte/LWA-FCC4/img/thunderstorm-night.png"},
                  {id: 210, day: "https://github.com/armte/LWA-FCC4/img/thunderstorm-sun.png", dayColor: "#2EA7E0",
                            night: "https://github.com/armte/LWA-FCC4/img/thunderstorm-night.png"},
                  {id: 211, day: "https://github.com/armte/LWA-FCC4/img/thunderstorm.png", dayColor: "#DCDDDD",
                            night: "https://github.com/armte/LWA-FCC4/img/thunderstorm-night.png"},
                  {id: 212, day: "https://github.com/armte/LWA-FCC4/img/thunderstorm.png", dayColor: "#DCDDDD",
                            night: "https://github.com/armte/LWA-FCC4/img/thunderstorm-night.png"},
                  {id: 221, day: "https://github.com/armte/LWA-FCC4/img/thunderstorm.png", dayColor: "#DCDDDD",
                            night: "https://github.com/armte/LWA-FCC4/img/thunderstorm-night.png"},
                  {id: 230, day: "https://github.com/armte/LWA-FCC4/img/thunderstorm-sun.png", dayColor: "#2EA7E0",
                            night: "https://github.com/armte/LWA-FCC4/img/thunderstorm-night.png"},
                  {id: 231, day: "https://github.com/armte/LWA-FCC4/img/thunderstorm.png", dayColor: "#DCDDDD",
                            night: "https://github.com/armte/LWA-FCC4/img/thunderstorm-night.png"},
                  {id: 232, day: "https://github.com/armte/LWA-FCC4/img/thunderstorm.png", dayColor: "#DCDDDD",
                            night: "https://github.com/armte/LWA-FCC4/img/thunderstorm-night.png"},
                  {id: 300, day: "https://github.com/armte/LWA-FCC4/img/drizzle.png", dayColor: "#DCDDDD",
                            night: "https://github.com/armte/LWA-FCC4/img/rain-night.png"},
                  {id: 301, day: "https://github.com/armte/LWA-FCC4/img/drizzle.png", dayColor: "#DCDDDD",
                            night: "https://github.com/armte/LWA-FCC4/img/rain-night.png"},
                  {id: 302, day: "https://github.com/armte/LWA-FCC4/img/rain.png", dayColor: "#DCDDDD",
                            night: "https://github.com/armte/LWA-FCC4/img/rain-night.png"},
                  {id: 310, day: "https://github.com/armte/LWA-FCC4/img/drizzle.png", dayColor: "#DCDDDD",
                            night: "https://github.com/armte/LWA-FCC4/img/rain-night.png"},
                  {id: 312, day: "https://github.com/armte/LWA-FCC4/img/rain.png", dayColor: "#DCDDDD",
                            night: "https://github.com/armte/LWA-FCC4/img/rain-night.png"},
                  {id: 313, day: "https://github.com/armte/LWA-FCC4/img/rain.png", dayColor: "#DCDDDD",
                            night: "https://github.com/armte/LWA-FCC4/img/rain-night.png"},
                  {id: 314, day: "https://github.com/armte/LWA-FCC4/img/rain.png", dayColor: "#DCDDDD",
                            night: "https://github.com/armte/LWA-FCC4/img/rain-night.png"},
                  {id: 321, day: "https://github.com/armte/LWA-FCC4/img/drizzle.png", dayColor: "#DCDDDD",
                            night: "https://github.com/armte/LWA-FCC4/img/rain-night.png"},
                  {id: 500, day: "https://github.com/armte/LWA-FCC4/img/drizzle.png", dayColor: "#DCDDDD",
                            night: "https://github.com/armte/LWA-FCC4/img/rain-night.png"},
                  {id: 501, day: "https://github.com/armte/LWA-FCC4/img/rain.png", dayColor: "#DCDDDD",
                            night: "https://github.com/armte/LWA-FCC4/img/rain-night.png"},
                  {id: 502, day: "https://github.com/armte/LWA-FCC4/img/rain.png", dayColor: "#DCDDDD",
                            night: "https://github.com/armte/LWA-FCC4/img/rain-night.png"},
                  {id: 503, day: "https://github.com/armte/LWA-FCC4/img/rain.png", dayColor: "#DCDDDD",
                            night: "https://github.com/armte/LWA-FCC4/img/rain-night.png"},
                  {id: 504, day: "https://github.com/armte/LWA-FCC4/img/rain.png", dayColor: "#DCDDDD",
                            night: "https://github.com/armte/LWA-FCC4/img/rain-night.png"},
                  {id: 511, day: "https://github.com/armte/LWA-FCC4/img/heavy-snow.png", dayColor: "#DCDDDD",
                            night: "https://github.com/armte/LWA-FCC4/img/rain-night.png"},
                  {id: }
                          }

$(document).ready(function() {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position) {
      lat = position.coords.latitude;
      long = position.coords.longitude;
      getLocalWeather(lat, long);
      $("#degreesBtn").on("click", function (){
        alert("success");

        $("#temp span").each(function() {
          if($(this).hasClass("absent")){
            $(this).removeClass("absent");
          }//end if
          else {
            $(this).addClass("absent");
          }
        });//end each function
      });//end onClick function

      $("#windBtn").on("click", function (){
        alert("success");

        $("#wind span").each(function() {
          if($(this).hasClass("absent")){
            $(this).removeClass("absent");
          }//end if
          else {
            $(this).addClass("absent");
          }
        });//end each function
      });//end onClick function


      console.log(lat);
      console.log(long);
    })//end getCurrentPosition
  }//end if

})//end of ready function

function getLocalWeather(lat, long) {
  $.ajax({
    url: 'https://fcc-weather-api.glitch.me/api/current?lat='+lat+'&lon='+long,
    success: function(data) {
      $("#forecast").append(data.weather[0].description);
      $("#celsius").append((data.main.temp).toFixed(1));
      $("#farenheit").append(toFarenheit(data.main.temp).toFixed(1));
      $("#sunRise").append(convertSunRiseSet(data.sys.sunrise));
      $("#sunSet").append(convertSunRiseSet(data.sys.sunset));
      $("#wind-speed-kmHr").append(data.wind.speed);
      $("#wind-speed-miHr").append(((data.wind.speed)/1.6).toFixed(1));
      $("#wind").append(" , " + getWindDirection(data.wind.deg));
      console.log(data.weather[0].id);
    }//end success function
  })//end ajax
}//end getLocalWeather function

function getWindDirection(degrees) {
  if(degrees > 22.5 && degrees <= 67.5){
    return "Northeasterly";
  }
  else if (degrees > 67.5 && degrees <= 112.5){
    return "Northerly";
  }
  else if(degrees > 112.5 && degrees <= 157.5){
    return "Northwesterly";
  }
  else if(degrees > 157.5 && degrees <= 202.5){
    return "Westerly";
  }
  else if(degrees > 202.5 && degrees <= 247.5){
    return "Southwesterly";
  }
  else if(degrees > 247.5 && degrees <= 292.5){
    return "Southerly";
  }
  else if(degrees > 292.5 && degrees <= 337.5) {
    return "Southeasternly";
  }
  else {
    return "Easterly";
  }
}//end getWindDirection function

function convertSunRiseSet (unix) {
  var sunRiseSet = new Date(unix*1000);
  var hours = sunRiseSet.getHours();
  if(hours > 12){
    hours -= 12;
  }
  var minutes = "0" + sunRiseSet.getMinutes();

  return hours + ":" + minutes.substr(-2);

}//end convertSunRiseSet

function toFarenheit(temp) {
    return (temp * 1.8) + 32;

}//end toFarenheit
