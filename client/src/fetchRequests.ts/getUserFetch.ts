import { AuthReducerActions, AuthSignIn } from "../types/authTypes";

const getFetchUser = async (
  credentials: AuthSignIn,
  userDispatch: React.Dispatch<AuthReducerActions> | (() => {}),
  abortController: AbortController
) => {
  try {
    userDispatch({ type: "GET_USER_INIT" });

    const response = await fetch("http://localhost:5000/auth/signin", {
      signal: abortController.signal,
      method: "POST",
      body: JSON.stringify({ ...credentials }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (!response.ok)
      return userDispatch({
        type: "GET_USER_FAILURE",
        payload: `Authentication Failed With Error Code ${response.status}`,
      });

    const userData = await response.json();
    return userDispatch({
      type: "GET_USER_SUCCESS",
      payload: {
        username: userData.username,
        privileges: userData.privileges,
      },
    });
  } catch (error) {
    if (error instanceof Error)
      return userDispatch({
        type: "GET_USER_FAILURE",
        payload: `Error with message: ${error.message}`,
      });
  }
};

export default getFetchUser;
