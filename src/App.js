import './App.css';
// import Footer from './Components/Footer';
import Heading from './Components/Heading';
import Section from './Components/Section';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from './Components/Tab';
import Home from './Components/Home';
import { Routes,Route } from 'react-router-dom';
import About from './Components/About';
import Link from './Components/Link';
import NotFound from './Components/NotFound';
import CreateUser from './Components/CreateUser';
import EditUser from './Components/EditUser';
import AboutUser from './Components/AboutUser';
import MyWishList from './Components/MyWishList';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Heading />}>
           <Route index element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/link" element={<Link />} />
           <Route path="/order" element={<Section />} />
           <Route path='/myOrder' element={<MyWishList />} />
           <Route path="/service" element={<Tab />} />
           <Route path="/service/createrUser" element={<CreateUser />} />
           <Route path='/service/editUser/:empId' element={<EditUser />}/>
           <Route path='/service/aboutUser/:empId' element={<AboutUser />} />
           </Route>
        <Route exact path="*" element={<NotFound />} /> 
      </Routes>
   </>
  );
}

export default App;
