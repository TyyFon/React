import Home from './components/Home/Home.js';
import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar.js';
import Favorite from './components/Favorite/Favorite.js';
import About from './components/About/About.js';
import List from './components/List/List.js';
import { Routes, Route } from 'react-router-dom';
import Error from './components/Error/Error.js';

const App = () => {
    return (
        <main>
            <NavBar />
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/list/:listId" element={<List />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/favorite" element={<Favorite />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Container>
        </main>
    );
};

export default App