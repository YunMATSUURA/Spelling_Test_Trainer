'use strict';

{
      // close send screen and display third screen
      const practiceButton = document.getElementById('doPractice');
      const testButton = document.getElementById('takeTest');
      const nextButtonLabel = document.getElementById('nextButtonLabel');
      
      practiceButton.addEventListener('click', function(){
            testOrPractice = 'practice';
            nextButtonLabel.innerText = "Answer" 
            currentScreenNumber++;
            slideRibon.style.transform = `translateX(${-2 * slideWidth}px )`;
            slideRibon.style.transition = '.5s'
            playingBoolean = function(){return true;}
      });

      testButton.addEventListener('click', function(){
            testOrPractice = 'test';
            nextButtonLabel.innerText = "Next"
            currentScreenNumber++;
            slideRibon.style.transform = `translateX(${-2 * slideWidth}px )`;
            slideRibon.style.transition = '.5s'
            playingBoolean = function(){return true;}
      });



}