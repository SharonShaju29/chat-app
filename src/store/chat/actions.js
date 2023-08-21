import axios from "axios";

export const chatHistoryAction = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/chat/history",
        payload
      );

      dispatch({ type: "chatHistory", payload: response.data.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const chatByUserAction = (payload) => {
  return async (dispatch) => {
    axios
      .post("http://localhost:8080/chat", payload)
      .then((response) => {
        dispatch({ type: "chatByUser", payload: response.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
