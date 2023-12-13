// @flow
/* graphql-relay doesn't export types, and isn't in flow-typed.  This gets too messy */
/* eslint flowtype/require-return-type: 'off' */

import {mutationWithClientMutationId, fromGlobalId} from 'graphql-relay';
import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  type GraphQLFieldConfig,
  GraphQLBoolean,
} from 'graphql';
import {moveTodo} from '../../database';

type Input = {|
  +id: string,
  +before: string,
  +after: string,
  +clientMutationId: string,
|};

type Payload = {|
  +success: boolean,
  +clientMutationId: string,
|};

const MoveTodoMutation: GraphQLFieldConfig<$FlowFixMe, $FlowFixMe> =
  mutationWithClientMutationId({
    name: 'MoveTodoMutation',
    inputFields: {
      id: {type: new GraphQLNonNull(GraphQLID)},
      before: {type: GraphQLString},
      after: {type: GraphQLString},
    },
    outputFields: {
      success: {
        type: new GraphQLNonNull(GraphQLBoolean),
        resolve: ({success}: Payload): boolean => success,
      },
    },
    mutateAndGetPayload: ({
      id,
      before,
      after,
      clientMutationId,
    }: Input): Payload => {
      const localTodoId = fromGlobalId(id).id;
      const pivotTodoId = fromGlobalId(before ?? after).id;
      const success = Math.random() > 0.5;

      if (success) {
        moveTodo(localTodoId, pivotTodoId, before != null ? 'top' : 'bottom');
      }

      return {clientMutationId, success};
    },
  });

export {MoveTodoMutation};
