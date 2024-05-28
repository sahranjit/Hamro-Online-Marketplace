import axios from "axios";
import * as React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserForm from "../UserForm";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

let UpdateSeller = () => {
  let [initialValue, setInitialValue] = useState({});

  let navigate = useNavigate();
  let params = useParams();

  let getSeller = async () => {
    let result = await axios({
      url: `http://localhost:8000/sellers/${params.id}`,
      method: "get",
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
  const handleSubmit = (data) => async (e) => {
    e.preventDefault();

    try {
      let result = await axios({
        url: `http://localhost:8000/sellers/${params.id}`,
        method: "patch",
        data: data,
      });
      navigate(`/admin/user`);
      toast.success(result.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <UserForm
      initialValue={initialValue}
      handleSubmit={handleSubmit}
      title="Update Seller"
    ></UserForm>
  );
};

export default UpdateSeller;
