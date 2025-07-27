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
      
      </>
    )
   }

   export default App;