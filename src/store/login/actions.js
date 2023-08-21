import axios from "axios";

export const loginAction = (payload, success) => {
  return (dispatch) => {
    axios
      .post("http://localhost:8080/login", payload)
      .then((response) => {
        window.localStorage.setItem("userLog", JSON.stringify({
          user: payload.email,
          password: payload.password,
          loggedIn: true,
        }));
        dispatch({ type: "isLoggedIn", payload: response.data.data });
        success();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const registerAction = (payload, success) => {
  return (dispatch) => {
    axios
      .post("http://localhost:8080/register", payload)
      .then((response) => {
        dispatch({ type: "userRegistration", payload: response.data.data });
        success();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
