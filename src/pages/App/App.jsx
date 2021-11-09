import React, { useState } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import "./App.css";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import About from "../About/About";
import Team from "../Team/Team";
import authService from "../../services/authService";
import Search from "..//Search/Search";
import Footer from "../../components/Footer/Footer";
import Profile from "../Profile/Profile"

function App (props) {
  const [user, setUser] = useState(authService.getUser())
  const history = useHistory();

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    history.push("/");
  };

  console.log(user, 'user object')

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
            <Search
              history={history}
              user={user}
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
          path="/team"
          render={({ history }) => (
            <Team
              history={history}
              
            />
          )}
        />
        {/* christians profile routing below */}
        <Route
          exact
          path="/profile"
          render={({ history }) => (
            authService.getUser() ? (
            <Profile
              history={history} user={user}
            />
            ):(
            <Redirect to="/login" />
            )
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
