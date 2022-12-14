export const portugueseLanguage = {
  heading: "Olá mundo",
  intro:
    "Isto é uma referência dos React Hooks com exemplos e trechos de código.",
  hooksSummary: "Resumo dos Hooks",
  basicHooksSummary: `### Hooks Básicos
  - [**useState** é usado para gerenciar o *state* (as propriedades do aplicativo). Este hook retorna um valor e uma função para atualizar esse valor.](/useState)
  - [**useEffect** is used manage side-effects like API calls, subscriptions, timers, mutations, and more.](/useEffect)
  - [**useContext**  is used to return the current value for a context.](/useContext)`,
  additionalHooksSummary: `### Hooks Adicionais
  - [**useReducer** is a \`useState\` alternative to help with complex state management.](/useReducer)
  - [**useCallback** returns a memorized version of a callback to help a child component not re-render unnecessarily.](/useCallback)
  - [**useMemo** returns a memoized value that helps in performance optimizations.](/useMemo)
  - [**useRef** returns a ref object with a \`.current\` property. The ref object is mutable. It is mainly used to access a child component imperatively.](/useRef)
  - [**useLayoutEffect** fires at the end of all DOM mutations. It's best to use \`useEffect\` as much as possible over this one as the \`useLayoutEffect\` fires synchronously.](/useLayoutEffect)
  - [**useDebugValue** helps to display a label in *React DevTools* for custom hooks.](/useDebugValue)`,
  customHooksSummary: `### Custom Hooks
  - [**useToggle** is used to create straighforward toggle functionality for a boolean value.](/useToggle)
  - [**useTimeout** is used to create straighforward timeout functionality.](/useTimeout)
  - [**useDebounce** is used to prevent the call of a method repeatedly whose run is dependant on state change. This way, if the state changes continuously the method will only be called after the state hasn't changed after the defined time delay.](/useDebounce)
  - [**useArray** is used to create and maintain array based data in a simple way.](/useArray)`,
  basicHooks: "Hooks Básicos",
  additionalHooks: "Hooks Adicionais",
  customHooks: "Hooks Personalizados",
  useState: {
    example1: {
      explanation1:
        "Neste contador, o método useState que define o valor do contador (definirContador) é chamado duas vezes, mas somente incrementa e decrementa uma vez.",
      explanation2:
        "Neste contador, o método useState que define o valor do contador (definirContador) é chamado duas vezes, e ele incrementa e decrementa DUAS VEZES :)! O código usado neste contador é considerado a maneira correta de se atualizar o estado (state)",
    },
    example2: {
      explanation1:
        "Neste contador, o valor do contador é uma propriedade de um objeto. Para atualizar uma das propriedades do objeto, você deve espalhar o objeto dentro da função que define o estado, e somente atribuir o valor da propriedade que você quer alterar.",
    },
  },
};
