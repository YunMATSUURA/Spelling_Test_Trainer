'use strict';

{

  const top = document.getElementById('top');

  top.addEventListener('click', function(){
    slideRibon.style.transform = `translateX(${0 * slideWidth/10}rem )`;
    slideRibon.style.transition = '.5s';
    currentScreenNumber = 0;

  })

  const previous = document.getElementById('previous');

  previous.addEventListener('click', function(){

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

  
  const nextButton = document.getElementById('next');
  
  let score = 0; //count up correct answers
  let stp = 0; // calculate spelling text point from result

  nextButton.addEventListener('click', function NextQuestion(){
    const userInput = document.getElementById('user-input');
    let answer = userInput.textContent;
    answerWords.push(answer);

    if (testOrPractice==='practice'){
      const answerJudgement = document.getElementById('answer-judgement');     
      if (answer === wordBank[0][nthQuestion]){
        // answerJudgement.classList.add('correct');
        // ★★Do This Later★★
      } else{
        // answerJudgement.classList.add('wrong');
        // ★★Do This Later★★  
      }
    }

    // initialize
    userInput.textContent = "";
    answer = "";
    inputWord ="";

    nthQuestion++;

    //display result slide
    if(nthQuestion===wordBank[0].length && wordBank[0].length!=0){

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
    }
  });
}
