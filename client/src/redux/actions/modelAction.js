import axios from "axios";
import { LOAD_MODELS, UPDATE_MODEL } from "../types";
// Load Models
export const getModels = (payload = {}) => async (dispatch) => {
  try {
    let objJsonStr = JSON.stringify(payload);
    let objJsonB64 = Buffer.from(objJsonStr).toString("base64");
    const res = await axios.get("/api/models/" + objJsonB64);

    dispatch({
      type: LOAD_MODELS,
      payload: res.data,
    });
  } catch (err) {
    // dispatch(setAlert("Something went wrong", "danger", 4000));
  }
};

// update Model
export const updateModel = (id, payload) => async (dispatch) => {
  try {
    const res = await axios.put("/api/models/" + id, payload);

    dispatch({
      type: UPDATE_MODEL,
      payload: res.data,
    });
    // dispatch(setAlert("Student Updated", "success", 4000));
  } catch (err) {
    // dispatch(setAlert("Something went wrong", "danger", 4000));
  }
};
