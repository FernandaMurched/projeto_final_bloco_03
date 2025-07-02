import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './assets/pages/home/Home'
import Footer from './assets/components/footer/Footer'
import Navbar from './assets/components/navbar/Navbar'
import ListarCategorias from './assets/components/categorias/listarcategorias/ListarCategorias'
import DeletarCategoria from './assets/components/categorias/deletarcategorias/DeletarCategorias'
import FormCategoria from './assets/components/categorias/formcategorias/FormCategorias'

function App() {
  return (
    <Router>
      <div className="bg-teal-100 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadastrarcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
