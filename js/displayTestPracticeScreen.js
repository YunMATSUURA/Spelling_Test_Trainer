'use strict';

{
      
      // close send screen and display third screen
      const practiceButton = document.getElementById('doPractice');
      const viewElm = document.getElementById('canvas_outer');
      const cvs = document.createElement('canvas');
      const widthLength = 1400;
      const heightLength = 700;
      const context = cvs.getContext('2d');

      practiceButton.addEventListener('click', function(){
            testOrPractice = 'practice';
            currentScreenNumber++;
            slideRibon.style.transform = `translateX(${-2 * slideWidth}px )`;
            slideRibon.style.transition = '.5s'
            playingBoolean = function(){return true;}

 
            init();

            
      });

      function init(){    

            cnt++;
            if(cnt < 1200){
                  window.requestAnimationFrame(init);
            }else{
                  if(cnt<10000){
                        const userInput = document.getElementById('user-input');
                        gameOver = 'y';
                        userInput.textContent = 'Game Over...';
                  }
            }
      //
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
                  context.strokeStyle = 'blue';
                  context.lineWidth = 5;
                  context.rect(10,10,1300,700);
                  context.fill();
                  context.stroke();
            
                  //meteor
                  if(cnt<10000){
                        const meteor = new Image();
                        meteor.src = 'img/meteor-1.jpg';
                        let sx = 550 - cnt/4;
                        let sy = 320 - cnt/4;
                        let sw = 100 + cnt/2;
                        let sh = 100 + cnt/2;
                        context.drawImage(meteor, sx, sy, sw, sh);                        
                  }else{
                        const explodingMeteor = new Image();
                        explodingMeteor.src = 'img/exploding-meteor-1.jpg';
                        console.log(cnt);
                        let sx = 550 - (cnt - 10000)/4;
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
                  context.rect(10,10,1300,700);

                  //meteor
                  const explodingMeteor = new Image();
                  explodingMeteor.src = 'img/exploding-meteor-1.jpg';
                  let sx = 550 - cnt/4;
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
                        init();
                  });
                  
            }
            
      }
}