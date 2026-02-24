// app.js
import { ECOS, quiz } from './quizData.js';
import { shuffleInPlace, pickRunQuestions } from './selection.js';
import { evaluateWithTieBreak } from './engine.js';
import { renderFinalResult } from './renderResult.js';

const RUN_SIZE = 10;
const QUESTIONS = pickRunQuestions(quiz.questions, quiz.keyQuestions, {
  runSize: RUN_SIZE,
  persistNoRepeat: true,
  storageKey: 'ecoQuizSeen',
  categoryQuotas: { conflito: 2, pressao: 2, vinculos: 2, trabalho: 2, moral: 2 }
});

const container = document.getElementById('quiz-container');
container?.setAttribute('aria-live', 'polite');
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
  container.innerHTML = '';

  const title = document.createElement('div');
  title.className = 'result-main';
  title.style.marginTop = '32px';
  title.textContent = quiz.title;

  const intro = document.createElement('div');
  intro.className = 'result-details';
  intro.style.marginBottom = '24px';
  intro.textContent = quiz.introText;

  const startBtn = document.createElement('button');
  startBtn.className = 'answer-btn';
  startBtn.id = 'start-btn';
  startBtn.style.cssText = [
    'font-size:1.1rem',
    'padding:16px 28px',
    'margin-top:18px',
    'margin-left:auto',
    'margin-right:auto',
    'width:auto',
    'display:inline-flex',
    'justify-content:center'
  ].join(';');
  startBtn.textContent = 'Começar teste';

  startBtn.onclick = () => {
    started = true;
    current = 0;
    answersById = {};
    tieBreakerAnswer = null;
    renderQuestion();
  };

  container.append(title, intro, startBtn);
  fadeIn(container);
}

function renderProgress() {
  const percent = Math.round(((current + 1) / QUESTIONS.length) * 100);
  const bar = document.createElement('div');
  bar.className = 'progress-bar';

  const fill = document.createElement('div');
  fill.className = 'progress';
  fill.style.width = percent + '%';
  fill.setAttribute('aria-valuemin', '0');
  fill.setAttribute('aria-valuemax', '100');
  fill.setAttribute('aria-valuenow', String(percent));
  fill.setAttribute('role', 'progressbar');
  fill.setAttribute('aria-label', `Progresso ${percent}%`);

  const label = document.createElement('div');
  label.className = 'progress-label';
  label.textContent = `Pergunta ${current + 1} de ${QUESTIONS.length}`;

  bar.append(fill, label);
  return bar;
}

function renderQuestion() {
  const q = QUESTIONS[current];
  const answers = shuffleInPlace([...q.answers]);
  let selectedIdx = null;

  container.innerHTML = '';
  const card = document.createElement('div');
  card.className = 'question-card';

  const progress = renderProgress();
  const questionEl = document.createElement('div');
  questionEl.className = 'question';
  questionEl.textContent = q.prompt;

  const answersWrapper = document.createElement('div');
  answersWrapper.className = 'answers';
  answersWrapper.setAttribute('role', 'radiogroup');

  const confirmBtn = document.createElement('button');
  confirmBtn.id = 'confirm-btn';
  confirmBtn.className = 'confirm-btn';
  confirmBtn.disabled = true;
  confirmBtn.textContent = 'Confirmar resposta';

  const buttons = answers.map((a, i) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.dataset.idx = String(i);
    btn.type = 'button';
    btn.setAttribute('role', 'radio');
    btn.setAttribute('aria-checked', 'false');
    btn.textContent = a.text;
    btn.onclick = () => selectAnswer(i, btn);
    btn.onkeydown = (ev) => handleArrowNavigation(ev, i);
    return btn;
  });

  function selectAnswer(idx, btnEl) {
    buttons.forEach(b => {
      b.classList.remove('selected');
      b.setAttribute('aria-checked', 'false');
    });
    btnEl.classList.add('selected');
    btnEl.setAttribute('aria-checked', 'true');
    selectedIdx = idx;
    confirmBtn.disabled = false;
  }

  function handleArrowNavigation(ev, idx) {
    const { key } = ev;
    if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key)) return;
    ev.preventDefault();
    const dir = key === 'ArrowUp' || key === 'ArrowLeft' ? -1 : 1;
    const nextIdx = (idx + dir + buttons.length) % buttons.length;
    buttons[nextIdx].focus();
  }

  buttons.forEach(btn => answersWrapper.appendChild(btn));
  card.append(progress, questionEl, answersWrapper, confirmBtn);
  container.append(card);
  fadeIn(container);

  confirmBtn.onclick = () => {
    if (selectedIdx === null) return;
    confirmBtn.disabled = true; // evita duplo clique
    handleAnswer(q, answers[selectedIdx]);
  };
}

function renderTieBreaker() {
  const q = quiz.tieBreaker;
  const answers = shuffleInPlace([...q.answers]);
  container.innerHTML = '';

  const heading = document.createElement('div');
  heading.className = 'question';
  heading.textContent = 'Pergunta bônus de desempate';

  const prompt = document.createElement('div');
  prompt.className = 'question';
  prompt.style.marginTop = '8px';
  prompt.textContent = q.prompt;

  const answersWrapper = document.createElement('div');
  answersWrapper.className = 'answers';
  answersWrapper.setAttribute('role', 'radiogroup');

  const buttons = answers.map((a, i) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.dataset.idx = String(i);
    btn.type = 'button';
    btn.setAttribute('role', 'radio');
    btn.setAttribute('aria-checked', 'false');
    btn.textContent = a.text;
    btn.onclick = () => selectTie(i, btn);
    btn.onkeydown = (ev) => handleArrowNavigation(ev, i);
    return btn;
  });

  function selectTie(idx, btnEl) {
    buttons.forEach(b => {
      b.classList.remove('selected');
      b.setAttribute('aria-checked', 'false');
    });
    btnEl.classList.add('selected');
    btnEl.setAttribute('aria-checked', 'true');
    tieBreakerAnswer = answers[idx];
    showResult();
  }

  function handleArrowNavigation(ev, idx) {
    const { key } = ev;
    if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key)) return;
    ev.preventDefault();
    const dir = key === 'ArrowUp' || key === 'ArrowLeft' ? -1 : 1;
    const nextIdx = (idx + dir + buttons.length) % buttons.length;
    buttons[nextIdx].focus();
  }

  buttons.forEach(btn => answersWrapper.appendChild(btn));
  container.append(heading, prompt, answersWrapper);
  fadeIn(container);
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
    answersById
  });

  const confidencePct = Math.round((result.topScore / result.max) * 100);

  // Usa o renderizador ritual completo
  container.innerHTML = '<div id="result"></div>';
  fadeIn(container);
  renderFinalResult({
    dominant: result.topEco,
    secondary: result.secondEco,
    afinidade: result.afinidade,
    confidencePct
  });
}

if (!started) {
  renderStart();
} else {
  renderQuestion();
}
