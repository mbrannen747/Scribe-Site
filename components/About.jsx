import * as styleConstants from  '../constants/StyleConstants';
import Section from './Section';
import Col from './Col'
import Row from './Row'
export default () => {
    return <div id="about-us">
        <style jsx>{`
            #about-us {
                margin-bottom:300px;
            }
            .col-image {
                width:100%;
            }
        `}</style>
        <Section>
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
                    <img src="/static/scribe_team.jpg" className="col-image" />
                </Col>
            </Row>
                
        </Section>
    </div>
}