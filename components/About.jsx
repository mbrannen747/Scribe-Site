import * as styleConstants from  '../constants/StyleConstants';
import Section from './Section';
import Col from './Col'
import Row from './Row'
export default () => {
    return <Section id="about-us-container">
        <style jsx>{`
            #about-us-container {
            }
            #about-us {
                position:relative;
                display:block;
                visibility:hidden;
                top: -101px;
            }
            .col-image {
                width:100%;
            }
        `}</style>
        
            <a id="about-us"></a>
            <h1>ABOUT US</h1>
            <Row>
                <Col first={true}>
                    <p>
                        The Scribe Datalogger is an easy to use, universal logger designed for scientific and industrial markets, offers real-time data displays, wireless connectivity, cloud data storage, 
                        and big data applications
                        Highly adaptable to meet any measurement need including scientific, industrial or military applications
                        Measurement protocols include but not limited to: analog, pulse, bridge, SDI-12, and serial protocols
                        Communications for data transfers and remote monitoring can be achieved through radio, internet, cellular or satellite
                        Programmable via Python
                    </p>
                </Col>
                <Col last={true}>
                    <img src="/static/scribe_team2.jpg" className="col-image" />
                </Col>
            </Row>
                
        </Section>
}