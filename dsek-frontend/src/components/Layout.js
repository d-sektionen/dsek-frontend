import Header from './Header';
import Footer from './Footer';
import Home from '../templates/Home';

function Layout() {
    return (
        <div className="Page">
            <Header/>
            <Home/>
            <Footer/>
        </div>
    );
}
  
export default Layout;