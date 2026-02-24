// engine.js - lógica simplificada
import { ECOS } from './quizData.js';

export function emptyTotals() {
  return Object.fromEntries(ECOS.map(e => [e, 0]));
}

export function addScoresWeighted(totals, scores, weight) {
  for (const eco of Object.keys(scores)) {
    totals[eco] += scores[eco] * weight;
  }
}

export function calcMaxScore(runQuestions) {
  return runQuestions.length * 2; // 10 perguntas * 2 pontos cada
}

export function sortTotals(totals) {
  return Object.entries(totals).sort((a, b) => b[1] - a[1]);
}

export function classifyAffinity({ topScore }) {
  if (topScore >= 15) return 'Elevada';
  if (topScore >= 9) return 'Desperta';
  return 'Fraca';
}

export function evaluateRun({ runQuestions, answersById }) {
  const totals = emptyTotals();
  const counts = emptyTotals(); // quantas vezes cada Eco recebeu +2

  for (const q of runQuestions) {
    const chosen = answersById[q.id];
    if (!chosen) continue;
    addScoresWeighted(totals, chosen.scores, 1);
    for (const [eco, score] of Object.entries(chosen.scores || {})) {
      if (score >= 2) counts[eco] = (counts[eco] || 0) + 1;
    }
  }

  const max = calcMaxScore(runQuestions);
  const sorted = sortTotals(totals);
  const [topEco, topScore] = sorted[0];
  const [secondEco, secondScore] = sorted[1];
  const afinidade = classifyAffinity({ topScore });

  return {
    totals,
    counts,
    max,
    sorted,
    topEco,
    secondEco,
    topScore,
    secondScore,
    afinidade
  };
}

export function evaluateWithTieBreak({ runQuestions, keyIds, answersById }) {
  const base = evaluateRun({ runQuestions, answersById });
  if (base.topScore !== base.secondScore) {
    return { ...base, tieUsed: false, tieMode: 'clear' };
  }

  // desempate por número de +2
  const first = base.sorted[0][0];
  const second = base.sorted[1][0];
  const c1 = base.counts[first] || 0;
  const c2 = base.counts[second] || 0;
  if (c1 !== c2) {
    const winner = c1 > c2 ? first : second;
    const runner = winner === first ? second : first;
    return { ...base, topEco: winner, secondEco: runner, tieUsed: true, tieMode: 'countBreak' };
  }

  // empate real: retorna híbrido
  return { ...base, tieUsed: true, tieMode: 'hybrid' };
}
