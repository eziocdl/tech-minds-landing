# TechMinds Portfolio

Landing page institucional da **TechMinds** - desenvolvimento Full Stack, design premium e mentoria tech.

## Sobre o Projeto

Landing page moderna e responsiva que apresenta os servicos, projetos e programas de mentoria da TechMinds. O site conta com efeitos visuais 3D, suporte a multiplos idiomas e um design focado em conversao.

### Principais Funcionalidades

- **Multi-idioma** - Portugues, Ingles e Espanhol
- **Efeitos 3D** - Particulas e rede neural interativa com Three.js
- **Design Responsivo** - Adaptado para desktop, tablet e mobile
- **Secoes completas** - Hero, Stats, About, Mentoria, Projetos, Deadline, Comunidade e Contato

## Tech Stack

| Camada       | Tecnologia                          |
| ------------ | ----------------------------------- |
| Framework    | React 18 + TypeScript               |
| Build        | Vite 6 + SWC                        |
| Estilizacao  | Tailwind CSS 4                       |
| 3D / Visual  | Three.js + React Three Fiber        |
| Icones       | Lucide React                         |

## Pre-requisitos

- [Node.js](https://nodejs.org/) >= 18
- npm (incluso com Node.js)

## Como Rodar

```bash
# 1. Clone o repositorio
git clone https://github.com/eziocdl/tech-minds-landing.git
cd tech-minds-landing

# 2. Instale as dependencias
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

O app estara disponivel em **http://localhost:3000**

## Build de Producao

```bash
npm run build
```

Os arquivos compilados serao gerados na pasta `build/`.

## Estrutura do Projeto

```
src/
├── components/            # Componentes React
│   ├── Header.tsx         # Navegacao principal com menu mobile
│   ├── Hero3D.tsx         # Hero section com CTAs
│   ├── BrainParticles3D.tsx # Background 3D com rede de particulas
│   ├── StatsSection.tsx   # Metricas e resultados
│   ├── AboutSection.tsx   # Secao "Sobre"
│   ├── LearningSection.tsx # Mentoria
│   ├── ProjectsSection.tsx # Projetos em destaque
│   ├── DeadlineSection.tsx # Gestao de tempo
│   ├── CommunitiesSection.tsx # GitHub, WhatsApp, Discord
│   └── Footer.tsx         # Rodape com contato e links
├── contexts/              # React Context (idioma)
├── translations/          # Strings de traducao (PT/EN/ES)
├── assets/                # Imagens, icones e favicon
├── styles/                # Estilos globais
├── App.tsx                # Componente raiz
└── main.tsx               # Entry point
```

## Scripts Disponiveis

| Comando         | Descricao                            |
| --------------- | ------------------------------------ |
| `npm run dev`   | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de producao             |

## Licenca

Projeto privado da TechMinds Group.
