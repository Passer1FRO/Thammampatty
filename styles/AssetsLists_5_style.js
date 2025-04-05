var size = 0;
var placement = 'point';

var style_AssetsLists_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("");
    var labelFont = "6.5px \'Open Sans\', sans-serif";
    var labelFill = "#00f7ff";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("Asset Name") !== null) {
        labelText = String(feature.get("Asset Name"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 5.6 + size, points: 3,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(61,128,53,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(40,237,19,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
