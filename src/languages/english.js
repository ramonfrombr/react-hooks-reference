export const englishLanguage = {
  heading: "Hello world",
  intro: "This is a reference to React Hooks with examples and code snippets.",
  hooksSummary: "Hooks Summary",
  summary: `
  ### Basic Hooks
  - [**useState** is used to manage states. Returns a stateful value and an updater function to update it.](/useState)
  - [**useEffect** is used manage side-effects like API calls, subscriptions, timers, mutations, and more.](/useEffect)
  - [**useContext**  is used to return the current value for a context.](/useContext)
  ### Additional Hooks
  - [**useReducer** is a \`useState\` alternative to help with complex state management.](/useReducer)
  - [**useCallback** returns a memorized version of a callback to help a child component not re-render unnecessarily.](/useCallback)
  - [**useMemo** returns a memoized value that helps in performance optimizations.](/useMemo)
  - [**useRef** returns a ref object with a \`.current\` property. The ref object is mutable. It is mainly used to access a child component imperatively.](/useRef)
  - [**useLayoutEffect** fires at the end of all DOM mutations. It's best to use \`useEffect\` as much as possible over this one as the \`useLayoutEffect\` fires synchronously.](/useLayoutEffect)
  - [**useDebugValue** helps to display a label in *React DevTools* for custom hooks.](/useDebugValue)`,
  basicHooks: "Basic Hooks",
  additionalHooks: "Additional Hooks",
  useState: {
    example1: {
      explanation1:
        "In this counter, the useState set method is being called twice, but it only increments and decrements once",
      explanation2:
        "In this counter, the useState set method is being called twice, and it increments and decrements TWICE :)! The code used in this counter is considered the correct way of updating the state",
    },
    example2: {
      explanation1:
        "In this counter, the value for the counter is a property of an object. To update one of the properties in the object, you have to spread the whole object inside the set function, and only assign the property you want to change.",
    },
  },
};
