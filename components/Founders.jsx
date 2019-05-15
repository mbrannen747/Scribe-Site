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
        <h1>FOUNDERS</h1>
            <Row>
                <Col first={true}>
                    <img src="/static/Picture1.png" className="col-image" />
                    <h2>Ben Fasoli</h2>
                    <p>Software Development</p>
                </Col>
                <Col>
                    <img src="/static/Picture2.jpg" className="col-image" />
                    <h2>Ryan Bares</h2>
                    <p>Business Development</p>
                </Col>
                <Col last={true}>
                    <img src="/static/Picture3.png" className="col-image" />
                    <h2>Brandon Martin</h2>
                    <p>Hardware Commercialization</p>
                </Col>
            </Row>
                
        </Section>
    </div>
}