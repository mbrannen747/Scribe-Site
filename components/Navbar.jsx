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
            nav a{
                text-decoration:none;
                color:#222;
                margin:0 25px;
                font-family: 'Barlow', sans-serif;
                font-weight:200;
                ${styleConstants.headingSize1}
            }
        `}</style>
        <div className="navbar-container">
            <img className="logo" src="/static/logo.png"/>
            <nav>
                <a href="#about-us">About Us</a>
                <a href="#our-founders">Our Founders</a>
                <a href="#our-product">Our Product</a>
            </nav>
        </div>
    </div>
}