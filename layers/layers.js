var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Thammampattyrange_2 = new ol.format.GeoJSON();
var features_Thammampattyrange_2 = format_Thammampattyrange_2.readFeatures(json_Thammampattyrange_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Thammampattyrange_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Thammampattyrange_2.addFeatures(features_Thammampattyrange_2);
var lyr_Thammampattyrange_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Thammampattyrange_2, 
                style: style_Thammampattyrange_2,
                popuplayertitle: 'Thammampatty range',
                interactive: true,
                title: '<img src="styles/legend/Thammampattyrange_2.png" /> Thammampatty range'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Thammampattyrange_2.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_OpenStreetMap_1,lyr_Thammampattyrange_2];
lyr_Thammampattyrange_2.set('fieldAliases', {'fid': 'fid', 'BT_NAME': 'BT_NAME', 'Jurisdicti': 'Jurisdiction Area in Ha', });
lyr_Thammampattyrange_2.set('fieldImages', {'fid': 'TextEdit', 'BT_NAME': 'TextEdit', 'Jurisdicti': 'TextEdit', });
lyr_Thammampattyrange_2.set('fieldLabels', {'fid': 'no label', 'BT_NAME': 'inline label - always visible', 'Jurisdicti': 'no label', });
lyr_Thammampattyrange_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});