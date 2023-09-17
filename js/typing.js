'use strict';

{

    document.addEventListener('keydown', function(e){
      const userInput = document.getElementById('user-input');


      // if(playingBoolean  && firstTime==='y'){
      //   console.log(explanation);
      //   explanation.classList.remove('hidden');
      //   console.log(explanation);
        
      //   let voices = window.speechSynthesis.getVoices(); //get voice list
      //   utter.voice = voices[0];
      //   firstTime = 'n';
      // }

      if (playingBoolean){
  
        if(65<=e.keyCode && e.keyCode<=90){
          inputWord += e.key;
          userInput.textContent = inputWord;
        } else if (e.key==='Backspace' || e.key==='Delete'){
          inputWord='';
          userInput.textContent = inputWord;
        
          //Enter
        } else if (e.key==='Enter'){

          if(gameOver==='y'){
            slideRibon.style.transform = `translateX(${0 * slideWidth/10}rem )`;
            slideRibon.style.transition = '.5s';
            currentScreenNumber = 0;

            wordBank = [];
            answerWords =[];
            inputWord ="";
            userInput.textContent = '';
            gameOver = 'n';
            cnt = 0;
            answerWords.push('----');

          }else{

            e.preventDefault();
            answerQuestion();

            //sound effect
            const wait = (sec) =>{
              return new Promise((resolve,reject)=>{
                setTimeout(resolve, sec*1000);
              });
            }

            if(userInput.textContent === wordBank[0][nthQuestion]){

              //correct answer
              async function waitThenExplode(){
                try{
                  await wait(.5); //wait until the missile reached the target
                  const soundEffect = new Audio('mp3/small_explosion1.mp3');
                  soundEffect.currentTime = 0;
                  correctAnswer = 'y';
                  soundEffect.play();
                } catch(err){
                  console.error(err);
                }
              }
              waitThenExplode();
              //correct answer
              
            }else{
              //wrong answer
              async function waitThenMetalSound(){
                try{
                  await wait(.5); //wait until the missile reached the target
                  const soundEffect = new Audio('mp3/metal-collision.mp3'); 
                  soundEffect.currentTime = 0;
                  soundEffect.play();
                } catch(err){
                  console.error(err);
                } 
              }
              waitThenMetalSound();
              //wrong answer
            }
        }
        //Enter

        //Space
        } else if (e.key===' '){
          e.preventDefault();
          utterWords();
        }
        //Space
      };
    }, false);


    function utterWords(){
      
      const utter = new SpeechSynthesisUtterance(wordBank[0][nthQuestion]);
      let voices = window.speechSynthesis.getVoices(); //get voice list
      if(firstUtter===0){
        utter.voice = voices[0];
        utter.rate = 5; 
        utter.volume = 0;
        // window.speechSynthesis.speak(utter);
        firstUtter++;
      }

      voices = window.speechSynthesis.getVoices(); //get voice list
      utter.voice = voices[0];
      utter.volume = 1;
      utter.rate = 1.0;
      // console.log(voices);
      // 'Microsoft David - English (United States)'	'Microsoft David - English (United States)'	'en-US'	true	true
      // 1	'Microsoft Mark - English (United States)'	'Microsoft Mark - English (United States)'	'en-US'	true	false
      // 2	'Microsoft Zira - English (United States)'	'Microsoft Zira - English (United States)'	'en-US'	true	false
      // 3	'Microsoft Ayumi - Japanese (Japan)'	'Microsoft Ayumi - Japanese (Japan)'	'ja-JP'	true	false
      // 4	'Microsoft Haruka - Japanese (Japan)'	'Microsoft Haruka - Japanese (Japan)'	'ja-JP'	true	false
      // 5	'Microsoft Ichiro - Japanese (Japan)'	'Microsoft Ichiro - Japanese (Japan)'	'ja-JP'	true	false
      // 6	'Microsoft Sayaka - Japanese (Japan)'	'Microsoft Sayaka - Japanese (Japan)'	'ja-JP'	true	false
  
      window.speechSynthesis.speak(utter);
    }

    function answerQuestion(){
      const userInput = document.getElementById('user-input');
      
      let answer = userInput.textContent;
      
      const answerArea = document.getElementById('answer-area');
      answerArea.classList.add('attack-animation');
      

      const wait = (sec) =>{
        return new Promise((resolve,reject)=>{
          setTimeout(resolve, sec*1000);
        });
      }

      async function waitThenInitialize(){
        try{
          await wait(.5); //wait for shooting meteor
          answerArea.classList.remove('attack-animation');
          userInput.textContent = '';
          if(answer===wordBank[0][nthQuestion]){
            // initialize
            answerWords.push(answer);
            nthQuestion++;
          } else{
            //wrong answer   
          }
          answer = "";
          inputWord ="";

        } catch(err){
          console.error(err)
        }
      }

      waitThenInitialize();

      //display result slide
      if(nthQuestion===wordBank[0].length-1 && wordBank[0].length!=0){
        
        //create result table
        const tableElement = document.getElementById('result-table');
  
        for(let i=0; i<wordBank[0].length; i++){
  
          const tableRow = document.createElement('tr');
          const tableDataUser = document.createElement('td');//user's answer
          const tableDataCorrect = document.createElement('td');//correct answer
  
          tableDataUser.innerText = answerWords[i];//user's answer
          tableDataUser.style.textAlign ='center';
  
          tableDataCorrect.innerText = wordBank[0][i];//correct answer
          tableDataCorrect.style.textAlign ='center';
  
          //after finishing all questions
          if (answerWords[i]===wordBank[0][i]){
            playingBoolean = function(){return false;}
            tableDataUser.style.color = 'rgb(30, 200,30)';
            score++;
            stp += answerWords[i].length;
          } else{
            tableDataUser.style.color = 'rgb(220, 20,20)';
          }
  
          tableRow.appendChild(tableDataUser); //user's answer
          tableRow.appendChild(tableDataCorrect); //correct answer
          tableElement.appendChild(tableRow);
        }
  
        //revise result words
        const resultWord = document.getElementById('result-words');
        const resultScore = document.getElementById('result-score-exp');
  
        if (score===wordBank[0].length){
          resultWord.innerText = 'Congratulations! Perfect!!';
        } else{
          resultWord.innerText = 'Congratulations!';
        }
        resultScore.innerText = `Score:${score}/${wordBank[0].length}, Stp:${stp}`
  
        //display result slide
        const cDisplay =document.getElementsByClassName('carousel-display');
  
        cDisplay[0].style.height = `${30 + (wordBank[0].length * (2 + 3.2 * 0.9))}rem`;
  
        currentScreenNumber++;
        slideRibon.style.transform = `translateX(${-3 * slideWidth/10}rem )`;
        slideRibon.style.transition = '.5s';
        
        //update status vaiables
        stpAccAmt = parseInt(stpAccAmt,10) + stp;
        stpBalanceAmt = parseInt(stpBalanceAmt,10) + stp;
        playCnt++;
        
        if(score===wordBank[0].length){
          fullScoreCnt++;
        }
        
        //update cockie
        if(acceptCockie==='yes' && wordBank[0].length!=0){
          document.cookie = `stpAccAmt=${stpAccAmt}`;
          document.cookie = `stpBalanceAmt=${stpBalanceAmt}`;
          document.cookie = `playCnt=${playCnt}`;
          document.cookie = `fullScoreCnt=${fullScoreCnt}`;
          document.cookie = `usPlayCnt=${usPlayCnt}`;
          document.cookie = `usPlayFullCnt=${usPlayFullCnt}`;
          document.cookie = `brPlayCnt=${brPlayCnt}`;
          document.cookie = `brPlayFullCnt=${brPlayFullCnt}`;
          document.cookie = `manPlayCnt=${manPlayCnt}`;
          document.cookie = `manPlayFullCnt=${manPlayFullCnt}`;
          document.cookie = `womanPlayCnt=${womanPlayCnt}`;
          document.cookie = `womanPlayFullCnt=${womanPlayFullCnt}`;
          document.cookie = `usManPlayCnt=${usManPlayCnt}`;
          document.cookie = `usManPlayFullCnt=${usManPlayFullCnt}`;
          document.cookie = `usWomanPlayCnt=${usWomanPlayCnt}`;
          document.cookie = `usWomanPlayFullCnt=${usWomanPlayFullCnt}`;
          document.cookie = `brManPlayCnt=${brManPlayCnt}`;
          document.cookie = `brManPlayFullCnt=${brManPlayFullCnt}`;
          document.cookie = `brWomanPlayCnt=${brWomanPlayCnt}`;
          document.cookie = `brWomanPlayFullCnt=${brWomanPlayFullCnt}`;
        }
        
        //initialize
          stpAccAmt = 0;
          stpBalanceAmt = 0;
          playCnt = 0;
          fullScoreCnt = 0;
          usPlayCnt = 0;
          usPlayFullCnt = 0;
          brPlayCnt = 0;
          brPlayFullCnt = 0;
          manPlayCnt = 0;
          manPlayFullCnt = 0;
          womanPlayCnt = 0;
          womanPlayFullCnt = 0;
          usManPlayCnt = 0;
          usManPlayFullCnt = 0;
          usWomanPlayCnt = 0;
          usWomanPlayFullCnt = 0;
          brManPlayCnt = 0;
          brManPlayFullCnt = 0;
          brWomanPlayCnt = 0;
          brWomanPlayFullCnt = 0;

          score = 0;
          stp = 0;
          nthQuestion=0;
      }
    }

}