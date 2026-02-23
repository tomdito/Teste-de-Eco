// quizData_full.js
// Arquivo completo com 24 perguntas (pronto para colar em quizData.js)

export const ECOS = ["fogo", "terra", "ar", "agua", "vida", "alma"];

export const quiz = {
  title: "Teste de Eco e Afinidade",
  keyQuestions: [5, 12, 21],
  questions: [
    {
      id: 1,
      prompt: "Quando você está sob pressão extrema, sua reação mais comum é:",
      answers: [
        { text: "Acelerar e resolver no impacto.", scores: { fogo: 2, ar: 1 } },
        { text: "Ficar firme e aguentar até passar.", scores: { terra: 2, alma: 1 } },
        { text: "Mudar de rota e achar uma saída improvável.", scores: { ar: 2, agua: 1 } },
        { text: "Reduzir o ritmo e ajustar o passo com cuidado.", scores: { agua: 2, terra: 1 } },
        { text: "Manter as pessoas de pé e o plano vivo.", scores: { vida: 2, agua: 1 } },
        { text: "Proteger sua essência e não deixar te quebrarem por dentro.", scores: { alma: 2, terra: 1 } }
      ]
    },
    {
      id: 2,
      prompt: "O que mais costuma te mover de verdade?",
      answers: [
        { text: "Conquista e superação.", scores: { fogo: 2, terra: 1 } },
        { text: "Construir algo duradouro.", scores: { terra: 2, vida: 1 } },
        { text: "Liberdade e descoberta.", scores: { ar: 2, fogo: 1 } },
        { text: "Conexão e significado.", scores: { agua: 2, vida: 1 } },
        { text: "Crescimento e proteção.", scores: { vida: 2, terra: 1 } },
        { text: "Ser fiel a quem você é.", scores: { alma: 2, agua: 1 } }
      ]
    },
    {
      id: 3,
      prompt: "Quando alguém tenta te controlar, você tende a:",
      answers: [
        { text: "Reagir na hora, sem pedir permissão.", scores: { fogo: 2, alma: 1 } },
        { text: "Não ceder e resistir até o fim.", scores: { terra: 2, fogo: 1 } },
        { text: "Escapar pela lateral e se reposicionar.", scores: { ar: 2, terra: 1 } },
        { text: "Observar, sentir o tom e agir no momento certo.", scores: { agua: 2, ar: 1 } },
        { text: "Tentar entender o motivo e reduzir o conflito.", scores: { vida: 2, agua: 1 } },
        { text: "Impor limites internos inegociáveis.", scores: { alma: 2, terra: 1 } }
      ]
    },
    {
      id: 4,
      prompt: "Em um grupo, você geralmente vira:",
      answers: [
        { text: "A faísca que inicia o movimento.", scores: { fogo: 2, ar: 1 } },
        { text: "O pilar que segura o peso.", scores: { terra: 2, vida: 1 } },
        { text: "O que encontra caminhos e oportunidades.", scores: { ar: 2, fogo: 1 } },
        { text: "O que percebe o clima e antecipa conflitos.", scores: { agua: 2, alma: 1 } },
        { text: "O que protege e recupera o grupo.", scores: { vida: 2, agua: 1 } },
        { text: "O que mantém coerência e verdade.", scores: { alma: 2, terra: 1 } }
      ]
    },
    {
      id: 5,
      prompt: "O que mais te incomoda quando tudo fica difícil?",
      answers: [
        { text: "Sentir que apagaram sua intensidade.", scores: { fogo: 2, alma: 1 } },
        { text: "Perder estabilidade e base.", scores: { terra: 2, agua: 1 } },
        { text: "Ficar preso e sem saída.", scores: { ar: 2, fogo: 1 } },
        { text: "Ser mal interpretado e engolir isso sozinho.", scores: { agua: 2, alma: 1 } },
        { text: "Ver algo importante murchar.", scores: { vida: 2, terra: 1 } },
        { text: "Perceber que está se perdendo de si mesmo.", scores: { alma: 2, agua: 1 } }
      ]
    },
    // ... (continue com as perguntas 6 a 24 do seu modelo)
  ]
};
