import React from "react";
import { useReducer } from "react";
const initialState = { count: 0 };

interface State{
  count: number
}

type UpdateAction = {
  type: "increment" | "decrement",
  payload: number
}

type ResetAction = {
  type: 'reset'
}

type CounterAction = UpdateAction | ResetAction

function reducer(state: State, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      Count: {state.count}
      <button
        onClick={() => dispatch({ type: "increment", payload: 10 })}
      >Increment 10</button>
      <button
        onClick={() => dispatch({ type: "decrement", payload: 10 })}
      >Decrement 10</button>
      <button
        onClick={() => dispatch({ type: "reset"})}
      >Reset</button>

    </div>
  );
}
