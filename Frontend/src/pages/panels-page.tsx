import Header from "../componets/Header";
import Footer from "../componets/Footer";
import Main from "../componets/MainPanels";

import '../componets/css/App.css';

function PanelsPage() {
  return (
    <div className="app-wrapper app-dark">
        <Header />
        <Main />
        <Footer />
    </div>
  );
}

export default PanelsPage;