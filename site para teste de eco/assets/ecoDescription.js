import { ECO_INFO } from "./ecoInfo.js";

export function buildEcoDescription(primaryEcoKey, afinidade) {
  const eco = ECO_INFO[primaryEcoKey];
  if (!eco) return "Eco não encontrado.";

  const lines = (eco.stages[afinidade] || []).map(line => `- ${line}`).join("\n");

  return `
${eco.name}
Essência: ${eco.essence}

Afinidade ${afinidade}:
${lines}

Risco: ${eco.risk}
  `.trim();
}
