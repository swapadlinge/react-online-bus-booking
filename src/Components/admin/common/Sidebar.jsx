//import useState hook to create menu collapse state
import React, { useState } from "react";
import img from "../../../icon/bg_dash.jpg";

//import react pro sidebar components
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { GiMoneyStack } from "react-icons/gi";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const Sidebar = (props) => {

    const history = useHistory();

    const activeStyle = { fontWeight: 500, color: "#EB5757" };

    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    const handleLogoutClick = (e) => {
        console.log("Logout Clicked");
        sessionStorage.setItem('username', '');
        sessionStorage.setItem('isLoggedIn', false);
        history.push("/admin-login");
    }
    return (
        <>
            <div id="header" className="row bg-dark vh-100">

                <ProSidebar collapsed={menuCollapse} image={img}>
                    <SidebarHeader >
                        <div className="logotext">
                            <p className="m-2">{menuCollapse ? "Bus" : "Bus"}</p>
                        </div>
                        <div className="closemenu d-flex align-items-center" onClick={menuIconClick}>
                            {menuCollapse ? (<FiArrowRightCircle />) : (<FiArrowLeftCircle />)}
                        </div>
                    </SidebarHeader>
                    <SidebarContent >
                        <Menu iconShape="round">
                            <MenuItem icon={<FiHome />}>
                                <NavLink to="/admin/dashboard" activeStyle={activeStyle} exact> Dashboard</NavLink>

                            </MenuItem>
                            <MenuItem icon={<FaList />}>
                                <NavLink to="/admin/get-all-operators" activeStyle={activeStyle}> All Operators</NavLink>
                            </MenuItem>


                            <MenuItem icon={<GiMoneyStack size={20} />}>
                                <NavLink to="/admin/route-revenue" activeStyle={activeStyle}> Revenue By Route </NavLink>
                            </MenuItem>
                            <MenuItem icon={<GiMoneyStack size={20} />}>
                                <NavLink to="/admin/operator-revenue" activeStyle={activeStyle}> Revenue By Operator </NavLink>
                            </MenuItem>
                            <MenuItem icon={<GiMoneyStack size={20} />}>
                                <NavLink to="/admin/daily-revenue" activeStyle={activeStyle}> Revenue By Date</NavLink>
                            </MenuItem>

                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape="square">
                            <MenuItem icon={<FiLogOut />} onClick={handleLogoutClick}>Logout</MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
        </>
    );
};

export default Sidebar;