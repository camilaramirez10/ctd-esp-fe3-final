import { Route, Routes } from 'react-router-dom'
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from './Routes/Home'
import Contacto from './Routes/Contact'
import Detalle from './Routes/Detail'
import Destacados from './Routes/Favs'
import ContextProvider from './Components/utils/global.context'

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contacto />} />
          <Route path='/detail/:id' element={<Detalle />} />
          <Route path='/favs' element={<Destacados />} />
        </Routes>
        <Footer></Footer>
      </div>
    </ContextProvider>
  );
}

export default App;
