/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";
import appReducer from "./app_reducer";

const AppContext = createContext();

const initialState = {
  showForm : false,
}

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const toggleForm = () => {
    dispatch({type: "TOGGLE_FORM"})
  }

  return <AppContext.Provider value={{...state, toggleForm}}>
    {children}
  </AppContext.Provider>
}

const useAppContext = () => {
  return useContext(AppContext)
}

export {useAppContext, AppProvider}