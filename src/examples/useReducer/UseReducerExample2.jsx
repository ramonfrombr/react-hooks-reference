import React, { useState, useReducer } from "react";

const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

function reducerFunction(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.todoId
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case ACTIONS.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.todoId);
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, completed: false };
}

const UseReducerExample2 = () => {
  const [todos, dispatch] = useReducer(reducerFunction, []);
  const [name, setName] = useState("");
  console.log(todos);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="border p-3">
        <h3>Add Todo</h3>
        <input
          className="border"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>

      <div>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </div>
    </>
  );
};

function Todo({ todo, dispatch }) {
  return (
    <div>
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.name}
      </span>
      <button
        onClick={() => {
          dispatch({
            type: ACTIONS.TOGGLE_TODO,
            payload: { todoId: todo.id },
          });
        }}
      >
        toggle
      </button>
      <button
        onClick={() => {
          dispatch({
            type: ACTIONS.DELETE_TODO,
            payload: { todoId: todo.id },
          });
        }}
      >
        delete
      </button>
    </div>
  );
}

export default UseReducerExample2;

export const code = `import React, { useState, useReducer } from "react";

const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

function reducerFunction(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.todoId
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case ACTIONS.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.todoId);
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, completed: false };
}

const UseReducerExample2 = () => {
  const [todos, dispatch] = useReducer(reducerFunction, []);
  const [name, setName] = useState("");
  console.log(todos);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="border p-3">
        <h3>Add Todo</h3>
        <input
          className="border"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>

      <div>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </div>
    </>
  );
};

function Todo({ todo, dispatch }) {
  return (
    <div>
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.name}
      </span>
      <button
        onClick={() => {
          dispatch({
            type: ACTIONS.TOGGLE_TODO,
            payload: { todoId: todo.id },
          });
        }}
      >
        toggle
      </button>
      <button
        onClick={() => {
          dispatch({
            type: ACTIONS.DELETE_TODO,
            payload: { todoId: todo.id },
          });
        }}
      >
        delete
      </button>
    </div>
  );
}`;

export const snippets = [
  { fileName: "UseReducerExample.jsx", fileContent: code },
];
