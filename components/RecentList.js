import moment from 'moment'  
  
  export default function RecentList({latest}) {

    function getMoment(date) {
        return moment(date).fromNow()
    }


    return (
      <ul role="list" className="divide-y divide-gray-200">
        {latest?.map((sneaker, index) => (
          <li key={index} className="py-4 flex justify-between">
            <div className="flex">
            <img className="h-10 w-10 rounded-full" src={sneaker.image} alt="" />
                <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{sneaker.title}</p>
                    <p className="text-sm text-gray-500">Size {sneaker.size}</p>
                </div>
            </div>
            <div>
                <p className="text-xs text-gray-500 ">{getMoment(sneaker?.date_added)}</p>
            </div>
          </li>
        ))}
      </ul>
    )
  }
  