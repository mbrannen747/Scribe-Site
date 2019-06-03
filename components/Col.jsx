import * as styleConstants from  '../constants/StyleConstants';
import 'react';
/*
    To get rid of padding on appropriate sides, 
    add first={true} to the first col, and last={true} to the last col
*/
export default class Col extends React.Component{
    render(){
        let padding;
        if(this.props.first){
            padding = `padding-right: ${styleConstants.marginNum / 2}px`;
        } else if(this.props.last){
            padding = `padding-left: ${styleConstants.marginNum / 2}px`;
        } else {
            padding = `padding: 0 ${styleConstants.marginNum / 2}px`;
        }
        return <div className="col">
        <style jsx>{`
            .col {
                flex:1;
                ${padding}
            }
            @media (max-width:800px) {
                .col {
                    padding:0 !important;
                    ${this.props.shrinkTo2ColsMobile ? `flex:1 0 33%; margin:10px` : ``}
                } 
            }
            @media (max-width:575px) {
                .col {
                    padding:0 !important;
                    flex:1;
                    margin:0;
                } 
            }
        `}</style>
            {this.props.children}
    </div>
    }
}