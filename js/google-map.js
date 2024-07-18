var google;

function init() {
    // Latitude and longitude for the desired location
    var myLatlng = new google.maps.LatLng(25.227683327691373, 55.17234742516456);

    // Map options
    var mapOptions = {
        zoom: 15,
        center: myLatlng,
        scrollwheel: false,
        styles: [
            {
                "featureType": "administrative.country",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "hue": "#ff0000"
                    }
                ]
            }
        ]
    };

    // Get the HTML DOM element that will contain the map
    var mapElement = document.getElementById('map');

    // Create the Google Map using the element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Marker for the desired location
    new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Global best Accounting & Bookkeeping'
    });
}

// Load the map after the page has finished loading
google.maps.event.addDomListener(window, 'load', init);
