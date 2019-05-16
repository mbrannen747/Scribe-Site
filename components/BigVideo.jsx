import * as styleConstants from  '../constants/StyleConstants';
import { Parallax } from 'react-scroll-parallax';
export default ({videoSrc,marginTop}) => {
    return <Parallax y={[-45,45]} >
        <style jsx>{`
                
            .bigvid {
                transform: translateY(${marginTop ? marginTop + "%": "0%"});
                width:100%;
                position:relative;
                top:0;
            }
        `}</style>
        <video autoPlay={true} muted={true} loop={true} className="bigvid">
            <source src={videoSrc} type="video/mp4" />
        </video>
    </Parallax>
}