import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carousel.css";
import Texas from './states/TX.png'


function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('./states', false, /\.(png|jpe?g|svg)$/));


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

 
  
  export default function ResultsCarousel( {resultsRef, handleScroll, results, setSelected} ) {
  

  
  const stateLabels = [
    { label: 'Alabama', value: 'AL' },
    { label: 'Alaska', value: 'AK' },
    { label: 'American Samoa', value: 'AS' },
    { label: 'Arizona', value: 'AZ' },
    { label: 'Arkansas', value: 'AR' },
    { label: 'California', value: 'CA' },
    { label: 'Colorado', value: 'CO' },
    { label: 'Connecticut', value: 'CT' },
    { label: 'Delaware', value: 'DE' },
    { label: 'District of Columbia', value: 'DC' },
    { label: 'Florida', value: 'FL' },
    { label: 'Georgia', value: 'GA' },
    { label: 'Guam', value: 'GU' },
    { label: 'Hawaii', value: 'HI' },
    { label: 'Idaho', value: 'ID' },
    { label: 'Illinois', value: 'IL' },
    { label: 'Indiana', value: 'IN' },
    { label: 'Iowa', value: 'IA' },
    { label: 'Kansas', value: 'KS' },
    { label: 'Kentucky', value: 'KY' },
    { label: 'Louisiana', value: 'LA' },
    { label: 'Maine', value: 'ME' },
    { label: 'Maryland', value: 'MD' },
    { label: 'Massachusetts', value: 'MA' },
    { label: 'Michigan', value: 'MI' },
    { label: 'Minnesota', value: 'MN' },
    { label: 'Mississippi', value: 'MS' },
    { label: 'Missouri', value: 'MO' },
    { label: 'Montana', value: 'MT' },
    { label: 'Nebraska', value: 'NE' },
    { label: 'Nevada', value: 'NV' },
    { label: 'New Hampshire', value: 'NH' },
    { label: 'New Jersey', value: 'NJ' },
    { label: 'New Mexico', value: 'NM' },
    { label: 'New York', value: 'NY' },
    { label: 'North Carolina', value: 'NC' },
    { label: 'North Dakota', value: 'ND' },
    { label: 'Ohio', value: 'OH' },
    { label: 'Oklahoma', value: 'OK' },
    { label: 'Oregon', value: 'OR' },
    { label: 'Pennsylvania', value: 'PA' },
    { label: 'Puerto Rico', value: 'PR' },
    { label: 'Rhode Island', value: 'RI' },
    { label: 'South Carolina', value: 'SC' },
    { label: 'South Dakota', value: 'SD' },
    { label: 'Tennessee', value: 'TN' },
    { label: 'Texas', value: 'TX' },
    { label: 'Utah', value: 'UT' },
    { label: 'Vermont', value: 'VT' },
    { label: 'Virgin Islands', value: 'VI' },
    { label: 'Virginia', value: 'VA' },
    { label: 'Washington', value: 'WA' },
    { label: 'West Virginia', value: 'WV' },
    { label: 'Wisconsin', value: 'WI' },
    { label: 'Wyoming', value: 'WY' },
  ];

  const findState = (countyString) => {
      if(!countyString) return
      const state = countyString.split(',')[1].trim()
      console.log(state, 'state')
      const abbrev = stateLabels.find(s => s.label === state).value
      const srcImg = images.find(img => {
        return abbrev === img.default.split('/')[3].split('.')[0]
      }) 
      return srcImg?.default
  }
    

  return(
    <>
      <div className='my-10'>
      <div className="mb-2">
              <h1>Your County Results</h1>
              <h2>Click to preview </h2>
      </div>
        <Carousel
          centerMode={true}
          arrows={true}	
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={false} // means to render carousel on server-side.
          infinite={false}
          autoPlay={false}
          autoPlaySpeed={0}
          keyBoardControl={true}
          customTransition="transform 300ms ease-in-out"
          transitionDuration={300}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px caro-hover"
          renderButtonGroupOutside={false}
          sliderClass='carousel-track'
          // onClick={() => handleScroll(selectedRef)}
        >
    
        {results.map((result, index) => {
          return (
            <div 
              className={""} 
              key={index} 
              onClick={() => setSelected(index)}>
                <img 
                  src={findState(result.county)              
                    }
                  className={'single-result'}
                  alt={index} 
                  key={index} 
                ></img>
              <p className={'mt-4'}>{result.county.split(',')[0]}</p>
            </div>
          )
        })}
        </Carousel>
      </div>
    </>
  )
}