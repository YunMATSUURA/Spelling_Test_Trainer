'use strict';

{

  const userInput = document.getElementById('user-input');
  const top = document.getElementById('top');

  top.addEventListener('click', function(){
    slideRibon.style.transform = `translateX(${0 * slideWidth/10}rem )`;
    slideRibon.style.transition = '.5s';
    currentScreenNumber = 0;
  })

  const previous = document.getElementById('previous');

  previous.addEventListener('click', function(){
    score = 0;
    stp = 0;
    nthQuestion=0;
    wordBank = [];
    answerWords =[];
    inputWord ="";
    gameOver==='n'
    userInput.textContent = '';
    gameOver = 'n';
    cnt = 0;

    switch(currentScreenNumber){
      case 0:
        break;
      case 1:
        slideRibon.style.transform = `translateX(${0 * slideWidth/10}rem )`;
        slideRibon.style.transition = '.5s';
        currentScreenNumber--;
        break;
      case 2:
        slideRibon.style.transform = `translateX(${-1 * slideWidth/10}rem )`;
        slideRibon.style.transition = '.5s';
        currentScreenNumber--;
        break;
      case 3:
        slideRibon.style.transform = `translateX(${-2 * slideWidth/10}rem )`;
        slideRibon.style.transition = '.5s';
        currentScreenNumber--;
        break;             
    }
  })

}
