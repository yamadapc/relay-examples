import {GraphQLObjectType, GraphQLSchema} from 'graphql';

import {nodeField} from './nodes.js';
import {UserQuery} from './queries/UserQuery';
import {AddTodoMutation} from './mutations/AddTodoMutation';
import {ChangeTodoStatusMutation} from './mutations/ChangeTodoStatusMutation';
import {MarkAllTodosMutation} from './mutations/MarkAllTodosMutation';
import {RemoveCompletedTodosMutation} from './mutations/RemoveCompletedTodosMutation';
import {RemoveTodoMutation} from './mutations/RemoveTodoMutation';
import {RenameTodoMutation} from './mutations/RenameTodoMutation';
import {MoveTodoMutation} from './mutations/MoveTodoMutation';

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: UserQuery,
    node: nodeField,
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTodo: AddTodoMutation,
    changeTodoStatus: ChangeTodoStatusMutation,
    markAllTodos: MarkAllTodosMutation,
    removeCompletedTodos: RemoveCompletedTodosMutation,
    removeTodo: RemoveTodoMutation,
    renameTodo: RenameTodoMutation,
    moveTodo: MoveTodoMutation,
  },
});

export const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
