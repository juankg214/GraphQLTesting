import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	commentTypeDef,
	commentQueries,
	commentMutations
} from './westudy/comments/typeDefs';

import categoryResolvers from './westudy/comments/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		commentTypeDef
	],
	[
		commentQueries
	],
	[
		commentMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		categoryResolvers
	)
});
