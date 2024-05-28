import React, { useContext } from "react";
import SellerLogin from "./seller/SellerLogin";
import { Routes, Route, Navigate } from "react-router-dom";
import BuyerLogin from "./buyer/BuyerLogin";
import ReadProduct from "./ReadProduct";
import ReadUser from "./admin/ReadUser";
import CreateProduct from "./seller/CreateProduct";
import SellerRegister from "./seller/SellerRegister";
import BuyerRegister from "./buyer/BuyerRegister";
import Category from "./admin/Category";
import GetCategory from "./admin/GetCategory";
import UpdateCategory from "./admin/UpdateCategory";
import UpdateSeller from "./admin/UpdateSeller";
import UpdateBuyer from "./admin/UpdateBuyer";
import UpdateProduct from "./seller/UpdateProduct";
import SellerLandingPage from "./seller/SellerLandingPage";
import BuyerLandingPage from "./buyer/BuyerLandingPage";
import { Context1 } from "../App";
import WebsiteUserPanel from "./websiteUserPanel/WebsiteUserPanel";
import WebsiteUserLayout from "../layout/WebsiteUserLayout";
import SellerLayout from "../layout/SellerLayout";
import AdminLandingPage from "./admin/AdminLandingPage";
import AdminLayout from "../layout/AdminLayout";
import CreateCategory from "./admin/CreateCategory";
import ReadSpecificProduct from "./seller/ReadSpecificProduct";
import ReadSpecificSeller from "./seller/ReadSpecificSeller";
import ReadSpecificBuyer from "./buyer/ReadSpecificBuyer";
import ReadProductBySeller from "./ReadProductBySeller";
import ReadProductByAdmin from "./ReadProductByAdmin";
import SellerProfile from "./SellerProfile";
import SellerUpdateProfile from "./SellerUpdateProfile";
import AdminLogin from "./admin/AdminLogin";
import AdminProfile from "./admin/AdminProfile";
import AdminUpdateProfile from "./admin/AdminUpdateProfile";

/* 
seller/profile/update-password
*/

const MyRoute = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <WebsiteUserLayout>
              <WebsiteUserPanel></WebsiteUserPanel>
            </WebsiteUserLayout>
          }
        ></Route>
        <Route
          path="/admin"
          element={
            <AdminLayout>
              <AdminLandingPage></AdminLandingPage>
            </AdminLayout>
          }
        ></Route>
        <Route
          path="/admin/profile"
          element={
            <AdminLayout>
              <AdminProfile></AdminProfile>
            </AdminLayout>
          }
        ></Route>
        <Route
          path="/admin/profile/update"
          element={
            <AdminLayout>
              <AdminUpdateProfile></AdminUpdateProfile>
            </AdminLayout>
          }
        ></Route>

        <Route
          path="admin/profile/update-password"
          element={
            <AdminLayout>
              <AdminUpdateProfile updatePassword={true}></AdminUpdateProfile>
            </AdminLayout>
          }
        ></Route>

        <Route path="/admin/login" element={<AdminLogin></AdminLogin>}></Route>
        <Route
          path="/admin/seller/:id"
          element={
            <AdminLayout>
              <ReadSpecificSeller></ReadSpecificSeller>
            </AdminLayout>
          }
        ></Route>
        <Route
          path="/admin/buyer/:id"
          element={
            <AdminLayout>
              <ReadSpecificBuyer></ReadSpecificBuyer>
            </AdminLayout>
          }
        ></Route>
        <Route
          path="/admin/product"
          element={
            <AdminLayout>
              <ReadProductByAdmin></ReadProductByAdmin>
            </AdminLayout>
          }
        ></Route>
        <Route
          path="/admin/product/:id"
          element={
            <AdminLayout>
              <ReadSpecificProduct></ReadSpecificProduct>
            </AdminLayout>
          }
        ></Route>
        <Route
          path="/admin/user"
          element={
            <AdminLayout>
              <ReadUser></ReadUser>
            </AdminLayout>
          }
        ></Route>

        <Route
          path="/admin/category"
          element={
            <AdminLayout>
              <GetCategory></GetCategory>
            </AdminLayout>
          }
        ></Route>
        <Route
          path="/admin/category/create"
          element={
            <AdminLayout>
              <CreateCategory></CreateCategory>
            </AdminLayout>
          }
        ></Route>
        <Route
          path="/admin/category/update/:id"
          element={
            <AdminLayout>
              <UpdateCategory></UpdateCategory>
            </AdminLayout>
          }
        ></Route>
        <Route
          path="/admin/seller/update/:id"
          element={
            <AdminLayout>
              <UpdateSeller></UpdateSeller>
            </AdminLayout>
          }
        ></Route>
        <Route
          path="/admin/buyer/update/:id"
          element={
            <AdminLayout>
              <UpdateBuyer></UpdateBuyer>
            </AdminLayout>
          }
        ></Route>

        {/* seller */}
        <Route
          path="/seller/register"
          element={<SellerRegister></SellerRegister>}
        ></Route>

        <Route
          path="/seller/login"
          element={<SellerLogin></SellerLogin>}
        ></Route>
        <Route
          path="/seller"
          element={
            <SellerLayout>
              <SellerLandingPage></SellerLandingPage>
            </SellerLayout>
          }
        ></Route>
        <Route
          path="/seller/product/:id"
          element={
            <SellerLayout>
              <ReadSpecificProduct></ReadSpecificProduct>
            </SellerLayout>
          }
        ></Route>
        <Route
          path="/seller/product/update/:id"
          element={
            <SellerLayout>
              <UpdateProduct></UpdateProduct>
            </SellerLayout>
          }
        ></Route>
        <Route
          path="/seller/profile"
          element={
            <SellerLayout>
              <SellerProfile></SellerProfile>
            </SellerLayout>
          }
        ></Route>
        <Route
          path="/seller/profile/update"
          element={
            <SellerLayout>
              <SellerUpdateProfile></SellerUpdateProfile>
            </SellerLayout>
          }
        ></Route>
        <Route
          path="seller/profile/update-password"
          element={
            <SellerLayout>
              <SellerUpdateProfile updatePassword={true}></SellerUpdateProfile>
            </SellerLayout>
          }
        ></Route>

        <Route
          path="seller/product/create"
          element={
            <SellerLayout>
              <CreateProduct navigateTo="/seller/product"></CreateProduct>
            </SellerLayout>
          }
        ></Route>
        <Route
          path="seller/product"
          element={
            <SellerLayout>
              <ReadProductBySeller></ReadProductBySeller>
            </SellerLayout>
          }
        ></Route>
        <Route
          path="/buyer/register"
          element={<BuyerRegister></BuyerRegister>}
        ></Route>
        <Route path="/buyer/login" element={<BuyerLogin></BuyerLogin>}></Route>
        <Route
          path="/buyer"
          element={<BuyerLandingPage></BuyerLandingPage>}
        ></Route>
        <Route path="/product" element={<ReadProduct></ReadProduct>}></Route>

        <Route
          path="/product/update/:id"
          element={<UpdateProduct></UpdateProduct>}
        ></Route>
      </Routes>
    </div>
  );
};

export default MyRoute;
