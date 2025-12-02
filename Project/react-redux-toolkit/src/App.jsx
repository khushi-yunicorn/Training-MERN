import { useDispatch } from 'react-redux'
import './App.css'
import Header from './component/Header'
import Product from './component/Product'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CartList from './component/CartList';

function App() {

  const dispatch = useDispatch();
  return (
    <div>

      <BrowserRouter>
        <Header />


        <Routes>
          <Route path="/" element={ <Product />}></Route>
          <Route path="/cart" element={ <CartList/> }></Route>

        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App
