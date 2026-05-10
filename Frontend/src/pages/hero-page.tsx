import Header from '../componets/Header';
import Main from '../componets/MainHero';
import Footer from '../componets/Footer';

import '../componets/css/App.css';


function Heropage () {
    return(<div className='app-wrapper app-dark'>
        <Header />
        <Main />
        <Footer />
    </div>)
}

export default Heropage