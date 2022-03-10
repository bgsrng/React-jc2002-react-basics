import types from "./counter/types";

const initial_state = {
  count: 0,
};

const counterReducer = (state = initial_state, action) => {
  if (action.type === types.INCREMENT_COUNTER) {
    return {
      ...state,
      count: state.count + 1,
    };
  } else if (action.type === types.DECREMENT_COUNTER) {
    return {
      ...state,
      count: state.count - 1,
    };
  } else if (action.type === "RESET_COUNTER") {
    return initial_state;
  }

  if (action.type === "INPUT_VALUE") {
    return {
      ...state,
      count: parseInt(action.payload),
    };
  }

  return state;
};

export default counterReducer;
