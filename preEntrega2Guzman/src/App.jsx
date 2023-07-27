import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a Crimson'}/>}/>
          <Route path='/category/:categoryID' element={<ItemListContainer/>}/>
          <Route path='/item/:bikeID' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
      </BrowserRouter>
      
  )
}

export default App
