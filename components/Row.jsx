import * as styleConstants from  '../constants/StyleConstants';
import 'react';
export default class Row extends React.Component{
    render(){
        return <div className="row">
        <style jsx>{`
            .row {
                display:flex;
            }
        `}</style>
            {this.props.children}
    </div>
    }
}