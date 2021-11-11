import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Dialog, Transition } from '@headlessui/react';
import { useForm } from "../../hooks/useForm";
import * as profileService from "../../services/profileService";
import ProfileForm from "../../components/ProfileForm/ProfileForm";

export default function Profile(props) {
  const history = useHistory();
  const [profile, setProfile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [register, setRegister] = useState();
 
  // function to determine if user has profile already, if no, open modal to gather information
  useEffect(() => {
    const hasProfile = async () => {
      const hasData = await profileService.getAllByCurrentUser(props.user._id)
      if (!hasData?.name)history.push('/create')
      setProfile(hasData)
    } 
    
    hasProfile()
  }, []);

  // For Modal
  

  return (
    <main className="mx-auto flex justify-center items-center">
       
      {showModal ? (

        <ProfileForm 
        setShowModal={setShowModal}
        profile={profile}
        setProfile={setProfile}
        setRegister={setRegister}
        />

      ) : null}

      {/* Left User Info Section */}
      <div className="grid grid-flow-col gap-4 ">
      <div className="bg-primary bg-opacity-30 rounded-lg p-5 mb-2 mt-3 row-span-3">
        <div className="w-full flex flex-col justify-start gap-4 ">
          <div className="image drop-shadow">
            <img className="h-48 w-48 rounded-full object-cover mx-auto" 
                src='./images/DefaultUserImage.png' alt="user" />
          </div>

          <div className=" ">
            <span className="md:text-sm text-28 font-bold leading-8 ">Hi,{profile?.name}! </span>

            <div className="md:text-xs pt-2">
                <span className="text-base md:text-xs">Hometown: </span>
                <span className="text-base md:text-xs">{profile?.movingFrom}</span>
                <div className='border-b border-black w-1/2 mx-auto mt-2'></div>
            </div>   

            <div className="flex justify-center mt-5 ">
              <img className="w-10 h-10" src="https://img.icons8.com/ios/100/000000/city-block.png" alt='cities'/>
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
        <div className="w-1/5 h-auto mb-0 float-right">
          <div className="flex-1 h-full">
            <div className="flex items-center justify-center flex-1 h-full p-2 text-white shadow rounded-lg bg-primary hover:bg-yolk focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yolk">
              <button className="relative" type="button" onClick={() => setShowModal(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black-800" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </button>
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
          {/* <div className="sm:col-span-1 flex justify-center">
          { dummyData ? dummyData.map((item, key) => {
              return (
                <div className="py-2 px-2 ml-6 h-28 border border-black hover:underline" key={key}>
                  <p className='bottom-0'>{item}</p>
                </div>
              );
            })
          : "Click HERE to start search..."
          }  
          </div> */}
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
                              <label htmlFor="checkbox-1" className="text-sm ml-3 font-medium text-gray-900">Arts & Entertainment</label>
                          </div>

                          <div className="flex items-start items-center mb-4">
                              <input id="checkbox-2" aria-describedby="checkbox-2" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
                              <label htmlFor="checkbox-2" className="text-sm ml-3 font-medium text-gray-900">Good For Kids</label>
                          </div>

                          <div className="flex items-start items-center mb-4">
                              <input id="checkbox-3" aria-describedby="checkbox-3" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
                              <label htmlFor="checkbox-3" className="text-sm ml-3 font-medium text-gray-900">Entrepreneurs</label>
                          </div>
                          
                          <div className="flex items-start items-center mb-4">
                              <input id="checkbox-4" aria-describedby="checkbox-4" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
                              <label htmlFor="checkbox-4" className="text-sm ml-3 font-medium text-gray-900">Restaurants</label>
                          </div>
                          <div className="flex items-start items-center mb-4">
                              <input id="checkbox-5" aria-describedby="checkbox-5" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
                              <label htmlFor="checkbox-5" className="text-sm ml-3 font-medium text-gray-900">Faith Services</label>
                          </div>
                      </fieldset>
                    </div>
              
                    <div className="flex mt-5 ">
                        <fieldset className="mb-5 mt-5">
                            <legend className="sr-only">Distance to Work</legend>
                            <span className="justify-center underline">Distance to Work</span>
                            <div className="flex items-center items-start mb-4">
                                <input id="checkbox-6" aria-describedby="checkbox-6" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
                                <label htmlFor="checkbox-6" className="text-sm ml-3 font-medium text-gray-900">Less than 1 mile</label>
                            </div>

                            <div className="flex items-start items-center mb-4">
                                <input id="checkbox-7" aria-describedby="checkbox-7" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
                                <label htmlFor="checkbox-7" className="text-sm ml-3 font-medium text-gray-900">Less than 10 miles</label>
                            </div>

                            <div className="flex items-start items-center mb-4">
                                <input id="checkbox-8" aria-describedby="checkbox-8" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
                                <label htmlFor="checkbox-8" className="text-sm ml-3 font-medium text-gray-900">20 - 30 miles </label>
                            </div>
                        
                        </fieldset>
                    </div>
                    <div className="flex mt-5 ">
                        <fieldset className="mb-5 mt-5">
                            <legend className="sr-only">Transit</legend>
                            <span className="justify-center underline">Transit Options</span>
                            <div className="flex items-center items-start mb-4">
                                <input id="checkbox-9" aria-describedby="checkbox-9" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
                                <label htmlFor="checkbox-9" className="text-sm ml-3 font-medium text-gray-900">Walking </label>
                            </div>

                            <div className="flex items-start items-center mb-4">
                                <input id="checkbox-10" aria-describedby="checkbox-10" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
                                <label htmlFor="checkbox-10" className="text-sm ml-3 font-medium text-gray-900">Bike</label>
                            </div>

                            <div className="flex items-start items-center mb-4">
                                <input id="checkbox-11" aria-describedby="checkbox-11" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
                                <label htmlFor="checkbox-11" className="text-sm ml-3 font-medium text-gray-900"> City Bus </label>
                            </div>

                            <div className="flex items-start items-center mb-4">
                                <input id="checkbox-12" aria-describedby="checkbox-12" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
                                <label htmlFor="checkbox-12" className="text-sm ml-3 font-medium text-gray-900"> Taxi </label>
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
