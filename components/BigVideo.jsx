import * as styleConstants from  '../constants/StyleConstants';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';

export default ({videoSrc,imageSrc,text}) => {
    console.log(imageSrc)
    let textElement = text ? <Parallax y={[-200,200]} className="bigvid-overlay-text">
            <p>{text}</p>
        </Parallax> : <div />;
    let media = <ParallaxBanner
            layers={[
                {
                    image: imageSrc,
                    amount: 0.5,
                    style: {backgroundSize:"contain"},
                    children: (<video autoPlay loop muted><source src={videoSrc} /></video>)
                }
            ]}
            style={{
                height: '650px',
            }}>
            {textElement}
        </ParallaxBanner>
    return <div className="bigvid-container">
        <div >
            <style global jsx>{`
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
                @media(max-width:900px){
                    font-size:2em;
                }
            `}</style>
            {media}
        </div>
    </div>
}