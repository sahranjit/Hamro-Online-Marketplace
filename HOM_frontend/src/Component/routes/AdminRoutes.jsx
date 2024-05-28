import React from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import AdminLayout from "../../layout/AdminLayout";
import AdminLandingPage from "../admin/AdminLandingPage";
import AdminLogin from "../admin/AdminLogin";
import AdminProfile from "../admin/AdminProfile";
import AdminUpdateProfile from "../admin/AdminUpdateProfile";
import ReadSpecificSeller from "../seller/ReadSpecificSeller";
import UpdateSeller from "../admin/UpdateSeller";
import ReadSpecificBuyer from "../buyer/ReadSpecificBuyer";
import UpdateBuyer from "../admin/UpdateBuyer";
import ReadProductByAdmin from "../ReadProductByAdmin";
import ReadSpecificProduct from "../seller/ReadSpecificProduct";
import ReadUser from "../admin/ReadUser";
import GetCategory from "../admin/GetCategory";
import CreateCategory from "../admin/CreateCategory";
import UpdateCategory from "../admin/UpdateCategory";

const AdminRoutes = () => {
  let location = useLocation();
  return (
    <Routes>
      <Route
        path="admin"
        element={
          <div>
            {location.pathname === "/admin/login" ? (
              <Outlet></Outlet>
            ) : (
              <AdminLayout>
                <Outlet></Outlet>
              </AdminLayout>
            )}
          </div>
        }
      >
        <Route index element={<AdminLandingPage></AdminLandingPage>}></Route>
        <Route path="login" element={<AdminLogin></AdminLogin>}></Route>

        <Route path="profile" element={<Outlet></Outlet>}>
          <Route index element={<AdminProfile></AdminProfile>}></Route>
          <Route
            path="update"
            element={<AdminUpdateProfile></AdminUpdateProfile>}
          ></Route>
          <Route
            path="update-password"
            element={
              <AdminUpdateProfile updatePassword={true}></AdminUpdateProfile>
            }
          ></Route>
        </Route>
        <Route path="seller" element={<Outlet></Outlet>}>
          <Route
            path=":id"
            element={<ReadSpecificSeller></ReadSpecificSeller>}
          ></Route>
          <Route
            path="update/:id"
            element={<UpdateSeller></UpdateSeller>}
          ></Route>
        </Route>
        <Route path="buyer" element={<Outlet></Outlet>}>
          <Route
            path=":id"
            element={<ReadSpecificBuyer></ReadSpecificBuyer>}
          ></Route>
          <Route
            path="update/:id"
            element={<UpdateBuyer></UpdateBuyer>}
          ></Route>
        </Route>

        <Route path="product" element={<Outlet></Outlet>}>
          <Route
            index
            element={<ReadProductByAdmin></ReadProductByAdmin>}
          ></Route>
          <Route
            path=":id"
            element={<ReadSpecificProduct></ReadSpecificProduct>}
          ></Route>
        </Route>
        <Route path="user" element={<ReadUser></ReadUser>}></Route>
        <Route path="category" element={<Outlet></Outlet>}>
          <Route index element={<GetCategory></GetCategory>}></Route>

          <Route
            path="create"
            element={<CreateCategory></CreateCategory>}
          ></Route>

          <Route
            path="update/:id"
            element={<UpdateCategory></UpdateCategory>}
          ></Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
