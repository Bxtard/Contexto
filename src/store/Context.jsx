import { createContext, useContext, useReducer } from "react";

const context = createContext();

function reducer(state, action) {
  const {
    candidate1,
    candidate2,
    candidate3,
    candidate4,
    total,
    porcentual,
    showCandidate1,
    showCandidate2,
    showCandidate3,
    showCandidate4,
  } = state;
  switch (action.type) {
    case "VOTE_CANDIDATE1":
      return {
        ...state,
        candidate1: candidate1 + 1,
        total: total + 1,
      };
    case "VOTE_CANDIDATE2":
      return {
        ...state,
        candidate2: candidate2 + 1,
        total: total + 1,
      };
    case "VOTE_CANDIDATE3":
      return {
        ...state,
        candidate3: candidate3 + 1,
        total: total + 1,
      };
    case "VOTE_CANDIDATE4":
      return {
        ...state,
        candidate4: candidate4 + 1,
        total: total + 1,
      };
    case "PORCENTUAL":
      return {
        ...state,
        porcentual: !porcentual,
      };
    case "SHOW_CANDIDATE1":
      return {
        ...state,
        showCandidate1: !showCandidate1,
      };
    case "SHOW_CANDIDATE2":
      return {
        ...state,
        showCandidate2: !showCandidate2,
      };
    case "SHOW_CANDIDATE3":
      return {
        ...state,
        showCandidate3: !showCandidate3,
      };
    case "SHOW_CANDIDATE4":
      return {
        ...state,
        showCandidate4: !showCandidate4,
      };
    default:
      return state;
  }
}

const initialState = {
  candidate1: 0,
  candidate2: 0,
  candidate3: 0,
  candidate4: 0,
  total: 0,
  porcentual: false,
  showCandidate1: false,
  showCandidate2: false,
  showCandidate3: false,
  showCandidate4: false,
};

export const useContextProvider = () => {
  const tempContext = useContext(context);

  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppProvider");
  }

  return tempContext;
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const store = {
    state,
    dispatch,
  };

  return <context.Provider value={store}>{children}</context.Provider>;
};

export default context;
