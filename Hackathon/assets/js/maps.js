/*
    Majority of the code is from the Google API sample code
    I just edited and combined multiple sample codes
*/

// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
var map, infoWindow;

"use strict";

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.730, lng: -73.935},
        zoom: 10
    });
    infoWindow = new google.maps.InfoWindow;

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

    for (const city in citymap) {
        // Add the circle for this city to the map.
        const cityCircle = new google.maps.Circle({
        strokeColor: citymap[city].strokeColor,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: citymap[city].fillColor,
        fillOpacity: 0.35,
        map,
        center: citymap[city].center,
        radius: citymap[city].radius
        });
    }
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
    
        new google.maps.Marker({
            position: pos,
            animation: google.maps.Animation.DROP,
            map: map
        });
        map.setCenter(pos);
        }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
        });
    }
    else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                            'Error: The Geolocation service failed.' :
                            'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}
