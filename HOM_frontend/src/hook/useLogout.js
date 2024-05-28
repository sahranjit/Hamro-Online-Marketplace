import { useContext } from "react";
import { clearLocalStorage } from "../utils/localStorage";
import { Context1 } from "../App";
import { useNavigate } from "react-router-dom";

let useLogout = () => {
  let context = useContext(Context1);
  let navigate = useNavigate();

  return (linkAfterLogout, name) => {
    console.log("name", name);
    console.log("link", linkAfterLogout);
    clearLocalStorage(name);
    context.setToken({
      ...(context.token || {}),
      [name]: null,
    });
    navigate(linkAfterLogout);
  };
};

export default useLogout;
