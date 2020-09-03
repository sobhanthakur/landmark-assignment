import { LOAD_MODELS } from "../types";
const initialState = {
  loading: true,
  models: [],
};

const modelReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case LOAD_MODELS:
      return {
        ...state,
        loading: false,
        models: payload,
      };
    default:
      return state;
  }
};
export default modelReducer;
