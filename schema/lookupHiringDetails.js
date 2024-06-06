const { GraphQLList, GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLInputObjectType } = require("graphql");
const {getHiringDetails} = require('../resolvers/HiringDetails/index')

const candidateDetailsObjectType = new GraphQLObjectType({
    name: 'candidateDetailsObjectType',
    fields: {
        candidateName: {
            type: GraphQLString
        },
        candidateGender: {
            type: GraphQLString
        },
        candidateOfferInHand: {
            type: GraphQLBoolean
        },
        candidateLatestPackage: {
            type: GraphQLString
        },
        candidateNoticePeriod: {
            type: GraphQLString
        },
        candidateCurrentLocation: {
            type: GraphQLString
        },
        candidatePrefferedLocation: {
            type: GraphQLString
        },
        candidateExpetedPackage: {
            type: GraphQLString
        },
        candidateExperience: {
            type: GraphQLString
        },
        candidateKnownTechnologies: {
            type: GraphQLString
        },
        candidateOfferAmount: {
            type: GraphQLString
        },
        AmountCanBeOffered: {
            type: GraphQLString
        },
        isSelected: {
            type: GraphQLBoolean
        },
        commentsFromTechnicalPannel: {
            type: GraphQLString
        },
        locationGiven: {
            type: GraphQLString
        }
    }
});
const hiringDetailsResponseType = new GraphQLObjectType({
    name : 'hiringDetailsResponseType',
    fields: {
        candidateDetails: {
            type: new GraphQLList(candidateDetailsObjectType)
        }
    }
});

const hiringDetailsInputType = new GraphQLInputObjectType({
    name: 'hiringDetailsInputType',
    fields: {
        candidateId: {
            type: GraphQLString
        }
    }
})

module.exports ={
    type: hiringDetailsResponseType,
    args: {
        input: {
            type: hiringDetailsInputType
        }
    },
    resolve: async (root,args) =>  {
        return getHiringDetails(args.input);
    }
}