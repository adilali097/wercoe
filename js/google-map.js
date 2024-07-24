
    var myLatlng = { lat: 34.052235, lng: -118.243683 };

    var mapOptions = {
        zoom: 10,
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

    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);

    new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: 'images/loc.png'
    });
}

google.maps.event.addDomListener(window, 'load', init);
