import React, { useState, useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import authService from "../../services/authService";

import "./ProfileConfirmDelete.css";

export default function ProfileConfirmDelete (props) {
    const [id, setId] = useState()
    const history = useHistory();

    useEffect(() => {
        fetchUser()
    },[]);

    const fetchUser = async () => {
        const response = await fetch('/api/auth/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const data = await response.json()
        console.log(data)
        // setTitle(data.data.title)  
    }

    const confirmUserDelete = async (e) => {
        const { handleSignupOrLogin } = props;
        console.log(props)
        e.preventDefault();
        try {
            await authService.deleteUser(id);
            handleSignupOrLogin()
            history.push("/");
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <div className="container">
            <h1>Are you sure you want to delete your profile?</h1>
            <h2>Once deleted any saved searches and data will be gone forever.</h2>
            <button className="bg-red-600 w-auto rounded p-2" onClick={confirmUserDelete}>
                Yes, Delete Profile
            </button>
            <Link to="/profile">
            <button className="bg-blue-600 w-auto rounded p-2">
                Cancel
            </button>
            </Link>

        </div>
    )
}