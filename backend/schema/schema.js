var GraphQL = require('graphql')
var GraphQLRelay = require('graphql-relay')
import { connectionArgs, fromGlobalId, globalIdField, connectionFromArray, mutationWithClientMutationId } from 'graphql-relay';
import { GraphQLNonNull, GraphQLInputObjectType, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID, GraphQLList } from 'graphql';
import {User, Vprasanja, Odgovori,getUser,getVprasanja,getOdgovori  } from './database';

// This module exports a GraphQL Schema, which is a declaration of all the
// types, queries and mutations we'll use in our system.

// Relay adds some specific types that it needs to function, including Node, Edge, Connection

// Firstly we need to create the Node interface in our system. This has nothing
// to do with Node.js! In Relay, Node refers to an entity – that is, an object
// with an ID.

// To create this interface, we need to pass in a resolving function as the
// first arg to nodeDefinitions that can fetch an entity given a global Relay
// ID. The second arg can be used to resolve an entity into a GraphQL type –
// but it's actually optional, so we'll leave it out and use isTypeOf on the
// GraphQL types further below.

let {nodeInterface,nodeField} = nodeDefinitions(
  (globalId) => {
    var{type,id} = fromGlobalId(globalId);
    if (type === 'User') {
      return getUser(id);
    } else if (type === 'Vprasanja' ) {
      return getVprasanja(id);
    } else if (type === 'Odgovori') {
      return getOdgovori(id);
    } else {
      return null;
    }
  }
  );

var UserType = new GraphQLObjectType({
  name: 'User',
  description: 'nas user',
  fields: () => ({
    id:globalIdField('User'),
    name: {GraphQLString,
    resolve: (name) => getUser(),
  },
  })
});

var VprasanjaType = new GraphQLObjectType({
  name: 'Vprasanja',
  description: 'kaj sprasujemo',
  fields: () => ({
    id:globalIdField('Vprasanja'),
    vprasanja: {}
  })
})


