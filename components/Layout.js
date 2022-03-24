import Menu from '../components/Menu'
import Footer2 from './Footer2'

function Layout({ children }) {
    return (
      <>
       {/* <div className="max-w-7xl mx-auto px-7 sm:px-20 lg:px-8">
          <div className="max-w-3xl mx-auto "> */}
                {/* <Menu /> */}
                    { children }
                {/* <Footer2 /> */}
            {/* </div> */}
      {/* // </div> */}
      
      </>
    )
  }

  export default Layout;