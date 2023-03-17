import logo from './logo.svg';
import './App.css';
import Navbarcomponent from "./components/ui/Navbar.component"
import Footercomponent from './components/ui/Footer.component';

import { Route,Routes } from 'react-router-dom';
import Homepages from './pages/Home.pages';
import Coinpages from './pages/Coin.pages';
import FAQpages from './pages/FAQ.pages';
import About_uspages from './pages/About_us.pages';
import Contact_uspages from './pages/Contact_us.pages';


function App() {
  
  return (

    <div className="App">

      <Navbarcomponent />
      <div className='wrapper'>
        <Routes>

          <Route path = "/" element = {<Homepages />}> </Route>
          <Route path = "/coinpages/:id" element = {<Coinpages />}> </Route>
          <Route path = "/faq" element = {<FAQpages />} ></Route>
          <Route path = "/about_uspages" element = {<About_uspages />} ></Route>
          <Route path = "/contact_uspages" element = {<Contact_uspages />} ></Route>
        </Routes>
        
      </div>
      <Footercomponent />


    </div>
  );
}

export default App;
