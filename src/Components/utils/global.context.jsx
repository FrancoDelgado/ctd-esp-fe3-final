import { createContext, useReducer } from "react";
import { createTheme, ThemeProvider } from "@mui/system";
import { green, blue } from "@mui/material/colors";

export const initialState = {theme: "light", data: [], favoritos : [], flag : true}

export const ContextGlobal = createContext(undefined);

const funcionReduc = (state, action) => {

switch(action.type) {

  case "data":
  return{...state, data: action.paylaod}

  case "favoritos":
  return{...state, favoritos: action.paylaod}

  case "flag":
  return{...state, flag: action.paylaod}

  case "theme":
  return{...state, theme: action.paylaod}
  
  default: return state
  }
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, dispach] = useReducer(funcionReduc, initialState)

  const tema = createTheme ({
    primaryColor : {
      main : state.theme === "light" ? green : blue,
    },
    secundaryColor : {
      main : green
    },
  })

  const stateAndDispach = {
    state, dispach
  }

  return (
    <ContextGlobal.Provider value={{stateAndDispach}}>
      <ThemeProvider theme = {tema}>
        <div className={state.theme}>
          {children}
        </div>
      </ThemeProvider>
    </ContextGlobal.Provider>
  );
};
