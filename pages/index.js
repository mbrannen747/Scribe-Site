import Head from '../components/Head';
import Navbar from '../components/Navbar';
import BigVideo from '../components/BigVideo';
import { ParallaxProvider } from 'react-scroll-parallax';
import About from '../components/About';
import Founders from '../components/Founders';
import Product from '../components/Product';
import Footer from '../components/Footer';
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
            <div style={{marginTop:-150}}>
                <BigVideo videoSrc={"/static/Blue Sky Video_1.mp4"} index={0} />
            </div>
            <About />
            <BigVideo videoSrc={"/static/Blue Sky Video_2.mp4"} index={-1} height={200} />
            <Founders />
            <BigVideo videoSrc={"/static/Blue Sky Video_1.mp4"} index={0} marginTop={-5}/>
            <Product />    
            <Footer />
        </ParallaxProvider>);
}
