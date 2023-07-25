import React from 'react'
import './soverlay.css'
import { Link } from 'react-router-dom'
const Cardimageoverlay = (props) => {
  return (
    <div>
      <div class="card text-bg-dark text-light">
  <img src={props.imgsrc} class="card-img" alt="..."/>
  <div class="card-img-overlay">
    <h5 class="card-title">{props.name}</h5>
    <div className='det'>

    <p class="card-text">{props.detail}</p>
    {/* <p class="card-text"><small>Last updated 3 mins ago</small></p> */}
    {/* <a href="#" class="btn btn-primary">{props.button}</a> */}
    <Link to={props.link} className='btn btn-primary'>{props.button}</Link>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cardimageoverlay
