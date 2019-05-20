import * as styleConstants from  '../constants/StyleConstants';
import ContactUs from './ContactUs';
import Row from './Row';
import Col from './Col';
export default () => {
    return <div className="footer">
        <style jsx>{`
            .footer {
                width:100%;
                background:#fff;
                z-index: 10101010;
                position:absolute;
                ${styleConstants.shadow}
            }
            .footer-container {
                ${styleConstants.containerMargin}
            }
            .footer-logo {
                height: 230px;
                width: 230px;
            }
            
        `}</style>
        <div className="footer-container">
        <Row>
            <Col><img src="/static/topDownLogo.png" className="footer-logo"></img>
            <p>Scribe Sciences &#169;2019</p>
            </Col>
            <Col><ContactUs /></Col>
        </Row>
        
        </div>
    </div>
}