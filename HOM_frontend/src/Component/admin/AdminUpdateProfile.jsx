import axios from "axios";
import * as React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { clearLocalStorage, getLocalStorage } from "../../utils/localStorage";
import UserForm from "../UserForm";
import { useContext } from "react";
import { Context1 } from "../../App";
import useLogout from "../../hook/useLogout";

let AdminUpdateProfile = ({ updatePassword = false }) => {
  let [initialValue, setInitialValue] = useState({});
  let context = useContext(Context1);

  let logout = useLogout();
  let handleLogout = () => {
    logout("/admin/login", "adminToken");
  };

  let navigate = useNavigate();

  let getAdmin = async () => {
    let result = await axios({
      url: "http://localhost:8000/admins/profile",
      method: "get",
      headers: {
        Authorization: `Bearer ${context?.token?.adminToken}`, // Assuming you're using a Bearer token
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
    getAdmin();
  }, []);
  const handleSubmit = (data) => async (e) => {
    e.preventDefault();

    try {
      let result = await axios({
        url: `http://localhost:8000/admins/profile/update`,
        method: "patch",
        data: data,
        headers: {
          Authorization: `Bearer ${context?.token?.adminToken}`, // Assuming you're using a Bearer token
          "Content-Type": "application/json", // Adjust content type as needed
        },
      });

      if (updatePassword) {
        handleLogout();
      } else {
        navigate(`/admin/profile`);
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
      title="Update Admin"
      update={true}
      updatePassword={updatePassword}
    ></UserForm>
  );
};

export default AdminUpdateProfile;
