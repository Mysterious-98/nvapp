import './FooterStyles.css'
// import {  } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'
const Footer=()=>{
    return(
        <div className="footer">
            <div className="top">
                <div><h1>Navelicious</h1><p>Your One Stop For All Things Navel Related.</p></div>
                <div className='iconz'>

                <div><a href='/'><i className='fa-brands fa-facebook-square'></i></a></div>
                <div><a href='/'><i className='fa-brands fa-instagram-square'></i></a></div>
                <div><a href='/'><i className='fa-brands fa-behance-square'></i></a></div>
                <div><a href='/'><i className='fa-brands fa-twitter-square'></i></a></div>
                </div>
             </div>
            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href='/'>ChangeLog</a>
                    <a href='/'>Status</a>
                    <a href='/'>License</a>
                    <a href='/'>All Versions</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href='/'>Github</a>
                    <a href='/'>Issues</a>
                    <a href='/'>Project</a>
                    <a href='/'>Twitter</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href='/'>Support</a>
                    <a href='/'>Troubleshooting</a>
                    <a href='/'>Contact us</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href='/'>Terms of Service</a>
                    <a href='/'>Privacy Policy</a>
                    <a href='/'>License</a>
                </div>
            </div>
        </div>
    )
}
export default Footer