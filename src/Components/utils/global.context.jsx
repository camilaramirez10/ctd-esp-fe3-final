//utiliza useReducer en cambio de usestate
import { createContext, useContext, useReducer, useEffect } from "react";
import axios from 'axios'
import { reducer } from "../reducers/reducer"

const ContextGlobal = createContext();

const initialState = {
    list: [],
    favs: [],
    theme: 'light'
}

//este es el componente ContextProvider
const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const parametroUrl = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    axios(parametroUrl)
    .then(res => dispatch({type: 'GET_CHARACTERS', payload: res.data}))
  },[])

  //el provider lo que hace es atribuirle el estado que creamos en el contexto
  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal)




//coloca el context en el main dentro de la etiqueta brouserRouter por si necesitamos 
//utilizar alguna herramienta de react

//el reducer se conforma de la desestructuracion de 2 elementos en un array