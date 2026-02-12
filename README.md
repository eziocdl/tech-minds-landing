# TechMinds Portfolio

Site institucional e portfólio da **TechMinds** — desenvolvimento Full Stack, design premium e mentoria tech.

## Sobre o Projeto

Landing page moderna e responsiva que apresenta os serviços, projetos e programas de mentoria da TechMinds. O site conta com efeitos visuais 3D, suporte a múltiplos idiomas e um design focado em conversão.

### Principais Funcionalidades

- **Multi-idioma** — Português, Inglês e Espanhol
- **Efeitos 3D** — Partículas e visualizações interativas com Three.js
- **Design Responsivo** — Adaptado para desktop, tablet e mobile
- **Seções completas** — Hero, Sobre, Estatísticas, Projetos, Mentoria, Comunidade e Contato
- **Componentes acessíveis** — Baseado em Radix UI / shadcn/ui

## Tech Stack

| Camada       | Tecnologia                          |
| ------------ | ----------------------------------- |
| Framework    | React 18 + TypeScript               |
| Build        | Vite 6 + SWC                        |
| Estilização  | Tailwind CSS 4                       |
| Componentes  | shadcn/ui + Radix UI                |
| 3D / Visual  | Three.js + React Three Fiber        |
| Partículas   | tsparticles                          |
| Formulários  | React Hook Form                      |
| Gráficos     | Recharts                             |

## Pré-requisitos

- [Node.js](https://nodejs.org/) >= 18
- npm (incluso com Node.js)

## Como Rodar

```bash
# 1. Clone o repositório
git clone https://github.com/eziocdl/tech-minds-landing.git
cd tech-minds-landing

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

O app estará disponível em **http://localhost:4400**

## Build de Produção

```bash
npm run build
```

Os arquivos compilados serão gerados na pasta `build/`.

## Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── ui/              # Biblioteca de componentes (shadcn/ui)
│   ├── Header.tsx       # Navegação principal
│   ├── Hero3D.tsx       # Hero com efeitos 3D
│   ├── AboutSection.tsx # Seção "Sobre"
│   ├── StatsSection.tsx # Estatísticas
│   ├── ProjectsSection.tsx
│   ├── LearningSection.tsx
│   ├── CommunitiesSection.tsx
│   ├── DeadlineSection.tsx
│   └── Footer.tsx
├── contexts/            # React Context (idioma)
├── translations/        # Strings de tradução (PT/EN/ES)
├── assets/              # Imagens, ícones e favicon
├── styles/              # Estilos globais
├── App.tsx              # Componente raiz
└── main.tsx             # Entry point
```

## Scripts Disponíveis

| Comando         | Descrição                          |
| --------------- | ---------------------------------- |
| `npm run dev`   | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção            |

## Licença

Projeto privado da TechMinds Group.
