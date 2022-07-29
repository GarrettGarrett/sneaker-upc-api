import { HomeIcon, ClockIcon, InformationCircleIcon } from '@heroicons/react/solid'
import Link from 'next/link';



const timeline = [
  {
    id: 1,
    content: 'StockX Scanner',
    href: '/stockxscanner',
    icon: HomeIcon,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 2,
    content: 'Recently Added',
    href: '/recent',
    icon: ClockIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 3,
    content: 'About',
    href: '/about',
    icon: InformationCircleIcon,
    iconBackground: 'bg-green-500',
  },
  
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SitemapTimeline() {
  return (
    <div className="mt-8 low-root">
      <ul role="list" className="-mb-8">
        {timeline.map((event, eventIdx) => (
          
          <Link href={event.href} key={index}>
            <li key={event.id} className='hover:cursor-pointer'>
                <div className="relative pb-8">
                {eventIdx !== timeline.length - 1 ? (
                    <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-transparent" aria-hidden="true" />
                ) : null}
                <div className="relative flex space-x-3">
                    <div>
                    <span
                        className={classNames(
                        event.iconBackground,
                        'h-8 w-8 rounded-full flex items-center justify-center ring-4 ring-white'
                        )}
                    >
                        <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
                    </span>
                    </div>
                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                    <div>
                        <p className="pl-2 text-sm text-white ">
                        {event.content}{' '}
                        
                        </p>
                    </div>
                    
                    </div>
                </div>
                </div>
            </li>
          </Link>
          
        ))}
      </ul>
    </div>
  )
}
