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
      //let eachData = dataSetList.split("\n");
      //for (let i=0; i<eachData.length; i++){
        //wordBank[i] = eachData[i].split(',');
      //}
      wordBank = dataSetList.split(',');

    }
    // close first screen and display second screen
    currentScreenNumber++;
    slideRibon.style.transform = `translateX(${-1 * slideWidth}px )`;
    slideRibon.style.transition = '.5s'
  });



//Travel
travelDatasetButton.addEventListener('click', function(e){

  //initialize
  wordBank = [];
  nthQuestion = 0;
  genre = 'travel'
    


    // const fileName = 'data/' + genre + '/'  + 'travelwords.csv';
    // if(!fileName.includes('csv')){
    //   return;
    // }
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
    
    // const asyGetData = async() => {

    //   let request = new XMLHttpRequest();
    //   request.open('get', fileName, true);
    //   request.send(null);

    //   request.onload = function(){
    //     const dataSetList = request.responseText;
    //     let eachData = dataSetList.split("\n");
    //     for (let i=0; i<eachData.length - 1; i++){
    //       tempWordBank[i] = eachData[i].split(',');
    //     }
    //   }
    // }
  

    //set question data set
    function setQuestionData(){


      const travelWords = ['reservation','booking','public transportation','stay','accommodation','tourism','itinerary','passport','visa','luggage','packing','departure','arrival','destination','sightseeing','guidebook','souvenir','adventure','traveler','backpack','adventure','exploration','road trip','map','gps','ticket','departure time','arrival time','check-in','check-out','boarding pass','customs','immigration','currency exchange','local cuisine','street food','restaurant','menu','reservation','hostel','hotel','motel','bed and breakfast','resort','campsite','vacation','trip','cruise','package tour','backpacking','hiking','camping','beach','island','mountain','desert','forest','lake','river','waterfall','canyon','national park','landmark','monument','temple','cathedral','mosque','shrine','palace','castle','museum','art gallery','sculpture','painting','exhibit','archaeology','history','culture','tradition','festival','parade','carnival','celebration','local','tour guide','tourist attraction','tourist information','travel insurance','jet lag','souvenir shop','market','bargain','street vendor','street performer','street art','shopping','shopping district','retail','boutique','mall','department store','bargaining','credit card','cash','atm','currency','exchange rate','budget','expenses','expense report','taxi','uber','rental car','bus','tram','subway','train','commute','timetable','platform','terminal','delay','connection','layover','public transportation card','seat','ticket counter','baggage claim','lost luggage','flight attendant','cabin crew','airline','departure gate','arrival gate','passport control','boarding gate','security checkpoint','customs declaration','travel document','tourist visa','business trip','backpacker','globetrotter','agency','agent','package','itinerary','checklist','voucher','expense','insurance policy','adventure travel','cultural exchange','ecotourism','sustainable tourism','responsible travel','travel blog','travel vlog','travel photography','travelogue','tourist information center','tourist map','guided tour','self-guided tour','city tour','walking tour','bus tour','boat tour','cycling tour','wine tour','food tour','heritage site','natural wonder','scenic route','landscapes','panorama','check','insurance','advisory','adventure gear','backpacker','hostel','campground','caravan park','ski resort','beach resort','spa resort','all-inclusive resort','luxury resort','safari','jungle','rainforest','safari park','wildlife','birdwatching','whale watching','trekking','mountaineering','rock climbing','skiing','snowboarding','hiking trail','nature reserve','wildlife sanctuary','scuba diving','snorkeling','underwater world','coral reef','beachfront','seaside','coastal town','island hopping','kayaking','canoeing','rafting','sailing','cruise ship','yacht','ferry','ocean liner','lighthouse','harbor','port','marina','nautical','seafood','fish market','sea turtle','dolphin','whale','underwater photography','seashell','sandcastle','parasailing','kite surfing','windsurfing','surfing','beach volleyball','beachcombing','picnic','beach chair','sunscreen','sunhat','sunburn','tanning','beach party','bonfire','beach games','jet ski','coastal erosion','beach cleanup','resort wear','beach bag','sunglasses','beach towel','beach umbrella','beach ball','tide','waves','dinner','food'];


      let randnum = 0;

      for(let i=0;i<15;i++){
        console.log(wordBank);

        randnum = Math.floor(Math.random()*(travelWords.length + 1));

        if(wordBank.indexOf(travelWords[randnum])===-1){
          wordBank.push(travelWords[randnum]);
        }else{
          i-=1;
        }
      } 
    }

    setQuestionData();

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