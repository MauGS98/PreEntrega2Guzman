import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext/CartContext'
import { initializeApp } from "firebase/app";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Navbar from "./components/Navbar/Navbar"
import Cart from "./components/Cart/Cart"
import FirestoneProvider from './context/firebase/firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDnqUSoJ-K8QmboTRWAkJM-5XuiT3Nh_ho",
  authDomain: "galeria-motos.firebaseapp.com",
  projectId: "galeria-motos",
  storageBucket: "galeria-motos.appspot.com",
  messagingSenderId: "680210488077",
  appId: "1:680210488077:web:522203dea5e17a623a6e44",
  measurementId: "G-WPNW863P8R"
};

initializeApp(firebaseConfig);

function App() {
  return (
    <FirestoneProvider>     
      <BrowserRouter>
        <CartProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a Crimson'}/>}/>
            <Route path='/category/:categoryID' element={<ItemListContainer/>}/>
            <Route path='/item/:bikeID' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='*' element={<h1 className='notFound'>404 NOT FOUND</h1>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </FirestoneProvider> 
  )
}

export default App
