import React from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import WebsiteUserLayout from "../../layout/WebsiteUserLayout";
import WebsiteUserPanel from "../websiteUserPanel/WebsiteUserPanel";
import BuyerLayout from "../../layout/BuyerLayout";
import BuyerLandingPage from "../buyer/BuyerLandingPage";
import BuyerRegister from "../buyer/BuyerRegister";
import SellerLogin from "../seller/SellerLogin";
import BuyerLogin from "../buyer/BuyerLogin";
import BuyerProfile from "../buyer/BuyerProfile";
import BuyerUpdateProfile from "../buyer/BuyerUpdateProfile";
import ReadProductByBuyer from "../buyer/ReadProductByBuyer";
import ReadSpecificProduct from "../seller/ReadSpecificProduct";

const BuyerRoutes = () => {
  let location = useLocation();

  return (
    <Routes>
      <Route
        path="buyer"
        element={
          <div>
            {location.pathname === "/buyer/login" ||
            location.pathname === "/buyer/register" ? (
              <Outlet></Outlet>
            ) : (
              <BuyerLayout>
                <Outlet></Outlet>
              </BuyerLayout>
            )}
          </div>
        }
      >
        <Route index element={<BuyerLandingPage></BuyerLandingPage>}></Route>
        <Route
          path="register"
          element={<BuyerRegister></BuyerRegister>}
        ></Route>
        <Route path="login" element={<BuyerLogin></BuyerLogin>}></Route>
        <Route path="profile" element={<Outlet></Outlet>}>
          <Route index element={<BuyerProfile></BuyerProfile>}></Route>
          <Route
            path="update"
            element={<BuyerUpdateProfile></BuyerUpdateProfile>}
          ></Route>
          <Route
            path="update-password"
            element={
              <BuyerUpdateProfile updatePassword={true}></BuyerUpdateProfile>
            }
          ></Route>
        </Route>

        <Route path="product" element={<Outlet></Outlet>}>
          <Route
            index
            element={<ReadProductByBuyer></ReadProductByBuyer>}
          ></Route>
          <Route
            path=":id"
            element={<ReadSpecificProduct></ReadSpecificProduct>}
          ></Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default BuyerRoutes;
