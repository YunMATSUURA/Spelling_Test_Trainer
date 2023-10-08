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
    //let request = new XMLHttpRequest();
    //request.open('get', fileName, true);
    //request.send(null);
    
    // request.onload = function(){
    //   const dataSetList = request.responseText;
    //   let eachData = dataSetList.split("\n");
      
    //   for (let i=0; i<eachData.length; i++){
    //     tempWordBank[i] = eachData[i].split(',');
    //   }
    // }
    
    const asyGetData = async() => {

      let request = new XMLHttpRequest();
      request.open('get', fileName, true);
      request.send(null);

      request.onload = function(){
        const dataSetList = request.responseText;
        let eachData = dataSetList.split("\n");
        for (let i=0; i<eachData.length - 1; i++){
          tempWordBank[i] = eachData[i].split(',');
        }
      }
    }
    
    const waitRequestOnload = (async() => {
      await asyGetData();
      setQuestionData();
    })();

    //set question data set
    function setQuestionData(){
      let randnum = 0;

      for(let i=0;i<15;i++){

       //randnum = Math.floor(Math.random()*(tempWordBank.length + 1));
        randnum = Math.floor(Math.random()*(260 + 1));
        console.log(tempWordBank.length);
        if(wordBank.indexOf(tempWordBank[0][randnum])===-1){
          wordBank[0].push(tempWordBank[0][randnum]);
        }else{
          i-=1;
        }
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