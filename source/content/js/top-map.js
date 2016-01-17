$(function() {

//mapSize

function mapSize() {
    var w = $(window).width();
    var h = $(window).height();
    var mapWidth = w - 20;
    var mapHeight =  150;

    $("#top-map").css({"width": mapWidth + "px"});
    $("#top-map").css({"height": mapHeight + "px"});

};
mapSize();
$(window).resize(mapSize);

var lat = "35.800550";
var lng = "139.951673";
var zoomSize = '';


//zoomSize

var w = $(window).width();
if(w <= 768) {
    zoomSize = 14;
} else {
    zoomSize = 15;
};

var topMap = L.map('top-map').setView([lat, lng], zoomSize);

var osmLayer = L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18,
    layers: osmLayer
}).addTo(topMap);

var streetStyle = {
    "color": "#EE9D9E",
    "fillColor": "#EE9D9E",
    "fillOpacity": 0.8
    };
L.geoJson(sakuradori, {
    style: streetStyle
}).addTo(topMap);
});
