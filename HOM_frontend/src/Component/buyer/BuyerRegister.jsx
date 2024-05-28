import axios from "axios";
import * as React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserForm from "../UserForm";
import { useNavigate } from "react-router-dom";

let BuyerRegister = () => {
  let initialValue = {
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    phoneNumber: "",
    address: "",
    profileImage: "",
  };
  let navigate = useNavigate();
  const handleSubmit = (data) => async (e) => {
    e.preventDefault();
    try {
      let result = await axios({
        url: "http://localhost:8000/buyers",
        method: "post",
        data: data,
      });
      toast.success(result.data.message);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <UserForm
      initialValue={initialValue}
      handleSubmit={handleSubmit}
      title="Sign Up Buyer"
    ></UserForm>
  );
};

export default BuyerRegister;
