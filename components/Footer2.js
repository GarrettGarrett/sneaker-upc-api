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
      <footer className="pt-4 bg-black sm:pb-0 pb-10 ">
        <div className="w-full py-6 overflow-hidden lg:px-8">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
            {navigation.main.map((item) => (
              <div key={item.name} className="px-4 py-2">
                  <Link href={item.href} >
                  <a className="text-base text-white opacity-70 hover:opacity-100">
                  {item.name}
                </a>
                  </Link>
                
              </div>
            ))}
          </nav>
        
        <div className="mt-2  flex justify-center">
           
           <FeedBack />
          </div>
         
        </div>
      </footer>
    )
  }
  