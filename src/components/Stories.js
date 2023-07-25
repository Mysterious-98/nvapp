import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Cardimageoverlay from './Cardimageoverlay'
import Footer from './Footer'

function Stories() {
  return (
    <div>
        <Navbar/>
        {/* Stories */}
        {/* <a href='/stories/story1'><button>link1</button></a> */}
        {/* <Link to='/stories/story1'>linkkkkkk</Link> */}

      <Cardimageoverlay name="Shruti's Navel encounter in train" detail="Hot navel queen got her navel played during a sexy train journey !" button='lets explore' imgsrc='https://wallpapercave.com/wp/wp9018768.jpg' link='story1'/>

      <Cardimageoverlay name="Priya mam ki nabhi me kuch hai!" detail="Priya mam gets her navel played by a student at her tution classes!" button='lets explore' imgsrc='https://th.bing.com/th/id/R.8977a1c36f26c9936894dabdffceba1b?rik=kO4uQ%2bn5dwCY9A&riu=http%3a%2f%2f2.bp.blogspot.com%2f-efqkAzYeBag%2fUBcXz8Cr-iI%2fAAAAAAAAnsY%2ffk39-KiPD_U%2fs1600%2fSorry%2bTeacher%2bHot%2bStills%2b%2b(1).jpg&ehk=HdVAkFqN%2fOXAqPEG2fqjCLDW2tJMckwLtnuloyfsjWo%3d&risl=&pid=ImgRaw&r=0' link='story2'/>

      {/* <Cardimageoverlay name="Sexy Tution Ma'am" detail=" got her nave" button='lets explore' imgsrc='https://wallpapercave.com/wp/wp9018768.jpg' link='story1'/>

      <Cardimageoverlay name="Navel encounter in train" detail="Hot navel queen got her navel played during a sexy train journey !" button='lets explore' imgsrc='https://wallpapercave.com/wp/wp9018768.jpg' link='story1'/> */}
      <Footer/>
    </div>
  )
}

export default Stories