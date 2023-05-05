import {
  createContext,
  FC,
  SetStateAction,
  useState,
  Dispatch,
  ReactNode,
  useReducer,
  useEffect,
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
    isLoading: true,
    user: null,
    error: null,
  });
  //we want to get our user if there is any in our cookies
  useEffect(() => {
    const url = "http://localhost:5000/auth/user-data";
    const getUserFromCookie = (async () => {
      try {
        const response = await fetch(url, { credentials: "include" });
        if (!response.ok)
          return userDispatch({
            type: "GET_USER_FAILURE",
            payload: "Not Authorised",
          });
        const user = await response.json();
        return userDispatch({ type: "GET_USER_SUCCESS", payload: user });
      } catch (error) {
        if (error instanceof Error)
          userDispatch({ type: "GET_USER_FAILURE", payload: error.message });
      }
    })();
  }, []);

  if (currentUser.isLoading)
    return (
      <div className="flex items-center justify-center bg-slate-800 text-slate-50">
        ...Loading
      </div>
    );

  return (
    <AuthContext.Provider value={{ currentUser, userDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
