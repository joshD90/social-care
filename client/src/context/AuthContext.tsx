import {
  createContext,
  FC,
  SetStateAction,
  useState,
  Dispatch,
  ReactNode,
  useReducer,
} from "react";
import userReducer from "../reducers/userReducer";

import {
  AuthReducerActions,
  AuthStateTypes,
  UserTypes,
} from "../types/authTypes";

type Props = { children?: ReactNode };

type UserContextType = {
  currentUser: AuthStateTypes;
  userDispatch: Dispatch<AuthReducerActions> | (() => {});
};

//because we must export the AuthContext external to the Provider wrapper we need to be able to pass an empty function to the authContext initialiser however this empty function will never be used in child components it will only be consuming the setState function
export const AuthContext = createContext<UserContextType>({
  currentUser: { isLoading: false, user: null, error: null },
  userDispatch: () => {},
});

const AuthContextProvider: FC<Props> = ({ children }) => {
  const [currentUser, userDispatch] = useReducer(userReducer, {
    isLoading: false,
    user: null,
    error: null,
  });

  return (
    <AuthContext.Provider value={{ currentUser, userDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
