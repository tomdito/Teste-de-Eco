// engine.js
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
  return runQuestions.reduce((sum, q) => sum + (2 * (q.weight || 1)), 0);
}

export function sortTotals(totals) {
  return Object.entries(totals).sort((a, b) => b[1] - a[1]);
}

export function calcEntropyReliability(totals) {
  const values = Object.values(totals);
  const sum = values.reduce((a, b) => a + b, 0);
  if (sum <= 0) return 0;

  let entropy = 0;
  for (const v of values) {
    if (v <= 0) continue;
    const p = v / sum;
    entropy -= p * Math.log(p);
  }
  const maxEntropy = Math.log(values.length);
  const reliability = 1 - (entropy / maxEntropy);
  return clamp01(reliability);
}

export function clamp01(x) {
  return Math.max(0, Math.min(1, x));
}

export function classifyAffinity({ topNorm, diffNorm, reliability }) {
  // Afinidade mais permissiva (eleva chance de "Elevada")
  // Ajuste rápido: baixe/eleve estes números conforme o equilíbrio desejado.
  if (topNorm >= 0.60 && diffNorm >= 0.12 && reliability >= 0.45) return 'Elevada';
  if (topNorm >= 0.45 && diffNorm >= 0.06 && reliability >= 0.35) return 'Desperta';
  return 'Fraca';
}

export function shouldTieBreak({ topScore, secondScore, diffNorm, reliability }) {
  return topScore === secondScore || diffNorm < 0.03 || reliability < 0.40;
}

export function evaluateRun({ runQuestions, answersById }) {
  const totals = emptyTotals();

  for (const q of runQuestions) {
    const chosen = answersById[q.id];
    if (!chosen) continue;
    addScoresWeighted(totals, chosen.scores, q.weight || 1);
  }

  const max = calcMaxScore(runQuestions);
  const sorted = sortTotals(totals);
  const [topEco, topScore] = sorted[0];
  const [secondEco, secondScore] = sorted[1];

  const topNorm = max > 0 ? topScore / max : 0;
  const diffNorm = max > 0 ? (topScore - secondScore) / max : 0;
  const reliability = calcEntropyReliability(totals);
  const afinidade = classifyAffinity({ topNorm, diffNorm, reliability });

  return {
    totals,
    max,
    sorted,
    topEco,
    secondEco,
    topScore,
    secondScore,
    topNorm,
    diffNorm,
    reliability,
    afinidade
  };
}

export function evaluateWithTieBreak({ runQuestions, keyIds, answersById, tieBreakerAnswer }) {
  const base = evaluateRun({ runQuestions, answersById });
  if (!shouldTieBreak(base)) return { ...base, tieUsed: false };

  const keySet = new Set(keyIds || []);
  const keyQs = runQuestions.filter(q => keySet.has(q.id));
  if (keyQs.length >= 2) {
    const keyEval = evaluateRun({ runQuestions: keyQs, answersById });
    if (!shouldTieBreak(keyEval)) {
      return {
        ...base,
        topEco: keyEval.topEco,
        secondEco: keyEval.secondEco,
        tieUsed: true,
        tieMode: 'keyQuestions'
      };
    }
  }

  if (tieBreakerAnswer) {
    const totals = { ...base.totals };
    addScoresWeighted(totals, tieBreakerAnswer.scores, 3);
    const sorted = sortTotals(totals);
    const [topEco] = sorted[0];
    const [secondEco] = sorted[1];
    return {
      ...base,
      totals,
      sorted,
      topEco,
      secondEco,
      tieUsed: true,
      tieMode: 'tieBreaker'
    };
  }

  return { ...base, tieUsed: true, tieMode: 'askTieBreaker' };
}
