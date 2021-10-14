import React, { useState, useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import authService from "../../services/authService";

import "./SearchForm.css";

export default function SearchForm(props) {

    return (
        <div className="container">
            <h1 className="title">Search</h1>
            <p className="click-btn"> Back to Home</p>
           <form>
            <label for="name">name:</label>
            <input type="text" name="name"/>
            <label for="location">location</label>
            <input type="text" name="location" />
           </form>
        </div>
    )
}