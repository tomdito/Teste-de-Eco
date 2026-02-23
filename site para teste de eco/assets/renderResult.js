import { ecoClass, tintClass, displayEcoName } from "./ecoColor.js";
import { getResultText } from "./resultTextHelper.js";
import { buildEcoDescription } from "./ecoDescription.js";

function tierFromConfidence(confidencePct){
  if (confidencePct < 45) return "low";
  if (confidencePct <= 75) return "med";
  return "high";
}

function escapeHTML(str){
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
    .replaceAll("\n", "<br/>");
}

function colorizeEcoDesc(desc, dominant, afinidade){
  const lines = String(desc).split("\n");
  const colored = lines.map(line => {
    const trimmed = line.trimStart();
    if (/^Eco\s/i.test(trimmed)) {
      return `<span class="${ecoClass(dominant)}">${escapeHTML(line)}</span>`;
    }
    if (/^Afinidade\s/i.test(trimmed)) {
      return `<span class="aff-${afinidade}">${escapeHTML(line)}</span>`;
    }
    return escapeHTML(line);
  });
  return colored.join("<br/>");
}

export async function renderFinalResult(result){
  const tier = tierFromConfidence(result.confidencePct);

  const ritualText = await getResultText({
    dominant: result.dominant,
    secondary: result.secondary,
    afinidade: result.afinidade,
    reliabilityPct: result.confidencePct,
    jsonUrl: "./resultTexts.json"
  });

  const ecoDesc = buildEcoDescription(result.dominant, result.afinidade);
  const dominantName = displayEcoName(result.dominant);
  const secondaryName = displayEcoName(result.secondary);

  const el = document.getElementById("result");
  if (!el) return;

  el.innerHTML = `
    <div class="ritual-wrap">

      <div class="ritual-card">
        <div class="ritual-header ${tintClass(result.dominant)}">
          <h2 class="ritual-title">
            <span class="dot ${ecoClass(result.dominant)}"></span>
            Resultado:
            <span class="${ecoClass(result.dominant)}">${dominantName.toUpperCase()}</span>
            <span class="glyph">—</span>
            <span class="badge">
              Secundário:
              <strong class="${ecoClass(result.secondary)}">${secondaryName}</strong>
            </span>
          </h2>

          <p class="ritual-subtitle">
            Afinidade:
            <strong class="aff-${result.afinidade}">${result.afinidade}</strong>
            <span class="glyph">•</span>
            Confiabilidade:
            <strong>${result.confidencePct}%</strong>
            <span class="glyph">•</span>
            Leitura:
            <strong>${tier.toUpperCase()}</strong>
          </p>
        </div>

        <div class="ritual-body">
          <span class="section-label">Profecia</span>
          <div class="prophecy">${escapeHTML(ritualText)}</div>
        </div>
      </div>

      <div class="ritual-card">
        <div class="ritual-header">
          <h3 class="ritual-title">
            <span class="dot ${ecoClass(result.dominant)}"></span>
            Sobre seu Eco:
            <span class="${ecoClass(result.dominant)}">${dominantName}</span>
          </h3>
          <p class="ritual-subtitle">
            Interpretação do seu Eco dominante no estágio atual.
          </p>
        </div>

        <div class="ritual-body">
          <div class="about-eco">${colorizeEcoDesc(ecoDesc, result.dominant, result.afinidade)}</div>
        </div>
      </div>

    </div>
  `;
}
