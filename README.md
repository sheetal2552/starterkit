![fullstack-starterkit](https://user-images.githubusercontent.com/29705703/86912939-7b0e7e00-c13b-11ea-950b-200a4529ae6b.png)

<p align="center">
<img src="https://img.shields.io/badge/License-MIT-red.svg" />
<img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
<img src="https://img.shields.io/twitter/follow/karan_6864.svg?style=social" />
</p>

### Motivation :star:

Setting up boiler plates when starting new projects is tedious sometimes and I often found myself setting it up from scratch 🥱

Hence I made this starterkit following some of the best patterns and practices I learnt from some of the larger codebase and fantastic developers I've had a chance to work with 🙌

The main purpose of this repository is to provide a scalable "batteries included" full stack starterkit which follows good architecture patterns (might be opinionated) and code decoupling which becomes significant as the project grows or new developers are onboarded

#### Features

- **All in Typescript**
  Because TypeScript is awesome, and types are important 😃

- **GraphQL First**
  This starterkit is built with graphql first approach using the [Apollo](https://www.apollographql.com/) platform 

- **Includes CI** 
  CI is integral part of any project. This starterkit includes `Circle CI` and `Github Actions` by default. PR's for integration with any other providers are welcome 🙌

- **Testing Focused**
  This project uses [Jest](https://jestjs.io/) for testing framework and comes with sample tests which are easy to extend
  
- **Prisma**
  [Prisma](https://www.prisma.io/) is the ORM being used for [PostgreSQL](https://www.postgresql.org/). Feel free to submit a PR for any other ORM or drivers you'd like to see here 😁


**Please leave a :star: as motivation if you liked the idea :smile:**

### :rocket: Technologies Used

 <img width="54px" style="margin: 10px 12px; " src="https://user-images.githubusercontent.com/29705703/86937850-5cb97a00-c15d-11ea-9f8c-e33560edaf16.png"><img width="60px" style="margin: 10px 12px; " src="https://user-images.githubusercontent.com/29705703/86937849-5c20e380-c15d-11ea-866d-6b5523fa5ec3.png"><img width="60px" style="margin: 10px 12px; " src="https://user-images.githubusercontent.com/29705703/86937838-5925f300-c15d-11ea-9eec-68b2e16b4041.png"><img width="44px" style="margin: 10px 12px; " src="https://user-images.githubusercontent.com/29705703/86937843-5b884d00-c15d-11ea-8b9f-639e29fc66d1.png"><img width="46px" style="margin: 10px 12px; " src="https://user-images.githubusercontent.com/29705703/86937840-5a572000-c15d-11ea-8615-6a9e1c6eb835.png"><img width="52px" style="margin: 10px 12px; " src="https://user-images.githubusercontent.com/29705703/86937832-57f4c600-c15d-11ea-9f1d-da108bf28265.png">

### 📖 Contents
- [Architecture](#architecture)
  - [Backend](#backend)
  - [Web](#web)
- [Getting started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [License](#license)

### 🏭 Architecture {#architecture}

#### Backend {#backend}

Here is the folder structure for `backend`, it is using `yarn workspaces` which helps us split our  monorepo into packages such as DB, GraphQL. Which if required can be made into their own micro services.

``` 
backend
├── build
├── config
├── logs
├── packages
│   ├── db
│   │   └──prisma
│   ├── graphql
│   │   ├── api
│   │   ├── schema
│   │   └── types
│   └── utils
├── tests
│   ├── db
│   └── graphql
├── index.ts
└── package.json
```

##### DB

This workspace package contains the database abstractions. The database stack is [PostgreSQL](https://www.postgresql.org/) as relational database and [Prisma](https://www.prisma.io/) as an ORM, read more about DB package [here](./backend/packages/db/README.md)

##### GraphQL

The GraphQL package is organized as below:
``` 
graphql
├── schema
│   └── user                <---- some entity
│       ├── resolvers 
│       │     ├── types     <---- type resolvers
│       │     ├── queries   <---- query resolvers
│       │     └── mutations <---- mutation resolvers
│       ├── queries.graphql
│       ├── mutations.graphql
│       └── types.graphql
├── api
│   ├── queries             
│   └── mutations
├── types                   <---- graphql types
│   ├── schema           
│   └── resolvers
└── index.json
```

The schema splits each entity into it's own set of schema to modularize the codebase. The graphql package uses [schema stitching](https://www.apollographql.com/docs/apollo-server/features/schema-stitching) and [code generators](https://graphql-code-generator.com/) to construct the whole schema.

It is organized so because if you choose to split graphql into it's own set of microservices later, it should be relatively easier to do so as this should be easy to integrate with [Apollo Federation](https://www.apollographql.com/docs/apollo-server/federation/introduction)

Read more about GraphQL package [here](./backend/packages/graphql/README.md)

#### Web {#web}
Here is the folder structure for `web`, it is a standard [create-react-app](https://create-react-app.dev/) using [react-app-rewired](https://github.com/timarney/react-app-rewired) to override configs without ejecting

Web package uses [Material UI](https://material-ui.com/) heavily as it makes theming and customization very easy. PR's for any other UI kit are welcome 😃

``` 
web
├── build
├── public
├── src
│   ├── assets
│   ├── config
│   ├── constants
│   ├── global
│   ├── layout     <---- controls, pure components
│   ├── tests
│   ├── theme      <---- theme config
│   ├── pages
│   │   └──  Home   <---- page component
│   │        ├── components <---- page specific components
│   │        └── hooks      <---- page specific custom hooks   
│   └── utils
├── tests
│   ├── db
│   └── graphql
├── index.ts
└── package.json
```


### 🏃 Getting started {#getting-started}

**Setting up environment variables**

Before getting started, create `.env` files at both `backend/.env` as well as `web/.env` following the `.env.template` files located in those directories. 

**Install dependencies**

I recommend using `yarn` instead of `npm` as this project heavily used `yarn workspaces`

```
yarn
```

**Running backend**

```
yarn start:backend
```

<i>Make sure to use your own `DATABASE_URL` and not the default as provided in `.env.template` when developing your own project, as the database might be changed/deleted anytime</i>

**Running web**

```
yarn start:web
```

<i>
Feel free to open a new issue if you're facing any problem 🙋
</i>

### 👏 How to Contribute {#how-to-contribute}

Contributions are welcome as always, before submitting a new PR please make sure to open a new
issue so community members can discuss.

Additionally you might find existing open issues which can helps with improvements.

This project follows standard [code of conduct](/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

### 📄 License {#license}

This project is MIT licensed, as found in the [LICENSE](/LICENSE)
