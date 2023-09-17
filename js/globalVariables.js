'use strict';
let acceptCockie = 'no';
let currentScreenNumber = 0;
let wordBank = [];
let answerWords =[];
let inputWord ="";
let testOrPractice ="";
let nthQuestion = 0;
let playingBoolean = false;
let correctAnswer = 'n';
let cnt = 0;
// let voices;

let score = 0; //count up correct answers
let stp = 0; // calculate spelling text point from result
let firstUtter = 0;

const slides = document.getElementsByClassName('slides');
const slideWidth  = slides[0].getBoundingClientRect().width;
const slideRibon = document.getElementById('carousel-slides-ribon');

//cockie
let stpAccAmt = 0;
let stpBalanceAmt = 0;
let playCnt = 0;
let fullScoreCnt = 0;
let usPlayCnt = 0;
let usPlayFullCnt = 0;
let brPlayCnt = 0;
let brPlayFullCnt = 0;
let manPlayCnt = 0;
let manPlayFullCnt = 0;
let womanPlayCnt = 0;
let womanPlayFullCnt = 0;
let usManPlayCnt = 0;
let usManPlayFullCnt = 0;
let usWomanPlayCnt = 0;
let usWomanPlayFullCnt = 0;
let brManPlayCnt = 0;
let brManPlayFullCnt = 0;
let brWomanPlayCnt = 0;
let brWomanPlayFullCnt = 0;

