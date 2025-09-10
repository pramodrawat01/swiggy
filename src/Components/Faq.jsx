import React, { useState } from 'react'
import './Faq.css'
import faqData from '../config/faqData'
import { useParams } from 'react-router-dom'
import { FiChevronDown } from "react-icons/fi";

const Faq = () => {
    const {category} = useParams();
    const data = faqData[category];

    console.log(data, "faq data dnkfsakfnsafn")

    if(!data) return <p>no faq data exist</p>
  return (
    <div className='faq-container'>
        
        <h2>
            {data.title}
        </h2>
        
        {
            data.questions.map((item)=>(
                <details key={item.index}>
                    
                    <summary className='summary'>
                        {item.q}
                        <FiChevronDown 
                            className="expand-icon"
                        />
                    </summary>
                    <p className='summary-ans'>{item.a}</p>
                </details>
            ))
        }

    </div>
  )
}

export default Faq