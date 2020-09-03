import { LOAD_MODELS, UPDATE_MODEL, ADD_MODEL } from "../types";
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
    case UPDATE_MODEL:
      return {
        ...state,
        loading: false,
        models: state.models.map((model) =>
          model._id === payload._id ? (model = payload) : model
        ),
      };
    case ADD_MODEL:
      return {
        ...state,
        loading: false,
        models: [payload, ...state.models],
      };
    default:
      return state;
  }
};
export default modelReducer;
