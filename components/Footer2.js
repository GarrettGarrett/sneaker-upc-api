import FeedBack from '../components/FeedBack'
import Link from 'next/link';


const navigation = {
    main: [
      { name: 'Home', href: '/stockxscanner' },
      { name: 'About', href: '/about' },
      { name: 'Recent', href: '/recent' },
      { name: 'Sitemap', href: '/sitemap' },

    ],
    
  }
  
  export default function Footer2() {
    return (
      <footer className="bg-white">
        <div className="max-w-7xl py-6 overflow-hidden lg:px-8">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
            {navigation.main.map((item) => (
              <div key={item.name} className="px-4 py-2">
                  <Link href={item.href} >
                  <a className="text-base text-gray-500 hover:text-gray-900">
                  {item.name}
                </a>
                  </Link>
                
              </div>
            ))}
          </nav>
        <div className="mt-2  flex justify-center ">
           
           <FeedBack />
          </div>
         
        </div>
      </footer>
    )
  }
  