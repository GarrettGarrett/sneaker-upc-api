import { useState, useEffect} from 'react'
import localStorage from 'localStorage'

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


export default function DiscordWebhookAdd({masterHookAdd, setMasterHookAdd}) {
  const [webhookUrl, setWebhookUrl] = useState(() => {
    // getting stored value frm local
    const saved = localStorage.getItem("hookadd");
    console.log("🚀 ~ file: DiscordWebhookAdd.js ~ line 26 ~ const[webhookUrl,setWebhookUrl]=useState ~ saved", saved)
    const initialValue = (saved?.replaceAll('"',''));
    return initialValue || "";
  });
  
  useEffect(() => {
    setMasterHookAdd(webhookUrl)
  }, [])
  


  return (
    <div className="bg-black">
      <label htmlFor="email" className="block text-sm font-medium text-white">
        Add-Inventory Webhook
      </label>
      <div className="mt-1 relative rounded-md shadow-sm bg-black">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <img src="discordLogo.png" className="h-12 w-12 text-red-400" aria-hidden="true" />
        </div>
        <input
          value={webhookUrl}
          onChange={(e) => {
            setWebhookUrl(e.target.value)
              localStorage.setItem("hookadd", JSON.stringify(e.target.value));
              setMasterHookAdd(e.target.value)
          }}
          type="text"
          name="webhook"
          className="bg-black focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-14 sm:text-sm border-gray-300 rounded-md"
          placeholder="https://discord.com/api/webhooks/10021620169/SbpRdZFfeacOW_5hyot69bwtiHbshqvTI"
        />
      </div>
    </div>
  )
}
