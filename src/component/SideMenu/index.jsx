// import { useLocation } from "react-router-dom";
// import { Nav } from "react-bootstrap";
// import './index.css'
// const SideMenu = () => {
//   const location = useLocation();
//   return (
//     <div className="bg-light border-right" id="sidebar">
//       <Nav className="flex-row justify-content-end ">
//       {/* <Nav.Link href="/">Home</Nav.Link> */}
//         <Nav.Link href="/mainhome" className={location.pathname === './mainhome' ? 'active':''}>Home</Nav.Link>
//         <Nav.Link href="/login">Login</Nav.Link>
//         <Nav.Link href="/register">Register</Nav.Link>
//       </Nav>
//     </div>
//   );
// };

// export default SideMenu;


import { Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './index.css';

const SideMenu = () => {
  const location = useLocation();
  
  return (
    <div className="bg-light border-right" id="sidebar">
      <Nav className="flex-row justify-content-end">
        <Nav.Link href="/mainhome" className={location.pathname === '/mainhome' ? 'active' : ''}>Home</Nav.Link>
        <Nav.Link href="/login" className={location.pathname === '/login' ? 'active' : ''}>Login</Nav.Link>
        <Nav.Link href="/register" className={location.pathname === '/register' ? 'active' : ''}>Register</Nav.Link>
      </Nav>
    </div>
  );
};

export default SideMenu;

