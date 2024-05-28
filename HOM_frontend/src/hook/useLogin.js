import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context1 } from "../App";
import { setLocalStorage } from "../utils/localStorage";

let useLogin = () => {
  let context = useContext(Context1);
  let navigate = useNavigate();
  return (linkAfterLogin, key, value) => {
    setLocalStorage(key, value);
    context.setToken({
      ...(context.token || {}),
      [key]: value,
    });
    navigate(linkAfterLogin);
  };
};

export default useLogin;
