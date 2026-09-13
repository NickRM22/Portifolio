import type { PortfolioData } from '../types/index.ts'

export const portfolioData = {
  seo: {
    title: 'Nicolas R. Martins | Desenvolvimento de Software e Java',
    description:
      'Portfólio de Nicolas R. Martins, estudante de Análise e Desenvolvimento de Sistemas na FIAP com foco em Java e Desenvolvimento de Software.',
    themeColor: '#0D1117',
    openGraph: {
      type: 'website',
      title: 'Nicolas R. Martins | Desenvolvimento de Software e Java',
      description:
        'Projetos, competências e trajetória de um estudante de ADS em busca de estágio em Desenvolvimento de Software.',
    },
  },
  personal: {
    name: 'Nicolas R. Martins',
    initials: 'NRM',
    age: 21,
    birthYear: 2005,
    location: 'São Paulo/SP',
    email: 'nick.rodrigues2005@gmail.com',
    githubUrl: 'https://github.com/NickRM22',
    linkedinUrl:
      'https://www.linkedin.com/in/nicolas-rodrigues-martins-126607360/',
  },
  navigation: {
    ariaLabel: 'Navegação principal',
    items: [
      { label: 'Sobre', href: '#sobre' },
      { label: 'Competências', href: '#competencias' },
      { label: 'Projetos', href: '#projetos' },
      { label: 'Experiência', href: '#experiencia' },
      { label: 'Formação', href: '#formacao' },
    ],
    contactCta: { label: 'Contato', href: '#contato' },
  },
  hero: {
    eyebrow: 'Olá, eu sou',
    titleLines: ['Nicolas', 'Martins'],
    titleAriaLabel: 'Nicolas Martins',
    subtitle:
      'Estudante de ADS e desenvolvedor fullstack.',
    primaryCta: { label: 'Ver projetos', href: '#projetos' },
    secondaryCta: { label: 'Entrar em contato', href: '#contato' },
    resumeCta: 'Baixar currículo',
    resumeAriaLabel: 'Baixar currículo de Nicolas R. Martins em PDF',
    codeLabel: 'foco_atual',
    codeValue: 'java + fundamentos',
    visualAriaLabel: 'Foto de Nicolas R. Martins',
  },
  about: {
    eyebrow: '01 / Sobre',
    title: 'Fundamentos sólidos e vontade de construir.',
    description:
      'Uma trajetória em formação, conectando estudo, prática e melhoria de processos.',
    paragraphs: [
      'Gosto de entender como as coisas funcionam e transformar esse aprendizado em código. Nos meus projetos, exploro problemas do cotidiano para praticar a construção de soluções organizadas e claras.',
      'Minha vivência profissional trouxe atenção aos detalhes e uma visão prática de como a tecnologia pode facilitar o trabalho das pessoas. Quero levar essa perspectiva para os próximos desafios de desenvolvimento.',
    ],
    objectiveLabel: 'Próximo passo',
    objective: 'Estágio em Desenvolvimento de Software',
    objectiveDescription:
      'Contribuir em projetos reais e evoluir com a orientação de profissionais experientes.',
    locationLabel: 'Localização',
  },
  skills: {
    eyebrow: '02 / Competências',
    title: 'Tecnologias e fundamentos em desenvolvimento.',
    description:
      'Conhecimentos construídos em disciplinas, cursos, projetos próprios e rotina profissional.',
    categories: [
      {
        title: 'Back-end e fundamentos',
        description: 'Principal foco de estudo e prática.',
        icon: 'code',
        items: [
          'Java',
          'Orientação a Objetos',
          'Lógica de Programação',
          'Estruturas de Dados',
          'Collections',
          'HashMap',
          'Tratamento de Exceções',
          'JDBC',
        ],
      },
      {
        title: 'Desenvolvimento Web',
        description: 'Interfaces e fundamentos da web.',
        icon: 'globe',
        items: [
          'HTML5',
          'CSS3',
          'JavaScript ES6+',
          'React — em evolução',
          'Tailwind CSS',
        ],
      },
      {
        title: 'Banco de Dados e Dados',
        description: 'Estruturação, consulta e organização.',
        icon: 'database',
        items: [
          'SQL',
          'Oracle SQL',
          'Modelagem Relacional',
          'Google Sheets Avançado',
        ],
      },
      {
        title: 'Automação e ferramentas',
        description: 'Ambiente de trabalho e produtividade.',
        icon: 'workflow',
        items: [
          'n8n',
          'Git',
          'GitHub',
          'Linux — Ubuntu e Fedora',
          'VS Code',
          'IntelliJ IDEA',
          'Lovable',
          'Claude Code',
          'Gamma',
        ],
      },
    ],
  },
  projects: {
    eyebrow: '03 / Projetos',
    title: 'Aprendizado transformado em código.',
    description:
      'Projetos públicos que registram a evolução em Java, orientação a objetos e lógica de programação.',
    items: [
      {
        number: '01',
        name: 'Firefly / DisasterNet',
        image: 'images/projects/firefly.svg',
        imageAlt: 'Ilustração de uma rota de resgate em uma região montanhosa',
        description:
          'Aplicação Java que modela uma operação de resgate em cenário de desastre natural. Reúne dados de missão, região, vítimas e equipe para calcular risco, pontuação e penalidades, com validações de entrada.',
        technologies: [
          'Java',
          'Programação Orientada a Objetos',
          'Estruturas de Dados',
        ],
        icon: 'flame',
        repoUrl: 'https://github.com/NickRM22/Java-Firefly',
        repoLabel: 'Ver repositório',
        repoAriaLabel:
          'Ver repositório do projeto Firefly no GitHub, abre em nova aba',
      },
      {
        number: '02',
        name: 'Lista de Tarefas',
        image: 'images/projects/tasks.svg',
        imageAlt: 'Ilustração de uma lista com tarefas concluídas e pendentes',
        description:
          'Aplicação de console para criar, listar e concluir tarefas. O código separa exibição, gerenciamento e modelo de dados, usando HashMap para organizar os registros e validações de entrada.',
        technologies: [
          'Java',
          'Collections',
          'HashMap',
          'Programação Orientada a Objetos',
        ],
        icon: 'list',
        repoUrl: 'https://github.com/NickRM22/Lista-de-Tarefas',
        repoLabel: 'Ver repositório',
        repoAriaLabel:
          'Ver repositório do projeto Lista de Tarefas no GitHub, abre em nova aba',
      },
      {
        number: '03',
        name: 'Montagem de PC — Simulação',
        image: 'images/projects/pc.svg',
        imageAlt: 'Ilustração de um computador com monitor e gabinete',
        description:
          'Projeto em Java que modela um computador e seus componentes por meio de classes. Aplica composição e encapsulamento para reunir e exibir especificações de processador, memória, fonte e armazenamento.',
        technologies: ['Java', 'Programação Orientada a Objetos'],
        icon: 'cpu',
        repoUrl: 'https://github.com/NickRM22/Projeto-Montagem-Pc',
        repoLabel: 'Ver repositório',
        repoAriaLabel:
          'Ver repositório do projeto Montagem de PC no GitHub, abre em nova aba',
      },
      {
        number: '04',
        name: 'Adega Tech',
        image: 'images/projects/adega.svg',
        imageAlt: 'Ilustração de um terminal Python com menus de tecnologia',
        description:
          'Aplicação interativa de console em Python que organiza informações e curiosidades sobre linguagens de programação, tecnologias, inteligência artificial e hardware em menus navegáveis.',
        technologies: ['Python', 'Lógica de Programação'],
        icon: 'terminal',
        repoUrl: 'https://github.com/NickRM22/Adega-Tech',
        repoLabel: 'Ver repositório',
        repoAriaLabel:
          'Ver repositório do projeto Adega Tech no GitHub, abre em nova aba',
      },
    ],
  },
  experience: {
    eyebrow: '04 / Experiência',
    title: 'Responsabilidade, dados e colaboração.',
    description:
      'Experiências que fortalecem organização, comunicação e visão de processos.',
    items: [
      {
        company: 'Sanar Cetrus',
        role: 'Jovem Aprendiz em Planejamento',
        period: 'Junho/2026 – Presente',
        startDate: '2026-06',
        activities: [
          'Apoio operacional e às rotinas do time de planejamento acadêmico e estratégico.',
          'Transferência, conferência e organização de dados entre sistemas internos e Google Sheets.',
          'Suporte cadastral de novos cursos e turmas de pós-graduação.',
          'Apoio na criação e manutenção de dashboards.',
          'Apoio em automações de processos operacionais utilizando n8n.',
          'Comunicação contínua com docentes e equipes multifuncionais.',
        ],
        transferableSkills: ['Dados', 'Processos', 'n8n', 'Comunicação'],
      },
      {
        company: 'Livraria Leitura',
        role: 'Assistente de Loja',
        period: 'Fevereiro/2026 – Maio/2026',
        startDate: '2026-02',
        endDate: '2026-05',
        activities: [
          'Atendimento ao cliente e resolução de problemas.',
          'Operação de caixa, incluindo abertura, fechamento e conferência de valores.',
          'Organização de estoque e reposição de produtos.',
          'Participação na rotina comercial e no cumprimento de metas de vendas.',
        ],
        transferableSkills: [
          'Atendimento',
          'Organização',
          'Responsabilidade',
          'Trabalho em equipe',
        ],
      },

    ],
  },
  education: {
    eyebrow: '05 / Formação',
    title: 'Base acadêmica e aprendizado contínuo.',
    description:
      'Formação superior em andamento, complementada por cursos focados em tecnologia.',
    degree: 'Análise e Desenvolvimento de Sistemas',
    institution: 'FIAP',
    statusLabel: 'Situação',
    status: '2º semestre em 2026',
    certificationsTitle: 'Certificações e cursos',
  },
  certifications: [
    { name: 'Java Development', issuer: 'FIAP Nano Courses' },
    { name: 'Lógica de Programação', issuer: 'DIO' },
    {
      name: 'Linguagem de Programação Python',
      issuer: 'Fundação Bradesco',
    },
    {
      name: 'Fundamentos de TI: Hardware e Software',
      issuer: 'Fundação Bradesco',
    },
    { name: 'Projetos de Sistemas de TI', issuer: 'Fundação Bradesco' },
    {
      name: 'Criando Minha Primeira Aplicação em Python',
      issuer: 'Alura',
    },
  ],
  contact: {
    eyebrow: '06 / Contato',
    title: 'Vamos conversar sobre uma oportunidade?',
    description:
      'Entre em contato por e-mail ou acompanhe meu trabalho nas redes abaixo.',
    methods: [
      {
        label: 'E-mail',
        value: 'nick.rodrigues2005@gmail.com',
        url: 'mailto:nick.rodrigues2005@gmail.com',
        ariaLabel: 'Enviar e-mail para Nicolas R. Martins',
        icon: 'mail',
        external: false,
      },
      {
        label: 'GitHub',
        value: '@NickRM22',
        url: 'https://github.com/NickRM22',
        ariaLabel: 'Visitar o GitHub de Nicolas R. Martins, abre em nova aba',
        icon: 'github',
        external: true,
      },
      {
        label: 'LinkedIn',
        value: 'Nicolas Rodrigues Martins',
        url: 'https://www.linkedin.com/in/nicolas-rodrigues-martins-126607360/',
        ariaLabel: 'Visitar o LinkedIn de Nicolas R. Martins, abre em nova aba',
        icon: 'linkedin',
        external: true,
      },
    ],
    emailCta: 'Enviar e-mail',
    emailAriaLabel: 'Enviar e-mail para Nicolas R. Martins',
    copyButton: 'Copiar e-mail',
    copyAriaLabel: 'Copiar endereço de e-mail',
    copySuccess: 'E-mail copiado!',
    copyError: 'Não foi possível copiar. Selecione o endereço acima.',
  },
  footer: {
    note: 'Desenvolvimento de Software • Java',
    copyrightSymbol: '©',
    year: 2026,
    owner: 'Nicolas R. Martins.',
    rights: 'Todos os direitos reservados.',
    backToTop: 'Voltar ao topo',
    backToTopAriaLabel: 'Voltar ao início da página',
  },
  ui: {
    skipToContent: 'Pular para o conteúdo',
    brandAriaLabel: 'Página inicial de Nicolas R. Martins',
    openMenu: 'Abrir menu de navegação',
    closeMenu: 'Fechar menu de navegação',
    mobileNavigationId: 'navegacao-mobile',
    externalLinkHint: 'Abre em uma nova aba',
    currentPageLabel: 'Seção atual',
  },
} as const satisfies PortfolioData
