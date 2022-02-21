import Link from 'next/link';

const options = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'Recently Added',
      href: '/recent'
    },
    {
      name: 'About',
      href: '/about'
    },
    
  ]
  
  export default function MenuOptions({onClose}) {
    return (
      <ul role="list" className="">
        {options.map((option) => (
          <li 
          onClick={() => {onClose()}}
          key={option.name} className=" hover:cursor-pointer py-4 flex border-b border-gray-200">
            <Link href={option.href}>
                <div className="ml-3 ">
                <p className="text-sm font-medium text-gray-900 ">{option.name}</p>
                </div>
            </Link>
          </li>
        ))}
      </ul>
    )
  }
  