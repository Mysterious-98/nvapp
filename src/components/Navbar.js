import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navb'>
      <div className='logo'>
        Navelicious</div>
        <div className='buttnz'>
            {/* <div className='btnbt'>Home</div> */}
            <Link to='/' className='btnbt'>Home</Link>
            <Link to='/about' className='btnbt'>About</Link>
            <Link to='/pictures' className='btnbt'>Pictures</Link>
            <Link to='/stories' className='btnbt'>Stories</Link>
            {/* <div className='btnbt'>About</div> */}
            {/* <div className='btnbt'>Pictures</div> */}
            {/* <div className='btnbt' >Stories</div> */}
            {/* <div className='btnbt'>Gu</div> */}
        </div>
        {/* <div className='buttonx2'>
            <div className='btnbt'>Ideas</div>
            <div className='btnbt'>Piercings</div>
            <div className='btnbt'>Dresses</div>

        </div> */}
    </div>
  )
}

export default Navbar
