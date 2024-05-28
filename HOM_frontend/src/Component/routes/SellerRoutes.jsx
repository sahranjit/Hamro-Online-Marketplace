import React from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import SellerLayout from "../../layout/SellerLayout";
import SellerLandingPage from "../seller/SellerLandingPage";
import SellerRegister from "../seller/SellerRegister";
import SellerLogin from "../seller/SellerLogin";
import SellerProfile from "../SellerProfile";
import SellerUpdateProfile from "../SellerUpdateProfile";
import ReadProductBySeller from "../ReadProductBySeller";
import CreateProduct from "../seller/CreateProduct";
import ReadSpecificProduct from "../seller/ReadSpecificProduct";
import UpdateProduct from "../seller/UpdateProduct";

const SellerRoutes = () => {
  let location = useLocation();
  return (
    <Routes>
      <Route
        path="seller"
        element={
          <div>
            {location.pathname === "/seller/login" ||
            location.pathname === "/seller/register" ? (
              <Outlet></Outlet>
            ) : (
              <SellerLayout>
                <Outlet></Outlet>
              </SellerLayout>
            )}
          </div>
        }
      >
        <Route index element={<SellerLandingPage></SellerLandingPage>}></Route>
        <Route
          path="register"
          element={<SellerRegister></SellerRegister>}
        ></Route>
        <Route path="login" element={<SellerLogin></SellerLogin>}></Route>
        <Route path="profile" element={<Outlet></Outlet>}>
          <Route index element={<SellerProfile></SellerProfile>}></Route>
          <Route
            path="update"
            element={<SellerUpdateProfile></SellerUpdateProfile>}
          ></Route>
          <Route
            path="update-password"
            element={
              <SellerUpdateProfile updatePassword={true}></SellerUpdateProfile>
            }
          ></Route>
        </Route>
        <Route path="product" element={<Outlet></Outlet>}>
          <Route
            index
            element={<ReadProductBySeller></ReadProductBySeller>}
          ></Route>
          <Route
            path="create"
            element={
              <CreateProduct navigateTo="/seller/product"></CreateProduct>
            }
          ></Route>
          <Route
            path=":id"
            element={<ReadSpecificProduct></ReadSpecificProduct>}
          ></Route>
          <Route
            path="update/:id"
            element={<UpdateProduct></UpdateProduct>}
          ></Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default SellerRoutes;
