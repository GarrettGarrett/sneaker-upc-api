import '../styles/globals.css'
import{ AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'
import Script from 'next/script'


function MyApp({ Component, pageProps }) {
  return (
    <>

          <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />

          <Script strategy="lazyOnload">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                  page_path: window.location.pathname,
                });
                    `}
          </Script>  


      <ChakraProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </ChakraProvider>
    </>
    
  )
}

export default MyApp


