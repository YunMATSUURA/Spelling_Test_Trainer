'use strict';

{

    document.addEventListener('keydown', function(e){
      const userInput = document.getElementById('user-input');

      if (playingBoolean){
        if(65<=e.keyCode && e.keyCode<=90){
          inputWord += e.key;
          userInput.textContent = inputWord;
        } else if (e.key==='Backspace' || e.key==='Delete'){
          inputWord='';
          userInput.textContent = inputWord;
        } else if (e.key==='Enter'){
          e.preventDefault();
          nextButton.NextQuestion();
        }
      };
    }, false);

}