export const extraQuestions = [
  {
    id: 25, weight: 2, group: "custo", isKey: false,
    prompt: "Você tem uma prova que inocenta alguém, mas revelar isso vai colocar você na mira de quem manda. Você:",
    answers: [
      { text: "Revela e enfrenta o que vier.", scores: { fogo: 2, alma: 1 } },
      { text: "Revela, mas prepara base e proteção antes.", scores: { terra: 2, vida: 1 } },
      { text: "Cria um caminho indireto para a prova aparecer sem te expor.", scores: { ar: 2, agua: 1 } },
      { text: "Espera o timing certo pra reduzir dano e garantir efeito.", scores: { agua: 2, terra: 1 } },
      { text: "Revela se isso impedir que alguém sofra agora.", scores: { vida: 2, agua: 1 } },
      { text: "Revela porque a verdade vale mais que a segurança.", scores: { alma: 2, terra: 1 } }
    ]
  },
  {
    id: 26, weight: 1, group: "instinto", isKey: false,
    prompt: "Quando você percebe que está sendo observado, você tende a:",
    answers: [
      { text: "Se impor e encarar o olhar.", scores: { fogo: 2, ar: 1 } },
      { text: "Ficar mais firme e reduzir brechas.", scores: { terra: 2, alma: 1 } },
      { text: "Mudar o padrão e confundir a leitura.", scores: { ar: 2, agua: 1 } },
      { text: "Ler a intenção por trás do olhar.", scores: { agua: 2, alma: 1 } },
      { text: "Pensar em quem pode ser afetado além de você.", scores: { vida: 2, agua: 1 } },
      { text: "Fechar por dentro: sem permissão, ninguém entra.", scores: { alma: 2, terra: 1 } }
    ]
  },
  {
    id: 27, weight: 3, group: "essencia", isKey: true,
    prompt: "Uma saída fácil te poupa dor — mas exige que você renegue um valor que te define. Você:",
    answers: [
      { text: "Aceita. Sobrevivência vem primeiro.", scores: { fogo: 2, terra: 1 } },
      { text: "Recusa. Sem esse valor, tudo desaba depois.", scores: { terra: 2, alma: 1 } },
      { text: "Procura uma terceira via, mesmo que custe tempo.", scores: { ar: 2, agua: 1 } },
      { text: "Analisa o preço completo antes de tocar nisso.", scores: { agua: 2, terra: 1 } },
      { text: "Recusa se isso ferir alguém inocente no caminho.", scores: { vida: 2, alma: 1 } },
      { text: "Recusa. Se eu traio isso, eu viro o que eu odeio.", scores: { alma: 2, terra: 1 } }
    ]
  },
  {
    id: 28, weight: 2, group: "vinculo", isKey: false,
    prompt: "Você está atrasado para algo decisivo e encontra alguém caído pedindo ajuda. Você:",
    answers: [
      { text: "Ajuda rápido e segue, custe o que custar depois.", scores: { fogo: 2, vida: 1 } },
      { text: "Ajuda de forma segura e organizada, mesmo atrasando.", scores: { terra: 2, vida: 1 } },
      { text: "Chama ajuda e cria um jeito de não parar totalmente.", scores: { ar: 2, agua: 1 } },
      { text: "Avalia o risco e age no menor custo possível.", scores: { agua: 2, ar: 1 } },
      { text: "Fica até garantir que a pessoa não será abandonada.", scores: { vida: 2, agua: 1 } },
      { text: "Ajuda, mas impõe limites: não se perde no processo.", scores: { alma: 2, terra: 1 } }
    ]
  },
  {
    id: 29, weight: 1, group: "instinto", isKey: false,
    prompt: "Quando você está exausto e não há ninguém para te salvar, você:",
    answers: [
      { text: "Se força a avançar só por decisão.", scores: { fogo: 2, terra: 1 } },
      { text: "Mantém o ritmo mínimo e não quebra a estrutura.", scores: { terra: 2, vida: 1 } },
      { text: "Muda o plano e encontra um caminho mais leve.", scores: { ar: 2, agua: 1 } },
      { text: "Respeita o corpo e ajusta o fluxo.", scores: { agua: 2, vida: 1 } },
      { text: "Descansa e volta com persistência.", scores: { vida: 2, agua: 1 } },
      { text: "Se ancora por dentro e segue inteiro.", scores: { alma: 2, terra: 1 } }
    ]
  },
  {
    id: 30, weight: 2, group: "custo", isKey: false,
    prompt: "Você descobre que alguém te admira, mas por uma versão falsa de você. Você:",
    answers: [
      { text: "Corrige na hora, sem suavizar.", scores: { fogo: 2, alma: 1 } },
      { text: "Mostra a verdade aos poucos, com constância.", scores: { terra: 2, vida: 1 } },
      { text: "Muda a dinâmica para a pessoa te ver de outro jeito.", scores: { ar: 2, agua: 1 } },
      { text: "Tenta entender por que ela precisou dessa versão.", scores: { agua: 2, vida: 1 } },
      { text: "Protege o vínculo, mas sem alimentar a mentira.", scores: { vida: 2, agua: 1 } },
      { text: "Rompe a ilusão: sem verdade, não existe vínculo real.", scores: { alma: 2, terra: 1 } }
    ]
  },
  {
    id: 31, weight: 1, group: "vinculo", isKey: false,
    prompt: "Quando alguém te pede perdão, o que mais te importa?",
    answers: [
      { text: "Atitude imediata, não discurso.", scores: { fogo: 2, terra: 1 } },
      { text: "Mudança consistente ao longo do tempo.", scores: { terra: 2, vida: 1 } },
      { text: "Respeito ao seu espaço depois do pedido.", scores: { ar: 2, alma: 1 } },
      { text: "Sinceridade emocional, sem manipulação.", scores: { agua: 2, alma: 1 } },
      { text: "Reparação e cuidado com o que foi ferido.", scores: { vida: 2, agua: 1 } },
      { text: "Coerência: não repetir a mesma quebra de essência.", scores: { alma: 2, terra: 1 } }
    ]
  },
  {
    id: 32, weight: 2, group: "custo", isKey: false,
    prompt: "Você recebe uma oferta que resolve sua vida, mas exige que você ‘feche os olhos’ para uma injustiça. Você:",
    answers: [
      { text: "Aceita e depois resolve do seu jeito.", scores: { fogo: 2, ar: 1 } },
      { text: "Recusa: injustiça vira dívida que cobra.", scores: { terra: 2, alma: 1 } },
      { text: "Aceita só se puder escapar sem se comprometer.", scores: { ar: 2, agua: 1 } },
      { text: "Investiga antes: nada de assinar no escuro.", scores: { agua: 2, terra: 1 } },
      { text: "Recusa se isso prejudicar pessoas reais.", scores: { vida: 2, alma: 1 } },
      { text: "Recusa: não pago paz comprada com mentira.", scores: { alma: 2, terra: 1 } }
    ]
  },
  {
    id: 33, weight: 3, group: "essencia", isKey: true,
    prompt: "Você só pode salvar um: alguém que você ama OU um grupo maior de desconhecidos. Ninguém poderá te culpar. Você:",
    answers: [
      { text: "Salva o grupo. Aguento o vazio depois.", scores: { fogo: 2, terra: 1 } },
      { text: "Salva o grupo: é o peso certo a carregar.", scores: { terra: 2, alma: 1 } },
      { text: "Procura um truque/saída impossível antes de decidir.", scores: { ar: 2, agua: 1 } },
      { text: "Escolhe o timing/rota que reduza a perda ao máximo.", scores: { agua: 2, ar: 1 } },
      { text: "Salva quem ama e tenta proteger o resto como der.", scores: { vida: 2, agua: 1 } },
      { text: "Recusa decidir no escuro: não jogo vida como moeda.", scores: { alma: 2, terra: 1 } }
    ]
  },
  {
    id: 34, weight: 1, group: "instinto", isKey: false,
    prompt: "Em um confronto que você não pode vencer, você:",
    answers: [
      { text: "Vai até o limite e cobra o preço.", scores: { fogo: 2, terra: 1 } },
      { text: "Cria posição e aguenta até abrir chance.", scores: { terra: 2, vida: 1 } },
      { text: "Sai de cena e reaparece com vantagem.", scores: { ar: 2, agua: 1 } },
      { text: "Se adapta e vira o ritmo contra o outro.", scores: { agua: 2, ar: 1 } },
      { text: "Prioriza manter alguém vivo acima de vencer.", scores: { vida: 2, agua: 1 } },
      { text: "Não cruza a linha que te destruiria por dentro.", scores: { alma: 2, terra: 1 } }
    ]
  },
  {
    id: 35, weight: 2, group: "essencia", isKey: false,
    prompt: "Quando você percebe que está virando o que odiava, seu primeiro movimento é:",
    answers: [
      { text: "Parar e quebrar o padrão na força.", scores: { fogo: 2, alma: 1 } },
      { text: "Reestruturar hábitos e disciplina.", scores: { terra: 2, vida: 1 } },
      { text: "Mudar de ambiente e cortar gatilhos.", scores: { ar: 2, agua: 1 } },
      { text: "Processar emoções e reorganizar por dentro.", scores: { agua: 2, alma: 1 } },
      { text: "Buscar cura/apoio e reconstruir devagar.", scores: { vida: 2, agua: 1 } },
      { text: "Reafirmar identidade e limites inegociáveis.", scores: { alma: 2, terra: 1 } }
    ]
  },
  {
    id: 36, weight: 2, group: "vinculo", isKey: false,
    prompt: "Você pode dizer a verdade e destruir um vínculo OU mentir e manter tudo ‘em paz’. Você:",
    answers: [
      { text: "Diz a verdade e aguenta o impacto.", scores: { fogo: 2, alma: 1 } },
      { text: "Diz a verdade no momento certo e com estrutura.", scores: { terra: 2, vida: 1 } },
      { text: "Diz por partes, buscando uma saída menos destrutiva.", scores: { ar: 2, agua: 1 } },
      { text: "Escolhe o jeito que menos fere e mais esclarece.", scores: { agua: 2, vida: 1 } },
      { text: "Protege o vínculo, mas reconstrói em cima do real.", scores: { vida: 2, agua: 1 } },
      { text: "Recusa mentir: paz falsa cobra caro da alma.", scores: { alma: 2, terra: 1 } }
    ]
  },
  {
    id: 37, weight: 1, group: "instinto", isKey: false,
    prompt: "Quando você entra em um lugar pesado, você sente vontade de:",
    answers: [
      { text: "Mudar a energia na presença.", scores: { fogo: 2, ar: 1 } },
      { text: "Firmar o corpo e não ser empurrado.", scores: { terra: 2, alma: 1 } },
      { text: "Circular, ler saídas e evitar prender-se.", scores: { ar: 2, agua: 1 } },
      { text: "Perceber o clima e ajustar seu tom.", scores: { agua: 2, alma: 1 } },
      { text: "Proteger quem está mais vulnerável ali.", scores: { vida: 2, agua: 1 } },
      { text: "Manter seu núcleo intacto, mesmo sob pressão.", scores: { alma: 2, terra: 1 } }
    ]
  },
  {
    id: 38, weight: 2, group: "custo", isKey: false,
    prompt: "Você pode ganhar poder agora, mas ele te deixará dependente. Você:",
    answers: [
      { text: "Aceita: poder resolve urgência.", scores: { fogo: 2, ar: 1 } },
      { text: "Recusa: dependência destrói a base.", scores: { terra: 2, alma: 1 } },
      { text: "Aceita só se houver uma rota de saída.", scores: { ar: 2, agua: 1 } },
      { text: "Testa, mede e decide com calma.", scores: { agua: 2, terra: 1 } },
      { text: "Recusa se isso colocar outros em risco depois.", scores: { vida: 2, alma: 1 } },
      { text: "Recusa: não troco essência por muleta.", scores: { alma: 2, terra: 1 } }
    ]
  },
  {
    id: 39, weight: 1, group: "vinculo", isKey: false,
    prompt: "Se alguém te ama, mas te prende, você:",
    answers: [
      { text: "Quebra a prisão na hora.", scores: { fogo: 2, ar: 1 } },
      { text: "Define regras e limites com firmeza.", scores: { terra: 2, alma: 1 } },
      { text: "Se afasta para respirar e reorganizar.", scores: { ar: 2, agua: 1 } },
      { text: "Conversa, sente, ajusta o vínculo.", scores: { agua: 2, vida: 1 } },
      { text: "Tenta curar a insegurança por trás da prisão.", scores: { vida: 2, agua: 1 } },
      { text: "Mantém sua identidade intacta, mesmo amando.", scores: { alma: 2, terra: 1 } }
    ]
  },
  {
    id: 40, weight: 3, group: "essencia", isKey: true,
    prompt: "Você pode apagar sua culpa… mas junto apaga sua memória do que você aprendeu com ela. Você:",
    answers: [
      { text: "Apaga. Eu não quero carregar isso.", scores: { fogo: 2, ar: 1 } },
      { text: "Não apaga: culpa vira estrutura e lição.", scores: { terra: 2, alma: 1 } },
      { text: "Tenta um meio-termo: aliviar sem apagar tudo.", scores: { ar: 2, agua: 1 } },
      { text: "Sente o peso e deixa o tempo transformar.", scores: { agua: 2, vida: 1 } },
      { text: "Não apaga: usa isso para proteger melhor depois.", scores: { vida: 2, agua: 1 } },
      { text: "Não apaga: sem verdade, não existe ‘eu’.", scores: { alma: 2, terra: 1 } }
    ]
  },
  {
    id: 41, weight: 2, group: "custo", isKey: false,
    prompt: "Você pode vencer discutindo, mas teria que humilhar alguém em público. Você:",
    answers: [
      { text: "Humilha: vitória é vitória.", scores: { fogo: 2, terra: 1 } },
      { text: "Evita: isso quebra confiança e base.", scores: { terra: 2, vida: 1 } },
      { text: "Muda o ângulo e vence sem exposição direta.", scores: { ar: 2, agua: 1 } },
      { text: "Diminui a tensão e escolhe precisão, não crueldade.", scores: { agua: 2, alma: 1 } },
      { text: "Protege a dignidade da pessoa e recua se preciso.", scores: { vida: 2, alma: 1 } },
      { text: "Recusa: humilhar alguém te corrói por dentro.", scores: { alma: 2, terra: 1 } }
    ]
  },
  {
    id: 42, weight: 1, group: "instinto", isKey: false,
    prompt: "Quando tudo dá certo por tempo demais, você sente:",
    answers: [
      { text: "Vontade de ir além e testar limites.", scores: { fogo: 2, ar: 1 } },
      { text: "Vontade de consolidar e manter seguro.", scores: { terra: 2, vida: 1 } },
      { text: "Vontade de mudar para não ficar preso nisso.", scores: { ar: 2, agua: 1 } },
      { text: "Vontade de ler sinais antes da mudança.", scores: { agua: 2, terra: 1 } },
      { text: "Vontade de cuidar do que está nascendo ali.", scores: { vida: 2, agua: 1 } },
      { text: "Vontade de checar se você ainda é você.", scores: { alma: 2, terra: 1 } }
    ]
  },
  {
    id: 43, weight: 2, group: "vinculo", isKey: false,
    prompt: "Você é acusado injustamente. A forma mais natural de reagir é:",
    answers: [
      { text: "Explodir e exigir justiça agora.", scores: { fogo: 2, ar: 1 } },
      { text: "Segurar firme e provar com fatos e tempo.", scores: { terra: 2, vida: 1 } },
      { text: "Sair do foco e virar o jogo por fora.", scores: { ar: 2, agua: 1 } },
      { text: "Processar e responder no momento certo.", scores: { agua: 2, alma: 1 } },
      { text: "Proteger quem pode ser atingido com isso.", scores: { vida: 2, agua: 1 } },
      { text: "Não negociar sua verdade, mesmo sozinho.", scores: { alma: 2, terra: 1 } }
    ]
  },
  {
    id: 44, weight: 3, group: "essencia", isKey: true,
    prompt: "Se para salvar alguém você precisasse se tornar monstruoso, por quanto tempo você aguentaria ser isso?",
    answers: [
      { text: "O tempo necessário. Eu pago o preço.", scores: { fogo: 2, terra: 1 } },
      { text: "Eu aguento, mas com regra e limite claro.", scores: { terra: 2, alma: 1 } },
      { text: "Eu buscaria outra solução antes de virar isso.", scores: { ar: 2, agua: 1 } },
      { text: "Eu tentaria manter humanidade pelo controle emocional.", scores: { agua: 2, alma: 1 } },
      { text: "Eu faria o possível para não ferir inocentes no processo.", scores: { vida: 2, agua: 1 } },
      { text: "Eu não viro isso. Se eu cruzo essa linha, eu me perco.", scores: { alma: 2, terra: 1 } }
    ]
  },
  {
    id: 45, weight: 1, group: "instinto", isKey: false,
    prompt: "Quando você sente que alguém está ‘te lendo’, você:",
    answers: [
      { text: "Se mostra mais forte ainda.", scores: { fogo: 2, ar: 1 } },
      { text: "Fecha brechas e mantém postura.", scores: { terra: 2, alma: 1 } },
      { text: "Muda o padrão e confunde.", scores: { ar: 2, agua: 1 } },
      { text: "Observa a intenção por trás da leitura.", scores: { agua: 2, alma: 1 } },
      { text: "Protege o clima para ninguém se ferir.", scores: { vida: 2, agua: 1 } },
      { text: "Mantém seu centro: não dou acesso fácil.", scores: { alma: 2, terra: 1 } }
    ]
  },
  {
    id: 46, weight: 2, group: "custo", isKey: false,
    prompt: "Você pode aceitar ajuda, mas isso te coloca em dívida com alguém perigoso. Você:",
    answers: [
      { text: "Aceita e lida depois.", scores: { fogo: 2, ar: 1 } },
      { text: "Recusa: dívida é corrente.", scores: { terra: 2, alma: 1 } },
      { text: "Aceita e já prepara rota de saída.", scores: { ar: 2, agua: 1 } },
      { text: "Considera o risco e busca uma alternativa menos tóxica.", scores: { agua: 2, terra: 1 } },
      { text: "Recusa se isso ameaçar terceiros.", scores: { vida: 2, alma: 1 } },
      { text: "Recusa: não negocio minha integridade.", scores: { alma: 2, terra: 1 } }
    ]
  },
  {
    id: 47, weight: 1, group: "vinculo", isKey: false,
    prompt: "O que mais te faz permanecer ao lado de alguém é:",
    answers: [
      { text: "Coragem quando importa.", scores: { fogo: 2, terra: 1 } },
      { text: "Constância no longo prazo.", scores: { terra: 2, vida: 1 } },
      { text: "Respeito ao seu espaço.", scores: { ar: 2, alma: 1 } },
      { text: "Profundidade e sinceridade emocional.", scores: { agua: 2, vida: 1 } },
      { text: "Cuidado real em momentos difíceis.", scores: { vida: 2, agua: 1 } },
      { text: "Coerência com princípios.", scores: { alma: 2, terra: 1 } }
    ]
  },
  {
    id: 48, weight: 2, group: "essencia", isKey: false,
    prompt: "Se você pudesse apagar uma dor antiga, mas ela é o que te impediu de virar alguém pior, você:",
    answers: [
      { text: "Apaga. Eu faço outra força depois.", scores: { fogo: 2, ar: 1 } },
      { text: "Não apaga: isso virou base.", scores: { terra: 2, alma: 1 } },
      { text: "Apaga só parte: fico com a lição, não com a ferida.", scores: { ar: 2, agua: 1 } },
      { text: "Não apaga: deixa o tempo transformar.", scores: { agua: 2, vida: 1 } },
      { text: "Não apaga: uso isso para proteger melhor.", scores: { vida: 2, agua: 1 } },
      { text: "Não apaga: minha verdade não é negociável.", scores: { alma: 2, terra: 1 } }
    ]
  },
  {
    id: 49, weight: 1, group: "instinto", isKey: false,
    prompt: "Quando você sente perigo chegando, você prefere:",
    answers: [
      { text: "Atacar primeiro.", scores: { fogo: 2, ar: 1 } },
      { text: "Segurar posição.", scores: { terra: 2, vida: 1 } },
      { text: "Sumir do alcance.", scores: { ar: 2, agua: 1 } },
      { text: "Esperar o erro e responder.", scores: { agua: 2, ar: 1 } },
      { text: "Tirar os outros do risco.", scores: { vida: 2, agua: 1 } },
      { text: "Proteger sua essência antes de tudo.", scores: { alma: 2, terra: 1 } }
    ]
  },
  {
    id: 50, weight: 3, group: "essencia", isKey: true,
    prompt: "Você recebe a chance de ‘recomeçar do zero’, mas isso apaga todas as pessoas que você tocou na sua história. Você:",
    answers: [
      { text: "Aceita: eu preciso vencer meu destino.", scores: { fogo: 2, ar: 1 } },
      { text: "Recusa: história é base e consequência.", scores: { terra: 2, alma: 1 } },
      { text: "Procura um recomeço sem apagar tudo.", scores: { ar: 2, agua: 1 } },
      { text: "Recusa: apagar pessoas é um tipo de morte.", scores: { agua: 2, vida: 1 } },
      { text: "Recusa: vínculos importam mais que conforto.", scores: { vida: 2, alma: 1 } },
      { text: "Recusa: sem memória e verdade, não existe ‘eu’.", scores: { alma: 2, terra: 1 } }
    ]
  },
  {
    id: 51, weight: 2, group: "custo", isKey: false,
    prompt: "Quando você percebe que alguém está te usando, você:",
    answers: [
      { text: "Corta na hora.", scores: { fogo: 2, alma: 1 } },
      { text: "Impõe regra e mantém distância.", scores: { terra: 2, alma: 1 } },
      { text: "Sai sem explicar e muda de rota.", scores: { ar: 2, agua: 1 } },
      { text: "Espera a hora certa e desmonta o jogo.", scores: { agua: 2, ar: 1 } },
      { text: "Protege o que pode e encerra sem destruir.", scores: { vida: 2, agua: 1 } },
      { text: "Define limite definitivo: não tocam sua essência.", scores: { alma: 2, terra: 1 } }
    ]
  },
  {
    id: 52, weight: 1, group: "vinculo", isKey: false,
    prompt: "Quando alguém desaba perto de você, você tende a:",
    answers: [
      { text: "Levantar a pessoa no impulso.", scores: { fogo: 2, vida: 1 } },
      { text: "Dar estrutura e segurança.", scores: { terra: 2, vida: 1 } },
      { text: "Abrir espaço e aliviar a pressão.", scores: { ar: 2, agua: 1 } },
      { text: "Escutar e ajustar pelo sentimento.", scores: { agua: 2, alma: 1 } },
      { text: "Cuidar e reconstruir devagar.", scores: { vida: 2, agua: 1 } },
      { text: "Ajudar sem se perder junto.", scores: { alma: 2, terra: 1 } }
    ]
  },
  {
    id: 53, weight: 2, group: "custo", isKey: false,
    prompt: "Você pode vencer uma disputa se for desleal, e ninguém descobre. Você:",
    answers: [
      { text: "Vence. O mundo é assim.", scores: { fogo: 2, terra: 1 } },
      { text: "Recusa: deslealdade vira instabilidade.", scores: { terra: 2, alma: 1 } },
      { text: "Tenta vencer por outro caminho, com inteligência.", scores: { ar: 2, agua: 1 } },
      { text: "Escolhe o timing e a precisão para vencer limpo.", scores: { agua: 2, ar: 1 } },
      { text: "Recusa se isso ferir alguém no processo.", scores: { vida: 2, alma: 1 } },
      { text: "Recusa: vitória sem essência é derrota.", scores: { alma: 2, terra: 1 } }
    ]
  },
  {
    id: 54, weight: 1, group: "instinto", isKey: false,
    prompt: "Quando você precisa começar algo novo, você prefere:",
    answers: [
      { text: "Começar já, no impulso.", scores: { fogo: 2, ar: 1 } },
      { text: "Planejar e construir base.", scores: { terra: 2, vida: 1 } },
      { text: "Explorar possibilidades primeiro.", scores: { ar: 2, agua: 1 } },
      { text: "Sentir o ritmo e ajustar.", scores: { agua: 2, vida: 1 } },
      { text: "Começar pequeno e crescer.", scores: { vida: 2, terra: 1 } },
      { text: "Começar só se estiver coerente com quem você é.", scores: { alma: 2, terra: 1 } }
    ]
  },
  {
    id: 55, weight: 3, group: "essencia", isKey: true,
    prompt: "Se você pudesse ‘ser perfeito’ aos olhos do mundo, mas perderia sua autenticidade, você:",
    answers: [
      { text: "Aceita: perfeição é poder.", scores: { fogo: 2, ar: 1 } },
      { text: "Recusa: perfeição sem base não sustenta.", scores: { terra: 2, alma: 1 } },
      { text: "Evita: isso vira uma jaula.", scores: { ar: 2, agua: 1 } },
      { text: "Recusa: isso parece bonito, mas tem veneno.", scores: { agua: 2, alma: 1 } },
      { text: "Recusa se isso prejudicar vínculos reais.", scores: { vida: 2, alma: 1 } },
      { text: "Recusa: autenticidade é a raiz do seu ‘eu’.", scores: { alma: 2, terra: 1 } }
    ]
  },
  {
    id: 56, weight: 2, group: "vinculo", isKey: false,
    prompt: "Alguém que você protege está errado e vai causar dano. Você:",
    answers: [
      { text: "Corta a ação na hora.", scores: { fogo: 2, terra: 1 } },
      { text: "Impede e define regra clara.", scores: { terra: 2, alma: 1 } },
      { text: "Desvia a pessoa do caminho sem confronto direto.", scores: { ar: 2, agua: 1 } },
      { text: "Conversa e ajusta pelo entendimento emocional.", scores: { agua: 2, vida: 1 } },
      { text: "Protege, mas responsabiliza e repara danos.", scores: { vida: 2, terra: 1 } },
      { text: "Protege a verdade e o limite: amor não é permissão.", scores: { alma: 2, terra: 1 } }
    ]
  },
  {
    id: 57, weight: 1, group: "instinto", isKey: false,
    prompt: "Em ambientes novos, você se sente melhor quando:",
    answers: [
      { text: "Você consegue impor ritmo.", scores: { fogo: 2, ar: 1 } },
      { text: "Você sabe onde é seguro ficar.", scores: { terra: 2, vida: 1 } },
      { text: "Você tem espaço para se mover.", scores: { ar: 2, agua: 1 } },
      { text: "Você entende o clima do lugar.", scores: { agua: 2, alma: 1 } },
      { text: "Você encontra alguém para apoiar.", scores: { vida: 2, agua: 1 } },
      { text: "Você não precisa se disfarçar.", scores: { alma: 2, terra: 1 } }
    ]
  },
  {
    id: 58, weight: 2, group: "custo", isKey: false,
    prompt: "Você precisa escolher: ter razão OU manter a paz. Você:",
    answers: [
      { text: "Escolhe ter razão: resolve logo.", scores: { fogo: 2, terra: 1 } },
      { text: "Escolhe paz com estrutura: conversa e regra.", scores: { terra: 2, vida: 1 } },
      { text: "Evita a armadilha e muda o jogo.", scores: { ar: 2, agua: 1 } },
      { text: "Equilibra: verdade com cuidado no timing.", scores: { agua: 2, vida: 1 } },
      { text: "Escolhe paz se isso proteger gente de sofrer.", scores: { vida: 2, agua: 1 } },
      { text: "Escolhe verdade se a paz for mentira.", scores: { alma: 2, terra: 1 } }
    ]
  },
  {
    id: 59, weight: 1, group: "vinculo", isKey: false,
    prompt: "Quando você sente saudade, você tende a:",
    answers: [
      { text: "Transformar em ação e ir atrás.", scores: { fogo: 2, ar: 1 } },
      { text: "Guardar e sustentar por dentro.", scores: { terra: 2, alma: 1 } },
      { text: "Mudar de foco para não ficar preso nisso.", scores: { ar: 2, agua: 1 } },
      { text: "Sentir profundamente e deixar passar em ondas.", scores: { agua: 2, vida: 1 } },
      { text: "Procurar reconstruir presença e cuidado.", scores: { vida: 2, agua: 1 } },
      { text: "Guardar a verdade do vínculo sem se perder.", scores: { alma: 2, terra: 1 } }
    ]
  },
  {
    id: 60, weight: 3, group: "essencia", isKey: true,
    prompt: "Se o mundo inteiro mentisse sobre você, mas você soubesse a verdade, o que te manteria vivo?",
    answers: [
      { text: "Minha decisão: eu avanço mesmo assim.", scores: { fogo: 2, alma: 1 } },
      { text: "Minha base: eu sustento o que é real.", scores: { terra: 2, alma: 1 } },
      { text: "Minha liberdade: eu não fico onde me prendem.", scores: { ar: 2, agua: 1 } },
      { text: "Minha lucidez: eu não me afogo no que dizem.", scores: { agua: 2, alma: 1 } },
      { text: "Meu vínculo: eu protejo quem importa, não a opinião.", scores: { vida: 2, agua: 1 } },
      { text: "Minha identidade: eu não abandono quem eu sou.", scores: { alma: 2, terra: 1 } }
    ]
  }
];
