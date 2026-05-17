import Header from '../componets/Header';
import Footer from '../componets/Footer';
import MainRegister from '../componets/MainRegister';


import '../componets/css/App.css';


function Regpage () {
    return(<div className='app-wrapper app-dark'>
        <Header />
        <MainRegister />
        <Footer />
    </div>)
}

export default Regpage
