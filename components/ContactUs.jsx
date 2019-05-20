import * as styleConstants from  '../constants/StyleConstants';
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
            form {
                ${styleConstants.fontNormal};
                width:75%;
            }
            input[type=text] {
                ${styleConstants.fontNormal};
                width: 100%;
                margin: 5px;
                padding: 5px;
            }
            input[type=email] {
                ${styleConstants.fontNormal};
                width: 100%;
                margin: 5px;
                padding: 5px;
            }
            textarea {
                width:100%; height:50px;
                ${styleConstants.fontNormal};
                margin: 5px;
                padding: 5px;
            }
            input[type=submit] {
                background: ${styleConstants.colors.colorPrimaryVeryDark};
                color: ${styleConstants.colors.colorWhite};
                margin-bottom: 25px;
                margin-left: 5px;
                padding: 10px 15px;
                border: none;
            }
        `}</style>
        
            <h1>CONTACT US</h1>
            <Row>
                <form action="/mail" method="post">
                <input type="text" name="name" placeholder="Your Name"></input><br></br>
                <input type="email" name="email" placeholder="Email Address"></input><br></br>
                <textarea name="message" placeholder="Message"></textarea><br></br>
                <input type="submit" value="Submit"></input>
                </form>
            </Row>
                
        </div>
}