# Análise TI — Panorama do Mercado de Tecnologia

Landing page estática que apresenta uma análise de vagas de tecnologia (locais e nacionais),
mostrando as competências, tecnologias e tendências mais exigidas pelo mercado.

Projeto acadêmico da **Fábrica de Software — Engenharia de Software (Univille)**.

## Tecnologias

- React 19 (com Vite) + JavaScript
- Bootstrap 5 (via CDN)
- react-scroll — navegação suave entre as seções

## Pré-requisitos

- Node.js (versão 20 ou superior)

## Como rodar o projeto

```bash
# 1. Instalar as dependências
npm install

# 2. Rodar em modo de desenvolvimento
npm run dev
```

Depois abra o endereço que aparecer no terminal (normalmente `http://localhost:5173`).

Outros comandos disponíveis:

```bash
npm run build     # Gera a versão de produção na pasta dist/
npm run preview   # Visualiza a versão de produção localmente
npm run lint      # Verifica o código com o ESLint
```



## Estrutura das páginas

O site é uma página única dividida em seções (`src/pages/`):


| Seção                     | Descrição                                               |
| ------------------------- | ------------------------------------------------------- |
| **HomeSection**           | Apresentação / destaque inicial                         |
| **ViewSection**           | Visão geral do estudo (números resumidos)               |
| **JobSection**            | Vagas analisadas, separadas em mercado local e nacional |
| **TechSection**           | Gráfico com o ranking de tecnologias mais citadas       |
| **FinalSection / Footer** | Síntese do aprendizado e rodapé                         |


Outros diretórios:

- `src/components/` — componentes reutilizáveis (NavBar, DataCard)
- `src/Data/` — dados das vagas (`vagas.js`)
- `src/global.css` — cores do projeto (variáveis CSS) e estilos gerais
- `src/assets/` — imagens



## Cores

As cores ficam centralizadas em variáveis CSS no `src/global.css`. Para mudar a paleta
inteira, basta editar os valores em `:root`.

## Autor

**Ítalo David** — Atividade Acadêmica (Landing Page Estática)