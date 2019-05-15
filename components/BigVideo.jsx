import * as styleConstants from  '../constants/StyleConstants';
import { Parallax } from 'react-scroll-parallax';
export default ({videoSrc,parralax}) => {
    return <Parallax y={[0,50]}>
        <style jsx>{`
            .bigvid {
                width:100%;
                display:block;
            }
        `}</style>
        <video autoPlay={true} muted={true} loop={true} className="bigvid">
            <source src={videoSrc} type="video/mp4" />
        </video>
    </Parallax>
}