import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <>
           <div className="navmenu" >
               <NavLink exact  activeClassName="active_class" to="/" >Stocks</NavLink>
               <NavLink exact  activeClassName="active_class" to="/supplier" >Supplier</NavLink>
               <NavLink exact  activeClassName="active_class" to="/availablestock" >Available Stock</NavLink>
               <NavLink exact  activeClassName="active_class" to="/purchageorderreport" >Purchage Report</NavLink>
           </div> 
        </>);
};
export default Navbar;