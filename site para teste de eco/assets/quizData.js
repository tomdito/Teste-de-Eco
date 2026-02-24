// quizData.js - banco novo simplificado

export const ECOS = ["fogo", "terra", "ar", "agua", "vida", "alma"];

// categorias: conflito, pressao, vinculos, trabalho, moral
export const quiz = {
  keyQuestions: [],
  title: 'Rito de Eco',
  introText: 'Responda a cada situação com a atitude que mais combina com você. Não existe resposta certa ou errada, apenas o que reflete melhor quem você é. No final, você vai descobrir qual dos 6 Ecos tem mais afinidade com seu jeito de ser.',
  questions: [
    { id: 1,  category: "conflito", prompt: "Você chega e vê alguém falando mal de um amigo seu. Você…", answers: [
      { text: "Interrompe e corta na hora.", scores: { fogo: 2 } },
      { text: "Se posiciona firme e pede respeito.", scores: { terra: 2 } },
      { text: "Puxa seu amigo e sai dali.", scores: { ar: 2 } },
      { text: "Espera a frase certa e responde com calma.", scores: { agua: 2 } },
      { text: "Tira o foco do amigo e reduz o dano.", scores: { vida: 2 } },
      { text: "Deixa claro o limite sem baixar o nível.", scores: { alma: 2 } }
    ]},
    { id: 2,  category: "trabalho", prompt: "Você percebe que errou feio no trabalho/estudo. Você…", answers: [
      { text: "Assume e resolve o mais rápido possível.", scores: { fogo: 2 } },
      { text: "Corrige por etapas e garante que não se repita.", scores: { terra: 2 } },
      { text: "Procura uma solução alternativa e contorna o problema.", scores: { ar: 2 } },
      { text: "Analisa o que deu errado antes de mexer.", scores: { agua: 2 } },
      { text: "Comunica e evita que outros sejam prejudicados.", scores: { vida: 2 } },
      { text: "Assume a responsabilidade sem inventar desculpa.", scores: { alma: 2 } }
    ]},
    { id: 3,  category: "conflito", prompt: "Um desconhecido te provoca na rua. Você…", answers: [
      { text: "Responde de volta e não abaixa a cabeça.", scores: { fogo: 2 } },
      { text: "Mantém postura e não deixa virar descontrole.", scores: { terra: 2 } },
      { text: "Ignora e continua andando.", scores: { ar: 2 } },
      { text: "Observa se é perigo real antes de reagir.", scores: { agua: 2 } },
      { text: "Evita escalada pra ninguém se ferir.", scores: { vida: 2 } },
      { text: "Impõe limite curto e sai fora.", scores: { alma: 2 } }
    ]},
    { id: 4,  category: "moral", prompt: "Você precisa escolher: gastar dinheiro com você ou ajudar alguém próximo. Você…", answers: [
      { text: "Ajuda agora e resolve a urgência.", scores: { fogo: 2 } },
      { text: "Ajuda do jeito certo sem quebrar suas finanças.", scores: { terra: 2 } },
      { text: "Acha uma terceira forma de ajudar sem gastar tudo.", scores: { ar: 2 } },
      { text: "Entende a real necessidade antes de decidir.", scores: { agua: 2 } },
      { text: "Ajuda porque a pessoa precisa mais.", scores: { vida: 2 } },
      { text: "Ajuda, mas sem virar obrigação eterna.", scores: { alma: 2 } }
    ]},
    { id: 5,  category: "pressao", prompt: "Você está atrasado e vê alguém passando mal. Você…", answers: [
      { text: "Para e age imediatamente.", scores: { fogo: 2 } },
      { text: "Para, chama ajuda e organiza a situação.", scores: { terra: 2 } },
      { text: "Chama alguém do local e segue se for seguro.", scores: { ar: 2 } },
      { text: "Avalia rápido se é golpe/perigo e então ajuda.", scores: { agua: 2 } },
      { text: "Fica até garantir que a pessoa foi atendida.", scores: { vida: 2 } },
      { text: "Ajuda com limites pra não se colocar em risco.", scores: { alma: 2 } }
    ]},
    { id: 6,  category: "vinculos", prompt: "Um amigo some e não responde mensagens há dias. Você…", answers: [
      { text: "Vai atrás e cobra resposta.", scores: { fogo: 2 } },
      { text: "Checa com pessoas próximas e confirma o que houve.", scores: { terra: 2 } },
      { text: "Manda uma mensagem e segue a vida por enquanto.", scores: { ar: 2 } },
      { text: "Espera um pouco e escolhe a melhor hora de falar.", scores: { agua: 2 } },
      { text: "Procura saber se ele está bem e oferece apoio.", scores: { vida: 2 } },
      { text: "Se preocupa, mas respeita o espaço sem insistir demais.", scores: { alma: 2 } }
    ]},
    { id: 7,  category: "pressao", prompt: "Você recebe uma oportunidade boa, mas precisa mudar planos. Você…", answers: [
      { text: "Aceita e dá um jeito.", scores: { fogo: 2 } },
      { text: "Planeja a mudança e só então aceita.", scores: { terra: 2 } },
      { text: "Aceita porque você se adapta fácil.", scores: { ar: 2 } },
      { text: "Pensa no impacto antes de decidir.", scores: { agua: 2 } },
      { text: "Pensa em quem depende de você.", scores: { vida: 2 } },
      { text: "Aceita só se não ferir seus valores.", scores: { alma: 2 } }
    ]},
    { id: 8,  category: "moral", prompt: "Alguém te pede um favor que você não quer fazer. Você…", answers: [
      { text: "Diz “não” direto.", scores: { fogo: 2 } },
      { text: "Diz “não” com firmeza e explicação.", scores: { terra: 2 } },
      { text: "Se esquiva e muda de assunto.", scores: { ar: 2 } },
      { text: "Tenta recusar sem criar conflito.", scores: { agua: 2 } },
      { text: "Vê se dá pra ajudar de um jeito menor.", scores: { vida: 2 } },
      { text: "Recusa com limite claro, sem culpa.", scores: { alma: 2 } }
    ]},
    { id: 9,  category: "conflito", prompt: "Você está em discussão online e a pessoa começa a te atacar. Você…", answers: [
      { text: "Responde forte e encerra o ataque.", scores: { fogo: 2 } },
      { text: "Mantém a linha e desmonta com argumentos.", scores: { terra: 2 } },
      { text: "Sai da conversa e bloqueia.", scores: { ar: 2 } },
      { text: "Responde só o necessário e para.", scores: { agua: 2 } },
      { text: "Evita briga e tenta baixar o tom.", scores: { vida: 2 } },
      { text: "Não entra em humilhação: corta e encerra.", scores: { alma: 2 } }
    ]},
    { id: 10, category: "vinculos", prompt: "Você entra em um lugar novo onde ninguém te conhece. Você…", answers: [
      { text: "Puxa assunto e toma espaço.", scores: { fogo: 2 } },
      { text: "Observa e se integra com calma.", scores: { terra: 2 } },
      { text: "Circula, conversa pouco e fica leve.", scores: { ar: 2 } },
      { text: "Sente o clima antes de se expor.", scores: { agua: 2 } },
      { text: "Procura alguém isolado pra incluir.", scores: { vida: 2 } },
      { text: "Mantém postura e não força personagem.", scores: { alma: 2 } }
    ]},
    { id: 11, category: "trabalho", prompt: "Você precisa trabalhar em equipe com alguém difícil. Você…", answers: [
      { text: "Confronta e resolve logo o atrito.", scores: { fogo: 2 } },
      { text: "Define regras e mantém profissional.", scores: { terra: 2 } },
      { text: "Faz sua parte e evita contato desnecessário.", scores: { ar: 2 } },
      { text: "Entende o que dispara a pessoa e contorna.", scores: { agua: 2 } },
      { text: "Tenta harmonizar pra equipe funcionar.", scores: { vida: 2 } },
      { text: "Coopera sem aceitar abuso.", scores: { alma: 2 } }
    ]},
    { id: 12, category: "conflito", prompt: "Você descobre uma mentira sobre você circulando. Você…", answers: [
      { text: "Vai na fonte e cobra.", scores: { fogo: 2 } },
      { text: "Junta fatos e esclarece com firmeza.", scores: { terra: 2 } },
      { text: "Ignora e se afasta de quem espalha.", scores: { ar: 2 } },
      { text: "Escolhe o momento certo e esclarece sem drama.", scores: { agua: 2 } },
      { text: "Protege sua imagem sem destruir relações.", scores: { vida: 2 } },
      { text: "Diz a verdade e não se humilha pra provar nada.", scores: { alma: 2 } }
    ]},
    { id: 13, category: "pressao", prompt: "Você está exausto e ainda tem coisa pra fazer. Você…", answers: [
      { text: "Força e termina.", scores: { fogo: 2 } },
      { text: "Faz o mínimo bem feito e continua amanhã.", scores: { terra: 2 } },
      { text: "Muda o plano pra ficar mais leve.", scores: { ar: 2 } },
      { text: "Pausa, respira e volta mais lúcido.", scores: { agua: 2 } },
      { text: "Se cuida pra não adoecer.", scores: { vida: 2 } },
      { text: "Respeita seu limite e não se quebra.", scores: { alma: 2 } }
    ]},
    { id: 14, category: "vinculos", prompt: "Um amigo te conta algo pesado e pede segredo. Você…", answers: [
      { text: "Segura e defende ele se alguém tocar no assunto.", scores: { fogo: 2 } },
      { text: "Guarda com responsabilidade total.", scores: { terra: 2 } },
      { text: "Guarda, mas se afasta do drama.", scores: { ar: 2 } },
      { text: "Escuta e ajuda a organizar a cabeça dele.", scores: { agua: 2 } },
      { text: "Apoia e acompanha de perto.", scores: { vida: 2 } },
      { text: "Guarda, mas incentiva buscar ajuda se for grave.", scores: { alma: 2 } }
    ]},
    { id: 15, category: "conflito", prompt: "Você vê alguém sendo injusto com um funcionário/atendente. Você…", answers: [
      { text: "Entra e corta o abuso.", scores: { fogo: 2 } },
      { text: "Se posiciona e exige respeito.", scores: { terra: 2 } },
      { text: "Ajuda o atendente depois e evita confusão.", scores: { ar: 2 } },
      { text: "Intervém com calma e redireciona.", scores: { agua: 2 } },
      { text: "Protege o atendente e reduz o impacto.", scores: { vida: 2 } },
      { text: "Não tolera: impõe limite sem espetáculo.", scores: { alma: 2 } }
    ]},
    { id: 16, category: "conflito", prompt: "Você está com raiva e alguém tenta te provocar mais. Você…", answers: [
      { text: "Explode e resolve na hora.", scores: { fogo: 2 } },
      { text: "Segura e não dá esse prazer.", scores: { terra: 2 } },
      { text: "Sai de perto imediatamente.", scores: { ar: 2 } },
      { text: "Respira e fala só depois de esfriar.", scores: { agua: 2 } },
      { text: "Evita ferir alguém por impulso.", scores: { vida: 2 } },
      { text: "Mantém o controle porque você não se perde.", scores: { alma: 2 } }
    ]},
    { id: 17, category: "moral", prompt: "Você recebe uma proposta que parece boa, mas tem cara de golpe. Você…", answers: [
      { text: "Entra pra testar e ver até onde vai.", scores: { fogo: 2 } },
      { text: "Confere tudo antes de aceitar.", scores: { terra: 2 } },
      { text: "Recusa e procura outra opção.", scores: { ar: 2 } },
      { text: "Faz perguntas e observa as respostas.", scores: { agua: 2 } },
      { text: "Pensa se isso pode prejudicar alguém.", scores: { vida: 2 } },
      { text: "Recusa se tiver qualquer sinal de sujeira.", scores: { alma: 2 } }
    ]},
    { id: 18, category: "pressao", prompt: "Um plano falha no meio e todo mundo olha pra você. Você…", answers: [
      { text: "Assume liderança e manda o novo plano.", scores: { fogo: 2 } },
      { text: "Reorganiza e distribui tarefas.", scores: { terra: 2 } },
      { text: "Improvisa e muda o caminho.", scores: { ar: 2 } },
      { text: "Acalma o grupo e decide com clareza.", scores: { agua: 2 } },
      { text: "Garante que ninguém fique para trás.", scores: { vida: 2 } },
      { text: "Lidera sem passar por cima dos outros.", scores: { alma: 2 } }
    ]},
    { id: 19, category: "pressao", prompt: "Você perde algo importante (dinheiro, documento, objeto). Você…", answers: [
      { text: "Age rápido e resolve agora.", scores: { fogo: 2 } },
      { text: "Procura sistematicamente e refaz passos.", scores: { terra: 2 } },
      { text: "Aceita e arruma um jeito novo.", scores: { ar: 2 } },
      { text: "Para, pensa, e lembra onde esteve.", scores: { agua: 2 } },
      { text: "Pede ajuda e usa rede de apoio.", scores: { vida: 2 } },
      { text: "Mantém calma e não se desespera.", scores: { alma: 2 } }
    ]},
    { id: 20, category: "moral", prompt: "Você percebe que está viciado em algo (celular, jogo, etc.). Você…", answers: [
      { text: "Corta de uma vez.", scores: { fogo: 2 } },
      { text: "Cria rotina e reduz aos poucos.", scores: { terra: 2 } },
      { text: "Troca por outro hábito e muda o ambiente.", scores: { ar: 2 } },
      { text: "Entende o gatilho e ajusta.", scores: { agua: 2 } },
      { text: "Procura apoio e cuida da saúde mental.", scores: { vida: 2 } },
      { text: "Define limite firme e respeita.", scores: { alma: 2 } }
    ]},
    { id: 21, category: "moral", prompt: "Você tem duas opções: uma te dá dinheiro rápido, outra é mais correta. Você…", answers: [
      { text: "Vai no dinheiro e resolve a vida.", scores: { fogo: 2 } },
      { text: "Vai no correto e mantém estabilidade.", scores: { terra: 2 } },
      { text: "Procura uma terceira opção.", scores: { ar: 2 } },
      { text: "Avalia consequências antes de escolher.", scores: { agua: 2 } },
      { text: "Escolhe a que não prejudica ninguém.", scores: { vida: 2 } },
      { text: "Escolhe a que não te faz perder respeito por si mesmo.", scores: { alma: 2 } }
    ]},
    { id: 22, category: "vinculos", prompt: "Você está em um relacionamento/amizade e sente ciúmes. Você…", answers: [
      { text: "Fala na hora.", scores: { fogo: 2 } },
      { text: "Observa antes de acusar.", scores: { terra: 2 } },
      { text: "Se afasta pra não piorar.", scores: { ar: 2 } },
      { text: "Conversa com calma pra entender.", scores: { agua: 2 } },
      { text: "Tenta fortalecer o vínculo sem briga.", scores: { vida: 2 } },
      { text: "Expõe o limite sem controle ou drama.", scores: { alma: 2 } }
    ]},
    { id: 23, category: "moral", prompt: "Alguém te pede emprestado algo e não devolve. Você…", answers: [
      { text: "Cobra direto.", scores: { fogo: 2 } },
      { text: "Cobra com firmeza e prazo.", scores: { terra: 2 } },
      { text: "Decide não emprestar mais e segue.", scores: { ar: 2 } },
      { text: "Cobra de forma calma e estratégica.", scores: { agua: 2 } },
      { text: "Cobra sem humilhar, se for alguém próximo.", scores: { vida: 2 } },
      { text: "Cobra porque limite é limite.", scores: { alma: 2 } }
    ]},
    { id: 24, category: "pressao", prompt: "Você sente que está travado na vida. Você…", answers: [
      { text: "Faz uma mudança grande logo.", scores: { fogo: 2 } },
      { text: "Cria plano e rotina.", scores: { terra: 2 } },
      { text: "Muda de ambiente/rota e recomeça.", scores: { ar: 2 } },
      { text: "Faz ajustes pequenos com constância.", scores: { agua: 2 } },
      { text: "Busca apoio e reestrutura aos poucos.", scores: { vida: 2 } },
      { text: "Decide o que você não aceita mais e corta.", scores: { alma: 2 } }
    ]},
    { id: 25, category: "conflito", prompt: "Você descobre que um amigo fala mal de você pelas costas. Você…", answers: [
      { text: "Confronta e exige verdade.", scores: { fogo: 2 } },
      { text: "Se afasta e observa se ele se corrige.", scores: { terra: 2 } },
      { text: "Some e corta contato.", scores: { ar: 2 } },
      { text: "Conversa com calma e pede explicação.", scores: { agua: 2 } },
      { text: "Tenta entender o motivo e ver se dá pra reparar.", scores: { vida: 2 } },
      { text: "Decide se isso quebra sua confiança definitivamente.", scores: { alma: 2 } }
    ]},
    { id: 26, category: "vinculos", prompt: "Você precisa pedir desculpas. Você…", answers: [
      { text: "Pede logo e resolve.", scores: { fogo: 2 } },
      { text: "Pede e muda atitude de verdade.", scores: { terra: 2 } },
      { text: "Pede e dá espaço depois.", scores: { ar: 2 } },
      { text: "Pede com calma e conversa direito.", scores: { agua: 2 } },
      { text: "Pede e tenta reparar o dano.", scores: { vida: 2 } },
      { text: "Pede sem desculpa esfarrapada, assumindo.", scores: { alma: 2 } }
    ]},
    { id: 27, category: "conflito", prompt: "Você vê uma chance de “dar o troco” em alguém que te feriu. Você…", answers: [
      { text: "Dá o troco.", scores: { fogo: 2 } },
      { text: "Não faz isso, porque vira bagunça.", scores: { terra: 2 } },
      { text: "Deixa pra lá e segue.", scores: { ar: 2 } },
      { text: "Pensa se vale o desgaste.", scores: { agua: 2 } },
      { text: "Evita machucar mais pessoas.", scores: { vida: 2 } },
      { text: "Não faz, porque isso te rebaixa.", scores: { alma: 2 } }
    ]},
    { id: 28, category: "vinculos", prompt: "Você está com alguém chorando. Você…", answers: [
      { text: "Tenta resolver o problema imediatamente.", scores: { fogo: 2 } },
      { text: "Dá suporte prático: água, lugar, calma.", scores: { terra: 2 } },
      { text: "Dá espaço e pergunta se quer ficar sozinho.", scores: { ar: 2 } },
      { text: "Escuta e acolhe sem pressa.", scores: { agua: 2 } },
      { text: "Fica junto e cuida de verdade.", scores: { vida: 2 } },
      { text: "Acolhe, mas sem se afogar junto.", scores: { alma: 2 } }
    ]},
    { id: 29, category: "trabalho", prompt: "Você precisa aprender algo difícil. Você…", answers: [
      { text: "Vai na prática e insiste.", scores: { fogo: 2 } },
      { text: "Repete e constrói base.", scores: { terra: 2 } },
      { text: "Testa vários jeitos até achar o seu.", scores: { ar: 2 } },
      { text: "Entende a lógica antes de fazer.", scores: { agua: 2 } },
      { text: "Vai no ritmo certo pra não desistir.", scores: { vida: 2 } },
      { text: "Aprende sem trapacear nem se enganar.", scores: { alma: 2 } }
    ]},
    { id: 30, category: "vinculos", prompt: "Você está em uma festa/rolê e não se sente bem. Você…", answers: [
      { text: "Tenta mudar o clima e “virar o jogo”.", scores: { fogo: 2 } },
      { text: "Fica um pouco e mantém postura.", scores: { terra: 2 } },
      { text: "Vai embora sem culpa.", scores: { ar: 2 } },
      { text: "Procura um canto e se acalma.", scores: { agua: 2 } },
      { text: "Cuida de alguém que também está desconfortável.", scores: { vida: 2 } },
      { text: "Não finge: sai se não for você.", scores: { alma: 2 } }
    ]},
    { id: 31, category: "pressao", prompt: "Você recebe uma notícia ruim e precisa reagir. Você…", answers: [
      { text: "Age imediatamente pra resolver.", scores: { fogo: 2 } },
      { text: "Se organiza e faz o necessário.", scores: { terra: 2 } },
      { text: "Muda plano e segue.", scores: { ar: 2 } },
      { text: "Processa e decide com cabeça fria.", scores: { agua: 2 } },
      { text: "Procura apoio e cuida do emocional.", scores: { vida: 2 } },
      { text: "Mantém firmeza e não deixa isso te quebrar.", scores: { alma: 2 } }
    ]},
    { id: 32, category: "trabalho", prompt: "Você está sendo pressionado a fazer algo que não quer. Você…", answers: [
      { text: "Bate de frente.", scores: { fogo: 2 } },
      { text: "Fica firme e não cede.", scores: { terra: 2 } },
      { text: "Sai do lugar/situação.", scores: { ar: 2 } },
      { text: "Enrola e escolhe o melhor momento pra negar.", scores: { agua: 2 } },
      { text: "Explica com empatia pra evitar briga.", scores: { vida: 2 } },
      { text: "Diz não porque você se respeita.", scores: { alma: 2 } }
    ]},
    { id: 33, category: "trabalho", prompt: "Você precisa proteger algo importante (dinheiro, família, projeto). Você…", answers: [
      { text: "Ataca o problema antes que cresça.", scores: { fogo: 2 } },
      { text: "Fortalece a base e previne.", scores: { terra: 2 } },
      { text: "Cria rotas de fuga/alternativas.", scores: { ar: 2 } },
      { text: "Lê riscos e age com estratégia.", scores: { agua: 2 } },
      { text: "Protege pessoas primeiro.", scores: { vida: 2 } },
      { text: "Mantém o que é essencial sem se corromper.", scores: { alma: 2 } }
    ]},
    { id: 34, category: "vinculos", prompt: "Quando você está muito feliz, você…", answers: [
      { text: "Quer fazer mais e ir além.", scores: { fogo: 2 } },
      { text: "Quer manter e estabilizar.", scores: { terra: 2 } },
      { text: "Quer experimentar algo novo.", scores: { ar: 2 } },
      { text: "Quer curtir com calma.", scores: { agua: 2 } },
      { text: "Quer compartilhar e cuidar de quem ama.", scores: { vida: 2 } },
      { text: "Quer viver sem depender disso pra existir.", scores: { alma: 2 } }
    ]},
    { id: 35, category: "conflito", prompt: "Você está em um jogo/esporte e o outro começa a jogar sujo. Você…", answers: [
      { text: "Responde no mesmo nível e ganha.", scores: { fogo: 2 } },
      { text: "Mantém regra e mostra firmeza.", scores: { terra: 2 } },
      { text: "Para de jogar e sai.", scores: { ar: 2 } },
      { text: "Mantém controle e vence com cabeça.", scores: { agua: 2 } },
      { text: "Protege o clima pra ninguém se ferir.", scores: { vida: 2 } },
      { text: "Não aceita: corta o jogo sujo com limite.", scores: { alma: 2 } }
    ]},
    { id: 36, category: "trabalho", prompt: "Você tem um objetivo grande. Você prefere…", answers: [
      { text: "Forçar avanço rápido.", scores: { fogo: 2 } },
      { text: "Construir no longo prazo.", scores: { terra: 2 } },
      { text: "Manter flexibilidade e ajustar rota.", scores: { ar: 2 } },
      { text: "Ajustar ritmo e evitar burnout.", scores: { agua: 2 } },
      { text: "Crescer com saúde e consistência.", scores: { vida: 2 } },
      { text: "Alcançar sem trair quem você é.", scores: { alma: 2 } }
    ]},
    { id: 37, category: "trabalho", prompt: "Você está em uma sala com clima pesado. Você…", answers: [
      { text: "Entra forte e quebra a tensão.", scores: { fogo: 2 } },
      { text: "Fica firme e não se abala.", scores: { terra: 2 } },
      { text: "Evita ficar ali e sai.", scores: { ar: 2 } },
      { text: "Observa e adapta seu tom.", scores: { agua: 2 } },
      { text: "Tenta aliviar quem está mal.", scores: { vida: 2 } },
      { text: "Protege seu interior: não absorve tudo.", scores: { alma: 2 } }
    ]},
    { id: 38, category: "vinculos", prompt: "Um amigo te pede conselho. Você…", answers: [
      { text: "Diz a verdade do jeito mais direto.", scores: { fogo: 2 } },
      { text: "Dá um conselho prático e realista.", scores: { terra: 2 } },
      { text: "Mostra opções e deixa ele escolher.", scores: { ar: 2 } },
      { text: "Ajuda ele a pensar com calma.", scores: { agua: 2 } },
      { text: "Apoia emocionalmente e encoraja.", scores: { vida: 2 } },
      { text: "Diz a verdade, mas com limite e respeito.", scores: { alma: 2 } }
    ]},
    { id: 39, category: "moral", prompt: "Você percebe que está virando alguém que você não gosta. Você…", answers: [
      { text: "Muda na marra agora.", scores: { fogo: 2 } },
      { text: "Cria disciplina pra se corrigir.", scores: { terra: 2 } },
      { text: "Troca ambiente e recomeça.", scores: { ar: 2 } },
      { text: "Entende por que isso está acontecendo.", scores: { agua: 2 } },
      { text: "Procura cura/apoio e reconstrói.", scores: { vida: 2 } },
      { text: "Define um limite: “eu não passo daqui”.", scores: { alma: 2 } }
    ]},
    { id: 40, category: "moral", prompt: "Você descobre que alguém está sendo excluído do grupo. Você…", answers: [
      { text: "Chama atenção do grupo na hora.", scores: { fogo: 2 } },
      { text: "Puxa a pessoa e inclui com firmeza.", scores: { terra: 2 } },
      { text: "Conversa com a pessoa em particular e muda o fluxo.", scores: { ar: 2 } },
      { text: "Observa e escolhe a melhor forma de intervir.", scores: { agua: 2 } },
      { text: "Faz questão de incluir e proteger.", scores: { vida: 2 } },
      { text: "Não tolera injustiça: impõe respeito.", scores: { alma: 2 } }
    ]},
    { id: 41, category: "pressao", prompt: "Você está com pouco tempo e muita coisa pra fazer. Você…", answers: [
      { text: "Faz tudo correndo e entrega.", scores: { fogo: 2 } },
      { text: "Prioriza e faz direito.", scores: { terra: 2 } },
      { text: "Corta o que não importa e simplifica.", scores: { ar: 2 } },
      { text: "Ajusta o ritmo e evita erro.", scores: { agua: 2 } },
      { text: "Faz sem se destruir no processo.", scores: { vida: 2 } },
      { text: "Faz com limite: não vira escravo disso.", scores: { alma: 2 } }
    ]},
    { id: 42, category: "vinculos", prompt: "Você recebe um elogio grande. Você…", answers: [
      { text: "Usa isso como combustível.", scores: { fogo: 2 } },
      { text: "Agradece e segue constante.", scores: { terra: 2 } },
      { text: "Ri e muda de assunto.", scores: { ar: 2 } },
      { text: "Agradece com calma.", scores: { agua: 2 } },
      { text: "Fica feliz e compartilha com os seus.", scores: { vida: 2 } },
      { text: "Aceita sem deixar isso te definir.", scores: { alma: 2 } }
    ]},
    { id: 43, category: "trabalho", prompt: "Você sente que está sendo observado/julgado. Você…", answers: [
      { text: "Enfrenta e mostra presença.", scores: { fogo: 2 } },
      { text: "Mantém postura e firmeza.", scores: { terra: 2 } },
      { text: "Se move pra longe e não dá acesso.", scores: { ar: 2 } },
      { text: "Observa a intenção por trás do olhar.", scores: { agua: 2 } },
      { text: "Tenta reduzir tensão do ambiente.", scores: { vida: 2 } },
      { text: "Protege sua identidade: não se molda por julgamento.", scores: { alma: 2 } }
    ]},
    { id: 44, category: "moral", prompt: "Você tem que escolher entre “falar a verdade” e “evitar briga”. Você…", answers: [
      { text: "Fala a verdade na hora.", scores: { fogo: 2 } },
      { text: "Fala a verdade do jeito certo.", scores: { terra: 2 } },
      { text: "Se retira e não entra nisso.", scores: { ar: 2 } },
      { text: "Fala no momento certo pra não piorar.", scores: { agua: 2 } },
      { text: "Fala com cuidado pra não ferir.", scores: { vida: 2 } },
      { text: "Fala a verdade se a paz for mentira.", scores: { alma: 2 } }
    ]},
    { id: 45, category: "pressao", prompt: "Você está em perigo e não pode ganhar. Você…", answers: [
      { text: "Faz barulho e abre espaço na força.", scores: { fogo: 2 } },
      { text: "Aguenta firme até surgir chance.", scores: { terra: 2 } },
      { text: "Foge e se reposiciona.", scores: { ar: 2 } },
      { text: "Espera o timing e sai limpo.", scores: { agua: 2 } },
      { text: "Prioriza salvar alguém antes de sair.", scores: { vida: 2 } },
      { text: "Sai sem perder o controle nem virar crueldade.", scores: { alma: 2 } }
    ]},
    { id: 46, category: "conflito", prompt: "Você vê alguém fazendo bullying com outro. Você…", answers: [
      { text: "Entra e intimida o agressor.", scores: { fogo: 2 } },
      { text: "Se coloca no meio e encerra.", scores: { terra: 2 } },
      { text: "Tira a vítima dali e afasta.", scores: { ar: 2 } },
      { text: "Desarma o agressor com calma e firmeza.", scores: { agua: 2 } },
      { text: "Ampara a vítima e chama ajuda.", scores: { vida: 2 } },
      { text: "Denuncia e impõe limite moral.", scores: { alma: 2 } }
    ]},
    { id: 47, category: "pressao", prompt: "Você sente medo de falhar. Você…", answers: [
      { text: "Se joga mesmo assim.", scores: { fogo: 2 } },
      { text: "Treina mais e faz seguro.", scores: { terra: 2 } },
      { text: "Busca outro caminho menos arriscado.", scores: { ar: 2 } },
      { text: "Vai com calma e reduz erro.", scores: { agua: 2 } },
      { text: "Se apoia em alguém e continua.", scores: { vida: 2 } },
      { text: "Enfrenta sem se enganar nem se destruir.", scores: { alma: 2 } }
    ]},
    { id: 48, category: "moral", prompt: "Você está entre “ganhar” e “ser justo”. Você…", answers: [
      { text: "Ganha.", scores: { fogo: 2 } },
      { text: "Escolhe o justo, porque sustenta depois.", scores: { terra: 2 } },
      { text: "Procura um jeito de ganhar sem injustiça.", scores: { ar: 2 } },
      { text: "Analisa consequências antes de decidir.", scores: { agua: 2 } },
      { text: "Escolhe o justo se alguém seria ferido.", scores: { vida: 2 } },
      { text: "Escolhe o justo se ganhar te corromper.", scores: { alma: 2 } }
    ]},
    { id: 49, category: "trabalho", prompt: "Você precisa recomeçar do zero. Você…", answers: [
      { text: "Recomeça com raiva e força.", scores: { fogo: 2 } },
      { text: "Recomeça com plano e base.", scores: { terra: 2 } },
      { text: "Recomeça mudando tudo e explorando.", scores: { ar: 2 } },
      { text: "Recomeça aos poucos e ajustando.", scores: { agua: 2 } },
      { text: "Recomeça cuidando de si e persistindo.", scores: { vida: 2 } },
      { text: "Recomeça sem perder seus valores.", scores: { alma: 2 } }
    ]},
    { id: 50, category: "trabalho", prompt: "O que mais pesa pra você numa escolha difícil?", answers: [
      { text: "Decidir e agir.", scores: { fogo: 2 } },
      { text: "Sustentar o que decidiu.", scores: { terra: 2 } },
      { text: "Ter liberdade pra mudar depois.", scores: { ar: 2 } },
      { text: "Fazer no timing certo.", scores: { agua: 2 } },
      { text: "Evitar machucar quem importa.", scores: { vida: 2 } },
      { text: "Não perder o respeito por si mesmo.", scores: { alma: 2 } }
    ]}
  ]
};
