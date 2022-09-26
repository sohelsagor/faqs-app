import React from 'react';
import Faq from '../Faq';
import { FaqsData } from './FaqData';
function FAQS() {
   
   
  return (
    <div className='faq-main'>
     <h1>
     Frequently Asked Questions
     </h1>
     <section>
      {FaqsData.map((faq)=>(
        <Faq  key={faq.id} {...faq}/>
      ))}
     </section>
    </div>
  )
}

export default FAQS;