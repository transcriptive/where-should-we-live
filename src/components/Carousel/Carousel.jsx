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

const Image = ({ url, alt }) => (
  <img draggable={false} style={{padding: '1rem', width: '100%', position: 'relative'}} src={url} alt={alt} />
)

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

export default function ResultsCarousel( {modelData} ) {
  // const imageResults = modelData?.county
  
  // console.log(imageResults)

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
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={0}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          customButtonGroup={<ButtonGroup />}
          renderButtonGroupOutside={false}
        >
        {/* {images.slice(0, 5).map(image => {
                return (
                  <div>
                  <Image 
                    url={image}
                  />
                  </div>
                );
        })}  */}

        {/* const Image = ({ url, alt }) => (
          <img draggable={false} style={{padding: '1rem', width: '100%', position: 'relative'}} src={url} alt={alt} />
        ) */}


        {arr.map((value, index) => {
          return (
            <div className={"px-4"} key={index}>
              <img 
                src={MapOne}
                className={'single-result'}
                alt={index} 
                key={index} 
              ></img>
              <p className={'ml-4 flex justify-start'}>County {value}</p>
            </div>
          )
        })}


         {/* {props.modelData?.county.map((value, index) => {
            return ( 
              <div className="single-result" key={index}>
                  <p>{value.county}</p>
              </div>
                   );
                 })
          } */}
                

        </Carousel>
      </div>
    </>
  )
}