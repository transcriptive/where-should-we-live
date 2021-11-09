import React, { useState, useEffect, useRef } from "react";
import { useForm } from '../../hooks/useForm';
import * as profileService from "../../services/profileService";

export default function ProfileForm(props) {
  const formRef = useRef();
  const [formInvalid, setValidForm] = useState(true);
  const [state, handleChange] = useForm({});


  // pass form data via submit to handleAddProfile func 
  async function handleSubmit(e) {
    e.preventDefault();
    const updatedProfile = await profileService.update(state)
    props.setAccount(updatedProfile)
  }
  
  // const deleteProfile = () => profileService.deleteOne(props.account._id);

  const dummyData = [
    "Tarrant County, TX",
    "Dallas County, TX",
    "Los Angeles County, CA",
    "New York County, NY"
  ]

  return (
    <main className="w-5/6 mt-10 mx-auto">
      {/* FORM START */}
      <form ref={formRef} onSubmit={handleSubmit}
              className=""
      >
        {/* Styling for FORM divs begins */}

        <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
          {/* For simplicity, each section is seperated by its own empty div */}
          <div className="space-y-6 sm:space-y-5">
            {/* TOP SECTION  */}
            <div>
              <div className="sm:grid sm:grid-cols-1 sm:gap-4 sm:items-start sm:pt-5">
                <h1 className="mt-1 sm:mt-0 sm:col-span-2">
                  Welcome insert name, 
                </h1>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  Edit your account details below 
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
                    value={state?.movingFrom}
                    onChange={handleChange}
                    className="px-2 max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
            {/*  RECENTLY BROWSED SECTION */}
            {/* using dummy data and simple stlying to get work started */}
            <div>
              <div className="sm:items-start">
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="recently-browsed"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Recently Browsed Counties
                  </label>
                  
                </div>

                {/* Map over recentCountries db field for user */}
                <div className="mt-4 sm:mt-4 sm:col-span-1 flex justify-center ">
                { dummyData ? dummyData.map((item, key) => {
                    return (
                      <div className="py-2 px-2 ml-6 w-1/5 h-28 border border-black" key={key}>
                        <p className=''>{item}</p>
                      </div>
                    );
                  })
                : "No recently browsed counties"
                }  
                </div>
              </div>
            </div>
            {/* GROUP SECTION  */}
            {/* need to create list of groups to join with checkbox save feature */}
            <div>
              <div className="sm:grid sm:grid-cols-1 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5 h-auto">
                <div>
                  <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">
                    Groups
                  </h3>
                  <p className="mt-2 mx-auto max-w-2xl text-sm text-gray-500">
                    Choose the options that best represents you (This information may be shared publicly)
                  </p>
                </div>
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
                  <input
                        type="text"
                        name="language"
                        id="language"
                        placeholder="English"
                        value={state?.language}
                        onChange={handleChange}
                        className="px-2 max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                      />
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
              <button
                type="button"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={formInvalid}
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        </div>
        {/* Styling for FORM divs ends */}
      </form>
      {/* FORM END */}
    </main>
  );
}
