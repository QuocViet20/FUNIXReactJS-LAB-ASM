import React, { useState } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="bg-primary   ">
      <React.Fragment>
        <div className="container   ">
          <Navbar dark color="primary" expand="md">
            <NavbarToggler onClick={() => setNavOpen(!navOpen)} />
            <NavbarBrand href="/">
              <img
                src="assets/images/logo.png"
                height="30"
                width="41"
                alt="Ristorante Con Fusion"
              />
            </NavbarBrand>
            <Collapse isOpen={navOpen} navbar>
              <Nav navbar>
                <NavItem className=" px-2 text-light">
                  {/* <NavLink className="nav-link" to="/home"> */}
                  <span className="fa fa-users"></span> Nhân Viên
                  {/* </NavLink> */}
                </NavItem>
                <NavItem className=" px-2 text-light">
                  {/* <NavLink className="nav-link" to="/aboutus"> */}
                  <span className="fa fa-address-card"></span> Phòng Ban
                  {/* </NavLink> */}
                </NavItem>
                <NavItem className=" px-2 text-light">
                  {/* <NavLink className="nav-link" to="/menu"> */}
                  <span className="fa fa-money"></span> Bảng Lương
                  {/* </NavLink> */}
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </React.Fragment>
    </div>
  );
};

export default Header;
