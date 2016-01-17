$(function() {

//mapSize

function mapSize() {
    var w = $(window).width();
    var h = $(window).height();
    var mapWidth = w - 20;
    var mapHeight =  h - 20 - $("header").outerHeight() - $("nav").outerHeight() - $("footer").outerHeight();

    $("#map").css({"width": mapWidth + "px"});
    $("#map").css({"height": mapHeight + "px"});

};
mapSize();
$(window).resize(mapSize);

var lat = "35.800550";
var lng = "139.951673";
var zoomSize = '';


//zoomSize

var w = $(window).width();
if(w <= 768) {
    zoomSize = 15;
} else {
    zoomSize = 16;
};

var map = L.map('map').setView([lat, lng], zoomSize);

var osmLayer = L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18,
    layers: osmLayer
}).addTo(map);

var streetStyle = {
    "color": "#EE9D9E",
	"fiilColor": "#EE9D9E",
    "fillOpacity": 0.8
    };

	
var paradeStyle = {
	"color": "#FF7E00",
	"weight": "7",
	"fillOpacity": 1.0
};

	L.geoJson(sakuradori, {
		style: streetStyle
	}).addTo(map);
	


var lc = L.control.locate({
layer: new L.LayerGroup(),
drawCircle: false,
keepCurrentZoomLevel: true,

icon: 'fa fa-map-marker',
follow: true,
showPopup: true,
strings: {
title: "現在地",
popup: "現在地",

}
}).addTo(map);



function onEachFeature(feature, layer) {
if(feature.properties && feature.properties["popup"]) {
layer.bindPopup(feature.properties["popup"]);
}
};
function pointToLayer(feature, latlng) {
return L.marker(latlng, {
icon: L.icon({
iconUrl: feature.properties["icon"],
shadowUrl: 'img/shadow.png',
iconSize: [39, 46],
shadowSize: [31, 25],
shadowAnchor: [0, 5]
})
});
};
	
	var tyuouLayer = L.geoJson(tyuou, {
		onEachFeature: onEachFeature,
		pointToLayer: pointToLayer
	}).addTo(map);
	
	var charityLayer = L.geoJson(charity, {
		onEachFeature: onEachFeature,
		pointToLayer: pointToLayer
	});
	
	var paradeSakuraLayer = L.geoJson(paradeSakuradori, {
		style: paradeStyle
	});
	
	var paradeYurinokiLayer = L.geoJson(paradeYurinoki, {
		style: paradeStyle
	});
	
var ekimaeLayer = L.geoJson(ekimae, {
    onEachFeature: onEachFeature,
    pointToLayer: pointToLayer
});
	
	var tentomuraLayer = L.geoJson(tentomura, {
		onEachFeature: onEachFeature,
		pointToLayer: pointToLayer
	});
	
	var wakuwakuLayer = L.geoJson(wakuwaku, {
		onEachFeature: onEachFeature,
		pointToLayer: pointToLayer
	});

	var bloodDonationLayer = L.geoJson(bloodDonation, {
		onEachFeature: onEachFeature,
		pointToLayer: pointToLayer
	});

var toiletLayer = L.geoJson(toilet, {
onEachFeature: onEachFeature,
pointToLayer: pointToLayer
});

var multiLayer = L.geoJson(multi, {
onEachFeature: onEachFeature,
pointToLayer: pointToLayer
});



var eventlays = [
    {
        groupName : "イベント場所",
        expanded : true,
        layers : {
            "中央ステージ" : tyuouLayer,
			"チャリティライブ": charityLayer,
			"さくら通パレード": paradeSakuraLayer,
			"ゆりの木通パレード": paradeYurinokiLayer,
			"駅前ひろば": ekimaeLayer,
			"テント村": tentomuraLayer,
			"わくわく広場": wakuwakuLayer,
			"献血車": bloodDonationLayer
        }
    }];
	var overlays = [ {
        groupName : "トイレ",
        expanded: false,
        layers : {
            "トイレ": toiletLayer,
            "多機能トイレ": multiLayer
        }
    }
];

var options = {
    container_width :"130px",
	container_maxHeight: "80px",
	group_maxHeight: "50px",
    collapsed: false,
    exclusive : false,
    position : 'bottomright'
};

var control = L.Control.styledLayerControl(eventlays, overlays, options);
    map.addControl(control);

/*
var csvContents = L.geoCsv(null,{
fieldSeparator: ',',
lineSeparator: '\r\n',
firstLineTitles: true,
onEachFeature: function (feature, layer) {
layer.bindPopup(feature.properties["popup"]);
},
pointToLayer: function (feature, latlng) {
return L.marker(latlng, {
icon:L.icon({
iconUrl: feature.properties['icon'],

iconSize: [32,37]

})
});
}
});

$.ajax ({
type: 'GET',
dataType: 'text',
url: 'data/toilet.csv',
error: function() {
alert( 'データを取得できませんでした');
},
success: function(csv) {

var toiletLayer = csvContents.addData(csv);
console.log(toiletLayer);
map.addLayer(toiletLayer);

}
});
*/
/*

//現在地取得
$("#location").on('click', function(){
var option = {
enableHighAccuracy: true,
maximumAge: 1,
timeout: 10000
};

if(!navigator.geolocation) {
alert("お使いのブラウザは位置情報取得に対応していません");
} else {
navigator.geolocation.getCurrentPosition(successCallback, errorCallback, option);

function successCallback(position) {

lat = position.coords.latitude;
lng = position.coords.longitude;
console.log(position.coords.latitude)
map.setView([lat, lng]);

var mapMarker = L.marker([lat, lng], { title: '現在地'}).addTo(map);
var comment = '現在地';
mapMarker.bindPopup(comment).openPopup();
};

function errorCallback(error) xcccccccccccc
var e = "";
if (error.code == 1) {
e = "位置情報が許可されていません";
}
if (error.code == 2) {
e = "現在地を特定できません";
}
if (error.code == 3) {
e= "タイムアウトになりました"
}
aleat(e);
};
};
});
*/
});
