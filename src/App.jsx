import { useReducer } from "react";
import "./App.css";
import HomePage from './pages/HomePage';

function reducer(state, action){
  switch (action.type){
    case "increment":
      return {count: state.count + 1};
    case "decrement":
      return {count: state.count - 1};
    default:
      return state;
  }
}

const initialState = { count:0 };

   function App(){
    const [state, dispatch] = useReducer(reducer, initialState)

    return(
      <>
        <HomePage />
        <h1>Luke</h1>
        <p>{state.count}</p>
        <button onClick={()=>dispatch({type:"increment"})}>+</button>
        <button onClick={()=>dispatch({type:"decrement"})}>-</button>
      </>
    )
   }

   export default App;