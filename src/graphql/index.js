const { ApolloServer, gql } = require('apollo-server-express')

//GRAPHQL
const typeDefs = gql`
  type Representante {
    nombre: String!
    imgUrl: String
    periodo: String!
    link: String
  }

  type Representantes {
    diputacionLocal: Representante
    diputacionFederal: Representante
    presidenciaMunicipal: Representante
    gobernante: Representante
    senadores: [Representante]
  }

  type LocacionInfo {
    latitud: String!
    longitud: String!
    estado: String!
    municipio: String!
    distritoLocal: Int!
    distritoFederal: Int!
    seccion: Int!
  }

  type Locacion {
    info: LocacionInfo!
    representantes: Representantes!
  }

  type Query {
    locacion(latitud: String!, longitud: String!): Locacion
  }
`

const resolvers = (dependencies) => {
  return {
    Query: {
      locacion: require('./resolvers/locacion')(dependencies),
    },
  }
}

module.exports = ({ expressServer, db, st, logger }) => {
  const apolloServer = new ApolloServer({ typeDefs, resolvers: resolvers({ db, st, logger }) })
  apolloServer.applyMiddleware({ app: expressServer })
  return apolloServer
}
