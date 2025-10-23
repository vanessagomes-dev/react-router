# 🗺️ React Router Study: Navegação e Roteamento

Este projeto é um *playground* de desenvolvimento focado no estudo e aplicação dos principais conceitos e hooks do **React Router DOM (v6+)**. O objetivo principal é consolidar o conhecimento sobre como gerenciar rotas, estados de navegação e URLs dentro de uma aplicação React moderna.

## 🚀 Funcionalidades Implementadas

O projeto simula um fluxo básico de navegação de um e-commerce ou catálogo para demonstrar os seguintes conceitos:

### 1. Estrutura e Layout
* **Layout Fixo:** Criação de um componente `Layout` ([`index.tsx`](index.tsx)) que engloba um cabeçalho (`<header>`) e um rodapé (`<footer>`) fixos, utilizando o componente `<Outlet />` para renderizar o conteúdo dinâmico da rota aninhada.
* **Roteamento Aninhado:** Agrupamento das rotas principais (`/`, `/products`, `/details/:id`) dentro da rota `<Layout />` ([`AppRoutes.tsx`](AppRoutes.tsx)).

### 2. Gerenciamento de Rotas Dinâmicas
* **Parâmetros de Rota (`useParams`):** A página de Detalhes ([`Details.tsx`](Details.tsx)) utiliza o hook `useParams` para extrair e exibir o `ID` do produto diretamente da URL (ex: `/details/1`).
* **Links Dinâmicos:** A lista de produtos na página `Products` ([`Products.tsx`](Products.tsx)) utiliza links dinâmicos para redirecionar para a página de detalhes correspondente.

### 3. Navegação Programática e Histórico
* **Navegação Direta (`useNavigate`):** A página `Home` ([`Home.tsx`](Home.tsx)) demonstra a navegação programática com o hook `useNavigate` para ir diretamente para a lista de produtos.
* **Retorno Inteligente (`useNavigate(-1)`):** O componente `Details` ([`Details.tsx`](Details.tsx)) inclui um botão "Voltar" que utiliza `useNavigate(-1)` para retornar à página anterior no histórico, preservando filtros e parâmetros de busca.

### 4. Query Strings
* **Parâmetros de Busca (`useSearchParams`):** A página `Products` ([`Products.tsx`](Products.tsx)) utiliza o hook `useSearchParams` para ler e exibir a categoria de produtos passada na URL (ex: `?category=vestuario`), demonstrando a manipulação de filtros via URL.

### 5. Tratamento de Erros
* **Rota Não Encontrada:** Configuração de uma rota *catch-all* (`path="*"`) que exibe um componente `NotFound` ([`NotFound.tsx`](NotFound.tsx)) para URLs inválidas.

## 🛠️ Tecnologias Utilizadas

* **React**
* **React Router DOM** (v6+)
* **TypeScript** (para tipagem)
* **Vite** (para *bundling* e desenvolvimento rápido)

## 📌 Próximos Passos (Evolução do Projeto)

Este projeto é uma base para futuras implementações, que podem incluir:

1.  **Consumo de API:** Integrar o carregamento dos dados de produtos através de uma API ou *mock* de dados (e.g., usando `useEffect` e `fetch`).
2.  **Estado Global:** Implementar um gerenciador de estado (como Redux ou Context API) para gerenciar o carrinho de compras ou estado de autenticação.
3.  **Filtragem Avançada:** Usar o `useSearchParams` para implementar a filtragem real de produtos na página.
