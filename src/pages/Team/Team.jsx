import React from 'react';

const Team =()=>{
    return(
<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
    <div className="text-center pb-12">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
            Meet the Team
        </h1>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
            <div>
                <img className="object-center object-cover h-auto w-full" src="/images/JohnR.jpg" alt="photo"/>
            </div>
            <div className="text-center py-8 sm:py-6">
                <p className="text-xl text-gray-700 font-bold mb-2">John Raymond</p>
                <p className="text-base text-gray-400 font-normal">Project Manager - Software Engineer</p>
            </div>
        </div>
        <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
            <div>
                <img className="object-center object-cover h-auto w-full" src="" alt="photo" />
            </div>
            <div className="text-center py-8 sm:py-6">
                <p className="text-xl text-gray-700 font-bold mb-2">Kevin Urban</p>
                <p className="text-base text-gray-400 font-normal">Team Lead - UX Designer</p>
            </div>
        </div>
        <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
            <div>
                <img className="object-center object-cover h-auto w-full" src="" alt="photo" />
            </div>
            <div className="text-center py-8 sm:py-6">
                <p className="text-xl text-gray-700 font-bold mb-2">Juliana Antoninus</p>
                <p className="text-base text-gray-400 font-normal">Data Scientist</p>
            </div>
        </div>
        <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
            <div>
                <img className="object-center object-cover h-auto w-full" src="" alt="photo"/>
            </div>
            <div className="text-center py-8 sm:py-6">
                <p className="text-xl text-gray-700 font-bold mb-2">Christian Mosley</p>
                <p className="text-base text-gray-400 font-normal">Software Engineer</p>
            </div>
        </div>
        <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
            <div>
                <img className="object-center object-cover h-auto w-full" src="/images/Rene'.jpg" alt="photo"/>
            </div>
            <div className="text-center py-8 sm:py-6">
                <p className="text-xl text-gray-700 font-bold mb-2">René Paccha</p>
                <p className="text-base text-gray-400 font-normal">UX Designer</p>
                <p className="hidden ">
                    Rene is a UX designer advocating for early research while specializing in visual development of ideas a stakeholder goals.
                    He values performance based learning and structure-informed improvisation.
                    Enjoyed collab on a public good app.
                </p>
            </div>
        </div>
        <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
            <div>
                <img className="object-center object-cover h-auto w-full" src="" alt="photo"/>
            </div>
            <div className="text-center py-8 sm:py-6">
                <p className="text-xl text-gray-700 font-bold mb-2">Maxwell Scheinholtz</p>
                <p className="text-base text-gray-400 font-normal">UX Designer</p>
            </div>
        </div>
        <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
            <div>
                <img className="object-center object-cover h-auto w-full" src="/images/patrice2.jpeg" alt="photo"/>
            </div>
            <div className="text-center py-8 sm:py-6">
                <p className="text-xl text-gray-700 font-bold mb-2">Patrice Brooks</p>
                <p className="text-base text-gray-400 font-normal">Software Engineer</p>
            </div>
        </div>
        <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
            <div>
                <img className="object-center object-cover h-auto w-full" src="" alt="photo"/>
            </div>
            <div className="text-center py-8 sm:py-6">
                <p className="text-xl text-gray-700 font-bold mb-2">John Bruscella</p>
                <p className="text-base text-gray-400 font-normal">Data Scientist</p>
            </div>
        </div>
        <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
            <div>
                <img className="object-center object-cover h-auto w-full" src="" alt="photo"/>
            </div>
            <div className="text-center py-8 sm:py-6">
                <p className="text-xl text-gray-700 font-bold mb-2">Aaron Prince</p>
                <p className="text-base text-gray-400 font-normal">Software Engineer</p>
            </div>
        </div>
    </div>
</section>
    )
}
export default Team;