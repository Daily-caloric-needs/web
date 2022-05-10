import { DRINK_WATER } from "./actions";

const initialState = {
  drunk: 0
};

export default function waterReducer(state = initialState, action) {
  switch (action.type) {
    case DRINK_WATER: {
      return { ...state, drunk: state.drunk + action.payload.volume };
    }
    default:
      return state;
  }
}
