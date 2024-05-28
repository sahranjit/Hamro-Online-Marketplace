import React, { useContext } from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import WebsiteUserLayout from "../../layout/WebsiteUserLayout";
import WebsiteUserPanel from "../websiteUserPanel/WebsiteUserPanel";
import AdminLayout from "../../layout/AdminLayout";
import AdminLandingPage from "../admin/AdminLandingPage";
import AdminProfile from "../admin/AdminProfile";
import AdminUpdateProfile from "../admin/AdminUpdateProfile";
import AdminLogin from "../admin/AdminLogin";
import ReadSpecificSeller from "../seller/ReadSpecificSeller";
import ReadSpecificBuyer from "../buyer/ReadSpecificBuyer";
import ReadProductByAdmin from "../ReadProductByAdmin";
import ReadSpecificProduct from "../seller/ReadSpecificProduct";
import ReadUser from "../admin/ReadUser";
import GetCategory from "../admin/GetCategory";
import CreateCategory from "../admin/CreateCategory";
import UpdateCategory from "../admin/UpdateCategory";
import UpdateSeller from "../admin/UpdateSeller";
import UpdateBuyer from "../admin/UpdateBuyer";
import { Context1 } from "../../App";
import SellerRegister from "../seller/SellerRegister";
import SellerLogin from "../seller/SellerLogin";
import SellerLandingPage from "../seller/SellerLandingPage";
import SellerLayout from "../../layout/SellerLayout";
import UpdateProduct from "../seller/UpdateProduct";
import SellerProfile from "../SellerProfile";
import SellerUpdateProfile from "../SellerUpdateProfile";
import CreateProduct from "../seller/CreateProduct";
import ReadProductBySeller from "../ReadProductBySeller";
import AdminRoutes from "./AdminRoutes";
import SellerRoutes from "./SellerRoutes";
import BuyerRoutes from "./BuyerRoutes";

const AppRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Outlet></Outlet>}>
          <Route
            index
            element={
              <WebsiteUserLayout>
                <WebsiteUserPanel></WebsiteUserPanel>
              </WebsiteUserLayout>
            }
          ></Route>
        </Route>
      </Routes>
      <AdminRoutes></AdminRoutes>
      <SellerRoutes></SellerRoutes>
      <BuyerRoutes></BuyerRoutes>
    </div>
  );
};

export default AppRoute;
