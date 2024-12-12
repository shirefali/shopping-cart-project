import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router';
import About from './components/About';
import ShoppingCartProvider from './components/context/ShoppingCartContext';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Store from './components/Store';
import './index.css';

function App() {
    return (
        <ShoppingCartProvider>
            <BrowserRouter>
                <Navbar />
                <Container>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/store" element={<Store />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </Container>
            </BrowserRouter>
        </ShoppingCartProvider>
    );
}

export default App;
