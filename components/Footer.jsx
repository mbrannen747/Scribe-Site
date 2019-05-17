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
            
            
        `}</style>
        <div className="footer-container">
        <Row>
            <Col><p>Scribe Sciences &#169;2019 | Facebook | Twitter | LinkedIn | Contact Us</p></Col>
            <Col><ContactUs /></Col>
        </Row>
        
        </div>
    </div>
}