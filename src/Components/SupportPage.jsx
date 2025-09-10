import React from 'react'
import './Support.css'
import { Link, NavLink, Outlet, useParams } from 'react-router-dom'
import { isAction } from 'redux'

const SupportPage = () => {

  const {category} = useParams()
  return (
   <div className="help-main"   >
      <h1>Help & Support</h1> 
            <h4>Let's take a step ahead and help you better.</h4>
     
   
     <div className="help-container" >
      {/* Sidebar */}
      <aside className="help-sidebar">
        <ul>
          <Link to='partner_onboarding ' className={category === 'partner_onboarding' ? "active" : ""}>
            <li>
              Partner Onboarding 
            </li>
          </Link>
          
            <Link to='legal' className={category === 'legal' ? "active" : ""}>
              <li>Legal</li>
            </Link>
            <Link to='faqs' className={category === 'faqs' ? "active" : ""} >
              <li>Faqs</li>
            </Link>
            
            <Link to='instamart_onboarding' className={category === 'instamart_onboarding' ? "active" : ""}>
              <li>Instamart Onboarding</li>
            </Link>
            <Link to='irctc_faq' className={category === 'irctc_faq' ? "active" : ""}>
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