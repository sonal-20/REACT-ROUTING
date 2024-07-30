import { Outlet, Link, useNavigate } from "react-router-dom";
import { Button, Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";
const Layout = () => {
  const navigateTo = useNavigate();
  const location = useLocation();
  return (
    <div className="bg-light border-right" id="sidebar">
      
      <Nav className="flex-row justify-content-end pt-3 pb-3 mr-1 ">
        {/* <Nav.Link href="/home">Teams</Nav.Link> */}
        <Nav.Link id="logo" href="">Todo-App</Nav.Link>
        <Nav.Link href="/Teams" className={location.pathname === '/Teams' ? 'active' : ''}>Teams</Nav.Link>
        
        <Nav.Link href="/projects" className={location.pathname==='/projects' ? 'active' : ''}>Project</Nav.Link>
        <Nav.Link href="/details/123" className={location.pathname === '/details/123' ? 'active' : ''}>Go to details</Nav.Link>
        <Button
          className="logoutBtn"
          variant="primary"
          onClick={() => {
            localStorage.setItem("isLoggedIn", "false");
            navigateTo("/");
          }}
        >
          Logout
        </Button>
      </Nav>
    </div>
  );
};

export default Layout;
