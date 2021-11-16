import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Photos({photos}) {
    
    return (
        <Carousel
          centerMode={true}
          centerSlidePercentage={35}            >
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
