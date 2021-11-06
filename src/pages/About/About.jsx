import React from "react";

const About = ()=> (
    <div className="min-h-screen bg-white flex max-w-7xl  mx-auto">
        <div className="relative w-1/2 ">
            <img 
            className="absolute inset-0 h-full w-full object-cover"
            src="/images/nelson-ndongala-jNUTiYlPMHI-unsplash.jpg" alt="Liberty"/>
        </div>
        <div className="text-left pl-24 pr-20 pt-16">
            <div>
                <h1 className="text-52 font-montserrat-bold font-semibold ">About Connect.US</h1>
                <p className="text-24 font-roboto pt-3">
                    We are a group of developers, data scientist and UXers that came together to solve the problem facing anyone relocating to this country for the first time… 
                </p>
            </div>
            <div className="pt-8">
                <h2 className="text-36 font-montserrat-bold font-semibold">Where Should I Live?</h2>
                <div className="text-24 font-roboto pt-3">
                    <p> Some are looking to find a place that are similar to their homeland. Some Desire to try something new. </p>
                    <p className="mt-6 mb-6"> Some are looking for a real American experience while some are looking for cultural similarities to what they’re used to.</p>
                    <p> Our goal in this project, using data sets from the US Census, is to create a product that will allow people to find their place based on <b> Values</b>, <b>Variety</b> and <b>Vision</b> for their life.</p> 
                </div>
            </div>
            <div className="pt-5">
                <h2 className="text-36 font-montserrat-bold font-semibold">How to Navigate this site</h2>
                <div className="text-24 font-roboto pt-3">
                    <p> Play around with the various inputs. They are designed to give you control over what is important to you.</p> 
                    <p className="mt-6">Select an area of the country and Connect.US will give you towns in that are that are similar in nature based off your preferences. </p>
                </div>
            </div>
        </div>
    </div>

)
export default About;