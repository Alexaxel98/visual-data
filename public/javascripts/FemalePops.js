var map = L.map('map');
var res;
var colors = []; 
var numbers = [] ; 




colors = ['#800026','#BD0026','#E31A1C' ,'#FC4E2A','#FD8D3C','#FEB24C','#FED976','#FFEDA0'];


var b01001=[];
var b01002=[];
var test=3;
var termin;
var geojson;
var dataLayer;


var terrainTiles = L.tileLayer.provider('OpenTopoMap');
terrainTiles.addTo(map);
//var baseMaps = {
//    "Backmap": terrainTiles,
//};



$.getJSON("BernallioCensusBlocks_Joined.json", 
function(data) { 
	console.log(data);
	console.log('here getJson');
	addDataToMap(data, map);
	})

// Set the initial viewport of the map. Here we're centering on Albuquerqueand zooming out a bit.
map.setView([35.0853, -106.6056], 10);


function changer(terminator){
	termin = terminator;
	
	return termin;
};

    
changer("ACS_13_5YR_B01001_with_ann_HD01_VD01");






function style(feature) {
    return {
    	
        fillColor: getColor(feature.properties[termin]),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}


  function getColor(d) {
    
    return d > 3000 ? '#800026':
           d > 2000  ? colors[1] :
           d > 1500  ? colors[2] :
           d > 1000  ? colors[3] :
           d > 600   ? colors[4] :
           d > 300   ? colors[5] :
           d > 100   ? colors[6] :
           d > 80    ? '#FFC25C':
           d > 60    ? '#FFB24C': 
           d > 40    ? '#FFA33D': 
           d > 30    ? '#FF942E': 
           d > 20    ? '#FF851F':
           d > 10    ? '#FF750F':
                      colors[7];
                      
}




function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
  
   
        info.update(layer.feature.properties[termin]);
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD26"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD27"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD28"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD29"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD30"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD31"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD32"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD33"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD34"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD35"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD36"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD37"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD38"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD39"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD40"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD41"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD42"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD43"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD44"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD45"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD46"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD47"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD48"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD49"])
    

}

function resetHighlight(e) {
    dataLayer.resetStyle(e.target);
    info.update();
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}



var info = L.control();




// info.onAdd function iterates on itself each time user puts cursor on certain areas of map
// took advantage of this in order to pull up label in div stating different population /males/females

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    //$("#info").update();
    this.update();
    return this._div;
   
};
var tests=[];
var number=0;
// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    
   tests[number++] = props;
        
    
  
    this._div.innerHTML = '<h4>Albuquerque Area Population</h4> ' + (props ?
        '<b>' + b01001[2]["Id"]+'  '+'</b>' + '<i>' +  tests[1]+ '</i>' + '<br />'+
        '<b>' + b01001[52]["Id"]+'  '+'</b>' + '<i>' +  tests[2]+ '</i>' + '<br />'+
        '<b>' + b01001[54]["Id"]+'  '+'</b>' + '<i>' +  tests[3]+ '</i>' + '<br />'+
        '<b>' + b01001[56]["Id"]+'  '+'</b>' + '<i>' +  tests[4]+ '</i>' + '<br />'+
        '<b>' + b01001[58]["Id"]+'  '+'</b>' + '<i>' +  tests[5]+ '</i>' + '<br />'+
        '<b>' + b01001[60]["Id"]+'  '+'</b>' + '<i>' +  tests[6]+ '</i>' + '<br />'+
        '<b>' + b01001[62]["Id"]+'  '+'</b>' + '<i>' +  tests[7]+ '</i>' + '<br />'+
        '<b>' + b01001[64]["Id"]+'  '+'</b>' + '<i>' +  tests[8]+ '</i>' + '<br />'+
        '<b>' + b01001[66]["Id"]+'  '+'</b>' + '<i>' +  tests[9]+ '</i>' + '<br />'+
        '<b>' + b01001[68]["Id"]+'  '+'</b>' + '<i>' +  tests[10]+ '</i>' + '<br />'+
        '<b>' + b01001[70]["Id"]+'  '+'</b>' + '<i>' +  tests[11]+ '</i>' + '<br />'+
        '<b>' + b01001[72]["Id"]+'  '+'</b>' + '<i>' +  tests[12]+ '</i>' + '<br />'+
        '<b>' + b01001[74]["Id"]+'  '+'</b>' + '<i>' +  tests[13]+ '</i>' + '<br />'+
        '<b>' + b01001[76]["Id"]+'  '+'</b>' + '<i>' +  tests[14]+ '</i>' + '<br />'+
        '<b>' + b01001[78]["Id"]+'  '+'</b>' + '<i>' +  tests[15]+ '</i>' + '<br />'+
        '<b>' + b01001[80]["Id"]+'  '+'</b>' + '<i>' +  tests[16]+ '</i>' + '<br />'+
        '<b>' + b01001[82]["Id"]+'  '+'</b>' + '<i>' +  tests[17]+ '</i>' + '<br />'+
        '<b>' + b01001[84]["Id"]+'  '+'</b>' + '<i>' +  tests[18]+ '</i>' + '<br />'+
        '<b>' + b01001[86]["Id"]+'  '+'</b>' + '<i>' +  tests[19]+ '</i>' + '<br />'+
        '<b>' + b01001[88]["Id"]+'  '+'</b>' + '<i>' +  tests[20]+ '</i>' + '<br />'+
        '<b>' + b01001[90]["Id"]+'  '+'</b>' + '<i>' +  tests[21]+ '</i>' + '<br />'+
        '<b>' + b01001[92]["Id"]+'  '+'</b>' + '<i>' +  tests[22]+ '</i>' + '<br />'+
        '<b>' + b01001[94]["Id"]+'  '+'</b>' + '<i>' +  tests[23]+ '</i>' + '<br />'+
        '<b>' + b01001[96]["Id"]+'  '+'</b>' + '<i>' +  tests[24]+ '</i>' + '<br />'+
        '<b>' + b01001[98]["Id"]+'  '+'</b>' + '<i>' +  tests[25]+ '</i>' + '<br />'
         
        : 'Hover over an area');


    
      
      for(var i =0 ; i < tests.length ; i++){
          if(tests[i] === undefined){
              tests[i] = 0; 
          }
      }
      
       console.log(tests)
        if(tests.length >= 26){
        tests = [];
        number = 0;
        }
    
        
         
    
};

info.addTo(map);

var datas;


function addDataToMap(data, map) {
    datas = data;
    dataLayer = L.geoJson(data,{style:style, onEachFeature:onEachFeature});
    dataLayer.addTo(map);
}


$.getJSON("B01001.json", function(data){
	b01001 = data;

});
$.getJSON("B01002.json", function(data){
	b01002 = data;

});



//L.control.layers(baseMaps).addTo(map);
