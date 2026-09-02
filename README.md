# FrontendProdutos

Aplicação web desenvolvida com Angular para gerenciamento e visualização de produtos.

[![Angular](https://img.shields.io/badge/Angular-21.2.22-DD0031?logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![SCSS](https://img.shields.io/badge/SCSS-1.86.3-CC6699?logo=sass&logoColor=white)](https://sass-lang.com/)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222222?logo=github&logoColor=white)](https://pages.github.com/)

## Demo

[**simaoBastos.github.io/frontend-produtos/**](https://simaoBastos.github.io/frontend-produtos/)

## Sobre

O FrontendProdutos é um projeto desenvolvido durante os estudos de Angular e TypeScript, com foco nos fundamentos do framework e na comunicação entre componentes.

A aplicação apresenta uma lista de produtos e permite realizar ações sobre cada item, utilizando os recursos de componentização e data binding disponibilizados pelo Angular.

<details>
<summary><strong>Funcionalidades</strong></summary>

<br>

- Exibição de produtos;
- Exibição de nome, preço e quantidade;
- Formatação de valores monetários em Real brasileiro;
- Comunicação entre componentes pai e filho;
- Passagem de dados utilizando `input()`;
- Emissão de eventos utilizando `output()`.

</details>

<details>
<summary><strong>Tecnologias</strong></summary>

<br>

- Angular 21
- TypeScript
- HTML
- SCSS
- Angular CLI
- Git
- GitHub Pages

</details>

<details>
<summary><strong>Estrutura</strong></summary>

<br>

O projeto utiliza a arquitetura de componentes standalone do Angular.

Os dados dos produtos são definidos no componente principal e enviados para o componente de produto através de `input()`. As ações realizadas no componente filho são comunicadas ao componente pai através de `output()`.

</details>

## Instalação

Clone o repositório:

```bash
git clone https://github.com/simaoBastos/frontend-produtos.git
```

Acesse o diretório:

```bash
cd frontend-produtos
```

Instale as dependências:

```bash
npm install
```

## Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
ng serve
```

A aplicação estará disponível em:

```text
http://localhost:4200/
```

## Build

Para gerar uma build de produção:

```bash
ng build
```

Os arquivos compilados serão gerados no diretório `dist/`.

## Deploy

O projeto utiliza `angular-cli-ghpages` para publicação no GitHub Pages.

Para realizar um novo deploy:

```bash
ng deploy --base-href=/frontend-produtos/
```

## Licença

Este projeto foi desenvolvido para fins educacionais.
