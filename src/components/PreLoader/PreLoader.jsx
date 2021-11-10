import React from "react";
import LottieLoader from 'react-lottie-loader';

export default function PreLoader( {data} ) {
  return (
    <div className='mt-10 w-1/3 mx-auto'>
      <LottieLoader 
        animationData={data}
        autoplay={true}
        />
    </div>
  );
}

