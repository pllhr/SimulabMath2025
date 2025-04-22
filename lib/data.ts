import type { Simulado } from "./types"

// Dados de exemplo para os simulados
export const simuladosData: Simulado[] = [
  {
    id: "1",
    titulo: "Histórico e Evolução da Internet",
    descricao: "A internet surgiu inicialmente como um projeto",
    numQuestoes: 10,
    duracao: "45 minutos",
    duracaoEmSegundos: 2700,
    nivel: "Fácil",
    topicos: ["Historico", "Evolucao", "da", "Internet", "Porcentagem"],
    tentativas: 1,
    mediaAcertos: 1,
    questoes: [
      {
        id: 1,
        enunciado: "A internet surgiu inicialmente como um projeto:",
        alternativas: [
          { id: "a", texto: "Comercial" },
          { id: "b", texto: "Educacional" },
          { id: "c", texto: "Militar" },
          { id: "d", texto: "Doméstico" },
        ],
        resposta: "c",
        explicacao:
          "📌 A internet surgiu como uma solução militar na Guerra Fria, quando os EUA criaram a ARPANET para proteger suas comunicações.",
      },
      {
        id: 2,
        enunciado: "O nome da primeira rede de computadores da história foi:",
        alternativas: [
          { id: "a", texto: "TCP/IP" },
          { id: "b", texto: "InternetNet" },
          { id: "c", texto: "WebBase" },
          { id: "d", texto: "ARPANET" },
        ],
        resposta: "d",
        explicacao:
          "A ARPANET foi a primeira rede de computadores do mundo, conectando instituições acadêmicas e militares.",
      },
      {
        id: 3,
        enunciado: "O primeiro protocolo usado na comunicação da ARPANET foi:",
        alternativas: [
          { id: "a", texto: "HTTP" },
          { id: "b", texto: "TCP/IP" },
          { id: "c", texto: "NCP" },
          { id: "d", texto: "DNS" },
        ],
        resposta: "c",
        explicacao:
          "📌 O Network Control Protocol foi o primeiro protocolo de comunicação entre computadores na ARPANET.",
      },
      {
        id: 4,
        enunciado: "Em que ano surgiu a ARPANET?",
        alternativas: [
          { id: "a", texto: "1959" },
          { id: "b", texto: "1969" },
          { id: "c", texto: "1979" },
          { id: "d", texto: "1989" },
        ],
        resposta: "b",
        explicacao: "📌 Em 1969 foi realizada a primeira conexão entre computadores da ARPANET, marcando o início da internet.",
      },
      {
        id: 5,
        enunciado: "Qual foi a primeira tentativa de palavra enviada pela ARPANET?",
        alternativas: [
          { id: "a", texto: "Hello" },
          { id: "b", texto: "Login" },
          { id: "c", texto: "Root" },
          { id: "d", texto: "Acess" },
        ],
        resposta: "b",
        explicacao:
          "📌 O primeiro comando enviado na ARPANET seria login, mas a conexão caiu após digitar lo.",
      },
      {
        id: 6,
        enunciado: "Qual país europeu foi o primeiro a se conectar à ARPANET após os EUA?",
        alternativas: [
          { id: "a", texto: "Alemanha" },
          { id: "b", texto: "França" },
          { id: "c", texto: "Noruega" },
          { id: "d", texto: "Inglaterra" },
        ],
        resposta: "c",
        explicacao: "📌 A Noruega foi o primeiro país fora dos EUA a se conectar à ARPANET, mostrando a expansão internacional do projeto."
      },
      {
        id: 7,
        enunciado: "O protocolo TCP/IP surgiu a partir da junção de:",
        alternativas: [
          { id: "a", texto: "HTTP e DNS" },
          { id: "b", texto: "TCP e FTP" },
          { id: "c", texto: "TCP e IP" },
          { id: "d", texto: "IP e SSL" },
        ],
        resposta: "c",
        explicacao: "📌 O protocolo TCP/IP é formado pela junção de dois protocolos: TCP (controle) e IP (endereçamento e roteamento)."
      },
      {
        id: 8,
        enunciado: "Qual foi o investimento inicial para o projeto ARPANET?",
        alternativas: [
          { id: "a", texto: "US$ 10 milhões" },
          { id: "b", texto: "US$ 100 mil" },
          { id: "c", texto: "US$ 1 milhão" },
          { id: "d", texto: "US$ 50 mil" },
        ],
        resposta: "c",
        explicacao: "📌 O investimento inicial da ARPANET foi de US$ 1 milhão, retirado do orçamento de mísseis balísticos."
      },
      {
        id: 9,
        enunciado: "No Brasil, a internet passou a ter uso comercial a partir de:",
        alternativas: [
          { id: "a", texto: "1990" },
          { id: "b", texto: "1991" },
          { id: "c", texto: "1995" },
          { id: "d", texto: "2000" },
        ],
        resposta: "c",
        explicacao: "📌 No Brasil, o acesso à internet para uso comercial foi liberado em 1995; antes era restrito a instituições públicas."
      },
      {
        id: 10,
        enunciado: "A ARPANET foi desenvolvida por qual organização dos EUA?:",
        alternativas: [
          { id: "a", texto: "NASA" },
          { id: "b", texto: "FBI" },
          { id: "c", texto: "CIA" },
          { id: "d", texto: "ARPA" },
        ],
        resposta: "d",
        explicacao: "📌 A ARPANET foi criada pela ARPA (Advanced Research Projects Agency), do Departamento de Defesa dos EUA."
      },
    ],
  },
  {
    id: "2",
    titulo: "Por que temos Redes de Computadores?",
    descricao: "Questões sobre revisão para prova do João Ferlini",
    numQuestoes: 15,
    duracao: "30 minutos",
    duracaoEmSegundos: 1800,
    nivel: "Médio",
    topicos: ["Gramática", "Concordância", "Regência", "Ortografia", "Pontuação"],
    tentativas: 1,
    mediaAcertos: 1,
    questoes: [
      {
        id: 1,
        enunciado: "Qual é o modelo mais comum de funcionamento das redes de computadores?",
        alternativas: [
          { id: "a", texto: "Ponto-a-ponto." },
          { id: "b", texto: "Cliente/servidor." },
          { id: "c", texto: "Estrela." },
          { id: "d", texto: "Repetidor." },
        ],
        resposta: "b",
        explicacao:
          "📌 É o modelo mais comum de rede. Um servidor fornece recursos e serviços, e os clientes acessam e utilizam esses serviços.",
      },
      {
        id: 2,
        enunciado: " O dispositivo que conecta redes diferentes e faz a ponte com a internet é o:",
        alternativas: [
          { id: "a", texto: "Hub" },
          { id: "b", texto: "Switch" },
          { id: "c", texto: "Modem" },
          { id: "d", texto: "Roteador" },
        ],
        resposta: "d",
        explicacao:
          "📌 O roteador conecta redes diferentes (ex: sua casa com a internet) e direciona os pacotes de dados ao destino correto.",
      },
      {
        id: 3,
        enunciado: "A função do NAT no roteador é:",
        alternativas: [
          { id: "a", texto: "Armazenar arquivos." },
          { id: "b", texto: "Converter IPs locais em IP público." },
          { id: "c", texto: "Atualizar a rede WI-FI." },
          { id: "d", texto: "Aumentar a largura de banda." },
        ],
        resposta: "b",
        explicacao:
          "📌 O roteador utiliza o NAT para transformar vários IPs internos em um único IP externo, permitindo o acesso à internet.",
      },
      {
        id: 4,
        enunciado: "A frequência de 5 GHz no Wi-Fi oferece:",
        alternativas: [
          { id: "a", texto: "Mais alcance." },
          { id: "b", texto: "Mais interferência." },
          { id: "c", texto: "Menos velocidade." },
          { id: "d", texto: "Mais velocidade e menos interferência." },
        ],
        resposta: "d",
        explicacao:
          "📌 A frequência 5 GHz oferece maior velocidade, mas com alcance menor. Ideal para lugares com muitos dispositivos.",
      },
      {
        id: 5,
        enunciado: "Qual protocolo o roteador usa para distribuir IPs automaticamente?",
        alternativas: [
          { id: "a", texto: "DNS" },
          { id: "b", texto: "TCP/IP" },
          { id: "c", texto: "DHCP" },
          { id: "d", texto: "FTP" },
        ],
        resposta: "c",
        explicacao:
          "📌 O roteador atua como servidor DHCP, atribuindo automaticamente endereços IP para dispositivos conectados.",
      },
      {
        id: 6,
        enunciado: "O hub envia dados para:",
        alternativas: [
          { id: "a", texto: "Apenas o destino correto" },
          { id: "b", texto: "Apenas o roteador" },
          { id: "c", texto: "Todos os dispositivos conectados" },
          { id: "d", texto: "Apenas redes externas" },
        ],
        resposta: "c",
        explicacao:
          "📌 O hub transmite dados para todos os dispositivos conectados, o que pode causar colisões e lentidão.",
      },
      {
        id: 7,
        enunciado: "O switch usa qual tipo de endereço para direcionar os dados?",
        alternativas: [
          { id: "a", texto: "IP" },
          { id: "b", texto: "MAC" },
          { id: "c", texto: "DNS" },
          { id: "d", texto: "URL" },
        ],
        resposta: "b",
        explicacao:
          "📌 O switch usa o endereço MAC de cada dispositivo para enviar os dados apenas ao destino correto.",
      },
      {
        id: 8,
        enunciado: "O que é comunicação full-duplex?",
        alternativas: [
          { id: "a", texto: "Apenas envio de dados" },
          { id: "b", texto: "Envio e recebimento de dados simultaneamente" },
          { id: "c", texto: "Dados enviados em horários diferentes" },
          { id: "d", texto: "Comunicação entre switches" },
        ],
        resposta: "b",
        explicacao:
          "📌 Full-duplex permite que dois dispositivos comuniquem entre si ao mesmo tempo, melhorando o desempenho.",
      },
      {
        id: 9,
        enunciado: "Em uma rede com IPs 192.168.1.0/24 e 192.168.2.0/24, quem faz a ligação entre as redes?",
        alternativas: [
          { id: "a", texto: "Switch" },
          { id: "b", texto: "Hub" },
          { id: "c", texto: "Roteador" },
          { id: "d", texto: "Repetidor" },
        ],
        resposta: "c",
        explicacao:
          "📌 Quando há duas redes diferentes (com IPs distintos), é o roteador que faz a ponte entre elas.",
      },
      {
        id: 10,
        enunciado: "Para criar uma rede, é necessário:",
        alternativas: [
          { id: "a", texto: "Apenas um roteador" },
          { id: "b", texto: "Apenas um computador" },
          { id: "c", texto: "Dispositivos e equipamentos de comunicação nas pontas" },
          { id: "d", texto: "Internet via satélite" },
        ],
        resposta: "c",
        explicacao:
          "📌 Para criar uma rede, é preciso ter dispositivos (computadores, switches, roteadores etc.) conectados entre si.",
      },
    ],
  },
  {
    id: "3",
    titulo: "Topologias de Redes – Parte 1/2",
    descricao: "Refere-se à forma como os dispositivos (nodes) estão organizados e conectados numa rede.",
    numQuestoes: 5,
    duracao: "50 minutos",
    duracaoEmSegundos: 3000,
    nivel: "Médio",
    topicos: ["Período Colonial", "República", "Era Vargas", "Ditadura Militar"],
    tentativas: 1,
    mediaAcertos: 1,
    questoes: [
      {
        id: 1,
        enunciado: " Qual topologia conecta todos os dispositivos em formato circular, com fluxo unidirecional?",
        alternativas: [
          { id: "a", texto: "Estrela" },
          { id: "b", texto: "Árvore" },
          { id: "c", texto: "Anel" },
          { id: "d", texto: "Malha" },
        ],
        resposta: "c",
        explicacao:
          "📌 Na topologia anel, os dispositivos são conectados em forma de círculo, com o tráfego de dados fluindo por um caminho unidirecional.",
      },
      {
        id: 2,
        enunciado: "Em qual topologia todos os dispositivos são conectados por um único cabo principal?",
        alternativas: [
          { id: "a", texto: "Malha" },
          { id: "b", texto: "Estrela" },
          { id: "c", texto: "Barramento" },
          { id: "d", texto: "Ponto a ponto" },
        ],
        resposta: "c",
        explicacao:
          "📌 A topologia barramento utiliza um único cabo central para conectar todos os dispositivos. Os dados fluem ao longo desse cabo.",
      },
      {
        id: 3,
        enunciado: "A topologia com melhor confiabilidade e rotas alternativas é:",
        alternativas: [
          { id: "a", texto: "Estrela" },
          { id: "b", texto: "Malha" },
          { id: "c", texto: "Árvore" },
          { id: "d", texto: "Anel" },
        ],
        resposta: "b",
        explicacao:
          "📌 Na topologia em malha, todos os dispositivos se conectam entre si. Isso cria múltiplos caminhos, garantindo confiabilidade.",
      },
      {
        id: 4,
        enunciado: "A topologia mais usada no mercado por ser adaptável é:",
        alternativas: [
          { id: "a", texto: "Híbrida" },
          { id: "b", texto: "Estrela" },
          { id: "c", texto: "Árvore" },
          { id: "d", texto: "Malha" },
        ],
        resposta: "a",
        explicacao:
          "📌 A topologia híbrida combina duas ou mais topologias, aproveitando o que há de melhor em cada uma. É a mais usada no mercado.",
      },
      {
        id: 5,
        enunciado: "Qual topologia depende de um único hub central e permite fácil diagnóstico de falhas?",
        alternativas: [
          { id: "a", texto: "Barramento" },
          { id: "b", texto: "Estrela" },
          { id: "c", texto: "Anel" },
          { id: "d", texto: "Malha" },
        ],
        resposta: "b",
        explicacao:
          "📌 Nessa topologia, todos os dispositivos se conectam a um ponto central (hub ou switch), formando um formato de estrela.",
      },
      {
        id: 6,
        enunciado: "Um problema comum nas topologias Estrela e Árvore é:",
        alternativas: [
          { id: "a", texto: "Alto custo de manutenção" },
          { id: "b", texto: "Dificuldade em adicionar novos dispositivos" },
          { id: "c", texto: "Falha no hub central afeta toda a rede" },
          { id: "d", texto: "Lentidão no tráfego por muitos cabos" },
        ],
        resposta: "c",
        explicacao:
          "📌 Tanto na estrela quanto na árvore, a dependência do hub central é uma vulnerabilidade: se ele falhar, a rede cai.",
      },
      {
        id: 7,
        enunciado: " Qual das topologias não é recomendada para redes corporativas grandes?:",
        alternativas: [
          { id: "a", texto: "Ponto a ponto" },
          { id: "b", texto: "Estrela" },
          { id: "c", texto: "Árvore" },
          { id: "d", texto: "Híbrida" },
        ],
        resposta: "a",
        explicacao:
          "📌 A ponto a ponto conecta apenas dois dispositivos diretamente. É simples e usada em ambientes domésticos ou de pequeno porte.",
      },
      {
        id: 8,
        enunciado: " Na topologia Barramento, se o cabo principal falhar:",
        alternativas: [
          { id: "a", texto: "A rede continua funcionando com rotas alternativas" },
          { id: "b", texto: "Nada acontece" },
          { id: "c", texto: "A rede para totalmente" },
          { id: "d", texto: "Os pacotes são redirecionados pelo hub" },
        ],
        resposta: "c",
        explicacao:
          "📌 Na topologia barramento, se o cabo central falhar, toda a rede é afetada, pois todos os dados passam por ele.",
      },
      {
        id: 9,
        enunciado: "A topologia que lembra galhos e tem hierarquia é a:",
        alternativas: [
          { id: "a", texto: "Estrela" },
          { id: "b", texto: "Árvore" },
          { id: "c", texto: "Anel" },
          { id: "d", texto: "Malha" },
        ],
        resposta: "b",
        explicacao:
          "📌 A topologia em árvore organiza os dispositivos em estrutura hierárquica, semelhante a galhos de uma árvore.",
      },
      {
        id: 10,
        enunciado: "Uma das desvantagens da topologia Malha é:",
        alternativas: [
          { id: "a", texto: "Baixa velocidade" },
          { id: "b", texto: "Alta vulnerabilidade a falhas" },
          { id: "c", texto: "Complexidade e custo alto de instalação" },
          { id: "d", texto: "Uso exclusivo de Wi-Fi" },
        ],
        resposta: "c",
        explicacao:
          "📌 A topologia malha exige muitos cabos e conexões, o que encarece e torna complexa a instalação e manutenção.",
      },
    ],
  },
  {
    id: "4",
    titulo: "Tipos de Cabos de Rede",
    descricao: "Tipos de Cabos de Rede",
    numQuestoes: 10,
    duracao: "40 minutos",
    duracaoEmSegundos: 2400,
    nivel: "Difícil",
    topicos: ["Leis de Newton", "Cinemática", "Dinâmica", "Energia", "Trabalho"],
    tentativas: 1,
    mediaAcertos: 1,
    questoes: [
      {
        id: 1,
        enunciado: "Qual foi o primeiro tipo de cabo criado, ainda na década de 1930?",
        alternativas: [
          { id: "a", texto: "Fibra óptica." },
          {
            id: "b",
            texto:
              "Coaxial.",
          },
          { id: "c", texto: "Par trançado." },
          {
            id: "d",
            texto: "Wireless.",
          },
        ],
        resposta: "b",
        explicacao:
          "📌 O cabo coaxial foi inventado na década de 1930. É um dos mais antigos meios de transmissão de sinais.",
      },
      {
        id: 2,
        enunciado:
          "O cabo coaxial é mais comumente utilizado para:",
        alternativas: [
          { id: "a", texto: "Backbones de internet" },
          { id: "b", texto: "Redes de longa distância" },
          { id: "c", texto: "TV a cabo e áudio" },
          { id: "d", texto: "Servidores de data center" },
        ],
        resposta: "c",
        explicacao:
          "📌 Cabos coaxiais são amplamente usados para TV por assinatura, ligações de som e antenas de rádio/TV.",
      },
      {
        id: 3,
        enunciado: "Uma desvantagem do cabo coaxial é:",
        alternativas: [
          { id: "a", texto: "Alta velocidade" },
          { id: "b", texto: "Suporte a múltiplos sinais simultâneos" },
          { id: "c", texto: "Limite de 10 Mbps e conexão com terminais especiais" },
          { id: "d", texto: "Compatibilidade com fibra óptica" },
        ],
        resposta: "c",
        explicacao:
          "📌 O coaxial tem baixa taxa de transmissão e exige conectores especiais, o que limita seu uso em redes modernas.",
      },
      {
        id: 4,
        enunciado:
          " O cabo de par trançado é identificado pelo uso de:",
        alternativas: [
          { id: "a", texto: "Fibra de vidro" },
          { id: "b", texto: "Conector RJ-45 e Ethernet" },
          { id: "c", texto: "Conector HDMI" },
          { id: "d", texto: "Fios coaxiais soldados" },
        ],
        resposta: "c",
        explicacao:
          "📌 O cabo de par trançado utiliza o conector RJ-45 e é o padrão mais comum para redes Ethernet locais.",
      },
      {
        id: 5,
        enunciado:
          " Qual tipo de cabo é o principal para redes locais (LAN) desde os anos 1990?",
        alternativas: [
          { id: "a", texto: "Fibra óptica" },
          { id: "b", texto: "Cabo coaxial" },
          { id: "c", texto: "Par trançado" },
          { id: "d", texto: "HDMI" },
        ],
        resposta: "c",
        explicacao:
          "📌 Desde os anos 1990, o par trançado é o principal tipo de cabeamento utilizado em redes LAN.",
      },
      {
        id: 6,
        enunciado: "A fibra óptica transmite dados por meio de:",
        alternativas: [
          { id: "a", texto: "Corrente elétrica" },
          { id: "b", texto: "Ondas de rádio" },
          { id: "c", texto: "Pulsos de luz" },
          { id: "d", texto: "Sinais analógicos" }
        ],
        resposta: "c",
        explicacao: "📌 A fibra óptica transmite dados por meio de luz, que se propaga internamente pelo núcleo da fibra.",
      },
      {
        id: 7,
        enunciado: "A Lei de Snell se refere a:",
        alternativas: [
          { id: "a", texto: "Compressão de dados" },
          { id: "b", texto: "Protocolo de rede" },
          { id: "c", texto: "Reflexão da luz dentro da fibra óptica" },
          { id: "d", texto: "Instalação de cabos submarinos" }
        ],
        resposta: "c",
        explicacao: "📌 O princípio da reflexão total interna, segundo a Lei de Snell, permite que a luz permaneça dentro da fibra."
      },
      {
        id: 8,
        enunciado: "Qual característica é típica da fibra óptica multimodo?",
        alternativas: [
          { id: "a", texto: "Núcleo de 9 µm" },
          { id: "b", texto: "Uso exclusivo de laser" },
          { id: "c", texto: "Ideal para longas distâncias" },
          { id: "d", texto: "Núcleo maior e maior dispersão modal" }
        ],
        resposta: "d",
        explicacao: "A fibra óptica multimodo possui um núcleo maior (geralmente 50 ou 62,5 µm), o que permite múltiplos modos de luz, mas resulta em maior dispersão modal, limitando sua eficiência em longas distâncias."
      },
      {
        id: 9,
        enunciado: "A fibra monomodo é ideal para:",
        alternativas: [
          { id: "a", texto: "Redes domésticas simples" },
          { id: "b", texto: "Curta distância entre computadores" },
          { id: "c", texto: "Conexões entre andares de um prédio" },
          { id: "d", texto: "Longas distâncias com cabos submarinos" }
        ],
        resposta: "d",
        explicacao: "📌 A fibra monomodo, por ter apenas um caminho de luz, é ideal para transmissões em longas distâncias (como cabos oceânicos)."
      },
      {
        id: 10,
        enunciado: "Uma desvantagem da fibra monomodo é:",
        alternativas: [
          { id: "a", texto: "Alta dispersão" },
          { id: "b", texto: "Baixa velocidade" },
          { id: "c", texto: "Alto custo de fabricação e instalação" },
          { id: "d", texto: "Uso limitado a pequenas redes" }
        ],
        resposta: "c",
        explicacao: "📌 Apesar da eficiência, a fibra monomodo é mais cara para fabricar e instalar do que a multimodo ou o par trançado."
      }
    ],
  },
  {
    id: "5",
    titulo: "Topologias de Redes – Parte 2/2",
    descricao: "Questões sobre a prova",
    numQuestoes: 5,
    duracao: "45 minutos",
    duracaoEmSegundos: 2700,
    nivel: "Difícil",
    topicos: ["Hidrocarbonetos", "Funções Orgânicas", "Isomeria", "Reações Orgânicas", "Polímeros"],
    tentativas: 1,
    mediaAcertos: 1,
    questoes: [
      {
        id: 1,
        enunciado: "A topologia física se refere a:",
        alternativas: [
          { id: "a", texto: "Lógica da transmissão dos dados" },
          { id: "b", texto: "Frequência de onda" },
          { id: "c", texto: "Disposição física dos cabos e dispositivos" },
          { id: "d", texto: "Velocidade da internet" }
        ],
        resposta: "c",
        explicacao: "📌 A topologia física se refere à disposição física dos cabos e dispositivos em uma rede, como a organização dos componentes de hardware."
      },
      {
        id: 2,
        enunciado: "A topologia lógica trata de:",
        alternativas: [
          { id: "A", texto: "O comprimento dos cabos" },
          { id: "B", texto: "A organização do tráfego de dados" },
          { id: "C", texto: "A distância entre dispositivos" },
          { id: "D", texto: "O número de portas do switch" }
        ],
        resposta: "B",
        explicacao: "📌 A topologia lógica trata da organização do tráfego de dados, ou seja, a forma como os dados fluem na rede, independentemente da disposição física."
      },
      {
        id: 3,
        enunciado: "Um sinal é:",
        alternativas: [
          { id: "A", texto: "Um pacote de dados criptografado" },
          { id: "B", texto: "Uma conexão direta de rede" },
          { id: "C", texto: "Uma sequência de estados que codifica uma mensagem" },
          { id: "D", texto: "Uma luz de alerta do roteador" }
        ],
        resposta: "C",
        explicacao: "📌 Um sinal é uma sequência de estados que codifica uma mensagem, como pulsos elétricos ou ondas, usados para transmitir informações em uma rede."
      },
      {
        id: 4,
        enunciado: "O ar é considerado um meio de transmissão porque:",
        alternativas: [
          { id: "A", texto: "Tem partículas visíveis" },
          { id: "B", texto: "Transmite sinais eletromagnéticos" },
          { id: "C", texto: "Pode ser pressurizado" },
          { id: "D", texto: "Pode ser substituído por cabos" }
        ],
        resposta: "B",
        explicacao: "📌 O ar é considerado um meio de transmissão porque transmite sinais eletromagnéticos, como ondas de rádio ou Wi-Fi, permitindo a comunicação sem fio."
      },
      {
        id: 5,
        enunciado: "No modo Simplex, a transmissão de dados:",
        alternativas: [
          { id: "A", texto: "Vai e volta simultaneamente" },
          { id: "B", texto: "Acontece entre os dois lados" },
          { id: "C", texto: "Ocorre em uma única direção" },
          { id: "D", texto: "Requer um switch inteligente" }
        ],
        resposta: "C",
        explicacao: "📌 No modo Simplex, a transmissão de dados ocorre em uma única direção, como em um sistema de rádio ou TV, onde apenas um lado envia e o outro recebe."
      },
      {
        id: 6,
        enunciado: "Um exemplo de comunicação Half Duplex é:",
        alternativas: [
          { id: "A", texto: "Televisão" },
          { id: "B", texto: "WhatsApp" },
          { id: "C", texto: "Celular" },
          { id: "D", texto: "Walkie Talkie" }
        ],
        resposta: "D",
        explicacao: "📌 Um exemplo de comunicação Half Duplex é o Walkie Talkie, pois permite que apenas uma parte transmita por vez, enquanto a outra escuta, alternando entre envio e recebimento."
      },
      {
        id: 7,
        enunciado: "A transmissão Full Duplex permite:",
        alternativas: [
          { id: "A", texto: "Apenas o servidor enviar dados" },
          { id: "B", texto: "Envio e recebimento ao mesmo tempo" },
          { id: "C", texto: "Comunicação unidirecional" },
          { id: "D", texto: "Compartilhamento de arquivos físicos" }
        ],
        resposta: "B",
        explicacao: "📌 A transmissão Full Duplex permite envio e recebimento ao mesmo tempo, como em chamadas telefônicas, onde ambas as partes podem falar e ouvir simultaneamente."
      },
      {
        id: 8,
        enunciado: "O vácuo não transmite som porque:",
        alternativas: [
          { id: "A", texto: "A luz bloqueia as ondas" },
          { id: "B", texto: "Não há um meio físico para propagar" },
          { id: "C", texto: "Os sinais são muito fracos" },
          { id: "D", texto: "O som é criptografado" }
        ],
        resposta: "B",
        explicacao: "📌 O vácuo não transmite som porque não há um meio físico para propagar, já que o som precisa de um meio material, como ar, água ou sólidos, para se propagar."
      },
      {
        id: 9,
        enunciado: "Um exemplo claro de transmissão Simplex é:",
        alternativas: [
          { id: "A", texto: "Chamada de vídeo" },
          { id: "B", texto: "Rádio" },
          { id: "C", texto: "E-mail" },
          { id: "D", texto: "Rede Wi-Fi" }
        ],
        resposta: "B",
        explicacao: "📌 Um exemplo claro de transmissão Simplex é o rádio, pois a comunicação ocorre em uma única direção, do transmissor para o receptor, sem interação de volta."
      },
      {
        id: 10,
        enunciado: "Em uma rede Full Duplex, a banda é:",
        alternativas: [
          { id: "A", texto: "Usada por apenas um dispositivo" },
          { id: "B", texto: "Dividida em partes iguais para cada sentido" },
          { id: "C", texto: "Transferida apenas de um lado" },
          { id: "D", texto: "Reduzida para metade da velocidade" }
        ],
        resposta: "B",
        explicacao: "📌 Em uma rede Full Duplex, a banda é dividida em partes iguais para cada sentido, permitindo que a transmissão e recepção ocorram simultaneamente sem perda de desempenho."
      }
    ],
  },
  {
    id: "6",
    titulo: "Redes Sem Fio",
    descricao: "Questões sobre Redes Sem Fio",
    numQuestoes: 8,
    duracao: "35 minutos",
    duracaoEmSegundos: 2100,
    nivel: "Médio",
    topicos: ["Geopolítica", "Clima", "Relevo", "População", "Recursos Naturais"],
    tentativas: 1,
    mediaAcertos: 1,
    questoes: [
      {
        id: 1,
        enunciado: "Qual é a principal vantagem das redes sem fio?",
        alternativas: [
          { id: "A", texto: "Alta complexidade" },
          { id: "B", texto: "Redução da largura de banda" },
          { id: "C", texto: "Mobilidade e flexibilidade" },
          { id: "D", texto: "Uso exclusivo em áreas industriais" }
        ],
        resposta: "C",
        explicacao: "A principal vantagem das redes sem fio é a mobilidade e flexibilidade, permitindo que dispositivos se conectem sem a necessidade de cabos, facilitando o uso em diversos cenários."
      },
      {
        id: 2,
        enunciado: "O RFID é mais utilizado para:",
        alternativas: [
          { id: "A", texto: "Streaming de vídeo" },
          { id: "B", texto: "Comunicação por voz" },
          { id: "C", texto: "Identificação automática de objetos" },
          { id: "D", texto: "Transmissão de arquivos grandes" }
        ],
        resposta: "C",
        explicacao: "📌 A tecnologia RFID (Radio Frequency Identification) identifica objetos por meio de etiquetas que emitem sinais de rádio."
      },
      {
        id: 3,
        enunciado: "O NFC possui alcance de:",
        alternativas: [
          { id: "A", texto: "1 a 5 metros" },
          { id: "B", texto: "4 a 10 centímetros" },
          { id: "C", texto: "1 quilômetro" },
          { id: "D", texto: "10 a 20 metros" }
        ],
        resposta: "B",
        explicacao: "📌 O NFC possui alcance de 4 a 10 centímetros, sendo ideal para comunicações de curta distância, como pagamentos por aproximação."
      },
      {
        id: 4,
        enunciado: "A frequência padrão utilizada pelo NFC é:",
        alternativas: [
          { id: "A", texto: "2,4 GHz" },
          { id: "B", texto: "5 GHz" },
          { id: "C", texto: "13,56 MHz" },
          { id: "D", texto: "640 kbps" }
        ],
        resposta: "C",
        explicacao: "📌 Essa é a frequência padrão em que dispositivos NFC operam, garantindo comunicação segura em curta distância."
      },
      {
        id: 5,
        enunciado: "O Bluetooth é comumente utilizado para:",
        alternativas: [
          { id: "A", texto: "Comunicação entre servidores de rede" },
          { id: "B", texto: "Conexão de dispositivos pessoais próximos" },
          { id: "C", texto: "Controle de drones a distância" },
          { id: "D", texto: "Instalação de câmeras industriais" }
        ],
        resposta: "B",
        explicacao: "📌 O Bluetooth foi criado para conectar dispositivos de uso pessoal a curta distância, como fones de ouvido, caixas de som e relógios."
      },
      {
        id: 6,
        enunciado: "O ZigBee se destaca por:",
        alternativas: [
          { id: "A", texto: "Ser de longo alcance" },
          { id: "B", texto: "Ser usado em equipamentos de som" },
          { id: "C", texto: "Alta potência e curto tempo de vida" },
          { id: "D", texto: "Baixo consumo de energia e uso em IoT" }
        ],
        resposta: "D",
        explicacao: "📌 O ZigBee é voltado para a Internet das Coisas, ideal para dispositivos de baixo consumo como lâmpadas inteligentes e sensores."
      },
      {
        id: 7,
        enunciado: "As duas faixas de frequência do Wi-Fi padrão são:",
        alternativas: [
          { id: "A", texto: "1,2 GHz e 4,5 GHz" },
          { id: "B", texto: "13,56 MHz e 900 MHz" },
          { id: "C", texto: "2,4 GHz e 5 GHz" },
          { id: "D", texto: "3 GHz e 7 GHz" }
        ],
        resposta: "C",
        explicacao: "📌 As redes Wi-Fi modernas funcionam nessas duas faixas: 2.4 GHz para maior alcance, e 5 GHz para maior velocidade."
      },
      {
        id: 8,
        enunciado: "Qual padrão define os protocolos do Wi-Fi?",
        alternativas: [
          { id: "A", texto: "IEEE 1394" },
          { id: "B", texto: "IEEE 802.11" },
          { id: "C", texto: "IEEE 1000Base-T" },
          { id: "D", texto: "IEEE 802.3" }
        ],
        resposta: "B",
        explicacao: "📌 Essa é a família de protocolos responsável por padronizar o funcionamento das redes Wi-Fi em todo o mundo."
      }
    ],
  },
]

// Função para obter um simulado pelo ID
export const getSimuladoById = (id: string): Simulado | undefined => {
  return simuladosData.find((simulado) => simulado.id === id)
}
