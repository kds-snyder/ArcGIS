$(document).ready(function () {

    require(["esri/Map", "esri/views/MapView"], function (Map, MapView) {
        var map = new Map({
            basemap: "streets"
        });

        var view = new MapView({
            container: "viewDiv", // Reference to the DOM node that will contain the view
            map: map, // References the map object created above
            zoom: 5, // Sets zoom level based on level of detail (LOD)
            center: [-97.6114, 38.8403] // Sets center point of view (Salinas, Kansas) using longitude,latitude
        });
    });

});