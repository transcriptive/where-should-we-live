import React from "react";

import "./UserProfile.styles.css";

export default function UserProfile (props) {

    return (
        <div className="container">
            <h1 className="title">Profile</h1>
            <p className="click-btn"> Back to Home</p>
            <h2 className="section-title">Personal Info</h2>
            <div className="change-item" >
                <h3 className="menu-item">Name</h3> 
                    <p className="click-btn">Edit</p>
                <h3 className="menu-item">Email</h3>
                    <p className="click-btn">Edit</p>
                <h3 className="menu-item">Saved Searches</h3> 
                    <p className="click-btn">Manage</p>
            </div>
            
            <h2 className="section-title">Manage Account</h2>
            <div className="change-item">
                <h3 className="menu-item">Password</h3> 
                    <p className="click-btn">Change</p>
            </div>

            <h4 className="deactivate">Deactivate My Account</h4>
            <button className="click-btn">Deactivate Account</button>

        </div>
    )
}