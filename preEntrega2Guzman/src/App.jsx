import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'

import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
      <BrowserRouter>
        <CartProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a Crimson'}/>}/>
            <Route path='/category/:categoryID' element={<ItemListContainer/>}/>
            <Route path='/item/:bikeID' element={<ItemDetailContainer/>}/>
            <Route path='*' element={<h1 className='notFound'>404 NOT FOUND</h1>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
      
  )
}

export default App
