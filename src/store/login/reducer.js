// import loginAction from "./actions";

const initialState = {
  userDetails: {},
  isLoggedIn: false,
};

const loginReducer = (state = initialState, action) => {
  if (action.type === "userLogin") {
    return { ...state, userDetails: window.localStorage.getItem("userLog") };
  } 
  return state;
};

export default loginReducer;
