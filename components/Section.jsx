import * as styleConstants from  '../constants/StyleConstants';
import 'react';
export default class Section extends React.Component{
    render(){
        return <div id={this.props.id} className="section-container">
        <style jsx>{`
            .section-container{
                background:${styleConstants.colors.colorWhite};
                width:100%;
                z-index:10;
                position: relative;
                transform:translateY(-70px);
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