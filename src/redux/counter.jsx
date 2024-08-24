const initialState = {
  count: 10,
};

export const increment = (value) => ({
  type: "increment",
  value: value,
});

export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.value };

    default:
      return initialState;
  }
}
