import { composeWithMongoose } from 'graphql-compose-mongoose/node8';
import mongoid from 'graphql-compose-mongoose/node8/types/mongoid';
import { schemaComposer } from 'graphql-compose';
import {} from 'dotenv/config';

import { 
    
} from '../models';

// CONVERT MONGOOSE MODEL TO GraphQL PIECES
const customizationOptions = {};
// const XTC = composeWithMongoose(X, customizationOptions);

// Add needed CRUD User operations to the GraphQL Schema

//Query
schemaComposer.Query.addFields({
    
});
//Mutations
schemaComposer.Mutation.addFields({
   
});

const graphqlSchema = schemaComposer.buildSchema();
export default graphqlSchema;