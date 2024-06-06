const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const {lookupHiringdetails} = require('./lookupHiringDetails');

const rootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        query:{
            ...lookupHiringdetails
        } 
    })
});

const schema = new GraphQLSchema(rootQueryType);

module.exports = schema;