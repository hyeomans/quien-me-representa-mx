import 'tailwindcss/tailwind.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { DefaultSeo } from 'next-seo'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import SEO from '../lib/next-seo.config'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
})

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ApolloProvider client={client}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
