import Footer from '../componets/Footer';
import Header from '../componets/Header';
import Main from '../componets/MainLogin';

import '../componets/css/App.css';


function Loginpage () {
    return(<div className='app-wrapper app-dark'>
        <Header />
        <Main />
        <Footer />
    </div>)
}

export default Loginpage