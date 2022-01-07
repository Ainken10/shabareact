import Head from 'next/head'
import CardOne from '../components/CardOne'
import Navbar from '../components/Navbar'
import NavbarTwo from '../components/NavbarTwo'
import SearchBar from '../components/SearchBar'

export default function Home() {
  return (
   <>
   {/* <Navbar /> */}
   <NavbarTwo />
   <SearchBar />
   <CardOne/>
   </>
  )
}
