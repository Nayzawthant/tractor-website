import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import { SearchContextProvider } from './context/search'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <SearchContextProvider>
    <html lang="en">
      <body >
        <Header />
       
        <div className="pt-20">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  </SearchContextProvider>
  )
}