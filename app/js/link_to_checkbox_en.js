$(function () {
  $(".mapcheckbox").click(function(){

      var i;
      var input;
      var inputs = $('article > div > input');
      var inputsLen = inputs.length;

      for (i = 0; i < inputsLen; i++) {
          input = inputs[i];
          if(input.checked) {
          input.checked = false;
       }
            };

    // リンク内のテキストとチェックボックスを特定するセレクタをひも付けている。
    // チェックボックスの順番やリンク内のテキストを変更した場合は下記のハッシュも調整すること。
    var maps = {
      "Main Stage": "#leaflet-control-accordion-layers-0 > article > div:nth-child(1) > input",
      "Charity Stage": "#leaflet-control-accordion-layers-0 > article > div:nth-child(2) > input",
        "Station Square": "#leaflet-control-accordion-layers-0 > article > div:nth-child(3) > input",
        "Tent Village": "#leaflet-control-accordion-layers-0 > article > div:nth-child(4) > input",
        "Waku-Waku Market": "#leaflet-control-accordion-layers-0 > article > div:nth-child(5) > input",
        "Blood Drive": "#leaflet-control-accordion-layers-0 > article > div:nth-child(6) > input",
      "Central Parade Route": "#leaflet-control-accordion-layers-1 > article > div:nth-child(1) > input",
      "Goko Parade Route": "#leaflet-control-accordion-layers-1 > article > div:nth-child(3) > input",
      "Sakura Dori Parade Route": "#leaflet-control-accordion-layers-1 > article > div:nth-child(2) > input"
    };

    $(maps[this.innerText]).trigger("click");

  });
});

