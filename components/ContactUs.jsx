import * as styleConstants from  '../constants/StyleConstants';
import Section from './Section';
import Row from './Row'
export default () => {
    return <div className="contactUs">
        <style jsx>{`
            #contact-us-container {
            }
            #contact-us {
                position:relative;
                display:block;
                visibility:hidden;
                top: -101px;
            }
            textarea {
                width:400px; height:50px;
            }
        `}</style>
        
            <h1>CONTACT US</h1>
            <Row>
                <form action="/mail" method="POST">
                <input type="text" name="name" placeholder="Your Name"></input><br></br>
                <input type="email" name="email" placeholder="Email Address"></input><br></br>
                <textarea name="message" placeholder="Message"></textarea><br></br>
                <input type="submit" value="Submit"></input>
                </form>
            </Row>
                
        </div>
}