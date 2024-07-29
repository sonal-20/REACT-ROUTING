import React from "react";
import { Nav } from "react-bootstrap";

const SideMenu = () => {
  return (
    <div className="bg-light border-right" id="sidebar">
      <div className="sidebar-heading">Menu</div>
      <Nav className="flex-column">
        <Nav.Link href="#">Dashboard</Nav.Link>
        <Nav.Link href="#">Users</Nav.Link>
        <Nav.Link href="#">Settings</Nav.Link>
      </Nav>
    </div>
  );
};

export default SideMenu;
