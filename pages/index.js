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
                    height:100%;
                }
                body {
                    margin: 0;
                    background:#eee url('/static/utah_1.jpg');
                    background-size:cover;
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    font-family: 'Barlow', sans-serif;
                    font-weight:200;
                    height:100%;
                    overflow:hidden;
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
            <BigVideo imageSrc={"/static/balloons.jpg"}/>
            <Founders />
            <BigVideo imageSrc={""}/>
            <Footer />
            <script
                dangerouslySetInnerHTML={{ __html:
                    `
                    window.onload = (event) => {
                        setTimeout(function(){
                            document.getElementsByTagName("body")[0].style.overflow = "unset";
                        },250);
                        
                    };
                    `
                }}
            />
        </ParallaxProvider>);
}
