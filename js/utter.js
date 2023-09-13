'use strict';

{ 
  const listenButton = document.getElementById('listen');
  window.speechSynthesis.getVoices(); //for Google Chrome

  listenButton.addEventListener('click', function(){

    const utter = new SpeechSynthesisUtterance(wordBank[0][nthQuestion]);
    const voices = window.speechSynthesis.getVoices(); //get voice list
    
    utter.voice = voices[0];
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
  });


  



}