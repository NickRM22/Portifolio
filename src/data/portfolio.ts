import type { PortfolioData } from '../types/index.ts'

export const portfolioData = {
  seo: {
    title: 'Nicolas R. Martins | Desenvolvimento de Software e Java',
    description:
      'Portfólio de Nicolas R. Martins, estudante de Análise e Desenvolvimento de Sistemas na FIAP com foco em Java e Desenvolvimento de Software.',
    themeColorDark: '#0D1117',
    themeColorLight: '#F8FAFC',
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
    titleLines: ['Nicolas R.', 'Martins.'],
    titleAriaLabel: 'Nicolas R. Martins.',
    subtitle:
      'Estudante de ADS com foco em Java e Desenvolvimento de Software.',
    highlight: 'Buscando estágio em Desenvolvimento de Software.',
    primaryCta: { label: 'Ver projetos', href: '#projetos' },
    secondaryCta: { label: 'Entrar em contato', href: '#contato' },
    resumeCta: 'Baixar currículo',
    resumeAriaLabel: 'Baixar currículo de Nicolas R. Martins em PDF',
    codeLabel: 'foco_atual',
    codeValue: 'java + fundamentos',
    visualAriaLabel:
      'Composição abstrata com o monograma NRM, representando desenvolvimento de software',
  },
  about: {
    eyebrow: '01 / Sobre',
    title: 'Fundamentos sólidos e vontade de construir.',
    description:
      'Uma trajetória em formação, conectando estudo, prática e melhoria de processos.',
    paragraphs: [
      'Sou estudante de Análise e Desenvolvimento de Sistemas na FIAP, atualmente no 2º semestre, com foco no ecossistema Java e nos fundamentos que sustentam um software bem construído.',
      'Venho desenvolvendo conhecimentos em lógica de programação, orientação a objetos, estruturas de dados, SQL, desenvolvimento web e Linux. No trabalho, também tenho contato com dados, dashboards e automações de processos.',
      'Busco transformar o aprendizado acadêmico em experiência prática, contribuindo com organização, curiosidade técnica e disposição para evoluir em equipe.',
    ],
    facts: [
      { label: 'Formação', value: 'ADS • FIAP' },
      { label: 'Momento acadêmico', value: '2º semestre em 2026' },
      { label: 'Conclusão prevista', value: 'Dezembro de 2027' },
      { label: 'Localização', value: 'São Paulo/SP' },
    ],
  },
  careerGoal: {
    eyebrow: '02 / Objetivo',
    title: 'Próximo passo: aprender em projetos reais.',
    description:
      'Uma oportunidade para aplicar fundamentos, colaborar com profissionais experientes e crescer com responsabilidade.',
    quote:
      'Busco uma oportunidade de estágio em Desenvolvimento de Software na qual eu possa aplicar meus conhecimentos em Java, Desenvolvimento Web, SQL e Automação, participar de projetos reais e continuar evoluindo tecnicamente ao lado de profissionais experientes.',
    supportLabel: 'O que levo para o time',
    supportItems: [
      'Fundamentos de desenvolvimento em evolução contínua',
      'Organização e contato prático com dados',
      'Comunicação com equipes multifuncionais',
    ],
  },
  skills: {
    eyebrow: '03 / Competências',
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
    eyebrow: '04 / Projetos',
    title: 'Aprendizado transformado em código.',
    description:
      'Projetos públicos que registram a evolução em Java, orientação a objetos e lógica de programação.',
    items: [
      {
        number: '01',
        name: 'Firefly / DisasterNet',
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
    eyebrow: '05 / Experiência',
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
      {
        company: 'You BPO Tech',
        role: 'Consultor de Relacionamento',
        period: 'Novembro/2025 – Janeiro/2026',
        startDate: '2025-11',
        endDate: '2026-01',
        activities: [
          'Atendimento a clientes e esclarecimento de dúvidas.',
          'Prospecção ativa.',
          'Apresentação e negociação de serviços financeiros e cartões de crédito.',
        ],
        transferableSkills: ['Comunicação', 'Negociação', 'Escuta', 'Proatividade'],
      },
    ],
  },
  education: {
    eyebrow: '06 / Formação',
    title: 'Base acadêmica e aprendizado contínuo.',
    description:
      'Formação superior em andamento, complementada por cursos focados em tecnologia.',
    degreeLabel: 'Curso',
    degree: 'Análise e Desenvolvimento de Sistemas',
    institutionLabel: 'Instituição',
    institution: 'FIAP',
    statusLabel: 'Situação',
    status: '2º semestre em 2026',
    completionLabel: 'Conclusão prevista',
    completion: 'Dezembro de 2027',
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
    eyebrow: '07 / Contato',
    title: 'Vamos conversar sobre uma oportunidade?',
    description:
      'Estou disponível para oportunidades de estágio em Desenvolvimento de Software. Você pode entrar em contato por e-mail ou acompanhar meus projetos e trajetória profissional.',
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
    note: 'Projetado e desenvolvido com atenção aos detalhes.',
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
    activateLightTheme: 'Ativar tema claro',
    activateDarkTheme: 'Ativar tema escuro',
    externalLinkHint: 'Abre em uma nova aba',
    currentPageLabel: 'Seção atual',
  },
} as const satisfies PortfolioData
