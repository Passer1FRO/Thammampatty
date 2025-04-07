var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Thammampattyrange_1 = new ol.format.GeoJSON();
var features_Thammampattyrange_1 = format_Thammampattyrange_1.readFeatures(json_Thammampattyrange_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Thammampattyrange_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Thammampattyrange_1.addFeatures(features_Thammampattyrange_1);
var lyr_Thammampattyrange_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Thammampattyrange_1, 
                style: style_Thammampattyrange_1,
                popuplayertitle: 'Thammampatty range',
                interactive: false,
                title: '<img src="styles/legend/Thammampattyrange_1.png" /> Thammampatty range'
            });
var format_ManmalaiSection_2 = new ol.format.GeoJSON();
var features_ManmalaiSection_2 = format_ManmalaiSection_2.readFeatures(json_ManmalaiSection_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ManmalaiSection_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ManmalaiSection_2.addFeatures(features_ManmalaiSection_2);
var lyr_ManmalaiSection_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ManmalaiSection_2, 
                style: style_ManmalaiSection_2,
                popuplayertitle: 'Manmalai Section',
                interactive: false,
                title: '<img src="styles/legend/ManmalaiSection_2.png" /> Manmalai Section'
            });
var format_ThammampattySection_3 = new ol.format.GeoJSON();
var features_ThammampattySection_3 = format_ThammampattySection_3.readFeatures(json_ThammampattySection_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ThammampattySection_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ThammampattySection_3.addFeatures(features_ThammampattySection_3);
var lyr_ThammampattySection_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ThammampattySection_3, 
                style: style_ThammampattySection_3,
                popuplayertitle: 'Thammampatty Section',
                interactive: false,
                title: '<img src="styles/legend/ThammampattySection_3.png" /> Thammampatty Section'
            });
var format_OffenceData_4 = new ol.format.GeoJSON();
var features_OffenceData_4 = format_OffenceData_4.readFeatures(json_OffenceData_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OffenceData_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OffenceData_4.addFeatures(features_OffenceData_4);
var lyr_OffenceData_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OffenceData_4, 
                style: style_OffenceData_4,
                popuplayertitle: 'Offence Data',
                interactive: true,
                title: '<img src="styles/legend/OffenceData_4.png" /> Offence Data'
            });
var format_Places_5 = new ol.format.GeoJSON();
var features_Places_5 = format_Places_5.readFeatures(json_Places_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Places_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Places_5.addFeatures(features_Places_5);
var lyr_Places_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Places_5, 
                style: style_Places_5,
                popuplayertitle: 'Places',
                interactive: false,
                title: '<img src="styles/legend/Places_5.png" /> Places'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_Thammampattyrange_1.setVisible(false);lyr_ManmalaiSection_2.setVisible(false);lyr_ThammampattySection_3.setVisible(true);lyr_OffenceData_4.setVisible(true);lyr_Places_5.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_Thammampattyrange_1,lyr_ManmalaiSection_2,lyr_ThammampattySection_3,lyr_OffenceData_4,lyr_Places_5];
lyr_Thammampattyrange_1.set('fieldAliases', {'fid': 'fid', 'BT_NAME': 'BT_NAME', 'Jurisdicti': 'Jurisdiction Area in Ha', });
lyr_ManmalaiSection_2.set('fieldAliases', {'fid': 'fid', 'BT_NAME': 'BT_NAME', 'layer': 'layer', 'path': 'path', });
lyr_ThammampattySection_3.set('fieldAliases', {'fid': 'fid', 'BT_NAME': 'BT_NAME', 'layer': 'layer', 'path': 'path', });
lyr_OffenceData_4.set('fieldAliases', {'Date of Detection': 'Date of Detection', 'OR .No': 'Offence No.', 'Particulars of Seizures': 'Seizure', 'Section': 'Section', 'BEAT': 'Beat', 'RF': 'RF/RL', 'Lat': 'Lat', 'Long': 'Long', 'Place': 'Place', 'No.of Accused': 'No.of.Accused', 'Name and Address of the accoused personnel': 'Details of Accused', 'Witness Details': 'Witness', 'Action Taken': 'Action', 'field_14': 'Action', 'Closing date': 'Closing Date', 'C Fees': 'C Fees', });
lyr_Places_5.set('fieldAliases', {'Name': 'Name', });
lyr_Thammampattyrange_1.set('fieldImages', {'fid': 'TextEdit', 'BT_NAME': 'TextEdit', 'Jurisdicti': 'TextEdit', });
lyr_ManmalaiSection_2.set('fieldImages', {'fid': 'TextEdit', 'BT_NAME': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ThammampattySection_3.set('fieldImages', {'fid': 'TextEdit', 'BT_NAME': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_OffenceData_4.set('fieldImages', {'Date of Detection': 'TextEdit', 'OR .No': 'TextEdit', 'Particulars of Seizures': 'TextEdit', 'Section': 'TextEdit', 'BEAT': 'TextEdit', 'RF': 'TextEdit', 'Lat': 'Hidden', 'Long': 'Hidden', 'Place': 'TextEdit', 'No.of Accused': 'Range', 'Name and Address of the accoused personnel': 'TextEdit', 'Witness Details': 'TextEdit', 'Action Taken': 'Hidden', 'field_14': 'TextEdit', 'Closing date': 'TextEdit', 'C Fees': 'TextEdit', });
lyr_Places_5.set('fieldImages', {'Name': 'TextEdit', });
lyr_Thammampattyrange_1.set('fieldLabels', {'fid': 'no label', 'BT_NAME': 'inline label - always visible', 'Jurisdicti': 'inline label - always visible', });
lyr_ManmalaiSection_2.set('fieldLabels', {'fid': 'no label', 'BT_NAME': 'inline label - always visible', 'layer': 'inline label - always visible', 'path': 'inline label - always visible', });
lyr_ThammampattySection_3.set('fieldLabels', {'fid': 'no label', 'BT_NAME': 'inline label - always visible', 'layer': 'inline label - always visible', 'path': 'no label', });
lyr_OffenceData_4.set('fieldLabels', {'Date of Detection': 'inline label - always visible', 'OR .No': 'inline label - always visible', 'Particulars of Seizures': 'inline label - always visible', 'Section': 'inline label - always visible', 'BEAT': 'inline label - always visible', 'RF': 'inline label - always visible', 'Place': 'inline label - always visible', 'No.of Accused': 'inline label - always visible', 'Name and Address of the accoused personnel': 'inline label - always visible', 'Witness Details': 'inline label - always visible', 'field_14': 'inline label - always visible', 'Closing date': 'inline label - always visible', 'C Fees': 'inline label - always visible', });
lyr_Places_5.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Places_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});