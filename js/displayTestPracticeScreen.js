'use strict';

{
      
      // close send screen and display third screen
      const practiceButton = document.getElementById('doPractice');
      const viewElm = document.getElementById('canvas_outer');
      const cvs = document.createElement('canvas');
      const widthLength = 1400;
      const heightLength = 700;
      const context = cvs.getContext('2d');

      let voices = window.speechSynthesis.getVoices(); //get voice list

      practiceButton.addEventListener('click', function(){
            testOrPractice = 'practice';
            currentScreenNumber++;
            slideRibon.style.transform = `translateX(${-2 * slideWidth}px )`;
            slideRibon.style.transition = '.5s'
            playingBoolean = function(){return true;}
            voices = window.speechSynthesis.getVoices(); //get voice list
            voices.volume = 0;

            // const explanation = document.getElementsByClassName('game-rule-div');
            // console.log(explanation[0]);
            // explanation[0].classList.toggle('hidden');
            // console.log(explanation[0]);
            // document.addEventListener('keydown', function(e){
            //       e.preventDefault();
            //       explanation[0].classList.add('hidden');
            // })

            updateAnimation();
      });

      function updateAnimation(){
        const maxCnt = 1500;
        cnt++;
        if(cnt < maxCnt){
              window.requestAnimationFrame(updateAnimation);
        }else{
              if(cnt<10000){
                    const userInput = document.getElementById('user-input');
                    const ansArea = document.getElementById('answer-area');
                    gameOver = 'y';
                    ansArea.style.width = '80rem';
                    userInput.style.width = '800rem';
                    userInput.textContent = `Game Over...\n Answer : ${wordBank[nthQuestion]}`;
                    
              }
        }
      
        if(correctAnswer === 'n'){
              viewElm.appendChild(cvs);
              cvs.setAttribute('width', widthLength);
              cvs.setAttribute('height', heightLength);      
              cvs.style.width = '1400px';
              cvs.style.height = '800px';
              context.save();
                        
              context.clearRect(0, 0, widthLength, heightLength);
              //background
              context.beginPath();
              context.fillStyle = 'black';
              context.strokeStyle = 'black';
              context.lineWidth = 5;
              context.rect(10,10,1100,700);
              context.fill();
              context.stroke();
            
              //meteor & Timer
              if(cnt<10000){
                    
                const timerNum = Math.ceil((maxCnt - cnt)/100);

                switch(true){
                  case 10 < timerNum:
                    context.font = 'bold 48px serif';
                    context.fillStyle = 'rgb(230,230,230)';
                    break;
                  case 6 <= timerNum && timerNum <= 10:
                    context.font = 'bold 48px serif';
                    context.fillStyle = 'rgb(230,230,0)';
                    break;
                  default:
                    context.font = 'bold 64px serif';
                    context.fillStyle = 'rgb(230,0,0)';                   
                }

                context.fillText(timerNum, 100,250);

                const meteor = new Image();
                meteor.src = 'img/meteor-1.jpg';
                let sx = 500 - cnt/(maxCnt/250);
                let sy = 320 - cnt/(maxCnt/250);
                let sw = 100 + cnt/(maxCnt/500);
                let sh = 100 + cnt/(maxCnt/500);
                context.drawImage(meteor, sx, sy, sw, sh);
                        
              }else{
                    const explodingMeteor = new Image();
                    explodingMeteor.src = 'img/exploding-meteor-1.jpg';
                    let sx = 500 - (cnt - 10000)/4;
                    let sy = 320 - (cnt - 10000)/4;
                    let sw = 100 + (cnt - 10000)/2;
                    let sh = 100 + (cnt - 10000)/2;
                    context.drawImage(explodingMeteor, sx, sy, sw, sh);
                    correctAnswer = 'n';
              }
                  
            }else{
                  cnt+=10000;
                  viewElm.appendChild(cvs);
                  cvs.setAttribute('width', widthLength);
                  cvs.setAttribute('height', heightLength);      
                  cvs.style.width = '1400px';
                  cvs.style.height = '800px';
                  context.save();
                        
                  context.clearRect(0, 0, widthLength, heightLength);
                  //background
                  context.beginPath();
                  context.fillStyle = 'black';
                  context.strokeStyle = 'blue';
                  context.lineWidth = 5;
                  context.rect(10,10,1100,700);

                  //meteor
                  const explodingMeteor = new Image();
                  explodingMeteor.src = 'img/exploding-meteor-1.jpg';
                  let sx = 500 - cnt/4;
                  let sy = 320 - cnt/4;
                  let sw = 100 + cnt/2;
                  let sh = 100 + cnt/2;
                  context.drawImage(explodingMeteor, sx, sy, sw, sh);
                  context.fill();
                  context.stroke();
                  correctAnswer = 'n';
                  // context.clearRect(0, 0, widthLength, heightLength);


                  function wait(waitSec, callbackFunc){
                        let sec = 0;
                        let id =setInterval(function(){
                              sec++;
                              if(sec>=waitSec){
                                    clearInterval(id);
                                    if(callbackFunc) {
                                          callbackFunc();
                                    }
                              }
                        }, 1000);
                  }
                  wait(3, function(){
                        cnt = 0;
                        updateAnimation();
                  });
                  
            } //if(correctAnswer === 'n'){}else{
            
      } //function init(){


      //Keydown action
      document.addEventListener('keydown', function(e){
            const userInput = document.getElementById('user-input');
      
            if (playingBoolean){
        
              if(e.key==='a'||e.key==='b'||e.key==='c'||e.key==='d'||e.key==='e'||e.key==='f'||e.key==='g'||e.key==='h'||e.key==='i'||e.key==='j'||e.key==='k'||e.key==='l'||e.key==='m'||e.key==='n'||e.key==='o'||e.key==='p'||e.key==='q'||e.key==='r'||e.key==='s'||e.key==='t'||e.key==='u'||e.key==='v'||e.key==='w'||e.key==='x'||e.key==='y'||e.key==='z'){
                inputWord += e.key;
                userInput.textContent = inputWord;
              } else if (e.key==='Delete'){
                inputWord='';
                userInput.textContent = inputWord;
              } else if(e.key==='Backspace'){
                inputWord = inputWord.slice(0,inputWord.length-1)
                userInput.textContent = inputWord;
              } else if (e.shiftKey){
                e.preventDefault       
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
      
                  if(userInput.textContent === wordBank[nthQuestion]){
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
      
              
              } else if (e.key==='Control'){
                //Shift
                e.preventDefault();
                utterWords();

              } else if (e.key===' '){
                //Space
                e.preventDefault();
                inputWord += ' ';
                userInput.textContent = inputWord;                
              }
              
            };
          }, false);
      
          
          //utter voice
          function utterWords(){

            const utter = new SpeechSynthesisUtterance(wordBank[nthQuestion]);
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
      
                if(answer===wordBank[nthQuestion]){
                  // initialize
                  answerWords.push(answer);
                  nthQuestion++;
                  console.log(wordBank);
                } else{
                  //wrong answer   
                }
                answer = "";
                inputWord ="";
                displayResult();
      
              } catch(err){
                console.error(err)
              }
            }
      
            waitThenInitialize();
      
            //display result slide
            function displayResult(){

              if(nthQuestion===wordBank.length && wordBank.length!=0){
              
                //create result table
                const tableElement = document.getElementById('result-table');
          
                for(let i=0; i<wordBank.length; i++){
          
                  const tableRow = document.createElement('tr');
                  const tableDataUser = document.createElement('td');//user's answer
                  const tableDataCorrect = document.createElement('td');//correct answer
          
                  tableDataUser.innerText = answerWords[i];//user's answer
                  tableDataUser.style.textAlign ='center';
          
                  tableDataCorrect.innerText = wordBank[i];//correct answer
                  tableDataCorrect.style.textAlign ='center';
          
                  //after finishing all questions
                  if (answerWords[i]===wordBank[i]){
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
          
                if (score===wordBank.length){
                  resultWord.innerText = 'Congratulations! Perfect!!';
                } else{
                  resultWord.innerText = 'Congratulations!';
                }
                resultScore.innerText = `Score:${score}/${wordBank.length}, Stp:${stp}`
          
                //display result slide
                const cDisplay =document.getElementsByClassName('carousel-display');
          
                cDisplay[0].style.height = `${30 + (wordBank.length * (2 + 3.2 * 0.9))}rem`;
          
                currentScreenNumber++;
                slideRibon.style.transform = `translateX(${-3 * slideWidth/10}rem )`;
                slideRibon.style.transition = '.5s';
                
                //update status vaiables
                stpAccAmt = parseInt(stpAccAmt,10) + stp;
                stpBalanceAmt = parseInt(stpBalanceAmt,10) + stp;
                playCnt++;
                
                if(score===wordBank.length){
                  fullScoreCnt++;
                }
                
                //update cockie
                if(acceptCockie==='yes' && wordBank.length!=0){
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
              }
            }
      
          }
      







}