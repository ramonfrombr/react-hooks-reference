import React, { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducerFunction(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { counter: state.counter + 1 };
    case ACTIONS.DECREMENT:
      return { counter: state.counter - 1 };
    default:
      return state;
  }
}

const UseReducerExample1 = () => {
  const [state, dispatch] = useReducer(reducerFunction, { counter: 0 });

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{state.counter}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default UseReducerExample1;

export const code = `import React, { useState, useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducerFunction(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { counter: state.counter + 1 };
    case ACTIONS.DECREMENT:
      return { counter: state.counter - 1 };
    default:
      return state;
  }
}

const UseReducerExample1 = () => {
  const [state, dispatch] = useReducer(reducerFunction, { counter: 0 });

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{state.counter}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};
`;

export const snippets = [
  { fileName: "UseReducerExample.jsx", fileContent: code },
];
