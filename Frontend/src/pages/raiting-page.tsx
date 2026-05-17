import Header from '../componets/Header';
import Footer from '../componets/Footer';
import Main from '../componets/MainRating';

import '../componets/css/App.css';


function Ratingpage () {
    return(<div className='app-wrapper app-dark'>
        <Header />
        <Main />
        <Footer />
    </div>)
}

export default Ratingpage