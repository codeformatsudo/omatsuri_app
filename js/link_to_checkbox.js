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
      "中央ステージ": "#leaflet-control-accordion-layers-0 > article > div:nth-child(1) > input",
        "チャリティライブ": "#leaflet-control-accordion-layers-0 > article > div:nth-child(2) > input",
      "テント村": "#leaflet-control-accordion-layers-0 > article > div:nth-child(4) > input",
      "中央パレード": "#leaflet-control-accordion-layers-1 > article > div:nth-child(1) > input",
      "五香パレード": "#leaflet-control-accordion-layers-1 > article > div:nth-child(3) > input",
      "全さくら通りパレード": "#leaflet-control-accordion-layers-1 > article > div:nth-child(2) > input"
    };

    $(maps[this.innerText]).trigger("click");


  });
});

