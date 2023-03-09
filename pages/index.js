import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from "./components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel, Container} from 'react-bootstrap';
import Banner from "./components/Banner"
import ItemCarousel from "@/pages/components/ItemCarousel";
import Footer from "@/pages/components/Footer";
import CouponAlert from "@/pages/components/CouponAlert";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

        <Header></Header>

        <CouponAlert code="karts" percentage="5" firstTime={true}></CouponAlert>
        <Container>
            <Banner></Banner>
        </Container>
        <Container>
            <ItemCarousel></ItemCarousel>
        </Container>

        <Footer></Footer>

    </>
  )
}
