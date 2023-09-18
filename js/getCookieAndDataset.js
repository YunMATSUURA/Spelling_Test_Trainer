'use strict';

{
   window.onload = function(){
    
     //Get Dataset list
     let request = new XMLHttpRequest();
     request.open('get', 'dataSetList.csv', true);
     request.send(null);
     request.onload = function(){
       let dataSetList = request.responseText;
       let lines = dataSetList.split('\n');

       const dropDown = document.getElementById('dataset-dropdown');

      for(let i=0; i<lines.length; i++){
        const optionElement = document.createElement('option');
         optionElement.text = lines[i];
         optionElement.value = lines[i];
         dropDown.appendChild(optionElement);
       }
      
       //create options in Drop Down List
       dropDown.selectedIndex = -1;
       const goButton = document.getElementById('go');
     }
    
     //get coockie
  //    let coockieArr = document.cookie.split(';');

     //  coockieArr.forEach(function(value){
        // const keyValue = value.split('=');
        
        // switch(keyValue[0].trim()){
           //case 'stpAccAmt':
             //stpAccAmt = keyValue[1];
             //break;
           //case 'stpBalanceAmt':
             //stpBalanceAmt = keyValue[1];
             //break;
           //case 'playCnt':
             //playCnt = keyValue[1];
  //           break;
  //         case 'fullScoreCnt':
  //           fullScoreCnt = keyValue[1];
  //           break;            
  //         case 'usPlayCnt':
  //           usPlayCnt = keyValue[1];
  //           break;
  //         case 'usPlayFullCnt':
  //           usPlayFullCnt = keyValue[1];
  //           break;
  //         case 'brPlayCnt':
  //           brPlayCnt = keyValue[1];
  //           break;
  //         case 'brPlayFullCnt':
  //           brPlayFullCnt = keyValue[1];
  //           break;                     
  //         case 'manPlayCnt':
  //           manPlayCnt = keyValue[1];
  //           break;
  //         case 'manPlayFullCnt':
  //           manPlayFullCnt = keyValue[1];
  //           break;             
  //         case 'womanPlayCnt':
  //           womanPlayCnt = keyValue[1];
  //           break;             
  //         case 'womanPlayFullCnt':
  //           womanPlayFullCnt = keyValue[1];
  //           break;             
  //         case 'usManPlayCnt':
  //           usManPlayCnt = keyValue[1];
  //           break;                
  //         case 'usManPlayFullCnt':
  //           usManPlayFullCnt = keyValue[1];
  //           break;               
  //         case 'usWomanPlayCnt':
  //           usWomanPlayCnt = keyValue[1];
  //           break;                
  //         case 'usWomanPlayFullCnt':
  //           usWomanPlayFullCnt = keyValue[1];
  //           break;                
  //         case 'brManPlayCnt':
  //           brManPlayCnt = keyValue[1];
  //           break;                
  //         case 'brManPlayFullCnt':
  //           brManPlayFullCnt = keyValue[1];
  //           break;                
  //         case 'brWomanPlayCnt':
  //           brWomanPlayCnt = keyValue[1];
  //           break;               
  //         case 'brWomanPlayFullCnt':
  //           brWomanPlayFullCnt = keyValue[1];
  //           break;            
  //       }
  //     }); 
   }
}