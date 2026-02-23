// quizData.js (agregador final corrigido)
// Mostre apenas answer.text na UI; scores são internos.
// Fonte principal com texto já em UTF-8 correto.
import { ECOS as BASE_ECOS, quiz as baseQuiz } from './quizData_full_utf8.js';
import { extraQuestions } from './questions_extra.js';

export const ECOS = BASE_ECOS;

const baseQuestions = baseQuiz.questions || [];

// --- Correção de strings com mojibake (UTF-8 lido como Latin1) ---
function fixUtf8(str) {
  if (typeof str !== 'string') return str;
  let out = str;
  // tenta corrigir latin1->utf8
  if (/[Ã�Â�]/.test(out)) {
    try { out = decodeURIComponent(escape(out)); } catch { /* ignora */ }
  }
  // remove chars quebrados restantes
  out = out.replace(/\uFFFD/g, '').replace(/�/g, '');
  // converte sequências quebradas em aspas
  out = out.replace(/��/g, '"').replace(/�\?\?/g, '"').replace(/�\?/g, '"');
  // se sobrou ?? juntos (resultado de mojibake), troca por "
  out = out.replace(/\?{2,}/g, '"');
  return out;
}

function deepFix(question) {
  return {
    ...question,
    prompt: fixUtf8(question.prompt),
    answers: (question.answers || []).map(a => ({
      ...a,
      text: fixUtf8(a.text)
    }))
  };
}

const fixedBase = baseQuestions.map(deepFix);

export const quiz = {
  title: 'Descubra seu Eco dominante e sua afinidade com os Ecos',
  keyQuestions: [4, 7, 12, 18, 21],
  introText:
    fixUtf8('Tenha calma, pense bem, use sua alma para responder. Não há respostas certas ou erradas, apenas o que mais ressoa com você.'),
  introTextNoRepeatAcrossRuns:
    fixUtf8('O teste é mais preciso quando você responde com sinceridade e sem pensar demais.'),
  tieBreaker: {
    id: 999,
    weight: 3,
    group: 'essencia',
    isKey: true,
    prompt:
      fixUtf8('Você pode vencer hoje — mas precisa apagar uma parte da sua história para sempre. Ninguém lembrará. Nem você. Você aceita?'),
    answers: [
      { text: fixUtf8('Aceito. Vitória é o que resta.'), scores: { fogo: 2, ar: 1 } },
      { text: fixUtf8('Aceito se isso salvar alguém que não tem escolha.'), scores: { vida: 2, agua: 1 } },
      { text: fixUtf8('Não antes de entender exatamente o que será apagado.'), scores: { terra: 2, alma: 1 } },
      { text: fixUtf8('Eu tentaria outro caminho até o último segundo.'), scores: { agua: 2, ar: 1 } },
      { text: fixUtf8('Não. Se eu perder a mim, já perdi tudo.'), scores: { alma: 2, terra: 1 } },
      { text: fixUtf8('Eu sumiria e reconstruiria longe disso.'), scores: { ar: 2, agua: 1 } }
    ]
  },
  questions: [...fixedBase, ...extraQuestions].map(deepFix)
};
