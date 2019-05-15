import Head from '../components/Head';
import Navbar from '../components/Navbar';
import BigVideo from '../components/BigVideo';
export default () => {
    return (
        <div>
            <style global jsx>{`
                body {
                    margin: 0;
                    background:#eee;
                }
             `}</style>
            <Head/>
            <Navbar />
            <BigVideo />
        </div>);
}
