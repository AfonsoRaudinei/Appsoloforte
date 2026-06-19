# SoloForte — Pitch Deck

Apresentação em HTML/CSS/JS puro, estilo iOS, com fundo gradiente branco gelo → prata e títulos em azul petróleo. Layout horizontal em 3 colunas (texto · mascote · celular).

## Estrutura de arquivos

```
soloforte-pitch/
├── index.html
├── styles.css
├── script.js
├── README.md
└── images/
    ├── logo.png                    ← Logo SoloForte (slides 1 e 16)
    ├── founder.jpg                 ← Foto do Raudinei (slide 17)
    │
    │  ── Mascotes (PNG transparente) ──
    ├── avatar-1-apresenta.png      ← mão estendida (boas-vindas)
    ├── avatar-2-ideia.png          ← apontando dedo pra cima (insight)
    ├── avatar-3-prancheta.png      ← com prancheta e caneta (anotando)
    ├── avatar-4-explica.png        ← apontando caneta (explicando)
    ├── avatar-5-aprova.png         ← joinha / thumbs up
    ├── avatar-6-convida.png        ← braço aberto (convidando)
    │
    │  ── Screenshots do app (uma por slide com celular) ──
    ├── slide-03-mapa.png           ← Mapa Inteligente
    ├── slide-04-agenda.png         ← Agenda Comercial
    ├── slide-05-carteira.png       ← Carteira de Mercado
    ├── slide-06-ocorrencias.png    ← Ocorrências de Campo
    ├── slide-07-clima.png          ← Inteligência Climática
    ├── slide-08-avaliacoes.png     ← Avaliações A/B
    ├── slide-09-roi.png            ← ROI Agrícola
    ├── slide-10-publicacao.png     ← Publicação de Resultados
    ├── slide-11-marketing.png      ← Marketing Técnico
    ├── slide-12-relatorios.png     ← Relatórios Técnicos
    └── slide-15-modelo.png         ← Modelo de Negócio
```

## Mascote em cada slide

| Slide | Mascote usado | Motivo |
|---|---|---|
| 01 — Capa | `avatar-1-apresenta` | boas-vindas |
| 02 — Problema | `avatar-4-explica` | apontando o que está errado |
| 03 — Mapa | `avatar-2-ideia` | descoberta |
| 04 — Agenda | `avatar-3-prancheta` | planejamento |
| 05 — Carteira | `avatar-3-prancheta` | gestão de clientes |
| 06 — Ocorrências | `avatar-3-prancheta` | anotando o campo |
| 07 — Clima | `avatar-2-ideia` | insight climático |
| 08 — A/B | `avatar-4-explica` | comparando |
| 09 — ROI | `avatar-5-aprova` | resultado positivo |
| 10 — Publicação | `avatar-6-convida` | exibindo o caso |
| 11 — Marketing | `avatar-1-apresenta` | apresentando planos |
| 12 — Relatórios | `avatar-3-prancheta` | documentando |
| 13 — Diferencial | `avatar-2-ideia` | insight |
| 14 — Mercado | `avatar-6-convida` | abrindo a oportunidade |
| 15 — Modelo | `avatar-5-aprova` | aprovação |
| 16 — Encerramento | `avatar-1-apresenta` | despedida |
| 17 — Fundador | — | foto real (founder.jpg) |

> **Importante**: use os mascotes em **PNG com fundo transparente** para ficar com aquele recorte limpo (sem o quadradinho branco em volta).

## Layout

- **Slides 3 a 12 + 15** (capítulos com tela do app): 3 colunas horizontais — `texto` · `mascote` · `celular`
- **Slides 2, 13, 14** (conceituais): mascote no canto inferior direito, sem invadir o conteúdo
- **Slides 1, 16** (capas): mascote no canto inferior, decorativo
- **Slide 17** (fundador): foto real, sem mascote

## Como usar

1. Faça o upload dos 4 arquivos principais (`index.html`, `styles.css`, `script.js`, `README.md`) para um repositório no GitHub.
2. Crie a pasta `images/` e adicione os 6 mascotes + as 11 screenshots + logo + foto.
3. Ative o GitHub Pages (Settings → Pages → main branch).
4. Acesse `https://afonsoraudinei.github.io/<nome-do-repo>/`.

## Navegação

| Ação | Como |
|---|---|
| Próximo slide | `→`, `Espaço`, `PageDown`, swipe ← |
| Slide anterior | `←`, `PageUp`, swipe → |
| Primeiro / último | `Home` / `End` |
| Tela cheia | `F` |
| Link direto | `#5` na URL pula para slide 5 |

## Personalização rápida (cores)

Topo do `styles.css`:

```css
:root {
  --petroleum:       #1B4965;
  --petroleum-dark:  #0E3A4E;
  --bg-start:        #FAFBFC;
  --bg-end:          #E5E9EE;
}
```
