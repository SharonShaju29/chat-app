const initialState = {
  chatHistory: [],
  currentChat: [],
};

const chatReducer = (state = initialState, action ) => {
  if (action.type === "chatHistory") {
    return { ...state, chatHistory: action.payload };
  } else if (action.type === "chatByUser") {
    return { ...state, currentChat: action.payload };
  } else if (action.type === "chatNewMessage") {
    return { ...state, currentChat: action.payload };
  }
  return state;
};

export default chatReducer;
