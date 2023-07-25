import React from 'react'

function Imagecrd(props) {
  return (
    <div>

<div class="card mb-3">
  <img src={props.imgsrs} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class={`card-title ${props.clast}`}>{props.title}</h5>
    <p class={`card-text ${props.classe}`}>{props.details}</p>
    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
  </div>
</div>

    </div>
  )
}

export default Imagecrd