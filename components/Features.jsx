import * as styleConstants from  '../constants/StyleConstants';
import Section from './Section';
import Row from './Row';
import Col from './Col';
export default () => {
    return <Section>
        <style jsx>{`
            #features {
                position:relative;
                display:block;
                visibility:hidden;
                top: -101px;
            }
            .col-image {
                width:100%;
            }
            .icon {
                max-width:200px;
                margin: auto;
                display: block;
            }
            
        `}</style>
        <a id="features"></a>
            <h1>FEATURES</h1>
            <Row shrinkTo2ColsMobile={true}>
                <Col first={true} shrinkTo2ColsMobile={true}>
                    <img src="/static/scribe_cloud_icon.png" className="col-image icon" />
                </Col>
                <Col shrinkTo2ColsMobile={true}>
                    <img src="/static/scribe_time_icon.png" className="col-image icon" />
                </Col>
                <Col shrinkTo2ColsMobile={true}>
                    <img src="/static/scribe_easy_icon.png" className="col-image icon" />
                </Col>
                <Col shrinkTo2ColsMobile={true}>
                    <img src="/static/scribe_cost_icon.png" className="col-image icon" />
                </Col>
                <Col last={true} shrinkTo2ColsMobile={true}>
                    <img src="/static/scribe_computing_icon.png" className="col-image icon" />
                </Col>
            </Row>
        </Section>
}