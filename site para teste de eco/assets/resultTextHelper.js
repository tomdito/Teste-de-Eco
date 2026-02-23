// Fallback helper to buscar texto ritual de resultTexts.json
// Se não existir o JSON, devolve um texto genérico.
export async function getResultText(opts) {
  const { jsonUrl } = opts || {};
  if (jsonUrl) {
    try {
      const res = await fetch(jsonUrl);
      if (res.ok) {
        const data = await res.json();
        const key = `${opts.dominant}-${opts.secondary}-${opts.afinidade}`.toLowerCase();
        if (data[key]) return data[key];
      }
    } catch (e) {
      /* ignore, fallback below */
    }
  }
  return "Você carrega um Eco em evolução. Use este resultado como guia, não como sentença.";
}
