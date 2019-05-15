import * as styleConstants from  '../constants/StyleConstants';
import 'react';
export default class Section extends React.Component{
    render(){
        return <div className="section-container">
        <style jsx>{`
            .section-container{
                background:${styleConstants.colors.colorWhite};
                width:100%;
                z-index:10;
                position: absolute;
                ${styleConstants.containerPadding}
                ${styleConstants.shadow}
            }
            .section-inner{
                ${styleConstants.containerMargin}
            }
        `}</style>
            <div className="section-inner">
                {this.props.children}
            </div>
    </div>
    }
}