import * as styleConstants from  '../constants/StyleConstants';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
export default ({videoSrc,text}) => {
    let textElement = text ? <Parallax y={[-200,200]} className="bigvid-overlay-text">
            <p>{text}</p>
        </Parallax> : <div />
    return <div className="bigvid-container">
        <Parallax y={[-40,40]} >
            <style global jsx>{`
                .bigvid-container {
                    width: 100%;
                    height: 600px;
                    overflow: hidden;
                    margin-top:-100px;
                }
                .bigvid-overlay-text {
                    position: absolute;
                    top: 200px;
                    width: 100%;
                    text-align: center;
                    color:#fff;
                    font-size:3em;
                    text-shadow: 0px 0px 5px #000;
                    z-index:10000;
                }
                .bigvid {
                    position:relative;
                    width:100%;
                }
                @media(max-width:1050px){
                    .bigvid-container {
                        height: 450px;
                    }
                }
                @media(max-width:800px){
                    .bigvid-container {
                        height: 300px;
                    }
                }
                @media(max-width:800px){
                    .bigvid-container {
                        display:none;
                    }
                }
            `}</style>
            {textElement}
            <video autoPlay={true} muted={true} loop={true} className="bigvid">
                <source src={videoSrc} type="video/mp4" />
            </video>
        </Parallax>
    </div>
}