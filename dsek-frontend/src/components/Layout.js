import PageHeader from './PageHeader';
import Footer from './Footer';
import Nav from './Nav';

import '../css/Layout.css'

function Layout() {
    return (
        <div className="Page">
            <Nav/>
            <PageHeader/>
            <Footer />
        </div>
    );
}
  
export default Layout;