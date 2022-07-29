import localStorage from 'localStorage'
import {useState, useEffect} from 'react'
/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

function isMsgInKeyFormat(content){
  return ((content?.match(/-/g) || []).length) == 3
}



export default function KeyInput({setMasterKey}) {
  const [key, setKey] = useState(() => {
    // getting stored value frm local
    const saved = localStorage.getItem("lkey");
    console.log("🚀 ~ file: stockxscannernew.js ~ line 72 ~  ~ saved", saved)
    const initialValue = (saved?.replaceAll('"',''));
    return initialValue || "";
  });

  useEffect(() => {
    setMasterKey(key)
  }, [])


  return (
    <div className="bg-black">
      <label htmlFor="email" className="block text-sm font-medium text-white">
        Sneaker Inventory License Key
      </label>
      <div className="mt-1 relative rounded-md shadow-sm bg-black">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <img src="sneakerinventoryLogo.png" className="h-5 w-5 ml-3 text-red-400" aria-hidden="true" />
        </div>
        <input
          value={key}
          onChange={(e) => {
            setKey(e.target.value)
            if (isMsgInKeyFormat(e.target.value)) {
              localStorage.setItem("lkey", JSON.stringify(e.target.value));
              setMasterKey(e.target.value)
            }
          }}
          type="text"
          name="webhook"
          className="bg-black focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-14 sm:text-sm border-gray-300 rounded-md"
          placeholder="A5230090-1E3346F5-A31ADB18-A45FJ92A"
        />
      </div>
    </div>
  )
}
