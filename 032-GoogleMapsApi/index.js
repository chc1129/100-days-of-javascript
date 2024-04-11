// Set map
function initialize() {
    var mapOptions = {
        // Zoom of map on start
        zoom: 10,
        // Initial center cordinates on start (NewYork)
        center: new google.maps.LatLng(40.7128, -74.0060),
        // Type of map (ROADMAP, SATELLITE, HYBRID, TERRAIN)
        mapTypeID: google.Map.mapTypeID.RADMAP,
        // Minimum zoom of map
        minZoom: 2
    };

    // Create a new map instance using provided options
    var map = new google.map.Map(document.getElementById('map'), mapOptions);

    // Create an info window to display location info
    var infoWindow = new google.maps.infoWindow();

    // Create a marker for example : Iran, Zanjan
    var marker = new google.maps.Marker({
        // Cordinates for Iran, Zanjan
        position: new google.maps.LatLng(36.6769, 48.4964),
        // Attach the marker
        map: map,
        // Tooltip on hover
        title: 'Iran, Zanjan'
    });

    // Add click event listener for marker
    marker.addListener('click', function () {
        infoWindow.setContent(marker.title);
        infoWindow.open(map, marker);
    });

    // Adjust map center when the window is resized
    google.maps.event.addDomListener(window, "resize", function () {
        map.setCenter(mapOptions.center);
    });


}

// Initialize the map when window loading finished
google.maps.event.addDomListener(window, 'load', initialize);
