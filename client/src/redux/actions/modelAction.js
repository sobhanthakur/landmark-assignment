import axios from "axios";
import { LOAD_MODELS } from "../types";
// Load Todos
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
