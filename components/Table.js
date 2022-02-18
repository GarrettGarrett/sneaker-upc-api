import { TrashIcon, PhotographIcon } from '@heroicons/react/outline'
  
  export default function Table({result, setResult, loading, upcTitle, setUpcTitle, titleTitle, setTitleTitle, sizeTitle, setSizeTitle, colorwayTitle, setColorwayTitle, scanning }) {


    function removeFromState(index){
        var array = result; // make a separate copy of the array
        if (index !== -1) {
            array.splice(index, 1);
            setResult(
                (oldArray) => 
                    [...oldArray, array]
                )
        }
    }



    return (
      <div className={` py-4 flex flex-col`}>
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="relative py-3">
                        <span className="sr-only">Delete</span>
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >

                    <input    
                        type="checkbox"
                        checked={upcTitle}
                        onClick={()=> setUpcTitle(!upcTitle)}
                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded mr-2"
                    />

                      UPC
                    </th>



                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        <input    
                            type="checkbox"
                            checked={titleTitle}
                            onClick={()=> setTitleTitle(!titleTitle)}
                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded mr-2"
                        />

                      Title
                    </th>


                    <th
                      scope="col"
                      className="mx-6 my-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        <input    
                        type="checkbox"
                        checked={sizeTitle}
                        onClick={()=> setSizeTitle(!sizeTitle)}
                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded mr-2"
                        />
                      Size
                    </th>


                    <th
                      scope="col"
                      className="px-6 my-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                         <input    
                        type="checkbox"
                        checked={colorwayTitle}
                        onClick={()=> setColorwayTitle(!colorwayTitle)}
                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded mr-2"
                        />
                      Color
                    </th>
                    
                  </tr>
                </thead>
                <tbody>
                   
            

                  {result?.map((res, idx) => (
                    <tr hidden={!res?.title}  key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <TrashIcon 
                        onClick={() => {
                            removeFromState(idx)
                        }}      
                        className="flex-shrink-0 h-5 w-5 text-indigo-600 hover:cursor-pointer" aria-hidden="true" />
                    </td>

                      
                    <td
                    className={`${!upcTitle ? 'opacity-0' : null } px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900`}>{(res?.upc)?.replace("'","")}  
                    </td>


                    <td className={`${!titleTitle ? 'opacity-0' : null } px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900`}>
                    <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 ">
                            {res.image == "N/A" ? 
                            <PhotographIcon className="h-8 w-8 rounded-full text-slate-400" />
                            :    
                            <img className="h-10 w-10 rounded-full" src={res.image} alt="" />
                        }
                        
                        </div>
                        <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{res.title}</div>
                        
                        </div>
                    </div>
                    </td>


                      <td className={`${!sizeTitle ? 'opacity-0' : null } px-6 py-4 whitespace-nowrap text-sm text-gray-500`}>{res.size}</td>
                      <td className={`${!colorwayTitle ? 'opacity-0' : null } px-6 py-4 whitespace-nowrap text-sm text-gray-500`}>{res.color2}</td>

                    </tr>
                  ))}

                    <tr hidden={!loading}  key={123456789} className={'bg-white'}>     
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{
                            <svg className="animate-spin mr-0 h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        }</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{''}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{''}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{''}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{''}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{''}</td>
                    </tr>  

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
  