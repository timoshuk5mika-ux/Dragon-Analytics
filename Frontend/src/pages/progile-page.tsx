
import Header from '../componets/Header';
import Footer from '../componets/Footer';
import Main from '../componets/MainProfile';

import '../componets/css/App.css';


function ProfilePage() {
  return (
    <div className='app-wrapper app-dark'>
        <Header />
        <Main />
        <Footer />
    </div>
  );
}

export default ProfilePage;