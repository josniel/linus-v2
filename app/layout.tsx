'use client';
import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';

if (process.env.NODE_ENV !== 'production') {
  loadDevMessages();
  loadErrorMessages();
}
import '@/styles/globals.css';
import { Bungee, Bebas_Neue, DynaPuff } from 'next/font/google';
import { HeaderLanding } from '@/components/layout/Header';
import { FooterLanding } from '@/components/layout/Footer';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Providers } from '@/app/providers';

const bungee = Bungee({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const dynaPuff = DynaPuff({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
});

// console.log('bungee.className :>> ', bungee.className);
// console.log('dynaPuff.className :>> ', dynaPuff.className);

const httpLink = createHttpLink({
  uri: 'https://zzrg6m-54.myshopify.com/api/2024-01/graphql.json',
});

const middlewareLink = setContext(() => ({
  headers: {
    'X-Shopify-Storefront-Access-Token': '5f39ad4caa13655860bad33cf2b65d96',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
}));

const client = new ApolloClient({
  link: middlewareLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <body
        suppressHydrationWarning={true}
        className={`${bungee.className} ${dynaPuff.className} relative`}
      >
        <ApolloProvider client={client}>
          <Providers>
            <HeaderLanding />
            {children}
            <FooterLanding />
          </Providers>
        </ApolloProvider>
      </body>
    </html>
  );
}
