// @flow
import {useCallback} from 'react';
import {graphql, useMutation} from 'react-relay';
import type {MoveTodoMutation} from 'relay/MoveTodoMutation.graphql';

const mutation = graphql`
  mutation MoveTodoMutation($input: MoveTodoMutationInput!) {
    moveTodo(input: $input) {
      success
    }
  }
`;

type MoveTodoParams = {
  todoConnectionId: string,
  source: string,
  target: string,
  edge: 'top' | 'bottom',
};

export function useMoveTodoMutation(): (params: MoveTodoParams) => void {
  const [commit] = useMutation<MoveTodoMutation>(mutation);

  return useCallback(
    ({todoConnectionId, source, target, edge}: MoveTodoParams) => {
      const optimisticUpdater = (store) => {
        const connection = store?.get(todoConnectionId);
        const edges = connection?.getLinkedRecords('edges');
        const sourceEdge = edges?.find(
          (edge) => edge?.getLinkedRecord('node')?.getDataID() === source,
        );
        if (!edges) throw new Error('why');
        const edgesWithoutSource = edges.filter(
          (edge) => edge?.getDataID() !== sourceEdge?.getDataID(),
        );
        const targetIndex = edgesWithoutSource?.findIndex(
          (edge) => edge?.getLinkedRecord('node')?.getDataID() === target,
        );
        if (sourceEdge != null && targetIndex != null) {
          edgesWithoutSource?.splice(
            edge === 'top' ? targetIndex : targetIndex + 1,
            0,
            sourceEdge,
          );
        }
        connection?.setLinkedRecords(edgesWithoutSource, 'edges');
      };
      commit({
        variables: {
          input:
            edge === 'top'
              ? {
                  id: source,
                  before: target,
                }
              : {
                  id: source,
                  after: target,
                },
        },
        optimisticUpdater,
        updater: (store, response) => {
          if (response?.moveTodo?.success) {
            optimisticUpdater(store);
          } else {
            alert('Update failed and should have been reverted.');
          }
        },
        optimisticResponse: {
          moveTodo: {
            success: true,
          },
        },
      });
    },
    [commit],
  );
}
