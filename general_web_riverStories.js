
    // var boxHistoriasWidth = document.getElementById("historias-legend").style.width();

$(document).ready(function() {

/**/
//var boxHistoriasWidth = $("#historias-legend").width();

    var butts = document.getElementsByClassName("button-back");
    for (var i = 0; i < butts.length; i++) {
        butts[i].addEventListener("click", function() {

            $('#overlay').fadeOut(600);
            $('#historias-overlay').fadeOut(600);
            $('#videohistorias-overlay').fadeOut(600);
            $('#vuelos-overlay').fadeOut(600);

            $('#videohistorias-overlay-2').fadeOut(600);
            $('#videohistorias-overlay-3').fadeOut(600);

            $('#vuelos-overlay-2').fadeOut(600);
            $('#vuelos-overlay-3').fadeOut(600);

            $('#historias-overlay-2').fadeOut(600);
            $('#historias-overlay-3').fadeOut(600);

        });
    }


/**/

    /*myVar = setInterval(gifLeyenda, 10000);

    function gifLeyenda() {}*/


/*
        document.getElementById('historias-legend').style.display = 'block';
        document.getElementById('historias-icon').src = "https://citariverstories.s3-us-west-1.amazonaws.com/img/ICO1.gif";
        document.getElementById('videohistorias-legend').style.display = 'block';
        document.getElementById('videohistorias-icon').src = "https://citariverstories.s3-us-west-1.amazonaws.com/img/ICO2.gif";
        document.getElementById('vuelo-legend').style.display = 'block';
        document.getElementById('vuelo-icon').src = "https://citariverstories.s3-us-west-1.amazonaws.com/img/ICO3.gif";



    setTimeout(function() {
        document.getElementById('historias-legend').style.display = 'none';
        document.getElementById('historias-icon').src = "https://citariverstories.s3-us-west-1.amazonaws.com/img/icon-historias.png";
        document.getElementById('videohistorias-legend').style.display = 'none';
        document.getElementById('videohistorias-icon').src = "https://citariverstories.s3-us-west-1.amazonaws.com/img/icon-videohistorias.png";
        document.getElementById('vuelo-legend').style.display = 'none';
        document.getElementById('vuelo-icon').src = "https://citariverstories.s3-us-west-1.amazonaws.com/img/icon-vuelo.png";
    }, 7000);
*/

    document.getElementById('historias-legend').style.display = 'block';
    document.getElementById('historias-icon').src = "https://citariverstories.s3-us-west-1.amazonaws.com/img/ICO1.gif";
    document.getElementById('videohistorias-legend').style.display = 'block';
    document.getElementById('videohistorias-icon').src = "https://citariverstories.s3-us-west-1.amazonaws.com/img/ICO2.gif";
    document.getElementById('vuelo-legend').style.display = 'block';
    document.getElementById('vuelo-icon').src = "https://citariverstories.s3-us-west-1.amazonaws.com/img/ICO3.gif";


    var boxHistoriasWidth = $("#historias-legend").width();

    var boxVideohistoriasWidth = $("#videohistorias-legend").width();

    var boxVueloWidth = $("#vuelo-legend").width();
 


    setTimeout(function() {
        /* document.getElementById('historias-legend').style.width = '0px'; */
        // document.getElementById('historias-legend').style.width = '0px';


        document.getElementById('historias-legend').style.width = '0px';
 
        // document.getElementById('HISTORIAS-TEXT-ID').style.width = '0px';

        document.getElementById('historias-icon').src = "https://citariverstories.s3-us-west-1.amazonaws.com/img/icon-historias.png";
        //document.getElementById('videohistorias-legend').style.display = 'none';

        document.getElementById('videohistorias-legend').style.width = '0px';
        document.getElementById('videohistorias-icon').src = "https://citariverstories.s3-us-west-1.amazonaws.com/img/icon-videohistorias.png";
        //document.getElementById('vuelo-legend').style.display = 'none';

        document.getElementById('vuelo-legend').style.width = '0px';
        document.getElementById('vuelo-icon').src = "https://citariverstories.s3-us-west-1.amazonaws.com/img/icon-vuelo.png";
    }, 2200);

    /*
    https://citariverstories.s3-us-west-1.amazonaws.com/img/ICO1.gif
    * https://citariverstories.s3-us-west-1.amazonaws.com/img/ICO2.gif
    * https://citariverstories.s3-us-west-1.amazonaws.com/img/ICO3.gif*/

    /*
    * https://citariverstories.s3-us-west-1.amazonaws.com/img/icon-historias.png
    * https://citariverstories.s3-us-west-1.amazonaws.com/img/icon-videohistorias.png
    * https://citariverstories.s3-us-west-1.amazonaws.com/img/icon-vuelo.png*/


    /**/
/*     document.getElementById("historias-icon").onmouseover = function(){
        // alert("Hello World!");
        // document.getElementById("overlay").fadeOut(1000);
        // $('#historias-legend').style.display = 'block';

        document.getElementById('historias-legend').css("margin-left", (document.getElementById('body_main').width() - document.getElementById('historias-legend').width()) + "px");
        // $("#historias-legend").css("margin-left", ($("body").width() - $("#historias-legend").width()) + "px");

        // document.getElementById('historias-legend').style.display = 'block';


        document.getElementById('historias-icon').src = "https://citariverstories.s3-us-west-1.amazonaws.com/img/ICO1.gif";

    };
    document.getElementById('historias-icon').onmouseleave = function(){
        document.getElementById('historias-legend').style.display = 'none';

        document.getElementById('historias-icon').src = "https://citariverstories.s3-us-west-1.amazonaws.com/img/icon-historias.png";

    }; */

    

    // var boxHistoriasWidth = $("#historias-legend").width();
    $("#historias-icon").mouseenter(function () {
        document.getElementById('historias-icon').src = "https://citariverstories.s3-us-west-1.amazonaws.com/img/ICO1.gif";
        $("#historias-legend").animate({
            //width: 120
            width: boxHistoriasWidth
        });
    });
    $("#historias-icon").mouseleave(function(){
        document.getElementById('historias-icon').src = "https://citariverstories.s3-us-west-1.amazonaws.com/img/icon-historias.png";
        $("#historias-legend").animate({
            width: 0
        });
    });

    /* var boxHistoriasWidth = $("#historias-legend").width();
    $("#historias-icon").mouseenter(function () {
        document.getElementById('historias-icon').src = "https://citariverstories.s3-us-west-1.amazonaws.com/img/ICO1.gif";
        $("#historias-legend").animate({
            width: boxHistoriasWidth
        });
    }); */
    
    
    $("#videohistorias-icon").mouseenter(function () {
        document.getElementById('videohistorias-icon').src = "https://citariverstories.s3-us-west-1.amazonaws.com/img/ICO2.gif";
        $("#videohistorias-legend").animate({
            width: boxVideohistoriasWidth
        });
    });
    $("#videohistorias-icon").mouseleave(function(){
        document.getElementById('videohistorias-icon').src = "https://citariverstories.s3-us-west-1.amazonaws.com/img/icon-videohistorias.png";
        $("#videohistorias-legend").animate({
            width: 0
        });
    });



    $("#vuelo-icon").mouseenter(function () {
        document.getElementById('vuelo-icon').src = "https://citariverstories.s3-us-west-1.amazonaws.com/img/ICO3.gif";
        $("#vuelo-legend").animate({
            width: boxVueloWidth
        });
    });
    $("#vuelo-icon").mouseleave(function(){
        document.getElementById('vuelo-icon').src = "https://citariverstories.s3-us-west-1.amazonaws.com/img/icon-vuelo.png";
        $("#vuelo-legend").animate({
            width: 0
        });
    });


    /* document.getElementById("videohistorias-icon").onmouseover = function(){
        document.getElementById('videohistorias-legend').style.display = 'block';
        document.getElementById('videohistorias-icon').src = "https://citariverstories.s3-us-west-1.amazonaws.com/img/ICO2.gif";
    };

    document.getElementById('videohistorias-icon').onmouseleave = function(){
        document.getElementById('videohistorias-legend').style.display = 'none';
        document.getElementById('videohistorias-icon').src = "https://citariverstories.s3-us-west-1.amazonaws.com/img/icon-videohistorias.png";
    };


    document.getElementById("vuelo-icon").onmouseover = function(){
        document.getElementById('vuelo-legend').style.display = 'block';
        document.getElementById('vuelo-icon').src = "https://citariverstories.s3-us-west-1.amazonaws.com/img/ICO3.gif";
    };

    document.getElementById('vuelo-icon').onmouseleave = function(){
        document.getElementById('vuelo-legend').style.display = 'none';
        document.getElementById('vuelo-icon').src = "https://citariverstories.s3-us-west-1.amazonaws.com/img/icon-vuelo.png";
    }; */


});


