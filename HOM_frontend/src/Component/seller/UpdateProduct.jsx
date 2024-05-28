import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductForm from "./ProductForm";

let UpdateProduct = () => {
  let [initialValue, setInitialValue] = useState({
    category: "",
    productName: "",
    productImage: "",
    price: "",
    description: "",
  });

  let params = useParams();
  let navigate = useNavigate();

  let getProduct = async () => {
    let result = await axios({
      url: `http://localhost:8000/products/${params.id}`,
      method: "get",
    });
    let data = result.data.result;
    setInitialValue({
      category: data?.category?._id,
      productName: data.productName,
      productImage: data.productImage,
      description: data.description,
      price: data.price,
    });
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleSubmit = (data) => async (e) => {
    e.preventDefault();

    try {
      let result = await axios({
        url: `http://localhost:8000/products/${params.id}`,
        method: "patch",
        data: data,
      });
      navigate(`/seller/product`);
      toast.success(result.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <ProductForm
      initialValue={initialValue}
      handleSubmit={handleSubmit}
      title="Update Product"
    ></ProductForm>
  );
};

export default UpdateProduct;
