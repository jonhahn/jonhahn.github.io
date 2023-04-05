

// API calls

// Functions to get weather data

var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

getJSON('https://forecast.weather.gov/MapClick.php?lat=45&lon=-93.2&FcstType=json',
    function(err, data) {
      if (err !== null) {
        alert('Something went wrong: ' + err);
      } else {
        $("#weather").html("<h4>Weather Forecast for the Twin Cities</h4><p>" + data.time.startPeriodName[0] +": " +
                                data.data.temperature[0] + "</p><p>" +
                                data.time.startPeriodName[1] +": " + data.data.temperature[1] + "</p>");
        console.log(data);
      }
    });

chnls = {"SpencleyDesignCo": "UC4Xarmlw0RJ573ZgJO2b5GA", "KylaScanlon": "UC-J8PybPmYl6VJbu8sCRdHQ", "Veritasium": "UCHnyfMqiRRG1u-2MsSQLbXA", "GothamChess": ""}
playlists = {"SpencleyDesignCo":"UU4Xarmlw0RJ573ZgJO2b5GA", "KylaScanlon": "UU-J8PybPmYl6VJbu8sCRdHQ", "Veritasium": "UUHnyfMqiRRG1u-2MsSQLbXA", "GothamChess": "UUQHX6ViZmPsWiYSFAyS0a3Q"}

// Functions to get Youtube data

add_yt = function(play) {
    youtubeQ1 = jQuery.getJSON("https://www.googleapis.com/youtube/v3/playlistItems?playlistId=" + play + "&key=AIzaSyAMMgNSvpkyrnaIxftZFxQ45ra5w-Hf9wU&part=snippet&maxResults=1",
    function(data) {
         console.log(data)
         vid = data.items[0].snippet;
         title = vid.title;
         time = vid.publishedAt;
         img = vid.thumbnails.medium.url;
         url = vid.resourceId.videoId;
         link = '<a href="https://www.youtube.com/watch?v=' + url + '">'

         html = '<div class="row"><div class="col-6">' + title + '</div><div class="col-6">' + link + '<img src="' + img + '" style="width:100%"></a></div></div>'

         $("#yt").append(html)
    });
}

add_yt("UUQHX6ViZmPsWiYSFAyS0a3Q")
//add_yt("UU4Xarmlw0RJ573ZgJO2b5GA")
add_yt("UU-J8PybPmYl6VJbu8sCRdHQ")
add_yt("UUHnyfMqiRRG1u-2MsSQLbXA")


