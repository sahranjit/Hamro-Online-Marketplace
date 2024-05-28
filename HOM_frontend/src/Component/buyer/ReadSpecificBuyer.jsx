import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserDetailPage from "../UserDetailPage";

const ReadSpecificBuyer = () => {
  let [data, setData] = useState({});
  let params = useParams();
  let getUser = async () => {
    let result = await axios({
      url: `http://localhost:8000/buyers/${params.id}`,
      method: "get",
    });
    setData(result.data.result);
  };

  useEffect(() => {
    getUser();
  }, []);
  return <UserDetailPage data={data}></UserDetailPage>;
};

export default ReadSpecificBuyer;
