export function ecoClass(ecoKey) {
  return `eco-${ecoKey}`;
}

export function tintClass(ecoKey) {
  return `tint-${ecoKey}`;
}

export function displayEcoName(ecoKey) {
  const map = {
    fogo: "Fogo",
    terra: "Terra",
    ar: "Ar",
    agua: "Água",
    vida: "Vida",
    alma: "Alma"
  };
  return map[ecoKey] ?? ecoKey;
}
