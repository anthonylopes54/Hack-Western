const initialState = false;

export const isSubscribed = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_CHECKBOX":
      return !action.payload;
    default:
      return state;
  }
};
export default isSubscribed;