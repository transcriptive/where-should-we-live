import React from "react";
import { Link } from 'react-router-dom';


import "./UserProfile.styles.css";

export default function UserProfile (props) {


  
    return (
        <div className="container mx-auto px-2 sm:px-6 lg:px-8">
            <div className="w-full mx-2 p-3 mt-10 md:w-3/12 md:mx-2 items-center border-2 border-indigo-500">
                <div className="image drop-shadow">
                     <img className="h-auto w-3/4 rounded-full mx-auto" 
                    src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg" alt="User Image" />
                </div>

                <div className=" pt-2 ">
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
                        <span className="text-base ml-3">Cities<br/>Explored</span>
                    </div>
                    <div className="flex justify-center mt-5 mb-5">
                        <svg className=" self-center" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <span className="text-base ml-3">Groups<br/>Explored</span>
                        {/* Need to Add Notification Icon */}
                    </div>
                </div>
            </div>
     
            <div className="bg-white p-3 shadow-sm rounded-sm ">
                <div className="flex items-center leading-8">
                    <span className="font-bold text-24">Recently<br/>Browsed</span>
                </div>
                    {/* If havent browsed, add link to homepage */}
                   
                <div className="grid md:grid-cols-2 text-sm">
                    <ol className="px-4 py-2 grid grid-cols-2 font-thin ">
                        <li className=" hover:bg-gray-200">
                            <a href="#" alt="Recently Browsed">New York City, NY</a>
                            {/* Add Maps Image of Place in Update */}
                        </li>
                        <li className="hover:bg-gray-200">
                            <a href="#" alt="Recently Browsed">Detroit, MI</a>
                            {/* Add Maps Image of Place in Update */}
                        </li>
                        <li className="hover:bg-gray-200">
                            <a href="#" alt="Recently Browsed">Seattle,WA</a>
                            {/* Add Maps Image of Place in Update */}
                        </li>
                    </ol>
                </div>
            </div>
            <div class="my-4"></div>

            <div className='flex top-933 w-311 h-63 left-121'>
                <span className="flex text-52">Preferences</span>
                <div className="grid grid-cols-3 gap-54">
                    <div className="mt-5 flex ">
                        <span className="relative left-121  underline">Lifestyle</span>
                        <fieldset className="mb-5 mt-5">
                            <legend className="sr-only">Lifestyle</legend>

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
                        <span className="relative left-121 underline">Distance to Work</span>
                        <fieldset className="mb-5">
                            <legend className="sr-only">Distance to Work</legend>

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
                        <span className="relative left-121 underline">Transit Options</span>
                        <fieldset className="mb-5">
                            <legend className="sr-only">Transit</legend>

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
    )
}