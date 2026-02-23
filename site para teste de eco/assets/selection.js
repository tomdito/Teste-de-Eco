// selection.js
// Embaralhamento Fisher–Yates (unbiased)
export function shuffleInPlace(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function loadSeen(storageKey) {
  try { return new Set(JSON.parse(localStorage.getItem(storageKey) || '[]')); }
  catch { return new Set(); }
}
function saveSeen(storageKey, set) {
  localStorage.setItem(storageKey, JSON.stringify([...set]));
}

export function pickRunQuestions(allQuestions, keyIds, options = {}) {
  const {
    runSize = 30,
    persistNoRepeat = false,
    storageKey = 'ecoQuizSeen',
    groupQuotas = { instinto: 7, custo: 8, vinculo: 7, essencia: 8 }
  } = options;

  let seen = persistNoRepeat ? loadSeen(storageKey) : new Set();
  let available = allQuestions.filter(q => !seen.has(q.id));

  if (available.length < runSize) {
    seen = new Set();
    available = allQuestions.slice();
  }

  const selected = [];
  const keySet = new Set(keyIds || []);
  for (const id of keySet) {
    const q = available.find(x => x.id === id) || allQuestions.find(x => x.id === id);
    if (q && !selected.some(s => s.id === q.id)) selected.push(q);
  }

  const selectedIds = new Set(selected.map(q => q.id));
  available = available.filter(q => !selectedIds.has(q.id));

  const byGroup = {
    instinto: available.filter(q => q.group === 'instinto'),
    custo: available.filter(q => q.group === 'custo'),
    vinculo: available.filter(q => q.group === 'vinculo'),
    essencia: available.filter(q => q.group === 'essencia')
  };
  Object.values(byGroup).forEach(shuffleInPlace);

  for (const [g, quota] of Object.entries(groupQuotas)) {
    if (selected.length >= runSize) break;
    const need = Math.min(quota, runSize - selected.length);
    selected.push(...(byGroup[g] || []).slice(0, need));
  }

  if (selected.length < runSize) {
    const rest = available.filter(q => !selectedIds.has(q.id));
    shuffleInPlace(rest);
    selected.push(...rest.slice(0, runSize - selected.length));
  }

  if (persistNoRepeat) {
    selected.forEach(q => seen.add(q.id));
    saveSeen(storageKey, seen);
  }

  // garantia extra contra qualquer duplicação acidental
  const unique = [];
  const seenIds = new Set();
  for (const q of selected) {
    if (!seenIds.has(q.id)) {
      unique.push(q);
      seenIds.add(q.id);
    }
  }

  return shuffleInPlace(unique).slice(0, runSize);
}
