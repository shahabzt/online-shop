import { BrowserRouter, Route, Routes , Navigate} from 'react-router-dom';
import './App.css';
import { ShowProductData } from './components';
import { Cart } from './components/Cart';
import { ContactUs } from './components/Email';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/Home' element= {<ShowProductData/>} />
        <Route path='/Home'  element= {<Navigate to="/" />}  />
        <Route path='/'  element= {<ShowProductData/>} />
        <Route path='/store' element = {<Cart/>} />
        <Route path='/contact-us' element = {<ContactUs/>} />
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
