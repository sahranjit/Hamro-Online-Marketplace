import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Context1 } from "../App";
import UserDetailPage from "./UserDetailPage";

const SellerProfile = () => {
  let [data, setData] = useState({});
  let context = useContext(Context1);

  const getUser = async () => {
    console.log("**********************getUser");
    try {
      const result = await axios({
        url: "http://localhost:8000/sellers/profile",
        method: "get",
        headers: {
          Authorization: `Bearer ${context.token.sellerToken}`, // Assuming you're using a Bearer token
          "Content-Type": "application/json", // Adjust content type as needed
        },
      });
      setData(result.data.result);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getUser();
  }, [context.token.sellerToken]);

  console.log(data);
  return (
    <div>
      <UserDetailPage data={data}></UserDetailPage>
    </div>
  );
};

export default SellerProfile;
