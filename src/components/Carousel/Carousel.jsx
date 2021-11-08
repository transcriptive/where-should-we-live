import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carousel.css";
import MapOne from './stockMapOne.jpg';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};



const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const { carouselState: { currentSlide } } = rest;
  return (
    <div className="carousel-button-group"> 
      <button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
      <button onClick={() => next()} />
    </div>
    );
  };

const arr = [1,2,3,4,5,6,7,8]



export default function ResultsCarousel( {results, setSelected} ) {
  
  console.log(results, 'modeldata')

  return(
    <>
      <div className='my-10 outside-container w-full'>
      <div className="mb-2">
              <h1>Your County Results</h1>
              <h2>Click to preview </h2>
      </div>
        <Carousel
          centerMode={true}
          arrows={true}	
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={false} // means to render carousel on server-side.
          infinite={false}
          autoPlay={false}
          autoPlaySpeed={0}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px caro-hover"
          customButtonGroup={<ButtonGroup />}
          renderButtonGroupOutside={false}
        >
    
        {results.map((result, index) => {
          return (
            <div 
              className={"px-4"} 
              key={index} 
              onClick={() => setSelected(index)}>
                <img 
                  src={MapOne}
                  className={'single-result'}
                  alt={index} 
                  key={index} 
                ></img>
              <p className={'ml-4 flex justify-start'}>{result.county}</p>
            </div>
          )
        })}

        </Carousel>
      </div>
    </>
  )
}