const initialState = false;

export const isSubscribed = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_CHECKBOX":
      state = !state;
      console.log('state: ' + state);
      return state;
    default:
      return state;
  }
};
export default isSubscribed;
