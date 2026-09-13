# Portfólio — Nicolas R. Martins

Portfólio profissional de Nicolas R. Martins, estudante de Análise e Desenvolvimento de Sistemas na FIAP e candidato a estágio em Desenvolvimento de Software. A página apresenta perfil, objetivo, competências, projetos públicos, experiências, formação e canais de contato.

## Tecnologias

- React 19 e TypeScript
- Vite
- Tailwind CSS 4
- Framer Motion
- Lucide React
- Oxlint

## Requisitos

- Node.js 20.19+ ou 22.12+
- npm 10+

## Execução

```bash
npm install
npm run dev
```

O endereço local será informado pelo Vite no terminal.

## Validação e build

```bash
npm run lint
npm run typecheck
npm run build
npm run preview
```

## Estrutura principal

```text
src/
├── components/       # Seções e componentes de interface
├── data/portfolio.ts # Fonte única de conteúdo e textos acessíveis
├── types/index.ts    # Tipos da camada de dados
├── App.tsx           # Composição da página
├── main.tsx          # Entrada da aplicação
└── styles.css        # Tailwind e estilos globais
```

## Atualização do conteúdo

Todo texto visível, metadado, link e rótulo acessível fica em `src/data/portfolio.ts`. Atualize esse arquivo para alterar perfil, navegação, projetos, experiências, competências, certificações ou contato. Os tipos correspondentes ficam em `src/types/index.ts`.

Links `repoUrl` e `demoUrl` são opcionais. Para cadastrar uma demonstração, adicione `demoUrl`, `demoLabel` e `demoAriaLabel` ao projeto. Se esses campos não existirem, o botão não é renderizado.

## Currículo

O currículo não acompanha este repositório. Para adicioná-lo:

1. Coloque o PDF real em `src/assets/curriculo-nicolas-martins.pdf`.
2. Importe o arquivo em `src/data/portfolio.ts` com `import resumeUrl from '../assets/curriculo-nicolas-martins.pdf?url'`.
3. Adicione `resumeUrl` ao objeto `personal`.

Sem a propriedade opcional `personal.resumeUrl`, o botão de download permanece oculto.

## Observações

- Não há backend ou formulário de envio simulado; o contato usa links reais e `mailto`.
- O site utiliza exclusivamente o tema escuro.
- Animações respeitam `prefers-reduced-motion`.
