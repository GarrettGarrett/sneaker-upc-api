import React from 'react'


const features = [
    { name: 'Handheld Scanner Support', img: '/scanner.png', body: 'Use a handheld scanner for faster and more accurate scans.' },
    { name: 'Mobile Phone Camera Support', img: "/iphone.png", body: 'Use the camera on your mobile device for barcode recognition.' },
    { name: 'Daily Updates', img: "/clock.png", body: 'Shoes are added to the database daily as new sneakers are released.' },
    { name: 'Copy & Paste', img: "/copy.png", body: 'Copy the list of scanned sneaker data and paste into Excel, Notes, etc.' },
    { name: 'Filter', img: "/filter.png", body: 'Click on the Table Headers to filter columns on/off.' },

  ]

function about() {
  return (
      <>
       <h1 className="pt-5 font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black">About</h1>
        <p class="text-gray-600  pb-5 pt-2">🔎 This tool was created after searching Google for "StockX Scanner" and finding no results.  My hope is this tool can make inventory management easer for fellow sneaker resellers.</p>



        <div className="pt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                        <img className="h-6 w-6 text-white" aria-hidden="true" src={feature.img}/>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
      
      </>
   
  )
}

export default about


// About
// I made this tool after finding no results in Google for "StockX Scanner".  My hope is that this tool can be useful to others for quickly scanning shoes into their inventory.  

// How To Use
// Connect your own handheld barcode scanner or use your device's camera to scan barcodes.  The barcode queried against my sneaker database for details on that shoe.  