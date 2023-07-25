// import React from 'react'

// const WebsiteData = () => {
//   return (
//     <div>
//       this ins isnside
//       <div className='cont1'>
//         this is cont1
        
//       </div>
//     </div>
//   )
// }

// export default WebsiteData
import './webdata.css'
import { motion } from "framer-motion"
import React from 'react';
import { useMediaQuery } from 'react-responsive';
// import bgvid from '../video/video.mp4'
// import bvid from '../video/vidd.mp4'
// import ii from '../video/87.jpg'
// import iii from '../video/88.jpg'
// import iiii from '../video/vidd.mp4'
// import Details from "./Details";
// import Carousel from "./Carousel";
// import Hcard from "./Hcard";
// import Cardflat from './Cardflat';
// import FeaturedComp from './FeaturedComp';
import Cardimageoverlay from './Cardimageoverlay';
// import Imagecaps from './Imagecaps';
import Footer from './Footer';
import bnvid from '../video/wlcm.mp4'
const TextAnimation = () => {
    const text = "Welcome to Navelicious, the ultimate destination for navel lovers seeking navel stories, stunning pictures, engaging videos and much more !";
    const isMobile = useMediaQuery({ maxWidth: 600 }); // Adjust the breakpoint as per your needs

    return (
        // <motion.div>
        //   {text.split("").map((letter, index) => (
        //     <motion.span
        //       key={index}
        //       initial={{ opacity: 0 }}
        //       animate={{ opacity: 1 }}
        //       transition={{ duration: 0.5, delay: index * 0.1 }}
        //      >
        //       {letter}
        //     </motion.span>
        //   ))}
        // </motion.div>

    <div>
      {/* {isMobile ? 
        <video  className='vidvid' autoPlay loop muted  >
        <source src={bgvid} type="video/mp4"/>
      </video> 
       : <div>

        <video  className='vidvid' autoPlay loop muted  >
        <source src={bvid} type="video/mp4"/>
      </video> 
       </div>
      } */}
      {/* this is the working one disabled teporarily */}
      <div className='parent'>

      <video className='vidvid5' autoPlay muted  >
                  <source src={bnvid} type="video/mp4" />
                </video>

      <div className='cont1'>

     <motion.div>
         {text.split("").map((letter, index) => (
           <motion.span
              key={index}
              initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.01, delay: index * 0.1 }}
            >
             {letter}
           </motion.span>
         ))}
       </motion.div>
              </div>


         </div>
         {/* <Carousel/> */}
         {/* <Hcard/> */}
         {/* <Details name='basssin'/> */}
<Cardimageoverlay imgsrc="https://wallpapercave.com/dwp1x/wp9553159.jpg" name="Erotic Navel Stories" detail="Explore sizzling Indian navel stories that will ignite your imagination and captivate your senses." button="Lets Explore" link='stories'/>

<Cardimageoverlay imgsrc="https://wallpapercave.com/dwp1x/wp9226730.jpg" name="Navel Images " detail="Explore sizzling Indian navel stories that will ignite your imagination and captivate your senses." button="Lets Explore"/>

<Cardimageoverlay imgsrc="https://wallpapercave.com/dwp1x/wp9260541.jpg" name="Navel Videos " detail="Explore sizzling Indian navel stories that will ignite your imagination and captivate your senses." button="Lets Explore"/>

<Cardimageoverlay imgsrc="https://wallpapercave.com/dwp1x/wp9260693.jpg" name="Navel Ideas " detail="Explore sizzling Indian navel stories that will ignite your imagination and captivate your senses." button="Lets Explore"/>

<Cardimageoverlay imgsrc="https://c4.wallpaperflare.com/wallpaper/805/512/847/bare-midriff-crop-top-belly-button-belly-hd-wallpaper-preview.jpg" name="Navel Fashion " detail="Explore sizzling Indian navel stories that will ignite your imagination and captivate your senses." button="Lets Explore"/>

<Cardimageoverlay imgsrc="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/365850e4-870f-41e8-9108-3c08c2a11b02/dezrdlt-bf203fa8-1449-406e-8b21-876abe54f26b.jpg/v1/fill/w_1192,h_670,q_70,strp/carnvial_tickling_belly_button_1_by_ghfghfbw_dezrdlt-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMzY1ODUwZTQtODcwZi00MWU4LTkxMDgtM2MwOGMyYTExYjAyXC9kZXpyZGx0LWJmMjAzZmE4LTE0NDktNDA2ZS04YjIxLTg3NmFiZTU0ZjI2Yi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.oY0u5gQ0PfBLkCTEX7l9FLRq9RWAMyUUSXIMg8C6GpA" name="Navel Tickling " detail="Explore sizzling Indian navel stories that will ignite your imagination and captivate your senses." button="Lets Explore"/>

<Cardimageoverlay imgsrc="https://images.pexels.com/videos/3795386/art-body-skin-3795386.jpeg" name="Navel Care " detail="Explore sizzling Indian navel stories that will ignite your imagination and captivate your senses." button="Lets Explore" />
{/* <Imagecaps/>
<FeaturedComp/>
<FeaturedComp/>
<Cardflat/>
<Cardimageoverlay/> */}
<Footer/>
    </div>

      );
};
export default TextAnimation;