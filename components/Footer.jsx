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
                display:block;
                margin: 25px auto 0 auto;
            }
            
        `}</style>
        <div className="footer-container">
        <Row>
            <Col>
                <img src="/static/topDownLogo.png" className="footer-logo"></img>
            </Col>
            <Col>
                <ContactUs />
            </Col>
        </Row>
        <p style={{textAlign:"center"}}>© 2018 Scribe Sciences. All Rights Reserved.</p>
        </div>
    </div>
}