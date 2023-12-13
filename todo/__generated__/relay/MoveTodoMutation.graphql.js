/**
 * @generated SignedSource<<8d3af3d4fcf1fabdc70d15dd30a37741>>
 * @relayHash c90f458a5ba3239e218dbfa6db49f214
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

// @relayRequestID c90f458a5ba3239e218dbfa6db49f214

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type MoveTodoMutationInput = {|
  after?: ?string,
  before?: ?string,
  clientMutationId?: ?string,
  id: string,
|};
export type MoveTodoMutation$variables = {|
  input: MoveTodoMutationInput,
|};
export type MoveTodoMutation$data = {|
  +moveTodo: ?{|
    +success: boolean,
  |},
|};
export type MoveTodoMutation = {|
  response: MoveTodoMutation$data,
  variables: MoveTodoMutation$variables,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "MoveTodoMutationPayload",
    "kind": "LinkedField",
    "name": "moveTodo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "success",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MoveTodoMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MoveTodoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": "c90f458a5ba3239e218dbfa6db49f214",
    "metadata": {},
    "name": "MoveTodoMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node/*: any*/).hash = "f6685a727ebfa93838d89d051b3c90e7";

module.exports = ((node/*: any*/)/*: Mutation<
  MoveTodoMutation$variables,
  MoveTodoMutation$data,
>*/);
