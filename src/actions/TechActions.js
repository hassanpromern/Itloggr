import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECH_ERRORS,
} from "./type";

//get techs from the server
export const getTechs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/techs");
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECH_ERRORS,
      payload: err.response.statusText,
    });
  }
};
//add tech start here
export const addTech = (tech) => async (dispatch) => {
  console.log("inside add tech : ", tech);
  try {
    setLoading();

    const res = await fetch("/techs", {
      method: "POST",
      body: JSON.stringify(tech),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    // console.log("res::::: ", res);
    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (err) {
    // console.log("Error:", err);
    dispatch({
      type: TECH_ERRORS,
      payload: err.response.statusText,
    });
  }
};
//delete Logs from server
export const deleteTech = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/techs/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: TECH_ERRORS,
      payload: err.response.statusText,
    });
  }
};
//set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
