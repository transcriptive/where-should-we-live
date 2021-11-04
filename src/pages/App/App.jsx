import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import About from "../About/About";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import UserProfile from "../UserProfile/UserProfile";
import FormResults from "../FormResults/FormResults";
import authService from "../../services/authService"
import "./App.css";
import SearchForm from "../SearchForm/SearchForm";
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
          path="/main"
          render={({ history }) => (
            <FormResults
              history={history}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/about"
          render={({ history }) => (
            <About
              history={history}
            />
          )}
        />
        <Footer />
        
      </>
    );
}

export default App;
