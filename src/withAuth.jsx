import React from "react";
import { Redirect } from "react-router-dom";

const withAuth = (WrappedComponent) => {
  return class extends React.Component {
    // Check if user is authenticated (you can replace with your actual authentication logic)
    isAuthenticated = () => {
      // Example: check if user is logged in (you can replace with your actual check)
      return localStorage.getItem("isLoggedIn") === "true";
    };

    render() {
      // If user is authenticated, render the wrapped component
      if (this.isAuthenticated()) {
        return <WrappedComponent {...this.props} />;
      } else {
        // If user is not authenticated, redirect to login page
        return <Redirect to="/login" />;
      }
    }
  };
};

export default withAuth;
