'use strict';

{
  const dropDown = document.getElementById('dataset-dropdown');
  const selectDatasetButton = document.getElementById('selectDatasetButton');
  const uploadDatasetButton = document.getElementById('uploadDatasetButton');
  
  selectDatasetButton.addEventListener('click', function(e){

    //initialize
    wordBank = [];
    nthQuestion = 0;
    
    // get words from csv file and store in wordBank array
    const fileName = 'data/' + dropDown.value
    if(!fileName.includes('txt')){
      return;
    }
    let request = new XMLHttpRequest();
    request.open('get', fileName, true);
    request.send(null);
    request.onload = function(){
      const dataSetList = request.responseText;
      let eachData = dataSetList.split("\n");
      for (let i=0; i<eachData.length; i++){
        wordBank[i] = eachData[i].split(',');
      }
    }
    // close first screen and display second screen
    currentScreenNumber++;
    slideRibon.style.transform = `translateX(${-1 * slideWidth}px )`;
    slideRibon.style.transition = '.5s'
  });

  uploadDatasetButton.addEventListener('change', function(e){

    //initialize
    wordBank = [];
    nthQuestion = 0;

    // get words from csv file and store in wordBank array
    let result = e.target.files[0];
    let reader = new FileReader();

    reader.readAsText(result);

    reader.addEventListener('load', function(){
      let eachData = reader.result.split("\n");
      for (let i=0; i<eachData.length; i++){
        wordBank[i] = eachData[i].split(',');
      }
    });

    // close first screen and display second screen
    currentScreenNumber++;
    slideRibon.style.transform = `translateX(${-1 * slideWidth}px )`;
    slideRibon.style.transition = '.5s'
  });

}