var map;


function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}


function addSinglePolygonToMap(JSON_path, river_data_layer, strokeColor, strokeOpacity, fillColor, fillOpacity) {

    $.getJSON(JSON_path, function (json) {

        river_data_layer.addGeoJson(json);
        river_data_layer.setStyle(function(feature) {
            return {
                strokeColor: strokeColor,
                strokeOpacity: strokeOpacity,
                fillColor: fillColor,
                fillOpacity: fillOpacity,
                strokeWeight: 1.0
            }
        });

    });

}


function addRegionJSONToMap(JSON_path, river_data_layer, strokeColor, strokeOpacity, fillColor, fillOpacity) {

    $.getJSON(JSON_path, function (json) {

        river_data_layer.addGeoJson(json);

        river_data_layer.setStyle(

            function(feature) {

                if(feature.getProperty('workshop_enable') === 1){
                    return {strokeColor: "#FFFFFF", strokeOpacity: 1.0, fillColor: "#8CE1F0", fillOpacity: 1.0, strokeWeight: 1}
                }
                else{
                    return {strokeColor: "#FFFFFF", strokeOpacity: 1.0, fillColor: "#CCCCCC", fillOpacity: 1.0, strokeWeight: 1}
                }
            }
        );


        river_data_layer.forEach(function (feature) {

            if(feature.getProperty('NAME_1') === "Loreto"){
                river_data_layer.overrideStyle(feature, {strokeColor: "#FFFFFF", strokeOpacity: 1.0, fillColor: "#03BEDF", fillOpacity: 1.0, strokeWeight: 1});
            }
        });

        river_data_layer.addListener('click', function (event) {
            // console.log(event.feature.getProperty("NAME_1"));
            var region = event.feature.getProperty("NAME_1");


            if(event.feature.getProperty("workshop_enable") === 1){

                river_data_layer.forEach(function (feature) {
                    river_data_layer.revertStyle();
                });

                document.getElementById("info-region").src = "https://citadancingrivers.s3-us-west-1.amazonaws.com/img/" + region + "-statistics" + ".png";
                river_data_layer.overrideStyle(event.feature, {fillColor: '#03BEDF'});
            }

        })

    });

}


