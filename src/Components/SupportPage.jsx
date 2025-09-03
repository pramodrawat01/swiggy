import React from 'react'
import './Support.css'
import { Link, Outlet } from 'react-router-dom'

const SupportPage = () => {
  return (
     <div className="help-container">
      {/* Sidebar */}
      <aside className="help-sidebar">
        <ul>
          <Link to='partner_onboarding' className="active">
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
  )
}

export default SupportPage