import React, { useContext, useEffect } from "react";
import BuyerNavLink from "../Component/buyer/BuyerNavLink";
import { Context1 } from "../App";
import { useNavigate } from "react-router-dom";

const BuyerLayout = ({ children }) => {
  let context = useContext(Context1);
  let navigate = useNavigate();

  useEffect(() => {
    if (!context.token.buyerToken) {
      navigate("/buyer/login");
    }
  }, []);
  return (
    <div>
      <BuyerNavLink></BuyerNavLink>
      {children}
    </div>
  );
};

export default BuyerLayout;
