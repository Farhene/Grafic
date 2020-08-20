// Construct the circle (geofence) for NYC
const citymap = {
  nyc: {
      center: {
      lat: 40.67,
      lng: -73.98
      },
      radius: 30000,
      strokeColor: "#56A7D9",
      fillColor: "#56A7D9"
  }
};

function getLocation() {
    navigator.geolocation.getCurrentPosition(blockPage, showError);
}

// Error code borrowed from w3schools
function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        window.open("error.html", "_self");
        break;
      case error.POSITION_UNAVAILABLE:
        window.open("error.html", "_self");
        break;
      case error.TIMEOUT:
        window.open("error.html", "_self");
        break;
      case error.UNKNOWN_ERROR:
        window.open("error.html", "_self");
        break;
    }
  }

function blockPage(position) {
    var your_lat = position.coords.latitude;
    var your_long = position.coords.longitude;

    var nyc_lat = citymap.nyc.center.lat;
    var nyc_long = citymap.nyc.center.lng;
    var radius = citymap.nyc.radius;

    var nyc_distance = getDistance(your_lat, your_long, nyc_lat, nyc_long);
    // If you are outside NYC, display error page
    if (nyc_distance > radius)
    {
        window.open("error.html", "_self");
    }
}

// Haversine formula to get distance from two geo points
function getDistance(lat1, long1, lat2, long2) {
    var earth_radius = 6378100; // in meters
    var dLat = (lat2-lat1) * (Math.PI/180);
    var dLong = (long2-long1) * (Math.PI/180); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * (Math.PI/180)) * Math.cos(lat2 * (Math.PI/180)) * 
      Math.sin(dLong/2) * Math.sin(dLong/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = earth_radius * c; // Distance in meters
    return d;
  }