// app.js
import { ECOS, quiz } from './quizData.js';
import { shuffleInPlace, pickRunQuestions } from './selection.js';
import { evaluateWithTieBreak } from './engine.js';
import { renderFinalResult } from './renderResult.js';

const RUN_SIZE = 30;
const QUESTIONS = pickRunQuestions(quiz.questions, quiz.keyQuestions, {
  runSize: RUN_SIZE,
  persistNoRepeat: true,
  storageKey: 'ecoQuizSeen'
});

const container = document.getElementById('quiz-container');
let current = 0;
let answersById = {};
let tieBreakerAnswer = null;
let started = false;

function fadeIn(el) {
  el.style.opacity = 0;
  el.style.transform = 'translateY(32px) scale(0.98)';
  setTimeout(() => {
    el.style.transition = 'opacity 0.7s cubic-bezier(.4,2,.6,1), transform 0.7s cubic-bezier(.4,2,.6,1)';
    el.style.opacity = 1;
    el.style.transform = 'none';
  }, 10);
}

function renderStart() {
  container.innerHTML = ''
    + '<div class="result-main" style="margin-top:32px;">' + quiz.title + '</div>'
    + '<div class="result-details" style="margin-bottom:24px;">' + quiz.introText + '</div>'
    + '<button class="answer-btn" id="start-btn" style="font-size:1.1rem;padding:16px 28px;margin-top:18px;width:auto;">Começar teste</button>';
  fadeIn(container);
  document.getElementById('start-btn').onclick = () => {
    started = true;
    current = 0;
    answersById = {};
    tieBreakerAnswer = null;
    renderQuestion();
  };
}

function renderProgress() {
  const percent = Math.round((current / QUESTIONS.length) * 100);
  return '<div class="progress-bar"><div class="progress" style="width:' + percent + '%"></div></div>';
}

function renderQuestion() {
  const q = QUESTIONS[current];
  const answers = shuffleInPlace([...q.answers]);
  let selectedIdx = null;
  let html = '';
  html += renderProgress();
  html += '<div class="question-card">';
  html += '<div class="question">' + q.prompt + '</div>';
  html += '<div class="answers">';
  html += answers.map((a, i) => '<button class="answer-btn" data-idx="' + i + '">' + a.text + '</button>').join('');
  html += '</div>';
  html += '<button id="confirm-btn" class="confirm-btn" disabled>Confirmar resposta</button>';
  html += '</div>';
  container.innerHTML = html;
  fadeIn(container);
  const confirmBtn = document.getElementById('confirm-btn');
  document.querySelectorAll('.answer-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.answer-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedIdx = Number(btn.dataset.idx);
      confirmBtn.disabled = false;
    };
  });
  confirmBtn.onclick = () => {
    if (selectedIdx === null) return;
    handleAnswer(q, answers[selectedIdx]);
  };
}

function renderTieBreaker() {
  const q = quiz.tieBreaker;
  const answers = shuffleInPlace([...q.answers]);
  let html = '';
  html += '<div class="question">Pergunta bônus de desempate</div>';
  html += '<div class="question" style="margin-top:8px;">' + q.prompt + '</div>';
  html += '<div class="answers">';
  html += answers.map((a, i) => '<button class="answer-btn" data-idx="' + i + '">' + a.text + '</button>').join('');
  html += '</div>';
  container.innerHTML = html;
  fadeIn(container);
  document.querySelectorAll('.answer-btn').forEach(btn => {
    btn.onclick = () => {
      tieBreakerAnswer = answers[Number(btn.dataset.idx)];
      showResult();
    };
  });
}

function handleAnswer(q, chosen) {
  answersById[q.id] = chosen;
  current++;
  if (current < QUESTIONS.length) {
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const result = evaluateWithTieBreak({
    runQuestions: QUESTIONS,
    keyIds: quiz.keyQuestions,
    answersById,
    tieBreakerAnswer
  });

  if (result.tieMode === 'askTieBreaker') {
    renderTieBreaker();
    return;
  }

  const reliabilityPct = Math.round(result.reliability * 100);

  // Usa o renderizador ritual completo
  container.innerHTML = '<div id="result"></div>';
  fadeIn(container);
  renderFinalResult({
    dominant: result.topEco,
    secondary: result.secondEco,
    afinidade: result.afinidade,
    confidencePct: reliabilityPct
  });
}

if (!started) {
  renderStart();
} else {
  renderQuestion();
}
