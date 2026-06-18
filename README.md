# SoloForte — Pitch Deck

Apresentação em HTML/CSS/JS puro, estilo iOS, com fundo gradiente branco gelo → prata e títulos em azul petróleo.

## Estrutura de arquivos

```
soloforte-pitch/
├── index.html
├── styles.css
├── script.js
├── README.md
└── images/
    ├── logo.png                  ← Logo SoloForte (slides 1 e 16)
    ├── founder.jpg               ← Foto do Raudinei (slide 17)
    ├── slide-03-mapa.png         ← Screenshot do Mapa Inteligente
    ├── slide-04-agenda.png       ← Screenshot da Agenda Comercial
    ├── slide-05-carteira.png     ← Screenshot da Carteira de Mercado
    ├── slide-06-ocorrencias.png  ← Screenshot de Ocorrências de Campo
    ├── slide-07-clima.png        ← Screenshot da Inteligência Climática
    ├── slide-08-avaliacoes.png   ← Screenshot das Avaliações A/B
    ├── slide-09-roi.png          ← Screenshot do ROI Agrícola
    ├── slide-10-publicacao.png   ← Screenshot da Publicação de Resultados
    ├── slide-11-marketing.png    ← Screenshot do Marketing Técnico
    ├── slide-12-relatorios.png   ← Screenshot dos Relatórios Técnicos
    └── slide-15-modelo.png       ← Screenshot do Modelo de Negócio
```

## Como usar

1. Faça o upload dos 4 arquivos principais para um repositório GitHub.
2. Crie a pasta `images/` e adicione as screenshots do app com os nomes acima.
3. Ative o GitHub Pages no repositório (Settings → Pages → main branch).
4. Acesse `https://afonsoraudinei.github.io/<nome-do-repo>/`.

## Navegação

| Ação              | Como                                 |
|-------------------|--------------------------------------|
| Próximo slide     | `→`, `Espaço`, `PageDown`, swipe ←  |
| Slide anterior    | `←`, `PageUp`, swipe →              |
| Primeiro slide    | `Home`                               |
| Último slide      | `End`                                |
| Tela cheia        | `F`                                  |
| Link direto       | `#5` na URL pula para slide 5        |

## Recursos visuais

- **Gradiente de fundo**: branco gelo → prata claro
- **Títulos**: azul petróleo `#1B4965`
- **Cards**: glassmorphism iOS com bordas suaves
- **Transições**: fade + slide suave (0.6s, cubic-bezier)
- **Phone frame**: moldura iPhone realista com animação flutuante
- **Tipografia**: stack nativa Apple (`-apple-system`)
- **Responsivo**: funciona em mobile, tablet e desktop
- **Acessibilidade**: respeita `prefers-reduced-motion`

## Dicas para as screenshots

- **Formato ideal**: PNG, retrato (9:19.5 ou 9:16)
- **Resolução**: mínimo 540×1170px (para retina, 1080×2340px)
- **Conteúdo**: tire as screenshots no iPhone diretamente (sem a moldura — o site já adiciona)
- **Compressão**: passe pelo [tinypng.com](https://tinypng.com) para deixar mais leve

## Personalização rápida

Para mudar cores, edite as variáveis no topo de `styles.css`:

```css
:root {
  --petroleum:       #1B4965;  /* azul petróleo */
  --petroleum-dark:  #0E3A4E;
  --bg-start:        #FAFBFC;  /* branco gelo */
  --bg-end:          #E5E9EE;  /* prata claro */
}
```
