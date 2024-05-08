
import { Home } from '../Pages/Home/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navigator } from './components/Layout/Navbar/Navbar.jsx';
import { Footer } from './components/Layout/Footer/Footer.jsx';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx';
import  Cart  from './components/Cart/Cart.jsx';
import  Error  from './components/Error/Error.jsx';
import  Shop  from './components/Shop/Shop.jsx';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer.jsx';
const App = () => {

  return (
    
    <BrowserRouter>
      <Navigator/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<ItemListContainer />}></Route>
        <Route path="/category/:categoryId" element={<ItemListContainer />}></Route>
        <Route path="/products/:prodId" element={<ItemDetailContainer />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};


export default App
