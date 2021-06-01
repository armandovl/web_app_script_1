function doGet(){
  return HtmlService.createHtmlOutputFromFile("page");
  
}



// ejecuta la funcion hacer click
function hacerClick(argumento1){
  
  //llamar la hoja
  var ss=SpreadsheetApp.openById("1anGeMqQlSveaBCfEW5E_IRq_ZT6Q1gSyc4LOpdm_Cuk");  
  var ws= ss.getSheetByName('Sheet2');
  
  ws.appendRow([argumento1,new Date()]); //aniade una columna
  
  
}


/************Fuentes */

/*
https://www.youtube.com/watch?v=RRQvySxaCW0
*/