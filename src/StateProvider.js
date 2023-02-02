import { createContext, useContext, useReducer } from "react";


// This is the data layer
export const StateContext = createContext();

// Build a provider
export const StateProvider = ({ reducer, initialState, children }) => {
    return <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
}

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);