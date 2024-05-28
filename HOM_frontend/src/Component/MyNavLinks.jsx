import React from 'react'
import { NavLink } from 'react-router-dom'

const MyNavLinks = () => {
  return (
    <div>

        <NavLink to="/seller/register" style={{marginRight:"20px"}}>Seller Register</NavLink>
        <NavLink to="/buyer/register" style={{marginRight:"20px"}}>Buyer Register</NavLink>
        <NavLink to="/seller/login" style={{marginRight:"20px"}} >Login as seller</NavLink>
        <NavLink to="/buyer/login" style={{marginRight:"20px"}}>Login as buyer</NavLink>
        <NavLink to="/product" style={{marginRight:"20px"}}>Product</NavLink>
        <NavLink to="/product/create" style={{marginRight:"20px"}}>Create Product</NavLink>
        <NavLink to="/user" style={{marginRight:"20px"}}>Read User</NavLink>
        <NavLink to="/admin/category" style={{marginRight:"20px"}}>Get Category </NavLink>
        <NavLink to="/admin/category/create" style={{marginRight:"20px"}}>Create Category </NavLink>

    </div>
  )
}
export default MyNavLinks