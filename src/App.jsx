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
import Home from "./component/Home";
import Blogs from "./component/Blog";
import Contact from "./component/Contact";
import Details from "./component/Details";
import NoPage from "./component/NoPage";
import "./App.css";

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
    <Navigate to="/login" replace state={{ from: window.location.pathname }} />
  );
};

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />

          <Route path="/home" element={<PrivateRoute element={<Home />} />} />
          <Route path="/blogs" element={<PrivateRoute element={<Blogs />} />} />
          <Route
            path="/contact"
            element={<PrivateRoute element={<Contact />} />}
          />
          <Route
            path="/details/:userId"
            element={<PrivateRoute element={<Details />} />}
          />

          <Route path="*" element={<PrivateRoute element={<NoPage />} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
