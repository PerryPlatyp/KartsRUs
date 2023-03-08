import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
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
        <Container fluid={true}>
            <Header></Header>
        </Container>
        <CouponAlert couponCode={lashonda} percentage="15"></CouponAlert>
        <Container>
            <Banner></Banner>
        </Container>
        <Container>
            <ItemCarousel></ItemCarousel>
        </Container>
        <Container fluid={true}>
            <Footer></Footer>
        </Container>
    </>
  )
}
