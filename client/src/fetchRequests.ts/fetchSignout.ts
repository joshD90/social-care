import { AuthReducerActions } from "../types/authTypes";

const fetchSignout = async (
  userDispatch: React.Dispatch<AuthReducerActions>
) => {
  const url = "http://localhost:5000/auth/signout";
  try {
    const response = await fetch(url);
    if (!response.ok)
      return userDispatch({
        type: "GET_USER_FAILURE",
        payload: `There was an Error in Logging Out Server-Side with Error code ${response.status}`,
      });
    return userDispatch({ type: "GET_USER_SUCCESS", payload: null });
  } catch (error) {
    if (error instanceof Error)
      return userDispatch({
        type: "GET_USER_FAILURE",
        payload: `There was an Error in Logging out ${error.message}`,
      });
  }
};

export default fetchSignout;
