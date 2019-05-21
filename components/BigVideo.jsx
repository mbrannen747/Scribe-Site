import * as styleConstants from  '../constants/StyleConstants';
import { Parallax } from 'react-scroll-parallax';
export default ({videoSrc,marginTop}) => {
    return <div className="bigvid-container">
        <Parallax y={[-40,40]} >
            <style global jsx>{`
                .bigvid-container {
                    width: 100%;
                    height: 600px;
                    overflow: hidden;
                    margin-top:-100px;
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
            <video autoPlay={true} muted={true} loop={true} className="bigvid">
                <source src={videoSrc} type="video/mp4" />
            </video>
        </Parallax>
    </div>
}