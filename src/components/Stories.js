import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Cardimageoverlay from './Cardimageoverlay'

function Stories() {
  return (
    <div>
        <Navbar/>
        {/* Stories */}
        {/* <a href='/stories/story1'><button>link1</button></a> */}
        {/* <Link to='/stories/story1'>linkkkkkk</Link> */}

      <Cardimageoverlay name="Shruti's Navel encounter in train" detail="Hot navel queen got her navel played during a sexy train journey !" button='lets explore' imgsrc='https://wallpapercave.com/wp/wp9018768.jpg' link='story1'/>

      {/* <Cardimageoverlay name="Sexy Tution Ma'am" detail=" got her nave" button='lets explore' imgsrc='https://wallpapercave.com/wp/wp9018768.jpg' link='story1'/>

      <Cardimageoverlay name="Navel encounter in train" detail="Hot navel queen got her navel played during a sexy train journey !" button='lets explore' imgsrc='https://wallpapercave.com/wp/wp9018768.jpg' link='story1'/> */}
    </div>
  )
}

export default Stories