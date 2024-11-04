import { createContext, useReducer } from 'react';

const STAGES = ['First', 'Second', 'Third'];

const initialState = {
  Stage: STAGES[0],
};

console.log(initialState);

const CtReducer = (state, action) => {
  console.log(state, action);

  switch (action.type) {
    case 'LOGIN_STAGE':
      return {
        Stage: STAGES[1],
      };

    case 'CADASTRO_STAGE':
      return {
        Stage: STAGES[2],
      };

    default:
      return state;
  }
};

export const CtContext = createContext();

export const CtProvider = ({ children }) => {
  const value = useReducer(CtReducer, initialState);

  return <CtContext.Provider value={value}>{children}</CtContext.Provider>;
};