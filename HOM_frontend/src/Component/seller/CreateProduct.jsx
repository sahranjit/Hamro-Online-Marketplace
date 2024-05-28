import axios from "axios";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductForm from "./ProductForm";
import { useState } from "react";
import { getLocalStorage } from "../../utils/localStorage";
import { useContext } from "react";
import { Context1 } from "../../App";

let CreateProduct = () => {
  let [initialValue, _setInitialValue] = useState({
    category: "",
    productName: "",
    productImage: "",
    price: "",
    description: "",
  });
  let context = useContext(Context1);

  let navigate = useNavigate();

  const handleSubmit = (data) => async (e) => {
    e.preventDefault();

    try {
      let result = await axios({
        url: "http://localhost:8000/products",
        method: "post",
        data: data,
        headers: {
          Authorization: `Bearer ${context.token.sellerToken}`,
        },
      });
      console.log("***");
      navigate("/seller/product");
      toast.success(result.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <ProductForm
      initialValue={initialValue}
      handleSubmit={handleSubmit}
      title="Create Product"
    ></ProductForm>
  );
};

export default CreateProduct;
