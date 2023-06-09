const plant_species = ["Tomaat","Paprika","Maïs", "Komkommer","Kropsla","Augurk","Rabarber","Witlof"];
const plotInfo = [["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""]];

function showPlotInfo(plotNr){
    var text = getInfo(plotNr);
    var hotspotID = "HotSpotID_" + plotNr;
    
    $(document).ready(function(){
        document.getElementById(hotspotID).innerHTML = text; 
        $("#"+hotspotID).toggle();            
    });
}

function getInfo(plotNr){
    if(plotNr !== 'VESTIGING'){
        return getPlotInfo(plotNr);
    }   else{
    return getVestigingInfo();
    }
}

function getPlotInfo(plotNr){
    if(plotInfo[plotNr-1][0] === ""){
        var gewas = plant_species[Math.floor(Math.random()*plant_species.length)];
        plotInfo[plotNr-1][0] = gewas;
        plotInfo[plotNr-1][1]= ""+Math.floor(Math.random() * (30 - 1) + 1) + "-"+ Math.floor(Math.random() *(12-1)+1) + "-2023";
        }
    return "PlotNr: " + plotNr +"\n"//
    + "Gewas: "+plotInfo[plotNr-1][0]  +"\n"//
    + "Geplant: " +plotInfo[plotNr-1][1]; 
}

function getVestigingInfo(){
    return "Vestiging:  " + "\n"//
    + "Temperatuur: 25" +"\n"//
    + "Luchtvochtigheid: 50%" +"\n";
}
