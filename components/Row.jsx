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
                    display:block;
                } 
            }
        `}</style>
            {this.props.children}
    </div>
    }
}