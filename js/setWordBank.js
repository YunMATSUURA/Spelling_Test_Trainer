'use strict';

{
  const dropDown = document.getElementById('dataset-dropdown');
  const selectSpellingTestDatasetButton = document.getElementById('selectSpellingTestDatasetButton');
  const travelDatasetButton = document.getElementById('travelDatasetButton');
  
  const uploadDatasetButton = document.getElementById('uploadDatasetButton');
  
  //Elementary School Vocabulary
  selectSpellingTestDatasetButton.addEventListener('click', function(e){

    //initialize
    wordBank = [];
    nthQuestion = 0;
    genre = 'spellingtest'
    
    // get words from csv file and store in wordBank array

    const fileName = 'data/' + genre + '/' + dropDown.value
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



//Travel
travelDatasetButton.addEventListener('click', function(e){

    //initialize
    let tempWordBank =[];
    wordBank = [];
    nthQuestion = 0;
    genre = 'travel'
    
    // get words from csv file and store in wordBank array

    const fileName = 'data/' + genre + '/'  + 'travelwords.csv';
    if(!fileName.includes('csv')){
      return;
    }
    let request = new XMLHttpRequest();
    request.open('get', fileName, true);
    request.send(null);
    request.onload = function(){
      const dataSetList = request.responseText;
      let eachData = dataSetList.split("\n");
      
      for (let i=0; i<eachData.length; i++){
        tempWordBank[i] = eachData[i].split(',');
      }
    }
    
    //set question data set
    let randnum = 0;
    console.log(tempWordBank);
    for(let i=0;i<15;i++){
      randnum = Math.floor(Math.random()*(tempWordBank[0].length + 1));
      if(wordBank[0].indexOf(tempWordBank[0][randnum])===-1){
        wordBank[0].push(tempWordBank[0][randnum]);
      }else{
        i-=1;
      }
    }

    // close first screen and display second screen
    currentScreenNumber++;
    slideRibon.style.transform = `translateX(${-1 * slideWidth}px )`;
    slideRibon.style.transition = '.5s'
  });


  // for development
  // uploadDatasetButton.addEventListener('change', function(e){

  //   //initialize
  //   wordBank = [];
  //   nthQuestion = 0;

  //   // get words from csv file and store in wordBank array
  //   let result = e.target.files[0];
  //   let reader = new FileReader();

  //   reader.readAsText(result);

  //   reader.addEventListener('load', function(){
  //     let eachData = reader.result.split("\n");
  //     for (let i=0; i<eachData.length; i++){
  //       wordBank[i] = eachData[i].split(',');
  //     }
  //   });

  //   // close first screen and display second screen
  //   currentScreenNumber++;
  //   slideRibon.style.transform = `translateX(${-1 * slideWidth}px )`;
  //   slideRibon.style.transition = '.5s'
  // });
  // for development

}