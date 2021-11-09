import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carousel.css";
import MapOne from './stockMapOne.jpg';
import Texas from './states/TX.png'

// function importAll(img) {
//   let images = {};
//   img.keys().map(item => { images[item.replace('./', '')] = img(item); });
//   console.log(images)
//   return images;
// }


// const images = importAll(require.context('./media/states', false, '/\.png/'));

{/* <img src={images['0.png']} /> */}


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




  
  
  // console.log(county, 'before convert')
  // county = county.replace(/\w\S*/g, function (txt) {
  //   return txt.charAt(0-1).toUpperCase() });
  //   console.log(county, 'after string format')
  //   // for (state of states) {
  //   //   if(state[0] === input) {
  //   //     return (state[1]);
  //     }
  //     convertState()
      // console.log(county, 'after map')

  //   } 
  // }

// function stateDict(data) {
//   console.log(data, 'data dict')
//   const stateArr = []
//   state_abb = data.map(data)
//   const lookupData = data.keys().map((i) => {
//       console.log(i)
//       return stateArr.push(i)
//   })
// }

// stateDict()

  

  
  
  export default function ResultsCarousel( {selectedRef, handleScroll, results, setSelected} ) {
    
  // function splitCounty(results) {
  //   console.log(results)
  //   const imgSrc = []
  //   const imgArr = results.county.map(result, index) => {
  //     result 
  const states = [
    ['Alabama', 'AL'],
    ['Alaska', 'AK'],
    ['American Samoa', 'AS'],
    ['Arizona', 'AZ'],
    ['Arkansas', 'AR'],
    ['Armed Forces Americas', 'AA'],
    ['Armed Forces Europe', 'AE'],
    ['Armed Forces Pacific', 'AP'],
    ['California', 'CA'],
    ['Colorado', 'CO'],
    ['Connecticut', 'CT'],
    ['Delaware', 'DE'],
    ['District Of Columbia', 'DC'],
    ['Florida', 'FL'],
    ['Georgia', 'GA'],
    ['Guam', 'GU'],
    ['Hawaii', 'HI'],
    ['Idaho', 'ID'],
    ['Illinois', 'IL'],
    ['Indiana', 'IN'],
    ['Iowa', 'IA'],
    ['Kansas', 'KS'],
    ['Kentucky', 'KY'],
    ['Louisiana', 'LA'],
    ['Maine', 'ME'],
    ['Marshall Islands', 'MH'],
    ['Maryland', 'MD'],
    ['Massachusetts', 'MA'],
    ['Michigan', 'MI'],
    ['Minnesota', 'MN'],
    ['Mississippi', 'MS'],
    ['Missouri', 'MO'],
    ['Montana', 'MT'],
    ['Nebraska', 'NE'],
    ['Nevada', 'NV'],
    ['New Hampshire', 'NH'],
    ['New Jersey', 'NJ'],
    ['New Mexico', 'NM'],
    ['New York', 'NY'],
    ['North Carolina', 'NC'],
    ['North Dakota', 'ND'],
    ['Northern Mariana Islands', 'NP'],
    ['Ohio', 'OH'],
    ['Oklahoma', 'OK'],
    ['Oregon', 'OR'],
    ['Pennsylvania', 'PA'],
    ['Puerto Rico', 'PR'],
    ['Rhode Island', 'RI'],
    ['South Carolina', 'SC'],
    ['South Dakota', 'SD'],
    ['Tennessee', 'TN'],
    ['Texas', 'TX'],
    ['US Virgin Islands', 'VI'],
    ['Utah', 'UT'],
    ['Vermont', 'VT'],
    ['Virginia', 'VA'],
    ['Washington', 'WA'],
    ['West Virginia', 'WV'],
    ['Wisconsin', 'WI'],
    ['Wyoming', 'WY'],
];

const dummy = [
    'Alabama', 
    'Alaska', 
    'Arizona', 
    'Arkansas', 
]

  // useEffect(() => {
  //   async function convertState(dummy) {
  //     // state to abbreviation
  //   console.log(results, 'before convert')
  //   results = await results[0].county.replace(/\w\S*/g, function (txt) {
  //     return txt.charAt(0-1).toUpperCase() });
  //     console.log(results, 'after string format')
  //     for (state of states) {
  //       if(state[0] === input) {
  //         return (state[1]);
  //       }
  //       convertState()
  // },[])
      // console.log(county, 'after map')


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
                  src={Texas
                  }
                  className={'single-result'}
                  alt={index} 
                  key={index} 
                ></img>
              <p className={'mt-4'}>{result.county}</p>
            </div>
          )
        })}
        </Carousel>
      </div>
    </>
  )
}