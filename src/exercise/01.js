// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Counter({initialCount = 0, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  // function countReducer(count, step) {
  //   // count hiya el current value , step c'est le payload passé en changecount
  //   return count + step
  // }
  // Extra 2
  const countReducer = (state, action) => {
    const {type, step} = action
    switch (type) {
      case 'INCREMENT': {
        return {
          ...state,
          count: state.count + step,
        }
      }
      default: {
        throw new Error(`L'action ${type} n'existe pas`)
      }
    }
  }
  // const [count, setCount] = React.useReducer(countReducer, initialCount)
  // Extra 1
  // const [count, ChangeCount] = React.useReducer(countReducer, initialCount)
  // Extra 2
  // const [state, setState] = React.useReducer(countReducer, {
  //   count: initialCount,
  // })
  // Extra 4
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  // Extra 3
  // const [state,dispatch]= React.useReducer(countReducer,{
  // count:initialCount
  // })
  const {count} = state

  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  // 💰 React.useReducer(countReducer, initialCount)

  // const increment = () => ChangeCount(step)

  // Extra 2
  // const increment = () => setState({count: count + step})
  // Extra 4
  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
