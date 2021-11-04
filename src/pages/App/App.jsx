import React, { useState } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import "./App.css";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import UserProfile from "../UserProfile/UserProfile";
import authService from "../../services/authService";
import SearchForm from "../SearchForm/SearchForm";
import ProfileConfirmDelete from "../ProfileConfirmDelete/ProfileConfirmDelete";
import Footer from "../../components/Footer/Footer";

function App (props) {
  const [user, setUser] = useState(authService.getUser())
  const history = useHistory();

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    history.push("/");
  };

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

    return (
      <>
        <NavBar user={user} handleLogout={handleLogout}/>
        <Route
          exact
          path="/"
          render={({ history }) => (
            <SearchForm
              history={history}
            />
          )}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/profile"
          render={({ history }) => (
            <UserProfile
              history={history}
              
            />
          )}
        />
        <Route
          exact
          path="/deleteuser"
          render={({ history }) => (
            <ProfileConfirmDelete
              history={history}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          )}
        />
        <Footer />
        
      </>
    );
}

export default App;
