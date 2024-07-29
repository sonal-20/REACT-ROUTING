import { Outlet, Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Layout = () => {
  const navigateTo = useNavigate();
  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/details/123">Go to details</Link>
              {/* <button onClick={redirect}>Redirct to Hom</button> */}
            </li>
          </ul>
        </nav>
        <Button
          className="loginBtn"
          variant="primary"
          onClick={() => {
            localStorage.setItem("isLoggedIn", "false");
            navigateTo("/");
          }}
        >
          Logout
        </Button>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
