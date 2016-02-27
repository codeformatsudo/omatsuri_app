$(function () {
    //mapSize
    function mapSize() {
        var w = $(window).width();
        var h = $(window).height();
        var mapWidth = w - 40;
        var mapHeight = h - 20 - $("header").outerHeight() - $("nav").outerHeight() - $("footer").outerHeight();
        $("#map").css({
            "width": mapWidth + "px"
        });
        $("#map").css({
            "height": mapHeight + "px"
        });
    };

    mapSize();
    $(window).resize(mapSize);

    var lat = "35.800550";
    var lng = "139.951673";
    var zoomSize = '';


    //zoomSize

    var w = $(window).width();
    if (w <= 768) {
        zoomSize = 15;
    } else {
        zoomSize = 16;
    };

    var map = L.map('map').setView([lat, lng], zoomSize);

    var streetStyle = {
        "color": "#EE9D9E",
        "fiilColor": "#EE9D9E",
        "fillOpacity": 0.8
    };


    var paradeStyle = {
        "color": "#E8580C",
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
        if (feature.properties && feature.properties["popup"]) {
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
                shadowAnchor: [0, 5],
                popupAnchor: [0, -20]
            })
        });
    };


    /*


    var csvContents = L.geoCsv(null,{
    fieldSeparator: ',',
    lineSeparator: '\n',
    firstLineTitles: true,
    onEachFeature: onEachFeature,
    pointToLayer: pointToLayer
    });

    function getData(url) {
        return $.ajax({
            type: 'get',
            url: url
        });
    }
    var toiletcsv;
     getData('./data/toilet.csv').then(function(data){
        toiletcsv = data;

    })
     var toiletLayer = csvContents.addData(toiletcsv);
    console.log(toiletLayer);


*/
    var tyuouLayer = L.geoJson(tyuou, {
        onEachFeature: onEachFeature,
        pointToLayer: pointToLayer
    });

    var charityLayer = L.geoJson(charity, {
        onEachFeature: onEachFeature,
        pointToLayer: pointToLayer
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

    var paradeTyuoLayer = L.geoJson(paradeTyuo, {
        style: paradeStyle
    });

    var paradeZenLayer = L.geoJson(paradeZen, {
        style: paradeStyle
    });

    var paradeGokoLayer = L.geoJson(paradeGoko, {
        style: paradeStyle
    })


    var honbuLayer = L.geoJson(honbu, {
        onEachFeature: onEachFeature,
        pointToLayer: pointToLayer
    });

    var tent3Layer = L.geoJson(tent3, {
        onEachFeature: onEachFeature,
        pointToLayer: pointToLayer
    });
    var tent4Layer = L.geoJson(tent4, {
        onEachFeature: onEachFeature,
        pointToLayer: pointToLayer
    });
    var tent5Layer = L.geoJson(tent5, {
        onEachFeature: onEachFeature,
        pointToLayer: pointToLayer
    });
    var shelterLayer = L.geoJson(shelter, {
        onEachFeature: onEachFeature,
        pointToLayer: pointToLayer
    });

    var toiletLayer = L.geoJson(toilet, {
        onEachFeature: onEachFeature,
        pointToLayer: pointToLayer
    }).addTo(map);


//baseMap
    var osmLayer = L.tileLayer.provider('OpenStreetMap').addTo(map);

/*
    var osmFranceLayer = L.tileLayer.provider('OpenStreetMap.France').addTo(map);
    var mqoLayer = L.tileLayer.provider('MapQuestOpen').addTo(map);
    var stamenLayer = L.tileLayer.provider('Stamen.TonerLite').addTo(map);
    var cartoDbLayer = L.tileLayer.provider('CartoDB').addTo(map);
    var thunderforestLayer = L.tileLayer.provider('Thunderforest').addTo(map);
*/

/*
   $(window).on("pageshow", function(){
        var url = window.location.href.split('/').pop();

       if( url == 'index.html'){
console.log(url);
*/

  var url = window.location.href.split("/").pop();

    var overlays = [

        {
            groupName: "イベント",
            expanded: false,
            exclusive: true,
            layers: {
                "中央ステージ": tyuouLayer,
                "チャリティライブ": charityLayer,
                "駅前ひろば": ekimaeLayer,
                "テント村": tentomuraLayer,
                "わくわくマーケット": wakuwakuLayer,
                "献血": bloodDonationLayer
            }
        },
        {
            groupName: "パレード",
            expanded: false,
            layers: {
                "中央パレード": paradeTyuoLayer,
                "全さくら通りパレード": paradeZenLayer,
                "五香パレード": paradeGokoLayer
            }
        },
        {
            groupName: "テント・避難",
            expanded: false,
            layers: {
                "本部テント": honbuLayer,
                "3丁目テント": tent3Layer,
                "4丁目テント": tent4Layer,
                "5丁目テント": tent5Layer,
                "緊急避難場所": shelterLayer
            }
        },
        {
            groupName: "トイレ",
            expanded: true,
            layers: {
                "仮設トイレ": toiletLayer,
            }
        },
];
    if(url == "index_en.html") {
      overlays = [
        {
          groupName: "Event",
          expanded: false,
          exclusive: true,
          layers: {
            "Main Stage": tyuouLayer,
            "Charity Stage": charityLayer,
            "Station Square": ekimaeLayer,
            "Tent Village": tentomuraLayer,
            "Waku-Waku Market": wakuwakuLayer,
            "Blood Drive": bloodDonationLayer
          }
        },
        {
          groupName: "Parade",
          expanded: false,
          layers: {
            "Central Parade Route": paradeTyuoLayer,
            "Sakura Dori Parade Route ": paradeZenLayer,
            "Goko Parade Route": paradeGokoLayer
          }
        },
        {
          groupName: "Help",
          expanded: false,
          layers: {
            "Main Tent": honbuLayer,
            "3Chome Tent": tent3Layer,
            "4Chome Tent": tent4Layer,
            "5Chome Tent": tent5Layer,
            "Evac. Zone": shelterLayer
          }
        },
        {
          groupName: "Toilets",
          expanded: true,
          layers: {
            "temp. toilets": toiletLayer
          }
        }
      ];
    }
  
    /*
       } else if( url == 'index_en.html'){

       var overlays = [

        {
            groupName: "Event",
            expanded: false,
            exclusive: true,
            layers: {
                "Main Stage": tyuouLayer,
                "Charity Stage": charityLayer,
                "Station Square": ekimaeLayer,
                "Tent Village": tentomuraLayer,
                "Waku-Waku Market": wakuwakuLayer,
                "Blood Drive": bloodDonationLayer
            }
        },
        {
            groupName: "Parade",
            expanded: false,
            layers: {
                "Central Parade Route": paradeTyuoLayer,
                "Sakura Dori Parade Route ": paradeZenLayer,
                "Goko Parade Route": paradeGokoLayer
            }
        },
        {
            groupName: "Help",
            expanded: false,
            layers: {
                "Main Tent": honbuLayer,
                "3Chome Tent": tent3Layer,
                "4Chome Tent": tent4Layer,
                "5Chome Tent": tent5Layer,
                "Evac. Zone": shelterLayer
            }
        },
        {
            groupName: "Toilets",
            expanded: true,
            layers: {
                "temp. toilets": toiletLayer,
            }
        },
	];
       }
   });
*/

    var options = {
        container_maxHeight: "500px",
        collapsed: false,
        exclusive: false,
        position: 'topright'

    };

    var control = L.Control.styledLayerControl('', overlays, options);
    map.addControl(control);

});
