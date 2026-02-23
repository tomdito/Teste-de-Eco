// ecoInfo.js
// Descrições oficiais dos Ecos e estágios de afinidade.

export const ECO_INFO = {
  fogo: {
    name: "Eco do Fogo",
    essence: "Impulso, intensidade, transformação.",
    risk: "Impulsividade, perda de controle emocional.",
    stages: {
      Fraca: [
        "Pequeno aumento de dano.",
        "Ataques mais agressivos.",
        "Emoções intensas influenciam o poder."
      ],
      Desperta: [
        "Golpes causam desgaste contínuo.",
        "O ambiente ao redor aquece levemente.",
        "O poder aumenta conforme a determinação ou ferimento."
      ],
      Elevada: [
        "Parte do dano ignora defesa.",
        "Pode queimar energia espiritual, não apenas matéria.",
        "Quanto maior a convicção, maior o impacto."
      ]
    }
  },

  terra: {
    name: "Eco da Terra",
    essence: "Estabilidade, peso, permanência.",
    risk: "Rigidez mental, dificuldade de adaptação.",
    stages: {
      Fraca: [
        "Aumento leve de resistência.",
        "Melhor equilíbrio.",
        "Recuperação mais rápida após impacto."
      ],
      Desperta: [
        "Corpo pode se tornar mais denso durante combate.",
        "Redução significativa de dano recebido.",
        "Pode reforçar membros temporariamente."
      ],
      Elevada: [
        "Golpes carregam peso extremo.",
        "Muito difícil de ser derrubado ou deslocado.",
        "Alta resistência contra efeitos de controle."
      ]
    }
  },

  ar: {
    name: "Eco do Ar",
    essence: "Movimento, percepção, liberdade.",
    risk: "Instabilidade, dificuldade de permanecer firme.",
    stages: {
      Fraca: [
        "Aumento leve de velocidade.",
        "Melhora no tempo de reação."
      ],
      Desperta: [
        "Movimentos quase silenciosos.",
        "Esquiva aprimorada.",
        "Pequena alteração na trajetória de projéteis."
      ],
      Elevada: [
        "Velocidade significativamente ampliada.",
        "Ataques difíceis de prever.",
        "Redução no custo de habilidades físicas."
      ]
    }
  },

  agua: {
    name: "Eco da Água",
    essence: "Adaptabilidade, fluxo, sobrevivência.",
    risk: "Perda gradual de identidade, absorver emoções externas.",
    stages: {
      Fraca: [
        "Recuperação levemente acelerada.",
        "Maior resistência emocional."
      ],
      Desperta: [
        "Regeneração moderada durante combate.",
        "Redução de efeitos negativos.",
        "Ajuste automático de postura e estilo de luta."
      ],
      Elevada: [
        "Regeneração constante.",
        "Absorve parte do impacto recebido.",
        "Quanto mais pressionado, mais eficiente se torna."
      ]
    }
  },

  vida: {
    name: "Eco da Vida",
    essence: "Expansão, persistência, renovação.",
    risk: "Crescimento descontrolado, mutação ou corrupção biológica.",
    stages: {
      Fraca: [
        "Recupera energia mais rápido.",
        "Maior resistência a venenos."
      ],
      Desperta: [
        "Pode acelerar recuperação natural.",
        "Leve influência regenerativa em aliados próximos."
      ],
      Elevada: [
        "Regeneração acelerada.",
        "Grande dificuldade de ser eliminado.",
        "Pode estimular crescimento ao redor."
      ]
    }
  },

  alma: {
    name: "Eco da Alma",
    essence: "Identidade, integridade, limites internos.",
    risk: "Isolamento, rigidez moral, carregar peso interno sozinho.",
    stages: {
      Fraca: [
        "Resistência leve a manipulação emocional.",
        "Percepção sutil de intenções e incoerências.",
        "Limites internos começam a se formar."
      ],
      Desperta: [
        "Alta resistência a corrupção e influência externa.",
        "Firmeza emocional em momentos críticos.",
        "Coerência interna reduz dúvidas e hesitações."
      ],
      Elevada: [
        "Quase impossível de ser corrompido.",
        "Presença que impõe limites no ambiente (peso espiritual).",
        "Identidade permanece intacta mesmo sob perda, medo ou tentação."
      ]
    }
  }
};
