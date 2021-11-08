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
  useEffect(() => {
    const hasProfile = async () => {
      const hasData = await profileService.getAllByCurrentUser(props.userid)
      if (hasData?.name)history.push('/account/edit')
    } 
    hasProfile()
  }, []);

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
    <main className="mx-auto flex justify-center items-center">
      {/* Modal for Content change */}
      <div class="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"   id="modal-id">
        <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
        <div class="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
          {/* <!--content--> */}
          <div class="">
            {/* <!--body--> */}
            <div class="text-center p-5 flex-auto justify-center">
              <h2 class="text-xl font-bold py-4 ">Profile Settings</h2>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                Edit your account details below 
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
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                      <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                      Name:
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
                          value={state?.movingFrom}
                          onChange={handleChange}
                          className="px-2 max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                      />
                      
                      </div>
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                      <label
                      htmlFor="photo"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                      Profile Photo:
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <input
                          type="file"
                          name="photo"
                          id="photo"
                          value={state.photo}
                          onChange={handleChange}
                          className="px-2 max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                      />
                      </div>
                  </div>
                  {/* GROUP SECTION  */}
                  {/* need to create list of groups to join with checkbox save feature */}
                  <div>
                  
                  </div>
                  {/* PREFERENCES SECTION  */}
                  <div>
                  <div className="sm:grid sm:grid-cols-1 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5 h-auto">
                  <div>
                      <h3 className="mt-2 text-lg leading-6 font-medium text-gray-900">
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
                          type="text"
                          name="language"
                          id="language"
                          value={state?.language}
                          onChange={handleChange}>
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
              {/* Styling for FORM divs ends */}
            </form>
              {/* FORM END */}
            </div>
            {/* <!--footer--> */}
            <div class="p-3  mt-2 text-center space-x-4 md:block">
                <button class="mb-2 md:mb-0 bg-red-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-white rounded-full hover:shadow-lg hover:bg-red-900">
                    Cancel
                </button>
                <button class="mb-2 md:mb-0 bg-primary border border-primary px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-yolk hover:text-black">Save</button>
            </div>
          </div>
        </div>
      </div>





      {/* Left User Info Section */}
      <div className="grid grid-flow-col gap-4 ">
      <div className="bg-primary bg-opacity-30 rounded-lg p-5 mb-2 mt-3 row-span-3">
        <div className="w-full flex flex-col justify-start gap-4 ">
          <div className="image drop-shadow">
            <img className="h-48 w-48 rounded-full object-cover mx-auto" 
                src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg" alt="User Image" />
          </div>

          <div className=" ">
            <span className="md:text-sm text-28 font-bold leading-8 ">Hi, Carolina! </span>

            <div className="md:text-xs pt-2">
                <span className="text-base md:text-xs">Hometown: </span>
                <span className="text-base md:text-xs">Santiago, Chile</span>
                <div className='border-b border-black w-1/2 mx-auto mt-2'></div>
            </div>   

            <div className="flex justify-center mt-5 ">
              <img className="w-10 h-10" src="https://img.icons8.com/ios/100/000000/city-block.png"/>
              <span className="bg-breakingRed rounded-full w-4 h-4 flex justify-center items-center text-white text-12">3</span>
              <span className="text-base">Cities<br/>Explored</span>
            </div>
            <div className="flex justify-center mt-5 mb-2">
            <img className="w-10 h-10" src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-group-advertising-kiranshastry-lineal-kiranshastry.png"/>
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
      {/*  RECENTLY BROWSED SECTION */}
      {/* using dummy data and simple stlying to get work started */}
      <div className="col-span-2">
        <div className="flex bg-primary bg-opacity-30 rounded-lg p-3 mt-3">
          <div className="flex justify-start">
            <label
              htmlFor="recently-browsed"
              className="text-24 font-bold"
            >
              Recently Browsed 
            </label>
          </div>

          {/* Map over recentCountries db field for user */}
          <div className="sm:col-span-1 flex justify-center">
          { dummyData ? dummyData.map((item, key) => {
              return (
                <div className="py-2 px-2 ml-6 h-28 border border-black hover:underline" key={key}>
                  <p className='bottom-0'>{item}</p>
                </div>
              );
            })
          : "Click HERE to start search..."
          }  
          </div>
        </div>
      <div>
      {/* Preference Section */}
        <div className="bg-primary bg-opacity-30 rounded-lg p-3 col-span-2 mt-3 ">
          <div className='flex justify-start'>
                <span className="text-24 font-bold">Preferences</span>
                <div className="grid grid-cols-3 gap-36">
                    <div className="mt-5 flex ">
                      <fieldset className="mb-10 mt-5">
                          <legend className="sr-only">Lifestyle</legend>
                          <span className="justify-center underline">Lifestyle</span>

                          <div className="flex items-center items-start mb-4">
                              <input id="checkbox-1" aria-describedby="checkbox-1" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
                              <label for="checkbox-1" class="text-sm ml-3 font-medium text-gray-900">Arts & Entertainment</label>
                          </div>

                          <div className="flex items-start items-center mb-4">
                              <input id="checkbox-2" aria-describedby="checkbox-2" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
                              <label for="checkbox-2" class="text-sm ml-3 font-medium text-gray-900">Good For Kids</label>
                          </div>

                          <div className="flex items-start items-center mb-4">
                              <input id="checkbox-3" aria-describedby="checkbox-3" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
                              <label for="checkbox-3" class="text-sm ml-3 font-medium text-gray-900">Entrepreneurs</label>
                          </div>
                          
                          <div className="flex items-start items-center mb-4">
                              <input id="checkbox-4" aria-describedby="checkbox-4" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
                              <label for="checkbox-4" class="text-sm ml-3 font-medium text-gray-900">Restaurants</label>
                          </div>
                          <div className="flex items-start items-center mb-4">
                              <input id="checkbox-5" aria-describedby="checkbox-5" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
                              <label for="checkbox-5" class="text-sm ml-3 font-medium text-gray-900">Faith Services</label>
                          </div>
                      </fieldset>
                    </div>
              
                    <div className="flex mt-5 ">
                        <fieldset className="mb-5 mt-5">
                            <legend className="sr-only">Distance to Work</legend>
                            <span className="justify-center underline">Distance to Work</span>
                            <div className="flex items-center items-start mb-4">
                                <input id="checkbox-6" aria-describedby="checkbox-6" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
                                <label for="checkbox-6" class="text-sm ml-3 font-medium text-gray-900">Less than 1 mile</label>
                            </div>

                            <div className="flex items-start items-center mb-4">
                                <input id="checkbox-7" aria-describedby="checkbox-7" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
                                <label for="checkbox-7" class="text-sm ml-3 font-medium text-gray-900">Less than 10 miles</label>
                            </div>

                            <div className="flex items-start items-center mb-4">
                                <input id="checkbox-8" aria-describedby="checkbox-8" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
                                <label for="checkbox-8" class="text-sm ml-3 font-medium text-gray-900">20 - 30 miles </label>
                            </div>
                        
                        </fieldset>
                    </div>
                    <div className="flex mt-5 ">
                        <fieldset className="mb-5 mt-5">
                            <legend className="sr-only">Transit</legend>
                            <span className="justify-center underline">Transit Options</span>
                            <div className="flex items-center items-start mb-4">
                                <input id="checkbox-9" aria-describedby="checkbox-9" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
                                <label for="checkbox-9" class="text-sm ml-3 font-medium text-gray-900">Walking </label>
                            </div>

                            <div className="flex items-start items-center mb-4">
                                <input id="checkbox-10" aria-describedby="checkbox-10" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
                                <label for="checkbox-10" class="text-sm ml-3 font-medium text-gray-900">Bike</label>
                            </div>

                            <div className="flex items-start items-center mb-4">
                                <input id="checkbox-11" aria-describedby="checkbox-11" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
                                <label for="checkbox-11" class="text-sm ml-3 font-medium text-gray-900"> City Bus </label>
                            </div>

                            <div className="flex items-start items-center mb-4">
                                <input id="checkbox-12" aria-describedby="checkbox-12" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
                                <label for="checkbox-12" class="text-sm ml-3 font-medium text-gray-900"> Taxi </label>
                            </div>
                        
                        </fieldset>
                    </div>
                  </div>
              </div>
            </div>
        </div>
        {/* GROUPS SECTION */}
        <div className="col-span-2 mt-3 h-max">
          <div className="grid grid-cols-2 place-content-center gap-x-3">
            <div className="justify-center bg-primary bg-opacity-30 rounded-lg"> 
              <div className="flex justify-center mt-5 ">
                <img className="w-8 h-8" src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-group-advertising-kiranshastry-lineal-kiranshastry.png"/>
                <p className="text-24 font-bold"> Groups </p>
                </div>
                <ul className="flex flex-col p-4">

                  <li className=" mb-2 items-center items-start">
                    <div className="bg-gray-200 w-full">
                        <span className="font-medium p-2">Venezuelans in Miami</span>
                    </div>
                  </li>

                  <li className=" mb-2 items-center items-start">
                    <div className="bg-gray-200 w-full">
                        <span className="font-medium p-2">Job Seekers in Miami</span>
                    </div>
                  </li>

                  <li className=" mb-2 items-center items-start">
                    <div className="bg-gray-200 w-full">
                        <span className="font-medium p-2">Healthcare</span>
                    </div>
                  </li>

                </ul>
            </div>
              <div className="bg-primary bg-opacity-30 rounded-lg ">
                <div className="flex justify-center mt-5 mb-2">
                  <img className="w-8 h-8" src="https://img.icons8.com/ios/100/000000/binoculars.png"/>
                  <p className="text-24 font-bold"> Saved Searches </p>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
