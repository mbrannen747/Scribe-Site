import * as styleConstants from  '../constants/StyleConstants';
export default () => {
    return <div className="navbar">
        <style jsx>{`
            .bigvid {
                width:100%;
            }
        `}</style>
        <div>
            <video autoPlay={true} muted={true} loop={true} className="bigvid">
                <source src="/static/Blue Sky Video.mp4" type="video/mp4" />
            </video>    
        </div>
    </div>
}