import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/pages/home/Home';
import Footer from './assets/components/footer/Footer';
import Navbar from './assets/components/navbar/Navbar';


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
