import axios from "axios";
import * as React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context1 } from "../../App";
import useLogout from "../../hook/useLogout";
import UserForm from "../UserForm";

let BuyerUpdateProfile = ({ updatePassword = false }) => {
  let [initialValue, setInitialValue] = useState({});
  let context = useContext(Context1);

  let navigate = useNavigate();

  let getSeller = async () => {
    let result = await axios({
      url: "http://localhost:8000/buyers/profile",
      method: "get",
      headers: {
        Authorization: `Bearer ${context.token.buyerToken}`, // Assuming you're using a Bearer token
        "Content-Type": "application/json", // Adjust content type as needed
      },
    });
    let data = result.data.result;
    setInitialValue({
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
      email: data.email,
      phoneNumber: data.phoneNumber,
      address: data.address,
      profileImage: data.profileImage,
    });
  };
  React.useEffect(() => {
    getSeller();
  }, []);
  let logout = useLogout();
  let handleLogout = () => {
    logout("/buyer/login", "buyerToken");
  };
  const handleSubmit = (data) => async (e) => {
    e.preventDefault();

    try {
      let result = await axios({
        url: `http://localhost:8000/buyers/profile/update`,
        method: "patch",
        data: data,
        headers: {
          Authorization: `Bearer ${context.token.buyerToken}`, // Assuming you're using a Bearer token
          "Content-Type": "application/json", // Adjust content type as needed
        },
      });

      if (updatePassword) {
        handleLogout();
      } else {
        navigate(`/buyer/profile`);
      }
      toast.success(result.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <UserForm
      initialValue={initialValue}
      handleSubmit={handleSubmit}
      title="Update Buyer"
      update={true}
      updatePassword={updatePassword}
    ></UserForm>
  );
};

export default BuyerUpdateProfile;
