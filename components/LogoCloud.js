import React from 'react'

function LogoCloud() {
  return (
    <>
        <div className="">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <img
                            className="h-12  w-auto"
                            src="/Jordan.png"
                            alt="jordan"
                            />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <img
                            className="h-12 w-auto"
                            src="/Yeezy.png"
                            alt="yeezy"
                            />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <img
                            className="h-12 w-auto"
                            src="/Nike.png"
                            alt="nike"
                            />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                        <img
                            className="h-12 w-auto"
                            src="/Adidas.png"
                            alt="adidas"
                            />
                    </div>
                    <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                        <img
                            className="h-12 w-auto"
                            src="/NewBalance.png"
                            alt="newbalance"
                            />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default LogoCloud