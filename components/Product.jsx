import * as styleConstants from  '../constants/StyleConstants';
import Section from './Section';
import Row from './Row';
import Col from './Col';
export default () => {
    return <Section>
        <style jsx>{`
            #product {
                position:relative;
                display:block;
                visibility:hidden;
                top: -101px;
            }
            .col-image {
                width:100%;
            }
        `}</style>
        <a id="product"></a>
            <h1>PRODUCT</h1>
            <Row>
                <Col first={true}>
                <h2> SCRIBE DATALOGGER</h2>
                    <p>
                        The Scribe Datalogger is an easy to use, universal logger designed for scientific and 
                        industrial markets, offers real-time data displays, wireless connectivity, cloud data storage, 
                        and big data applications. Highly adaptable to meet any measurement need including scientific, 
                        industrial or military applications. Measurement protocols include but not limited to: analog, 
                        pulse, bridge, SDI-12, and serial protocols. Communications for data transfers and remote 
                        monitoring can be achieved through radio, internet, cellular or satellite. Programmable via Python.
                    </p>
                </Col>
                <Col>
                <img src="/static/logger_model2.jpg" className="col-image" />
                </Col>
                <Col last={true}>
                    <img src="/static/logger.png" className="col-image" />
                </Col>
            </Row>
        </Section>
}