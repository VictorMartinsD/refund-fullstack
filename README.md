# Refund Fullstack

> **Projeto em manutenção.** Algumas configurações e recursos podem estar incompletos ou sofrer alterações.

Aplicação fullstack para solicitação e gerenciamento de reembolsos de despesas corporativas.

## Visão geral

O projeto é dividido em duas aplicações:

- **API:** backend em Node.js com Express, TypeScript e Prisma.
- **Web:** interface em React com Vite e Tailwind CSS.

Os usuários podem criar contas, entrar no sistema, enviar solicitações de reembolso e anexar comprovantes. Usuários com perfil de gerente podem visualizar e gerenciar os reembolsos disponíveis.

## Funcionalidades

- Cadastro e autenticação de usuários
- Perfis de funcionário e gerente
- Registro de reembolsos por categoria
- Upload de comprovantes
- Listagem e visualização de solicitações
- Aprovação ou rejeição de reembolsos
- Paginação dos resultados

## Tecnologias

### API

- Node.js
- TypeScript
- Express
- Prisma ORM
- SQLite
- JWT
- Zod
- Multer
- bcrypt

### Web

- React
- Vite
- TypeScript
- React Router
- Tailwind CSS

## Estrutura do projeto

```text
refund-fullstack/
├── api/
│   ├── prisma/
│   └── src/
│       ├── controllers/
│       ├── middlewares/
│       ├── routes/
│       ├── configs/
│       └── providers/
└── web/
    └── src/
        ├── components/
        ├── pages/
        ├── routes/
        └── utils/
```

## Pré-requisitos

- Node.js
- npm

## Como executar localmente

### 1. Clonar o projeto

```bash
git clone <url-do-repositorio>
cd refund-fullstack
```

### 2. Configurar e iniciar a API

```bash
cd api
npm install
npx prisma generate
npx prisma migrate dev
npm run dev
```

A API ficará disponível em `http://localhost:3333`.

Os arquivos enviados ficam disponíveis pela rota `/uploads`.

### 3. Configurar e iniciar a aplicação web

Em outro terminal:

```bash
cd web
npm install
npm run dev
```

O endereço exibido pelo Vite será usado no navegador, normalmente `http://localhost:5173`.
A aplicação usa `http://localhost:3333` como endereço da API durante o desenvolvimento.

Para produção, configure `VITE_API_URL` com a URL pública da API antes de executar `npm run build` (por exemplo, nas variáveis do workflow de deploy). O front-end e os comprovantes enviados precisam apontar para uma API hospedada e acessível publicamente.

## Scripts da API

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia a API com atualização automática |

## Scripts da aplicação web

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção |
| `npm run preview` | Visualiza a build de produção |
| `npm run lint` | Executa o oxlint |

## Banco de dados

O projeto utiliza SQLite e o Prisma. A configuração atual cria o banco em `api/prisma/dev.db`, conforme o schema em `api/prisma/schema.prisma`.

Principais tabelas:

- `users`: usuários e seus perfis
- `refunds`: solicitações de reembolso

## Observações

- Este README é temporário e está sujeito a alterações durante a manutenção.
- A aplicação ainda pode exigir ajustes de configuração, ambiente e integração entre frontend e backend.
- A coleção do Insomnia está disponível em `api/insomnia-refund-api.yaml`.