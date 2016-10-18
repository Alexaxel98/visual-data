//male population
var map = L.map('map');
var res;
var colors = []; 
var numbers = []; 


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
 //   "Backmap": terrainTiles,
//};



$.getJSON("BernallioCensusBlocks_Joined.json", 
function(data) { 
	console.log(data);
	addDataToMap(data, map);
	})

// Set the initial viewport of the map. Here we're centering on Albuquerqueand zooming out a bit.
map.setView([35.0853, -106.6056], 10);


function changer(terminator){
	termin = terminator;
	
	return termin;
};





    
changer("ACS_13_5YR_B01001_with_ann_HD01_VD01");





//changer("ACS_13_5YR_B01001_with_ann_HD01_VD01");





function style(feature) {
	//console.log(feature);
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
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD02"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD03"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD04"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD05"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD06"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD07"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD08"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD09"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD10"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD11"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD12"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD13"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD14"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD15"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD16"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD17"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD18"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD19"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD20"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD21"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD22"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD23"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD24"])
        info.update(layer.feature.properties["ACS_13_5YR_B01001_with_ann_HD01_VD25"])

   

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
    
  //  if(res == 'male'){
    this._div.innerHTML = '<h4>Albuquerque Area Population</h4> ' + (props ?
        '<b>' + b01001[2]["Id"]+'  '+'</b>' + '<i>' +  tests[1]+ '</i>' + '<br />'+
        '<b>' + b01001[4]["Id"]+'  '+'</b>' + '<i>' +  tests[2]+ '</i>' + '<br />'+
        '<b>' + b01001[6]["Id"]+'  '+'</b>' + '<i>' +  tests[3]+ '</i>' + '<br />'+
        '<b>' + b01001[8]["Id"]+'  '+'</b>' + '<i>' +  tests[4]+ '</i>' + '<br />'+
        '<b>' + b01001[10]["Id"]+'  '+'</b>' + '<i>' +  tests[5]+ '</i>' + '<br />'+
        '<b>' + b01001[12]["Id"]+'  '+'</b>' + '<i>' +  tests[6]+ '</i>' + '<br />'+
        '<b>' + b01001[14]["Id"]+'  '+'</b>' + '<i>' +  tests[7]+ '</i>' + '<br />'+
        '<b>' + b01001[16]["Id"]+'  '+'</b>' + '<i>' +  tests[8]+ '</i>' + '<br />'+
        '<b>' + b01001[18]["Id"]+'  '+'</b>' + '<i>' +  tests[9]+ '</i>' + '<br />'+
        '<b>' + b01001[20]["Id"]+'  '+'</b>' + '<i>' +  tests[10]+ '</i>' + '<br />'+
        '<b>' + b01001[22]["Id"]+'  '+'</b>' + '<i>' +  tests[11]+ '</i>' + '<br />'+
        '<b>' + b01001[24]["Id"]+'  '+'</b>' + '<i>' +  tests[12]+ '</i>' + '<br />'+
        '<b>' + b01001[26]["Id"]+'  '+'</b>' + '<i>' +  tests[13]+ '</i>' + '<br />'+
        '<b>' + b01001[28]["Id"]+'  '+'</b>' + '<i>' +  tests[14]+ '</i>' + '<br />'+
        '<b>' + b01001[30]["Id"]+'  '+'</b>' + '<i>' +  tests[15]+ '</i>' + '<br />'+
        '<b>' + b01001[32]["Id"]+'  '+'</b>' + '<i>' +  tests[16]+ '</i>' + '<br />'+
        '<b>' + b01001[34]["Id"]+'  '+'</b>' + '<i>' +  tests[17]+ '</i>' + '<br />'+
        '<b>' + b01001[36]["Id"]+'  '+'</b>' + '<i>' +  tests[18]+ '</i>' + '<br />'+
        '<b>' + b01001[38]["Id"]+'  '+'</b>' + '<i>' +  tests[19]+ '</i>' + '<br />'+
        '<b>' + b01001[40]["Id"]+'  '+'</b>' + '<i>' +  tests[20]+ '</i>' + '<br />'+
        '<b>' + b01001[42]["Id"]+'  '+'</b>' + '<i>' +  tests[21]+ '</i>' + '<br />'+
        '<b>' + b01001[44]["Id"]+'  '+'</b>' + '<i>' +  tests[22]+ '</i>' + '<br />'+
        '<b>' + b01001[46]["Id"]+'  '+'</b>' + '<i>' +  tests[23]+ '</i>' + '<br />'+
        '<b>' + b01001[48]["Id"]+'  '+'</b>' + '<i>' +  tests[24]+ '</i>' + '<br />'+
        '<b>' + b01001[50]["Id"]+'  '+'</b>' + '<i>' +  tests[25]+ '</i>' + '<br />'
        : 'Hover over an area');
        //console.log(props);

      for(var i =0 ; i < tests.length ; i++){
          if(tests[i] === undefined){
              tests[i] = 0; 
          }
      }
      
      
        if(tests.length >=26){
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

//console.log(layers);

//L.control.layers(baseMaps).addTo(map);

