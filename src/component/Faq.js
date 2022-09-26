import React, { useState } from 'react';


 const Faq = ({question,answer}) => {
    const[toggole,setToggole]=useState(false)
  return (
    <div className='faq'>
        <h4 className='question'>{question}</h4>
        <button onClick={()=>{
            setToggole(!toggole);
        }}>
     {toggole? 'Hide' : 'Show'}


        </button>
        <div>
            {toggole &&<p>{answer}</p>}
        </div>
    </div>
  )
}
export default Faq;