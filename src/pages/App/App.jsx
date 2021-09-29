import React, { useState } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService"
import "./App.css";

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
          render={() => (
            <h1>hello</h1>
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
        
      </>
    );
  }

export default App;
