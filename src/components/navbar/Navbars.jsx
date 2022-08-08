import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
// import logout from '../../Services/logout';
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
// import {AppContext} from "../../Services/AppContext";
import Dropdown from "react-bootstrap/Dropdown";
import "./Navbars.css";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { GrHostMaintenance } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import { MdWeb, MdTimer, MdComputer } from "react-icons/md";
import { FaHotjar, FaUserAlt } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
// import { IoTimer } from "react-icons/io";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";

const Navbars = () => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);
  let navigate = useNavigate();
  // const { menuCollapse, setMenuCollapse } = useContext(AppContext);
  const [mobileScreen, setMobileScreen] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  // setMobileScreen(window.matchMedia('(min-width: 720px)'))

  return (
    <>
      <div className="d-flex">
        <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}

          <ProSidebar collapsed={menuCollapse}>
            <SidebarHeader>
              {/* <div className="logotext"> */}
              {/* small and big change using menucollapse state */}
              {/* <p>{menuCollapse ? "Logo" : "smallLogo"}</p>
            </div> */}
            </SidebarHeader>
            <SidebarContent>
              <Menu iconShape="square">
                <MenuItem icon={<MdTimer />}>
                  <NavLink
                    style={({ isActive }) =>
                      isActive
                        ? { color: "#4FC3A1", fontWeight: "680" }
                        : { color: "white", fontWeight: "450" }
                    }
                    to="/timer"
                  >
                    Timer
                  </NavLink>{" "}
                </MenuItem>
                <hr />

                <MenuItem icon={<FaUserAlt />}>
                  <NavLink
                    style={({ isActive }) =>
                      isActive
                        ? { color: "#4FC3A1", fontWeight: "630" }
                        : { color: "white", fontWeight: "450" }
                    }
                    to="/projects/view"
                  >
                    Projects
                  </NavLink>
                </MenuItem>
                <hr />

                <MenuItem icon={<MdWeb />}>
                  <NavLink
                    style={({ isActive }) =>
                      isActive
                        ? { color: "#4FC3A1", fontWeight: "630" }
                        : { color: "white", fontWeight: "450" }
                    }
                    to="/teams"
                  >
                    Teams
                  </NavLink>
                </MenuItem>
                <hr />

                <MenuItem icon={<MdComputer />}>
                  <NavLink
                    style={({ isActive }) =>
                      isActive
                        ? { color: "#4FC3A1", fontWeight: "630" }
                        : { color: "white", fontWeight: "450" }
                    }
                    to="/clients"
                  >
                    Clients
                  </NavLink>
                </MenuItem>
                <hr />
                <MenuItem icon={<MdComputer />}>
                  <NavLink
                    style={({ isActive }) =>
                      isActive
                        ? { color: "#4FC3A1", fontWeight: "630" }
                        : { color: "white", fontWeight: "450" }
                    }
                    to="/login"
                  >
                    Auth
                  </NavLink>
                </MenuItem>
                <hr />

                <MenuItem icon={<ImUsers />}>
                  <NavLink
                    style={({ isActive }) =>
                      isActive
                        ? { color: "#4FC3A1", fontWeight: "630" }
                        : { color: "white", fontWeight: "450" }
                    }
                    to="/viewprojects/tasks"
                  >
                    Tasks
                  </NavLink>
                </MenuItem>
              </Menu>
            </SidebarContent>
            <SidebarFooter className="pb-3">
              <Menu iconShape="square">
                <MenuItem icon={<ImUsers />}>
                  <NavLink
                    style={({ isActive }) =>
                      isActive
                        ? { color: "#4FC3A1", fontWeight: "630" }
                        : { color: "white", fontWeight: "450" }
                    }
                    to="/viewprojects/tasks"
                  >
                    Logout
                  </NavLink>
                </MenuItem>
              </Menu>
            </SidebarFooter>
          </ProSidebar>
        </div>
        <div className="closemenu" onClick={menuIconClick}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA6ElEQVRIie3VvYrCQBSG4fdMTBaSLWy9Hxu9DrdU7LeZxl52S/EyLMQLsrUwAZ3g2UZkBSVO4g/CnGpgeOY7xcAn/J/hzwdZnnJt8qzgd7S7eOdpBYDxpCNJORelC8RXMThFVuqiAdPvdRNrAI6wVwEBYkH7kpSz0+Y1rWBtYnLZ3gDPtj9k+glQ17bYkBJ7QYCYDenxVMsaT3S3CcEh+IHBbQrAeTpHm6KJNVi7V2TlIxVZYu2+iTUA6qKBCguqt3cqLJTD1+mhmlbOrp7YTi/7XKEWb51Qi94TgkPwA4NDLVZs+/a1+AdGMtn+W9paZwAAAABJRU5ErkJggg==" />
          {/* <img className='menu-image' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAAVElEQVRoge3W0Q2AMAxDQRcxOExOhyBSoupuAvvvJQA0WEme7hEVVpKve0SFq3tAFUemuZO83SMAgCIyfppjotGRaWQ8AJxExk9zTDQ6Mo2MB+CPDXJLBiVsKHgMAAAAAElFTkSuQmCC"/> */}
        </div>
      </div>
    </>
  );
};

export default Navbars;
