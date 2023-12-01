//utiliza useReducer en cambio de usestate
import { createContext, useContext, useState } from "react";


const ContextGlobal = createContext();

const initialStates = {
    list: [],
    favs: []

}

//este es el componente ContextProvider
const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [theme, setTheme] = useState('light')

  //el provider lo que hace es atribuirle el estado que creamos en el contexto
  return (
    <ContextGlobal.Provider value={{theme, setTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal)




//coloca el context en el main dentro de la etiqueta brouserRouter por si necesitamos 
//utilizar alguna herramienta de react

//el reducer se conforma de la desestructuracion de 2 elementos en un array