import React from 'react'
import { NavigateForm } from '../utils/navigateForm'
const FooterSection = () => {
  return (
    <div>
        <div className='footer-section-wrapper'>
            <div className='f-section-col'>
                <div><button className='submit-btn' id='apply-btn' onClick={NavigateForm}>Apply Now</button></div>
                <div className='location'>TreNova Limited</div>
                <div className='location'>7B, Ogunsiji Close, Allen Avenue, Ikeja, Lagos.</div>
            </div>
            <div className='f-section-col phone'>
                <a href='#section'>Call for more info.</a>
                <a href='#section'>09137819540</a>
                <a href='#section'>09137819540</a>
                <a href='#section'>09137819540</a>
           
            </div>
        </div>
    </div>
  )
}

export default FooterSection