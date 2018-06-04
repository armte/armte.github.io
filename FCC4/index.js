var lat;
var long;
var weather;
var nightColor = 'black';
var nightFontColor = '#F4EC90';
var currentTime = new Date();
var unixCurrentTime = currentTime.getTime()/1000;

var iconArray = [ {'id': 200, 'day': "https://armte.github.io/FCC4/img/thunderstorm-sun.png", 'dayColor': "#2EA7E0",
                            'night': "https://armte.github.io/FCC4/img/thunderstorm-night.png"},
                  {'id': 201, 'day': "https://armte.github.io/FCC4/img/thunderstorm.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/thunderstorm-night.png"},
                  {'id': 202, 'day': "https://armte.github.io/FCC4/img/thunderstorm.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/thunderstorm-night.png"},
                  {'id': 210, 'day': "https://armte.github.io/FCC4/img/thunderstorm-sun.png", 'dayColor': "#2EA7E0",
                            'night': "https://armte.github.io/FCC4/img/thunderstorm-night.png"},
                  {'id': 211, 'day': "https://armte.github.io/FCC4/img/thunderstorm.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/thunderstorm-night.png"},
                  {'id': 212, 'day': "https://armte.github.io/FCC4/img/thunderstorm.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/thunderstorm-night.png"},
                  {'id': 221, 'day': "https://armte.github.io/FCC4/img/thunderstorm.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/thunderstorm-night.png"},
                  {'id': 230, 'day': "https://armte.github.io/FCC4/img/thunderstorm-sun.png", 'dayColor': "#2EA7E0",
                            'night': "https://armte.github.io/FCC4/img/thunderstorm-night.png"},
                  {'id': 231, 'day': "https://armte.github.io/FCC4/img/thunderstorm.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/thunderstorm-night.png"},
                  {'id': 232, 'day': "https://armte.github.io/FCC4/img/thunderstorm.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/thunderstorm-night.png"},
                  {'id': 300, 'day': "https://armte.github.io/FCC4/img/drizzle.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/rain-night.png"},
                  {'id': 301, 'day': "https://armte.github.io/FCC4/img/drizzle.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/rain-night.png"},
                  {'id': 302, 'day': "https://armte.github.io/FCC4/img/rain.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/rain-night.png"},
                  {'id': 310, 'day': "https://armte.github.io/FCC4/img/drizzle.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/rain-night.png"},
                  {'id': 312, 'day': "https://armte.github.io/FCC4/img/rain.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/rain-night.png"},
                  {'id': 313, 'day': "https://armte.github.io/FCC4/img/rain.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/rain-night.png"},
                  {'id': 314, 'day': "https://armte.github.io/FCC4/img/rain.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/rain-night.png"},
                  {'id': 321, 'day': "https://armte.github.io/FCC4/img/drizzle.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/rain-night.png"},
                  {'id': 500, 'day': "https://armte.github.io/FCC4/img/drizzle.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/rain-night.png"},
                  {'id': 501, 'day': 'https://armte.github.io/FCC4/img/rain.png', 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/rain-night.png"},
                  {'id': 502, 'day': "https://armte.github.io/FCC4/img/shower-rain.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/rain-night.png"},
                  {'id': 503, 'day': "https://armte.github.io/FCC4/img/rain.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/rain-night.png"},
                  {'id': 504, 'day': "https://armte.github.io/FCC4/img/shower-rain.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/rain-night.png"},
                  {'id': 511, 'day': "https://armte.github.io/FCC4/img/heavy-snow.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/rain-night.png"},
                  {'id': 520, 'day': "https://armte.github.io/FCC4/img/drizzle.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/rain-night.png"},
                  {'id': 521, 'day': "https://armte.github.io/FCC4/img/rain.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/rain-night.png"},
                  {'id': 522, 'day': "https://armte.github.io/FCC4/img/shower-rain.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/rain-night.png"},
                  {'id': 531, 'day': "https://armte.github.io/FCC4/img/shower-rain.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/rain-night.png"},
                  {'id': 600, 'day': "https://armte.github.io/FCC4/img/snow.png", 'dayColor': "#FFFFFF",
                            'night': "https://armte.github.io/FCC4/img/snow-night.png"},
                  {'id': 601, 'day': "https://armte.github.io/FCC4/img/snow.png", 'dayColor': "#FFFFFF",
                            'night': "https://armte.github.io/FCC4/img/snow-night.png"},
                  {'id': 602, 'day': "https://armte.github.io/FCC4/img/heavy-snow.png", 'dayColor': "#FFFFFF",
                            'night': "https://armte.github.io/FCC4/img/snow-night.png"},
                  {'id': 611, 'day': "https://armte.github.io/FCC4/img/snow.png", 'dayColor': "#FFFFFF",
                            'night': "https://armte.github.io/FCC4/img/snow-night.png"},
                  {'id': 612, 'day': "https://armte.github.io/FCC4/img/snow.png", 'dayColor': "#FFFFFF",
                            'night': "https://armte.github.io/FCC4/img/snow-night.png"},
                  {'id': 615, 'day': "https://armte.github.io/FCC4/img/snow.png", 'dayColor': "#FFFFFF",
                            'night': "https://armte.github.io/FCC4/img/snow-night.png"},
                  {'id': 616, 'day': "https://armte.github.io/FCC4/img/snow.png", 'dayColor': "#FFFFFF",
                            'night': "https://armte.github.io/FCC4/img/snow-night.png"},
                  {'id': 620, 'day': "https://armte.github.io/FCC4/img/snow.png", 'dayColor': "#FFFFFF",
                            'night': "https://armte.github.io/FCC4/img/snow-night.png"},
                  {'id': 621, 'day': "https://armte.github.io/FCC4/img/heavy-snow.png", 'dayColor': "#FFFFFF",
                            'night': "https://armte.github.io/FCC4/img/snow-night.png"},
                  {'id': 622, 'day': "https://armte.github.io/FCC4/img/heavy-snow.png", 'dayColor': "#FFFFFF",
                            'night': "https://armte.github.io/FCC4/img/snow-night.png"},
                  {'id': 701, 'day': "https://armte.github.io/FCC4/img/mist.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/mist-night.png"},
                  {'id': 711, 'day': "https://armte.github.io/FCC4/img/smoke.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/dust-night.png"},
                  {'id': 721, 'day': "https://armte.github.io/FCC4/img/haze.png", 'dayColor': "#F8B62D",
                            'night': "https://armte.github.io/FCC4/img/haze-night.png"},
                  {'id': 731, 'day': "https://armte.github.io/FCC4/img/dust.png", 'dayColor': "#D8BF9E",
                            'night': "https://armte.github.io/FCC4/img/dust-night.png"},
                  {'id': 741, 'day': "https://armte.github.io/FCC4/img/mist.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/mist-night.png"},
                  {'id': 751, 'day': "https://armte.github.io/FCC4/img/dust.png", 'dayColor': "#D8BF9E",
                            'night': "https://armte.github.io/FCC4/img/dust-night.png"},
                  {'id': 761, 'day': "https://armte.github.io/FCC4/img/dust.png", 'dayColor': "#D8BF9E",
                            'night': "https://armte.github.io/FCC4/img/dust-night.png"},
                  {'id': 762, 'day': "https://armte.github.io/FCC4/img/dust.png", 'dayColor': "#D8BF9E",
                            'night': "https://armte.github.io/FCC4/img/dust-night.png"},
                  {'id': 771, 'day': "https://armte.github.io/FCC4/img/squalls.png", 'dayColor': "#2EA7E0",
                            'night': "https://armte.github.io/FCC4/img/squalls-night.png"},
                  {'id': 781, 'day': "https://armte.github.io/FCC4/img/tornado.png", 'dayColor': "#FFFFFF",
                            'night': "https://armte.github.io/FCC4/img/squalls-night.png"},
                  {'id': 800, 'day': "https://armte.github.io/FCC4/img/clear-sky.png", 'dayColor': '#2EA7E0',
                            'night': "https://armte.github.io/FCC4/img/slear-sky-night.png"},
                  {'id': 801, 'day': "https://armte.github.io/FCC4/img/few-clouds.png", 'dayColor': '#2EA7E0',
                            'night': "https://armte.github.io/FCC4/img/few-clouds-night.png"},
                  {'id': 802, 'day': "https://armte.github.io/FCC4/img/scattered-clouds.png", 'dayColor': '#FFFFFF',
                            'night': "https://armte.github.io/FCC4/img/scattered-clouds-night.png"},
                  {'id': 803, 'day': "https://armte.github.io/FCC4/img/few-clouds.png", 'dayColor': '#2EA7E0',
                            'night': "https://armte.github.io/FCC4/img/few-clouds-night.png"},
                  {'id': 804, 'day': "https://armte.github.io/FCC4/img/scattered-clouds.png", 'dayColor': '#FFFFFF',
                            'night': "https://armte.github.io/FCC4/img/scattered-clouds-night.png"}
                          ]//end iconArray

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

      $("#celsius").append((data.main.temp).toFixed(1));
      $("#farenheit").append(toFarenheit(data.main.temp).toFixed(1));
      $("#sunRise").append(convertSunRiseSet(data.sys.sunrise));
      $("#sunSet").append(convertSunRiseSet(data.sys.sunset));
      $("#wind-speed-kmHr").append(data.wind.speed);
      $("#wind-speed-miHr").append(((data.wind.speed)/1.6).toFixed(1));
      $("#wind").append(" , " + getWindDirection(data.wind.deg));
      var weatherIndex = iconArray.map(function(x) {return x.id;}).indexOf(data.weather[0].id);

      if(data.sys.sunset >= unixCurrentTime && unixCurrentTime >= data.sys.sunrise){
        $("#forecast").append("Today's Weather: " + data.weather[0].description);
        $("#weather-icon").attr('src', iconArray[weatherIndex].day);
        $("#wallpaper").css('background-color', iconArray[weatherIndex].dayColor);
        console.log("daytime");
      }
      else {
        $("#forecast").append("Tonight's Weather: " + data.weather[0].description);
        $("#weather-icon").attr('src', iconArray[weatherIndex].night);
        $("#wallpaper").css('background-color', 'black');
        $("#weather-box").css({'border-color': nightFontColor, 'color': nightFontColor});
        console.log("night");
      }

      console.log(data.weather[0].id);
      console.log(data.sys.sunrise);
      console.log(unixCurrentTime);
      console.log(data.sys.sunset);
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
