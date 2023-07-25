import React from 'react'
import bgvid from '../video/video.mp4'
import bvid from '../video/vidd.mp4'
import bb from '../video/wrld.mp4'
import WebsiteDatainside from '../components/WebsiteData';
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import { motion } from "framer-motion"
import { useMediaQuery } from 'react-responsive';
import logogo from '../video/R.gif'
function Home() {
  
  const [showVideo, SetShow] = useState(true)
  const [WebsiteData, SetData] = useState(false)
  const [context, Setcontext] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      SetShow(false)
      SetData(true)
    }, 8800);
    setTimeout(() => {
      Setcontext(true)
    }, 2000);
  }, [])

  const text = "Navelicious";
  const text2 = "Welcome to Navelicious, your one-stop destination for all things navel-related.";
  const isMobile = useMediaQuery({ maxWidth: 600 });


  return (
    <div>

    <div className='videosection'>
        {showVideo && (
          <div className='video-container'>
            {/* <video  className='vidvid' autoPlay loop muted  >
          <source src={bgvid} type="video/mp4"/>
        </video>
           */}
            {isMobile ?
              // <video className='vidvid' autoPlay muted  >
              //   <source src={bb} type="video/mp4" />
              //   {/* <source src={bb} type="video/mp4" /> */}
              // </video>
              <img src={logogo} />
              : <div>

                <video className='vidvid' autoPlay loop muted  >
                  <source src={bvid} type="video/mp4" />
                </video>
              </div>
            }

            <motion.div className='textboxx'>
              {text.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className='mosan'>
                  {letter}
                </motion.span>
              ))}
            </motion.div>

            {context && (

              <motion.div className='textboxx2'>
                {text2.split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className='mosan2'>
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            )}


          </div>
        )}
      </div>
      {WebsiteData && (
        <>
          <Navbar />
          <WebsiteDatainside />
        </>

      )}

    </div>
  )
}

export default Home