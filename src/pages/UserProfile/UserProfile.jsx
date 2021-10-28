import React, { useState, useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import authService from "../../services/authService";

import "./UserProfile.styles.css";

export default function UserProfile (props) {

    return (
        <div className="userInformation">
            <img className="absolute w-188 h-188 left-70 top-227" src="../images/DefaultUserImage.png" alt="User Image" />
            <p className=" absolute w-94 h-34 left-266 top-321 text-28">Name: </p>
            <p className="absolute  w-196 h-34 left-266 top-365 text-28">Moving From: </p>
            <div className="recentHistory">
                <p className="absolute w-80 h-14 left-28 top-561 text-36">Recently <br/> Browsed</p>
                <ol className="absolute w-1397 h-1260">
                    <li>
                        <img alt="Recently Browsed"/>
                        <p> Name of Place </p>
                    </li>
                </ol>
            </div>
            <div>
                <p className="absolute w-311 h-63 left-121 top-933 text-52">Preferences</p>
                <div className="lifestyleSection">
                    <p className="lifestyle">Lifestyle</p>
                    <div className="options flex flex-col">
                        <input type="checkbox" name="Arts" />
                        <label >Arts & Entertainment</label>
                        <input type="checkbox" name="Healthy"/>
                        <label>Healthy Living</label>
                        <input type="checkbox" name="NightLife"/>
                        <label>Nightlife</label>
                        <input type="checkbox" name="Restaurants"/>
                        <label>Restaurants</label>
                        <input type="checkbox" name="TakeOut"/>
                        <label>Take Out</label>
                        <input type="checkbox" name="Entrepreneurs"/>
                        <label>Entrepreneurs</label>
                        <input type="checkbox" name="kids"/>
                        <label>Good For Kids</label>
                        <input type="checkbox" name="wheelchair"/>
                        <label>Wheelchair Accessible</label>
                    </div>
                </div>
            </div>
        </div>
    )
}
