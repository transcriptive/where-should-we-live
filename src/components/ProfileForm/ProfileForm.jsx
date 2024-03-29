import React, { useState, useEffect, useRef } from "react";
import { useForm } from '../../hooks/useForm';
import * as profileService from "../../services/profileService";

export default function ProfileForm( props ) {
  const formRef = useRef();
  const [state, setState] = useForm(props.profile);

  // Profile Update function
  async function handleSubmit(e) {
    e.preventDefault();
    const updatedProfile = await profileService.update(state)
    props.setShowModal(false)
    props.setProfile(updatedProfile)
    window.location.reload(false);
  }
  
  // const deleteProfile = () => profileService.deleteOne(props.account._id);

  return (
     <>
      {/* Modal for Profile content change */}
      <div className="min-w-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"  id="modal-id">
        <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
        <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
          {/* <!--content--> */}
          <div className="">
            {/* <!--body--> */}
            <div className="text-center flex-auto justify-center">
              <h2 className="text-xl font-bold p-2 ">Profile Settings</h2>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                Edit your account details below 
              </div>
              {/* FORM START */}
              <form ref={formRef} onSubmit={handleSubmit}>
              {/* Styling for FORM divs begins */}

              <div className="">
              {/* For simplicity, each section is seperated by its own empty div */}
              <div className="">
                  {/* TOP SECTION  */}
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5 mb-2">
                      <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 "
                      >
                      Name:
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2 self-center">
                      <input
                          type="text"
                          name="name"
                          id="name"
                          value={state.name}
                          onChange={setState}
                          className="px-2 max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                      />
                      </div>
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start mb-2 ">
                      <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                      >
                      Email
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2 self-center">
                      <input
                          type="text"
                          name="email"
                          id="email"
                          value={state.email}
                          onChange={setState}
                          className="px-2 max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                      />
                      </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start mb-2">
                      <label
                      htmlFor="movingFrom"
                      className="block text-sm font-medium text-gray-700"
                      >
                      Moving From:
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2 self-center">
                      <input
                          type="text"
                          name="movingFrom"
                          id="movingFrom"
                          value={state.movingFrom}
                          onChange={setState}
                          className="px-2 max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                      />
                      
                      </div>
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start mb-2">
                      <label
                      htmlFor="photo"
                      className="block text-sm font-medium text-gray-700"
                      >
                      Profile Photo:
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2 self-center">
                      <input
                          type="file"
                          name="photo"
                          id="photo"
                          value={state.photo}
                          onChange={setState}
                          className="max-w-lg block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-none"
                      />
                      </div>
                  </div>
                  {/* GROUP SECTION  */}
                  {/* need to create list of groups to join with checkbox save feature */}
                  <div>
                  
                  </div>
                  {/* PREFERENCES SECTION  */}
                  <div>
                  <div className="sm:grid sm:grid-cols-1 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-2 h-auto">
                  <div>
                      <h3 className="mt-2 text-lg leading-6 font-medium text-gray-900">
                      Preferences
                      </h3>
                  </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                    <label
                        htmlFor="language"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Language
                    </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <select
                          name="language"
                          id="language"
                          multiple={false}
                          value={state.language}
                          onChange={setState}>
                      <option value="english"> English </option>
                      <option value="arabic"> Arabic </option>
                      <option value="chinese"> Chinese </option>
                      <option value="japanese"> Japanese</option>
                      <option value="portugese"> Portuguese </option>
                      <option value="spanish"> Spanish </option>
                    </select>
                  </div>
                  <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700 "
                  >
                      Date Format
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <select
                        id="dateFormat"
                        name="dateFormat"
                        value={state.dateFormat}
                        onChange={setState}
                        multiple={false}
                        className="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm "
                      >
                        <option value='DD-MM-YYYY'>DD-MM-YYYY</option>
                        <option value='MM-DD-YYYY'>MM-DD-YYYY</option>
                      </select>
                  </div>
                  </div>   
                  </div>
                </div>
              </div>
              {/* Styling for FORM divs ends */}
            
              {/* FORM END */}
              <div className="p-3  mt-2 text-center space-x-4 md:block">
                <button className="mb-2 md:mb-0 bg-red-600 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-white rounded-full hover:shadow-lg hover:bg-red-900" type="button"
                    onClick={() => props.setShowModal(false)}>
                    Cancel
                </button>
                <button className="mb-2 md:mb-0 bg-primary border border-primary px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-yolk hover:text-black" 
                    >
                Save
                </button>
            </div>
            </form>
            </div>
          </div>
            {/* <!--footer--> */}
        </div>
      </div>
    </>
  );
}
