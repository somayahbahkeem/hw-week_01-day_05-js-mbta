const subwayLine ={
  Red :["South Station",
 "Park Street" ,
  "Kendall" ,
  "Central", "Harvard" ,
  "Porter" ,
  "Davis" ,
  "Alewife"
],
Green:[
  "Government Center",
 "Park Street" ,
 " Boylston",
  "Arlington", 
  "Copley", 
  " Hynes" ,
  "Kenmore"
],
Orange: [
  "North Station",
 "Haymarket",
   "Park Street" ,
   "State" ,
   "Downtown Crossing" ,
   "Chinatown" ,
   "Back Bay" ,
   "Forest Hills"]
};
const  stopsBetweenStations=function(StartLine, StartSation, EndLine,EndStation){
  const startStationIndex= subwayLine[StartLine].indexOf(StartSation);
  const endStationIndex= subwayLine[endLine].indexOf(endSation);
  if(StartLine===endLine){
    return  Math.abs(startStationIndex-endStationIndex);
  }
  const startLineParkStreetIndex = subwayLine[StartLine].indexOf("park street");
  //get the index of the endLine park street station 
  const tripToParkStreet =Math.abs(startStationIndex-startLineParkStreetIndex);

  const endLineParkStreetIndex =subwayLine[endLine].indexOf("park street");

  const tripToDesnation=Math.abs(endStationIndex-endLineParkStreetIndex);

  const totalTrip = tripToDesnation+tripToParkStreet;
  return totalTrip;

}

  //------------------------------------------------


                  








  
  
 
  
  
 
  


  