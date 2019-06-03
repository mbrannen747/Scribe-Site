import * as styleConstants from  '../constants/StyleConstants';
import 'react';
export default class Row extends React.Component{
    render(){
        return <div className="row">
        <style jsx>{`
            .row {
                display:flex;
            }
            @media (max-width:800px) {
                .row {
                    ${this.props.shrinkTo2ColsMobile ? `flex-wrap:wrap;` : `display:block;`}
                }
            }
            @media (max-width:575px) {
                .row {
                    display:block;
                } 
            }
        `}</style>
            {this.props.children}
    </div>
    }
}