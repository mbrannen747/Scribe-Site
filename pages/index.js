import Head from '../components/Head';
import Navbar from '../components/Navbar';
import BigVideo from '../components/BigVideo';
import { ParallaxProvider } from 'react-scroll-parallax';
import About from '../components/About';
import Founders from '../components/Founders';
import Product from '../components/Product';
import Footer from '../components/Footer';
import Features from '../components/Features';
export default () => {
    return (
        <ParallaxProvider>
            <style global jsx>{`
                html {
                    scroll-behavior: smooth;
                }
                body {
                    margin: 0;
                    background:#eee;
                    font-family: 'Barlow', sans-serif;
                    font-weight:200;
                }
                h1,h2 {
                    font-family: 'Barlow', sans-serif;
                }
             `}</style>
            <Head/>
            <Navbar />
            <div style={{marginTop:"126.6px"}}>
                <BigVideo videoSrc={"/static/Blue Sky Video_1.mp4"} text="Effortless, Wireless, Realtime Datalogging" />
            </div>
            <Product />    
            <BigVideo imageSrc={"/static/utah_2.jpg"}/>
            <Features />    
            <BigVideo videoSrc={"/static/airplane.mp4"}/>
            <About />
            <BigVideo videoSrc={"/static/mining.mp4"}/>
            <Founders />
            <BigVideo imageSrc={"/static/utah_1.jpg"}/>
            <Footer />
        </ParallaxProvider>);
}
