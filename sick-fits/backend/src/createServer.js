const { GraphQLServer } = require('graphql-yoga');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const db = require('./db');

//Create the graghql yoga server
function createserver() {
    return new GraphQLServer({
        typeDefs: 'src/schema.graphql',
        resolvers: {
            Mutation,
            Query
        },
        resolverValidationOptions: {
            requireResolversForResolveType: false
        },
        context: req => ({ ...req, db}),

    })
}

module.exports = createserver;
