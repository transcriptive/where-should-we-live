import React from "react";
import { Link } from 'react-router-dom';


import "./UserProfile.styles.css";

export default function UserProfile (props) {


  
    return (
        <div className=" flex max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="flex justify-center pb-10">
                <img className="h-14 w-14 rounded-full object-cover" src="../images/DefaultUserImage.png" alt="User Image" />
                <div className="flex ">
                    <div className="flex flex-col justify-content-around items-start ml-10">
                        <span className="text-24">Name: </span>
                        {/* Input Name */}
                        <span className="text-24">Moving From: </span>
                        {/* Input Moving From */}
                    </div>
                    <div className="flex flex-row justify-content-around items-center mr-5 text-24">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9"/>
                        <path d="M9 22V12h6v10M2 10.6L12 2l10 8.6"/>
                    </svg>
                        <span>Cities<br/>Explored</span>
                    </div>
                    <div className="flex flex-row justify-content-around items-center mr-5 text-24">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                        <span>Groups<br/>Explored</span>
                    </div>
                </div>
            </div>

            <div className='border-b border-black'></div>

            <div className="flex ">
                <span className="flex w-80 h-14 left-28 top-561 text-36-bold">Recently <br/> Browsed</span>
                <ol className="flex inline-flex w-1397 h-1260">
                    <li>
                        <a href="#" alt="Recently Browsed">Name of Place</a>
                    </li>
                </ol>
            </div>

            <div class="border-b border-gray-300"></div>
            <div className=''>
                <p className="flex w-311 h-63 left-121 top-933 text-52">Preferences</p>
                <div className="mt-5 grid grid-cols-3 gap-10 ">
                    <p className="relative left-121  underline">Lifestyle</p>
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
                        
                        <div className="flex items-start mb-4">
                            <input id="checkbox-4" aria-describedby="checkbox-4" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
                            <label for="checkbox-4" class="text-sm ml-3 font-medium text-gray-900">Restaurants</label>
                        </div>
                        <div className="flex items-start mb-4">
                            <input id="checkbox-5" aria-describedby="checkbox-5" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
                            <label for="checkbox-5" class="text-sm ml-3 font-medium text-gray-900">Faith Services</label>
                        </div>
                    </fieldset>
                </div>
                <div className="flex ">
                    <p className="flex w-311 h-63 left-121 underline ">Distance to Work</p>
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
                <div className="flex ">
                    <p className="flex w-311 h-63 left-121 underline">Transit Options</p>
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
    )
}