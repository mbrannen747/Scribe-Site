import * as styleConstants from  '../constants/StyleConstants';
export default () => {
    return <div className="navbar">
        <style jsx>{`
            .navbar {
                width:100%;
                position: fixed;
                height:73.65px;
                top:0;
                background:#fff;
                z-index: 10101010;
                ${styleConstants.shadow}
            }
            .navbar-container {
                ${styleConstants.containerMargin}
            }
            .logo {
                width: 200px;
            }
            nav {
                display:inline-block;
                float:right;
                padding-top:30px;
            }
            nav a {
                text-decoration:none;
                position:relative;
                color:#222;
                margin:0 25px;
                font-family: 'Barlow', sans-serif;
                font-weight:200;
                ${styleConstants.headingSize1}
                transition:color .5s;
            }
            nav a:hover {
                color: ${styleConstants.colors.colorPrimaryVeryDark}
            }
            nav a:before {
                content: "";
                position: absolute;
                width: 100%;
                height: 2px;
                bottom: 0;
                left: 0;
                background-color: ${styleConstants.colors.colorPrimary};
                visibility: hidden;
                -webkit-transform: scaleX(0);
                transform: scaleX(0);
                -webkit-transition: all 0.3s ease-in-out 0s;
                transition: all 0.3s ease-in-out 0s;
            }
            nav a:hover:before {
                visibility: visible;
                -webkit-transform: scaleX(1);
                transform: scaleX(1);
            }
            @media(max-width:960px){
                nav {
                    padding-top:35px;
                }
                nav a {
                    margin:0 10px;
                    ${styleConstants.headingSize2}
                }
            }
            @media(max-width:720px){
                nav a {
                    margin:0 5px;
                    ${styleConstants.headingSize3}
                }
            }
            @media(max-width:600px){
                nav a {
                    display:none;
                }
            }
        `}</style>
        <div className="navbar-container">
            <a href="#"><img className="logo" src="/static/logo.png"/></a>
            <nav>
                <a href="#product">Product</a>
                <a href="#features">Features</a>
                <a href="#about-us">About</a>
                <a href="#founders">Founders</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    </div>
}