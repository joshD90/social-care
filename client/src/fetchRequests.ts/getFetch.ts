import { SingeServiceReducerActions } from "../types/serviceTypes";

const getFetch = async (
  dispatch: React.Dispatch<SingeServiceReducerActions>,
  endPoint: string,
  controller: AbortController
) => {
  const baseUrl = "http://localhost:5000/services";
  try {
    //set our loading to true
    dispatch({ type: "GET_INIT" });
    const result = await fetch(`${baseUrl}${endPoint}`, {
      signal: controller.signal,
      credentials: "include",
    });
    if (!result.ok)
      return dispatch({
        type: "GET_FAILURE",
        payload: `Could not get the service, with error code ${result.status}`,
      });
    const data = await result.json();

    //update our state on success
    dispatch({ type: "GET_SUCCESS", payload: data });
  } catch (error) {
    if (error instanceof Error)
      return dispatch({ type: "GET_FAILURE", payload: error.message });
    console.log(error);
  }
};

export default getFetch;
