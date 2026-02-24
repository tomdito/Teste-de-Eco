import {quiz} from './assets/quizData.js';
import {evaluateWithTieBreak} from './assets/engine.js';
import {shuffleInPlace} from './assets/selection.js';

const RUN_SIZE = 15;
const trials = 5000;
const results = {Elevada:0, Desperta:0, Fraca:0};
const ecos = {fogo:0, terra:0, ar:0, agua:0, vida:0, alma:0};

function pickRun(questions){
  const arr = [...questions];
  shuffleInPlace(arr);
  return arr.slice(0, RUN_SIZE);
}

function randomAnswer(q){
  return q.answers[Math.floor(Math.random()*q.answers.length)];
}

for(let t=0;t<trials;t++){
  const run = pickRun(quiz.questions);
  const answersById = {};
  for(const q of run){
    answersById[q.id]=randomAnswer(q);
  }
  let tieBreakerAnswer=null;
  let result = evaluateWithTieBreak({runQuestions: run, keyIds: quiz.keyQuestions, answersById, tieBreakerAnswer});
  if(result.tieMode==='askTieBreaker'){
    tieBreakerAnswer = randomAnswer(quiz.tieBreaker);
    result = evaluateWithTieBreak({runQuestions: run, keyIds: quiz.keyQuestions, answersById, tieBreakerAnswer});
  }
  results[result.afinidade]++;
  ecos[result.topEco]++;
}

console.log('Trials', trials);
console.log('Afinidade %', Object.fromEntries(Object.entries(results).map(([k,v])=>[k, (v/trials*100).toFixed(1)+'%'])));
console.log('Dominante %', Object.fromEntries(Object.entries(ecos).map(([k,v])=>[k,(v/trials*100).toFixed(1)+'%'])));
