import * as styleConstants from  '../constants/StyleConstants';
export default () => {
    return <div className="footer">
        <style jsx>{`
            .footer {
                width:100%;
                height:60px;
                background:#fff;
                z-index: 10101010;
                position:absolute;
                ${styleConstants.shadow}
            }
            .footer-container {
                ${styleConstants.containerMargin}
            }
            
            
        `}</style>
        <div className="footer-container">
        <p>Scribe Sciences &#169;2019 | Facebook | Twitter | LinkedIn | Contact Us</p>
        </div>
    </div>
}