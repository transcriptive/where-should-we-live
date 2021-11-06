import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import * as profileService from "../../services/profileService";

export default function Profile(props) {
  //  allow us history access for routing
  const history = useHistory();
  // initialize form as invalid
  const [formInvalid, setValidForm] = useState(true);
  // initialize object for form validation
  const formRef = useRef();
  //  custom hook to initialize state
  const [state, handleChange] = useForm({
    email: "",
    movingFrom: "", 
    language: "",
    recentCounties: [],
    dateFormat: "DD-MM-YYYY",
    groups: [],
  });

  // function to handle profile create via api
  async function handleAddProfile(newProfileData) {
    const newProfile = await profileService.create(newProfileData);
    console.log(newProfile)
    history.push("/");
  }
  
  // function to determine if user has profile already, if yes, redirect to edit page
  // useEffect(() => {
  //   const hasProfile = async () => {
  //     const hasData = await profileService.getAllByCurrentUser(props.user._id)
  //     if (hasData?.name)history.push('/account/edit')
  //   } 
  //   hasProfile()
  // }, []);

  // hook to check form validity
  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  }, [state]);

  // pass form data via submit to handleAddprofile func
  async function handleSubmit(e) {
    e.preventDefault();
    handleAddProfile(state);
  }

  const dummyData = [
    "Tarrant County, TX",
    "Dallas County, TX",
    "Los Angeles County, CA",
    "New York County, NY"
  ]

  return (
    <main className="w-5/6 mx-auto flex justify-center items-center">
    {/* Left User Info Section */}
      <div className="bg-primary bg-opacity-30 rounded-lg p-5">
        <div className="w-full flex flex-col justify-start gap-6 ">
          <div className="image drop-shadow">
            <img className="h-48 w-48 rounded-full object-cover mx-auto" 
                src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg" alt="User Image" />
          </div>

          <div className=" ">
            <div className="">
                <span className="text-28 font-bold leading-8 ">Hi, Carolina! </span>
            </div>

            <div className=" pt-2 ">
                <span className="text-base">Hometown: </span>
                <span className="text-base">Santiago, Chile</span>
                <div className='border-b border-black w-1/2 mx-auto mt-2'></div>
            </div>   

            <div className="flex justify-center mt-5 ">
                <svg className=" self-center" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9"/>
                    <path d="M9 22V12h6v10M2 10.6L12 2l10 8.6"/>
                </svg>
                <span className="bg-breakingRed rounded-full w-4 h-4 flex justify-center items-center text-white text-12">3</span>
                <span className="text-base">Cities<br/>Explored</span>
            </div>
            <div className="flex justify-center mt-5 mb-2">
                <svg className="self-center " xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span className="bg-breakingRed rounded-full w-4 h-4 flex justify-center items-center text-white text-12">3</span>
                <span className="text-base ">Groups<br/>Explored</span>
            </div>
          </div>
        </div>

        {/* Edit Button */}
        <div class="w-1/5 h-auto mb-0 float-right">
          <div class="flex-1 h-full">
            <div class="flex items-center justify-center flex-1 h-full p-2 text-white shadow rounded-lg bg-primary hover:bg-yolk focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yolk">
              <div class="relative">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-black-800" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>
   {/* FORM START */}
      <form ref={formRef} onSubmit={handleSubmit}
        className=""
      >
        {/* Styling for FORM divs begins */}

        <div className="">
          {/* For simplicity, each section is seperated by its own empty div */}
          <div className="">
            {/* TOP SECTION  */}
              {/* <div className="sm:grid sm:grid-cols-1 sm:gap-4 sm:items-start sm:pt-5">
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
              </div> */}
            
            {/*  RECENTLY BROWSED SECTION */}
            {/* using dummy data and simple stlying to get work started */}
            <div>
              <div className="sm:items-start">
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="recently-browsed"
                    className="block text-24 font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Recently Browsed 
                  </label>
                  
                </div>

                {/* Map over recentCountries db field for user */}
                <div className="mt-4 sm:mt-4 sm:col-span-1 flex justify-center">
                { dummyData ? dummyData.map((item, key) => {
                    return (
                      <div className="py-2 px-2 ml-6 w-1/5 h-28 border border-black hover:underline" key={key}>
                        <p className='mt-20'>{item}</p>
                      </div>
                    );
                  })
                : "Search for an ideal area HERE."
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
