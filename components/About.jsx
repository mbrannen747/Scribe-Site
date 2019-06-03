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
                        Scribe is a Salt Lake City based company started in 2017. The roots of the brand come from 
                        atmospheric monitoring at the University of Utah. Upon realization that the datalogging 
                        industry was sorely in need of innovation, the Scribe Logger was born. Scribe was awarded 
                        the prestigious USTAR TAP grant to help accelerate the development of the product. Today 
                        Scribe is currently working closely with several industry professionals to further develop 
                        and commercialize a premium datalogging device and platform.
                    </p>
                </Col>
                <Col last={true}>
                    <img src="/static/scribe_team2.jpg" className="col-image" />
                </Col>
            </Row>
                
        </Section>
}