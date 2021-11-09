import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Photos({photos}) {
    
        return (
            <Carousel
            autoPlay={true}
            centerMode={true}
            centerSlidePercentage={40}            >
              {photos?.map((result, index) => {
                  return (
                    <div>
                      <img 
                        src={result}
                        alt={index} 
                        key={index} 
                      />
                    </div>
                  )
              })}     
            </Carousel>
        );
}


// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>