function addMarkersGeoJSON(JSON_path, river_data_layer, markerIconImagePath, clickCallback, mouseoverCallback, mouseoutCallback) {

    $.getJSON(JSON_path, function (json) {

        river_data_layer.addGeoJson(json);
        river_data_layer.setStyle(function(feature) {
            return {
                icon: markerIconImagePath,
            }
        });

        river_data_layer.addListener('click', function(event) {
            if(clickCallback !== null) clickCallback(event);
        });

        river_data_layer.addListener("mouseover", function (event) {
            if(mouseoverCallback !== null) mouseoverCallback(event);
        });

        river_data_layer.addListener("mouseout", function (event) {
            if(mouseoutCallback !== null) mouseoutCallback(event);
        });

    });

}


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


function getJSONP(url, success) {

    var ud = '_' + +new Date,
        script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0]
            || document.documentElement;

    window[ud] = function(data) {
        head.removeChild(script);
        success && success(data);
    };

    script.src = url.replace('callback=?', 'callback=' + ud);
    head.appendChild(script);

}



function fetchJSON(url) {
    return fetch(url)
        .then(function(response) {
            return response.json();
        });
}



function initMap() {

    // The location of Uluru
    //-75.355, -10.722
    //-75.399, -10.938
    //lat: -25.344, lng: 131.036
    var uluru = {lat: -9.348230, lng: -74.869015};

    // var peruBounds = {north: -0.08, south: -18.3955, west: -81.455, east: -68.361};
    var peruBounds = {north: 30, south: -40, west: -81.455, east: -68.361};

    // The map, centered at Uluru
    map = new google.maps.Map(document.getElementById('map'), {
        // zoom: 5.3,
        zoom: 5.5,
        minZoom: 5,
        maxZoom: 18,
        center: uluru,
        disableDefaultUI: true,


        /*scaleControl: false,
        gestureHandling: 'none',
        zoomControl: false,
        restriction: {
            latLngBounds: peruBounds,
            strictBounds: false,
        },*/


        scaleControl: true,
        // gestureHandling: 'none',
        zoomControl: true,
        /*restriction: {
            latLngBounds: peruBounds,
            strictBounds: false,
        },*/


        styles: [
            {
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "elementType": "labels",
                "stylers": [
                    {
                        "color": "#0000ff"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "stylers": [
                    {
                        "color": "#8DD79E"
                    }
                ]
            },
            {
                "featureType": "road",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels",
                "stylers": [
                    {
                        "color": "#0000ff"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "stylers": [
                    {
                        // "color": "#ffffff"
                        // "color": "#97EFFF"
                        "color": "#59F1FF"
                    }
                ]
            }
        ]
    });

/**/

/*    google.maps.event.addListener(map, 'zoom_changed', function() {
        console.log("zoom changed asas");
        map.data.setStyle(function (feature) {

            var mag = 3;
            var grd = feature.getProperty('Grd');
            var ctgData = feature.getProperty('Ctg');
            var ctgColor = {
                "historias": "https://citariverstories.s3-us-west-1.amazonaws.com/img/icon-historias.png",
                "videohistorias": "https://citariverstories.s3-us-west-1.amazonaws.com/img/icon-videohistorias.png",
                "vuelos": "https://citariverstories.s3-us-west-1.amazonaws.com/img/icon-vuelo.png"
            };
            var ctgColor = {
                "Seguridad": "https://storage.googleapis.com/operations_poligone/iconos/Safety_T02.png",
                "Espacio": "https://storage.googleapis.com/operations_poligone/iconos/Neat_T02.png",
                "Iluminacion": "https://storage.googleapis.com/operations_poligone/iconos/Lightning_T03.png"
            };

            console.log("zoom changed");

            var size;
            var zoom = map.getZoom();
            if (zoom > 13) {
                console.log("mayor que 13");
                size = new google.maps.Size(44,34);
            } else {
                console.log("menor que 13");

                size = new google.maps.Size(22,17);
            }
            return ({
                icon: {url: ctgColor[ctgData],
                    size: size,
                    scaledSize: size}
            });

        });
    });*/


/**/

/*
    google.maps.event.addListener(map, 'zoom_changed', function() {
        console.log("zoom changed asas");

        map.data.setStyle(function (feature) {

            var mag = 3;
            var grd = feature.getProperty('Grd');
            var ctgData = feature.getProperty('Ctg');
            var ctgColor = {
                "historias": "https://citariverstories.s3-us-west-1.amazonaws.com/img/icon-historias.png",
                "videohistorias": "https://citariverstories.s3-us-west-1.amazonaws.com/img/icon-videohistorias.png",
                "vuelos": "https://citariverstories.s3-us-west-1.amazonaws.com/img/icon-vuelo.png"
            };
            var ctgColor = {
                "Seguridad": "https://storage.googleapis.com/operations_poligone/iconos/Safety_T02.png",
                "Espacio": "https://storage.googleapis.com/operations_poligone/iconos/Neat_T02.png",
                "Iluminacion": "https://storage.googleapis.com/operations_poligone/iconos/Lightning_T03.png"
            };

            console.log("zoom changed");

            var size;
            var zoom = map.getZoom();
            if (zoom > 13) {
                console.log("mayor que 13");
                size = new google.maps.Size(44,34);
            } else {
                console.log("menor que 13");

                size = new google.maps.Size(22,17);
            }
            return ({
                icon: {url: ctgColor[ctgData],
                    size: size,
                    scaledSize: size}
            });

        });
    });
*/

/**/

   /* google.maps.event.addListener(map, 'zoom_changed', function() {

        // map.data.setStyle(function(feature) {
        //     var theaterName = feature.getProperty('name');
        //     return {
        //         icon: "https://maps.gstatic.com/mapfiles/ms2/micons/marina.png",
        //         visible: true,
        //         clickable: true,
        //         title: theaterName
        //     };
        // });


    });*/



    /*map.data.setStyle(function(feature) {
        var theaterName = feature.getProperty('name');
        return {
            icon: "https://maps.gstatic.com/mapfiles/ms2/micons/marina.png",
            visible: true,
            clickable: true,
            title: theaterName
        };
    });
    map.setMap(map);*/


    /**/


    /*var iconBase =
        'https://developers.google.com/maps/documentation/javascript/examples/full/images/';

    var icons = {
        parking: {
            icon: iconBase + 'parking_lot_maps.png'
        },
        library: {
            icon: iconBase + 'library_maps.png'
        },
        info: {
            icon: iconBase + 'info-i_maps.png'
        }
    };*/


    var iconBase =
        'https://citariverstories.s3-us-west-1.amazonaws.com/img/';

    /*var icons = {
        historias: {
            icon: iconBase + 'icon-historias.png',

        },
        videohistorias: {
            icon: iconBase + 'icon-videohistorias.png'
        },
        vuelos: {
            icon: iconBase + 'icon-vuelo.png'
        }
    };
*/

    /*var icon = {
        url: "https://citariverstories.s3-us-west-1.amazonaws.com/img/icon-historias.png", // url
        scaledSize: new google.maps.Size(50, 50), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };*/

    var historias = {
        url: "https://citariverstories.s3-us-west-1.amazonaws.com/img/icon-historias.png", // url
        scaledSize: new google.maps.Size(25, 25), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    var videohistorias = {
        url: "https://citariverstories.s3-us-west-1.amazonaws.com/img/icon-videohistorias.png", // url
        scaledSize: new google.maps.Size(25, 25), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    var vuelos = {
        url: "https://citariverstories.s3-us-west-1.amazonaws.com/img/icon-vuelo.png", // url
        scaledSize: new google.maps.Size(25, 25), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };


    var icons = {
        historias, videohistorias, vuelos
    };


/**/
    var historias_gif = {
        url: "https://citariverstories.s3-us-west-1.amazonaws.com/img/M1A.gif", // url
        scaledSize: new google.maps.Size(39, 50), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(7, 20) // anchor

        /*scaledSize: new google.maps.Size(50, 50), // scaled size
        origin: new google.maps.Point(50,50), // origin
        anchor: new google.maps.Point(100, 100) // anchor*/
    };

    var videohistorias_gif = {
        url: "https://citariverstories.s3-us-west-1.amazonaws.com/img/M2A.gif", // url
        scaledSize: new google.maps.Size(39, 50), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(7, 20) // anchor
    };

    var vuelos_gif = {
        url: "https://citariverstories.s3-us-west-1.amazonaws.com/img/M3A.gif", // url
        scaledSize: new google.maps.Size(39, 50), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(7, 20) // anchor
    };


    var features = [
        {
            position: new google.maps.LatLng(-6.054367, -75.575485),
            type: 'historias'
        }/*{
            position: new google.maps.LatLng(-33.91721, 151.22630),
            type: 'info'
        }*/,  {
            position: new google.maps.LatLng(-9.388860, -75.062398),
            type: 'videohistorias'
        }, {
            position: new google.maps.LatLng(-6.524669, -78.093900),
            type: 'vuelos'
        }
    ];

    // Create markers.
    /*for (var i = 0; i < features.length; i++) {
        var marker = new google.maps.Marker({
            position: features[i].position,
            icon: icons[features[i].type],
            // icon: icon,
            /!*scaledSize: new google.maps.Size(50, 50), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(0, 0), // anchor*!/
            map: map
        });
    };*/

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(-6.054367, -75.575485),
        // position: features[i].position,
        icon: historias,
        // icon: icons[features[i].type],
        map: map
    });

    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(-9.388860, -75.062398),
        // position: features[i].position,
        icon: videohistorias,
        // icon: icons[features[i].type],
        map: map
    });

    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(-6.524669, -78.093900),
        icon: vuelos,
        map: map
    });
    /*-4.249468, -76.785465
    * -4.611474, -75.817220
    * -4.812510, -74.741391
    * -6.070886, -77.673023
    * -6.235732, -75.534181
    * -6.812278, -75.185997
    *
    -8.652290, -76.595312
    -8.832553, -74.870974
    -10.075506, -75.185997
    -7.618266, -76.230548
    -10.173438, -74.207767
    -3.857616, -73.511400
    */

    var marker_videohistorias_2 = new google.maps.Marker({
        position: new google.maps.LatLng(-4.249468, -76.785465),
        icon: videohistorias,
        map: map
    });
    var marker_vuelos_2 = new google.maps.Marker({
        position: new google.maps.LatLng(-4.611474, -75.817220),
        icon: vuelos,
        map: map
    });
    var marker_historias_2 = new google.maps.Marker({
        // position: new google.maps.LatLng(-4.812510, -74.741391),
        position: new google.maps.LatLng(-5.103795, -74.741391),
        icon: historias,
        map: map
    });
    var marker_vuelos_3 = new google.maps.Marker({
        position: new google.maps.LatLng(-6.070886, -75.197363),
        icon: vuelos,
        map: map
    });
    var marker_videohistorias_3 = new google.maps.Marker({
        position: new google.maps.LatLng(-6.812278, -75.185997),
        icon: videohistorias,
        map: map
    });
    var marker_historias_3 = new google.maps.Marker({
        // position: new google.maps.LatLng(-8.652290, -76.595312),
        position: new google.maps.LatLng(-5.5261864,-74.3829377),
        icon: historias,
        map: map
    });
     var marker10 = new google.maps.Marker({
        position: new google.maps.LatLng(-8.832553, -74.870974),
        icon: vuelos,
        map: map
    });
     var marker11 = new google.maps.Marker({
        position: new google.maps.LatLng(-10.075506, -75.185997),
        icon: historias,
        map: map
    });
    var marker12 = new google.maps.Marker({
        position: new google.maps.LatLng(-7.618266, -76.230548),
        icon: videohistorias,
        map: map
    });
    var marker13 = new google.maps.Marker({
        position: new google.maps.LatLng(-10.173438, -74.207767),
        icon: historias,
        map: map
    });
    var marker14 = new google.maps.Marker({
        position: new google.maps.LatLng(-3.857616, -73.511400),
        icon: historias,
        map: map
    });

    /**/


/*-----------*/
    /*    map.addListener('zoom_changed', function() {
            var a= map.getZoom();
                console.log(a);
            /!*if (map.zoom === 18) {
                console.log(marker.icon);
                marker.icon.scaledSize = new google.maps.Size(100, 100);
                marker.icon.size = new google.maps.Size(100, 100);
                marker.setMap(map);
            }

            if (map.zoom === 15) {
                //restore to original size upon specific zoom
                marker.icon.scaledSize = new google.maps.Size(80, 80);
                marker.icon.size = new google.maps.Size(80, 80);
                marker.setMap(map);
            }*!/

            /!*if (map.zoom === 15) {
                //restore to original size upon specific zoom
                marker.icon.scaledSize = new google.maps.Size(20, 34);
                marker.icon.size = new google.maps.Size(20, 34);
                marker.setMap(map);
            }*!/

            var historias_gif_ = {
                url: "https://citariverstories.s3-us-west-1.amazonaws.com/img/M1A.gif", // url
                scaledSize: new google.maps.Size(39, 50), // scaled size
                origin: new google.maps.Point(0,0), // origin
                anchor: new google.maps.Point(7, 20) // anchor

                /!*scaledSize: new google.maps.Size(50, 50), // scaled size
                origin: new google.maps.Point(50,50), // origin
                anchor: new google.maps.Point(100, 100) // anchor*!/
            };


            if (map.zoom === 6) {
                //restore to original size upon specific zoom
                marker.icon.scaledSize = new google.maps.Size(25, 25);
                marker.icon.size = new google.maps.Size(25, 25);
                marker.setMap(map);
            }

            if (map.zoom === 8) {
                //restore to original size upon specific zoom
                marker.icon.scaledSize = new google.maps.Size(35, 35);
                marker.icon.size = new google.maps.Size(35, 35);
                marker.setMap(map);

                /!*marker.addListener('mouseover',function () {

                    // document.getElementById('vuelo-icon').src = "https://citariverstories.s3-us-west-1.amazonaws.com/img/ICO3.gif";

                    marker.setIcon(historias_gif);
                    marker.icon.scaledSize = new google.maps.Size(35, 35);
                    marker.icon.size = new google.maps.Size(35, 35);
                    // marker.setIcon
                    // marker.setIcon("https://citariverstories.s3-us-west-1.amazonaws.com/img/M1A.gif").scaledSize(10,10);
                })*!/

                historias_gif_ = {
                    url: "https://citariverstories.s3-us-west-1.amazonaws.com/img/M1A.gif", // url
                    scaledSize: new google.maps.Size(35, 45), // scaled size
                    origin: new google.maps.Point(0,0), // origin
                    anchor: new google.maps.Point(7, 20) // anchor

                };

                /!*historias_gif_ = {
                    url: "https://citariverstories.s3-us-west-1.amazonaws.com/img/M1A.gif", // url
                    scaledSize: new google.maps.Size(39, 50), // scaled size
                    origin: new google.maps.Point(0,0), // origin
                    anchor: new google.maps.Point(7, 20) // anchor

                    /!*scaledSize: new google.maps.Size(50, 50), // scaled size
                    origin: new google.maps.Point(50,50), // origin
                    anchor: new google.maps.Point(100, 100) // anchor*!/
                };*!/
            }

            if (map.zoom === 11) {
                //restore to original size upon specific zoom
                marker.icon.scaledSize = new google.maps.Size(50, 50);
                marker.icon.size = new google.maps.Size(50, 50);
                marker.setMap(map);
            }

            if (map.zoom === 13) {
                //restore to original size upon specific zoom
                marker.icon.scaledSize = new google.maps.Size(60, 60);
                marker.icon.size = new google.maps.Size(60, 60);
                marker.setMap(map);


                historias_gif_ = {
                    url: "https://citariverstories.s3-us-west-1.amazonaws.com/img/M1A.gif", // url
                    scaledSize: new google.maps.Size(39, 50), // scaled size
                    origin: new google.maps.Point(0,0), // origin
                    anchor: new google.maps.Point(7, 20) // anchor

                    /!*scaledSize: new google.maps.Size(50, 50), // scaled size
                    origin: new google.maps.Point(50,50), // origin
                    anchor: new google.maps.Point(100, 100) // anchor*!/
                };
            }

            if (map.zoom === 15) {
                //restore to original size upon specific zoom
                marker.icon.scaledSize = new google.maps.Size(70, 70);
                marker.icon.size = new google.maps.Size(70, 70);
                marker.setMap(map);
            }

            if (map.zoom === 18) {
                //restore to original size upon specific zoom
                marker.icon.scaledSize = new google.maps.Size(85, 85);
                marker.icon.size = new google.maps.Size(85, 85);
                marker.setMap(map);
            }
            //scaledSize: new google.maps.Size(25, 25), // scaled size

            /!*var historias_gif_ = {
                url: "https://citariverstories.s3-us-west-1.amazonaws.com/img/M1A.gif", // url
                scaledSize: new google.maps.Size(39, 50), // scaled size
                origin: new google.maps.Point(0,0), // origin
                anchor: new google.maps.Point(7, 20) // anchor

                /!*scaledSize: new google.maps.Size(50, 50), // scaled size
                origin: new google.maps.Point(50,50), // origin
                anchor: new google.maps.Point(100, 100) // anchor*!/
            };*!/

            marker.addListener('mouseover',function () {

                // document.getElementById('vuelo-icon').src = "https://citariverstories.s3-us-west-1.amazonaws.com/img/ICO3.gif";

                // marker.setIcon(historias_gif);
                // marker.icon.url('https://citariverstories.s3-us-west-1.amazonaws.com/img/M1A.gif');
                marker.setIcon(historias_gif_);
                // marker.setIcon
                // marker.setIcon("https://citariverstories.s3-us-west-1.amazonaws.com/img/M1A.gif").scaledSize(10,10);
            })

            marker.addListener('mouseout',function () {
                marker.setIcon(historias);
                // marker.setIcon("https://citariverstories.s3-us-west-1.amazonaws.com/img/icon-historias.png").scaledSize(size(30,30));
                // marker.setIcon("https://citariverstories.s3-us-west-1.amazonaws.com/img/icon-historias.png").size(10,10);
            })




        });*/
    /*map.addListener('zoom_changed', function() {
        var a= map.getZoom();
        console.log(a);
        if (map.zoom === 18) {
            console.log(marker.icon);
            marker.icon.scaledSize = new google.maps.Size(100, 100);
            marker.icon.size = new google.maps.Size(100, 100);
            marker.setMap(map);
        }

        if (map.zoom === 15) {
            //restore to original size upon specific zoom
            marker.icon.scaledSize = new google.maps.Size(20, 34);
            marker.icon.size = new google.maps.Size(20, 34);
            marker.setMap(map);
        }
    });*/
    /**/
    /*marker.addListener('click', function() {
        infowindow.open(marker.get('map'), marker);
    });
*/

    marker.addListener('click', function() {

        // console.log("click");

        $('#overlay').fadeIn(500);
        $('#historias-overlay').fadeIn(500);

        // document.getElementById("overlay").style.display = "block";

    });


    /**/
    marker2.addListener('click', function() {

        // console.log("click");

        $('#overlay').fadeIn(500);
        $('#videohistorias-overlay').fadeIn(500);

        // document.getElementById("overlay").style.display = "block";

    });


    /**/

    marker3.addListener('click', function() {
        // console.log("click");
        $('#overlay').fadeIn(500);
        $('#vuelos-overlay').fadeIn(500);
    });



    marker_videohistorias_2.addListener('click', function() {
        // console.log("click");
        $('#overlay').fadeIn(500);
        $('#videohistorias-overlay-2').fadeIn(500);
    });

    marker_videohistorias_3.addListener('click', function() {
        // console.log("click");
        $('#overlay').fadeIn(500);
        $('#videohistorias-overlay-3').fadeIn(500);
    });

    /**/

    marker_vuelos_2.addListener('click', function() {
        // console.log("click");
        $('#overlay').fadeIn(500);
        $('#vuelos-overlay-2').fadeIn(500);
    });

    marker_vuelos_3.addListener('click', function() {
        // console.log("click");
        $('#overlay').fadeIn(500);
        $('#vuelos-overlay-3').fadeIn(500);
    });



    marker_historias_2.addListener('click', function() {
        $('#overlay').fadeIn(500);
        $('#historias-overlay-2').fadeIn(500);
    });

    marker_historias_3.addListener('click', function() {
        $('#overlay').fadeIn(500);
        $('#historias-overlay-3').fadeIn(500);
    });


    /*-------------*/
/*    marker.addListener('mouseover',function () {

        // document.getElementById('vuelo-icon').src = "https://citariverstories.s3-us-west-1.amazonaws.com/img/ICO3.gif";

        marker.setIcon(historias_gif);
        // marker.setIcon("https://citariverstories.s3-us-west-1.amazonaws.com/img/M1A.gif").scaledSize(10,10);
    })

    marker.addListener('mouseout',function () {
        marker.setIcon(historias);
        // marker.setIcon("https://citariverstories.s3-us-west-1.amazonaws.com/img/icon-historias.png").scaledSize(size(30,30));
        // marker.setIcon("https://citariverstories.s3-us-west-1.amazonaws.com/img/icon-historias.png").size(10,10);
    })*/


/**/



    marker.addListener('mouseover',function () {
        marker.setIcon(historias_gif);
    })

/**/

    marker.addListener('mouseout',function () {
        marker.setIcon(historias);

    })

    /**/
    marker2.addListener('mouseover',function () {
        marker2.setIcon(videohistorias_gif);
    })

    marker2.addListener('mouseout',function () {
        marker2.setIcon(videohistorias);
    })

    /**/
    marker3.addListener('mouseover',function () {
        marker3.setIcon(vuelos_gif);
    })

    marker3.addListener('mouseout',function () {
        marker3.setIcon(vuelos);
    })

/**/
    marker_videohistorias_2.addListener('mouseover',function () {
        marker_videohistorias_2.setIcon(videohistorias_gif);
    })

    marker_videohistorias_2.addListener('mouseout',function () {
        marker_videohistorias_2.setIcon(videohistorias);
    })


    marker_videohistorias_3.addListener('mouseover',function () {
        marker_videohistorias_3.setIcon(videohistorias_gif);
    })

    marker_videohistorias_3.addListener('mouseout',function () {
        marker_videohistorias_3.setIcon(videohistorias);
    })


/**/
    marker_vuelos_2.addListener('mouseover',function () {
        marker_vuelos_2.setIcon(vuelos_gif);
    })

    marker_vuelos_2.addListener('mouseout',function () {
        marker_vuelos_2.setIcon(vuelos);
    })


    marker_vuelos_3.addListener('mouseover',function () {
        marker_vuelos_3.setIcon(vuelos_gif);
    })

    marker_vuelos_3.addListener('mouseout',function () {
        marker_vuelos_3.setIcon(vuelos);
    })

/**/
    marker_historias_2.addListener('mouseover',function () {
        marker_historias_2.setIcon(historias_gif);
    })

    marker_historias_2.addListener('mouseout',function () {
        marker_historias_2.setIcon(historias);
    })


    marker_historias_3.addListener('mouseover',function () {
        marker_historias_3.setIcon(historias_gif);
    })

    marker_historias_3.addListener('mouseout',function () {
        marker_historias_3.setIcon(historias);
    })

    /**/

    var bounds_layer = new google.maps.Data();
    var regions_layer = new google.maps.Data();
    var markers_layer = new google.maps.Data();



    /*getJSONP('https://citariverstories.s3-us-west-1.amazonaws.com/JSON/boundaries_PER.geojson', function(data){
        //console.log(data);
        addSinglePolygonToMap(data, bounds_layer, "#B8EDC5", 1.0, "#B8EDC5", 1.0);

    });*/



    /*var data = fetchJSON('data/us-states.geojson')
        .then(function(data) { return data })*/
    // var data = fetchJSON('https://citariverstories.s3-us-west-1.amazonaws.com/JSON/boundaries_PER.geojson')


    /*Revisar*/
    /*var data = fetchJSON('https://citariverstories.s3-us-west-1.amazonaws.com/JSON/Mascara.geojson')
        .then(function(data) { return data })*/


// Using YQL and JSONP
    /*$.ajax({
        url: "http://query.yahooapis.com/v1/public/yql",

        // The name of the callback parameter, as specified by the YQL service
        jsonp: "callback",

        // Tell jQuery we're expecting JSONP
        dataType: "jsonp",

        // Tell YQL what we want and that we want JSON
        data: {
            q: "select title,abstract,url from search.news where query=\"cat\"",
            format: "json"
        },

        // Work with the response
        success: function( response ) {
            console.log( response ); // server response
        }
    });
*/


    // addSinglePolygonToMap("././data/workshops/Mascara.geojson", bounds_layer, "#FFFFFF", 1.0, "#FFFFFF", 1.0);
    // addSinglePolygonToMap("././data/workshops/boundaries_PER.geojson", bounds_layer, "#FFFFFF", 1.0, "#FFFFFF", 1.0);
    // addSinglePolygonToMap("././data/workshops/boundaries_PER.geojson", bounds_layer, "#5B8963", 1.0, "#5B8963", 1.0);
    // addSinglePolygonToMap("././data/workshops/boundaries_PER.geojson", bounds_layer, "#B8EDC5", 1.0, "#B8EDC5", 1.0);
    // addRegionJSONToMap("././data/workshops/PER_regiones_flag.geojson", regions_layer, "#FFFFFF", 1.0, "#00BFDF", 1.0);

    /*
        addSinglePolygonToMap("https://citariverstories.s3-us-west-1.amazonaws.com/JSON/boundaries_PER.geojson", bounds_layer, "#B8EDC5", 1.0, "#B8EDC5", 1.0);
    */
    /*
        addSinglePolygonToMap("././data/workshops/Mascara.geojson", bounds_layer, "#FFFFFF", 1.0, "#FFFFFF", 1.0);
        addRegionJSONToMap("././data/workshops/PER_regiones_flag.geojson", regions_layer, "#FFFFFF", 1.0, "#00BFDF", 1.0);
    */

    addSinglePolygonToMap("././data/rios/rios_navegables.geojson", bounds_layer, "#97EFFF", 1.0, "#97EFFF", 1.0);
    // addSinglePolygonToMap("././data/rios/rios_navegables.geojson", bounds_layer, "#70c4ff", 1.0, "#70c4ff", 1.0);
    // addSinglePolygonToMap("././data/rios/rios_navegables.geojson", bounds_layer, "#4dccfa", 1.0, "#4dccfa", 1.0);

    bounds_layer.setMap(map);
    regions_layer.setMap(map);
    markers_layer.setMap(map);


}
