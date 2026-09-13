# Bonequinho em pixel art

Componente React + TypeScript. Dependências: react e framer-motion.

## Instalação

1. Instale framer-motion: `npm install framer-motion`.
2. Copie PixelMascot.tsx e PixelMascot.css para a mesma pasta de componentes.
3. Copie public/images/mascot/nicolas-sprites.png para a pasta pública da aplicação.
4. Use uma seção com a classe section-with-mascot:

```tsx
import { PixelMascot } from './components/PixelMascot'

export function Exemplo() {
  return (
    <section className="section-with-mascot">
      <h2>Meus projetos</h2>
      <p>Conteúdo da seção...</p>
      <PixelMascot section="projetos" />
    </section>
  )
}
```

## Ações implementadas

- `sobre`: caminha durante 8 segundos e descansa 1 segundo antes de voltar; leve balanço dos passos. Atravessa paredes decorativas, sem física ou colisão com cards.
- `competencias`: pula corda em ciclos de 720 ms, com salto sincronizado e descanso entre séries.
- `projetos`: alterna movimentos no Nintendo DS com uma reação breve e uma pausa.
- `formacao`: alterna digitação, leitura e descanso no notebook.

O controlador usa requestAnimationFrame, pausa fora da tela e em abas ocultas, e mantém a imagem original. Cada seção tem uma instância do personagem.

O tamanho da célula é 76 px em telas maiores e 64 px no celular. As animações pausam fora da área visível e respeitam prefers-reduced-motion. O personagem não recebe cliques nem aparece para leitores de tela.

A imagem possui fundo escuro opaco e se integra ao site escuro por mix-blend-mode: lighten. Não é um PNG transparente. A folha possui quatro colunas e quatro linhas, uma linha por ação. Para hospedagem em subdiretório, ajuste o caminho da imagem no componente.

As ideias de montar robô, mexer em servidor, ler livro e enviar avião de papel ainda não estão implementadas.
