import React from 'react'
import { useState } from 'react';
import { send } from 'emailjs-com';


// 

function Footer() {
const [loading, setLoading] = useState(false)
const [btnMsg, setBtnMsg] = useState("Submit")
const [toSend, setToSend] = useState({
    from_name: process.env.FROM_NAME,
    to_name: ' ',
    message: '',
    reply_to: process.env.REPLY_TO,
    });
    
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (toSend.message.length > 1 && btnMsg == "Submit") {
        setLoading(true)
        
        send(
            process.env.SERVICE_ID,
            process.env.TEMPLATE_ID,
            toSend,
            process.env.USER_ID
        )
          .then((response) => {
            // console.log('SUCCESS!', response.status, response.text);
            setLoading(false)
            setBtnMsg("Thank You!")
          })
          .catch((err) => {
            // console.log('FAILED...', err);
            setLoading(false)
            setBtnMsg("Thank You!")
          });
    }
    
  };

//   console.log(toSend.message.length)

  return (
   
    <div>
        
        <form onSubmit={onSubmit} className="relative mt-36 mb-4 text-xs">
            <input 
            type="text" 
            name='message'
            value={toSend.message}
            onChange={handleChange}
            aria-label="Email for newsletter" 
            placeholder="Suggestions, Feedback..." 
            className="py-auto text-xs px-5 block w-full border-gray-300 rounded-md bg-white text-gray-600 pr-32"/>
            
            <button className={`text-white  w-1/3 md:w-1/4 px-5 text-xs hover:bg-gray-500 flex items-center justify-center absolute right-1 top-1 font-medium h-7 bg-blue-600 rounded w-28" type="submit`}>{ loading ?  
            
            <svg className="animate-spin  ml-1.5 h-4 w-4 text-white mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg> 
            :      
            btnMsg}</button>
        </form>
    </div>
  
  )
}

export default Footer