import { BOTH_ON, TOGGLE_LIGHT } from "../action_types";

const initialState = {
  bedroom: { light1: false, light2: false },
  kitchen: { light1: false, light2: false },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LIGHT:
      return {
        ...state,
        [action.payload.room]: {
          ...state[action.payload.room],
          [action.payload.light]:
            !state[action.payload.room][action.payload.light],
        },
      };
    case BOTH_ON:
      return {
        ...state,
        [action.payload.room]: { light1: true, light2: true },
      };
    default:
      return state;
  }
};

export default reducer;
