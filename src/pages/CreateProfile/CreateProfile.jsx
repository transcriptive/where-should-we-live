import React, { useState, useEffect, useRef } from "react";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import * as profileService from "../../services/profileService";

import "./CreateProfile.css";

export default function CreateProfile(props) {
    //  allow us history access for routing
    const history = useHistory();
    // initialize form as invalid
    const [formInvalid, setValidForm] = useState(true);
    // initialize object for form validation
    const formRef = useRef();
    //  custom hook to initialize state
    const [state, handleChange] = useForm({
      name: "",
      email: "",
      movingFrom: "", 
      language: "English",
      dateFormat: "DD-MM-YYYY",
    });
  


    // function to handle profile create via api
    async function handleAddProfile(newProfileData) {
      const newProfile = await profileService.create(newProfileData);
      console.log(newProfile)
      history.push("/profile");
    }
    // pass form data via submit to handleAddprofile func
    async function handleSubmit(e) {
      console.log(e)
      e.preventDefault();
      handleAddProfile(state);
    }

    // hook to check form validity 
    useEffect(() => {
      formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
      }, [state]);
  
    
    return (
      <div>
        {/* FORM START */}
        <form ref={formRef} onSubmit={handleSubmit}>
        {/* Styling for FORM divs begins */}

        <div className="">
        {/* For simplicity, each section is seperated by its own empty div */}
        <div className="">
            {/* TOP SECTION  */}
            <div className="sm:grid sm:grid-cols-1 sm:gap-4 sm:items-start sm:pt-5">
                <h1 className="mt-1 sm:mt-0 sm:col-span-2">
                Welcome 
                </h1>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                Fill in details below to create your profile
                </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                Name
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={state.name}
                    onChange={handleChange}
                    className="px-2 max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
                </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                Email
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                    type="text"
                    name="email"
                    id="email"
                    value={state.email}
                    onChange={handleChange}
                    className="px-2 max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
                </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                <label
                htmlFor="movingFrom"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                Moving From:
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                    type="text"
                    name="movingFrom"
                    id="movingFrom"
                    value={state.movingFrom}
                    onChange={handleChange}
                    className="px-2 max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
                </div>
            </div>
            
            
            {/* PREFERENCES SECTION  */}
            <div>
            <div className="sm:grid sm:grid-cols-1 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5 h-auto">
            <div>
                <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">
                Preferences
                </h3>
            </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
                htmlFor="language"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
                Language
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
                <select
                        name="language"
                        id="language"
                        placeholder="English"
                        value={state.language}
                        onChange={handleChange}
                        className="px-2 max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    >
                      <option value="English"> English </option>
                      <option value="Arabic"> Arabic </option>
                      <option value="Chinese"> Chinese </option>
                      <option value="Japanese"> Japanese</option>
                      <option value="Portugese"> Portuguese </option>
                      <option value="Spanish"> Spanish </option>
                      <option value="Other"> Other </option>
                    </select>
            </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
                Date Format
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
                <select
                id="dateFormat"
                name="dateFormat"
                value={state.dateFormat}
                onChange={handleChange}
                className="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                >
                <option value='DD-MM-YYYY'>DD-MM-YYYY</option>
                <option value='MM-DD-YYYY'>MM-DD-YYYY</option>
                </select>
            </div>
            </div>   
            </div>
        </div>
        </div>
        {/*  BUTTON SECTION  */}
        <div>
        <div className="pt-5">
            <div className="flex justify-center mb-10">
            <Link to='/'>
            <button
                type="button"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Cancel
            </button>
            </Link>
            <button
                type="submit"
                disabled={formInvalid}
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Create
            </button>
            </div>
          </div>
        </div>
        {/* Styling for FORM divs ends */}
        </form>
        {/* FORM END */}
      </div>
)}