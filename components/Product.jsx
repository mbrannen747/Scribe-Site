import * as styleConstants from  '../constants/StyleConstants';
import Section from './Section';
import Row from './Row';
import Col from './Col';
export default () => {
    return <Section>
        <style jsx>{`
            #our-product {
                position:relative;
                display:block;
                visibility:hidden;
                top: -101px;
            }
            .col-image {
                width:100%;
            }
        `}</style>
        <a id="our-product"></a>
            <h1>OUR PRODUCT</h1>
            <Row>
                <Col first={true}>
                <h2> Scribe Datalogger</h2>
                    <ul>
                        <li>Cloud Based Services</li>
                        <li>Real Time Visualization Tools</li>
                        <li>Easy to Use</li>
                        <li>Low Cost</li>
                        <li>More Computing Power and Memory</li>
                    </ul>
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