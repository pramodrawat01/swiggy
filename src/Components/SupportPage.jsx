import React from 'react'
import './Support.css'
import { Link, Outlet } from 'react-router-dom'

const SupportPage = () => {
  return (
   <div className="help-main"   >
      <h1>Help & Support</h1> 
            <h4>Let's take a step ahead and help you better.</h4>
     
   
     <div className="help-container" >
      {/* Sidebar */}
      <aside className="help-sidebar">
        <ul>
          <Link to='partner_onboarding ' className="active">
            <li>
              Partner Onboarding 
            </li>
          </Link>
          
            <Link to='legal'>
              <li>Legal</li>
            </Link>
            <Link to='faqs'>
              <li>Faqs</li>
            </Link>
            
            <Link to='instamart_onboarding'>
              <li>Instamart Onboarding</li>
            </Link>
            <Link to='irctc_faq'>
              <li>IRCTC FAQ</li>
            </Link>
          
          
          
        </ul>
      </aside>

      {/* faq section */}
      <div className='main-faq-container'>
        <Outlet/>
      </div>
    </div>
   </div> 

  )
}

export default SupportPage