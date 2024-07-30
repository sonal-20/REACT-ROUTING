import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./component/Login";
import Signup from "./component/SignUp";
import Layout from "./component/Layout";
import Teams from "./component/Teams";

import Projects from "./component/projects";
import Details from "./component/Details";
import NoPage from "./component/NoPage";
import "./App.css";
import SideMenu from "./component/SideMenu";
import Mainhome from "./component/mainhome";
// Example of checking authentication status (you can replace with your actual logic)
const isAuthenticated = () => {
  console.log();
  return localStorage.getItem("isLoggedIn") === "true";
};

// Custom route for protected routes that require authentication
const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? (
    <>
      <Layout />
      {element}
    </>
  ) : (
    // <>
    //   <Navigate to="/login" replace state={{ from: window.location.pathname }} />
    // </>
    <>
      <Navigate to="/mainhome" replace state={{ from: window.location.pathname }} />
    </>

  );
};

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={
            <>
              <SideMenu />
              <Login />
            </>}
          />
          <Route path="/register" element={
            <>
              <SideMenu />
              <Signup />
            </>}
          />
           <Route path="/mainhome" element={
            <>
              <SideMenu />
              <Mainhome />
            </>}
          />
         
          
         <Route path="/Teams" element={<PrivateRoute element={<Teams />} />} />
          <Route path="/Teams" element={<PrivateRoute element={<Teams />} />} />
          <Route path="/projects" element={<PrivateRoute element={<Projects />} />} />
          <Route path="/details/:userId" element={<PrivateRoute element={<Details />} />}/>
       
        
          <Route path="*" element={<PrivateRoute element={<NoPage />} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
