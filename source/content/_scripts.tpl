<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<script src="js/jquery.mmenu.min.js"></script>
<script src="js/main.js"></script>
<script>
    if($("#map-page").length) {
        $("<script>").attr("src", "js/leaflet.js").appendTo("body");
        $("<script>").attr("src", "js/leaflet.geocsv.js").appendTo("body");
        $("<script>").attr("src", "data/sakuradori.geojson").appendTo("body");
   
        $("<script>").attr("src", "js/L.Control.Locate.min.js").appendTo("body");
        $("<script>").attr("src", "js/styledLayerControl.js").appendTo("body");
        $("<script>").attr("src", "js/map.js").appendTo("body");
        $("<script>").attr("src", "data/toilet.geojson").appendTo("body");
        $("<script>").attr("src", "data/ekimae.geojson").appendTo("body");
		$("<script>").attr("src", "data/tentomura.geojson").appendTo("body");
		$("<script>").attr("src", "data/tyuou.geojson").appendTo("body");
		$("<script>").attr("src", "data/wakuwaku.geojson").appendTo("body");
		$("<script>").attr("src", "data/charity.geojson").appendTo("body");
		$("<script>").attr("src", "data/donation.geojson").appendTo("body");
		$("<script>").attr("src", "data/parade-sakuradori.geojson").appendTo("body");
		$("<script>").attr("src", "data/yurinoki.geojson").appendTo("body");
		$("<script>").attr("src", "data/honbu.geojson").appendTo("body");
		$("<script>").attr("src", "data/tent3.geojson").appendTo("body");
		$("<script>").attr("src", "data/tent4.geojson").appendTo("body");
		$("<script>").attr("src", "data/tent5.geojson").appendTo("body");
		$("<script>").attr("src", "data/shelter.geojson").appendTo("body");
    };

    if($("#schedule").length) {
        $("<script>").attr("src", "js/stacktable.js").appendTo("body");
         $("#event-table1").stacktable();
        $("#event-table2").stacktable();
    };
	$("#slidebar").mmenu({
		slidingSubmenus: false,
		offCanvas: {
			position: 'right',
			zposition: 'front'
		}
	});
	
</script>
