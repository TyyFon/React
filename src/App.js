import Home from './components/Home/Home.js'
import Container from './components/Container/Container'
import NavBar from './components/NavBar/NavBar.js'
import Favorite from './components/Favorite/Favorite.js'
import About from './components/About/About.js'

const App = () => {
    return (
        
        <main>
            <NavBar />
            <Container>
                <Home />
                <About />
                <Favorite />
             </Container>
       </main>
    );
};

export default App