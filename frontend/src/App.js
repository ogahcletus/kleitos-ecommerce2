
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Productpage from './Pages/Productpage';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap'



function App() {
  return (
    <BrowserRouter>
    <div className='site-container d-flex flex-column'>
      <header>
      <Navbar bg='dark' variant='dark'>
      <Container>
      <LinkContainer to='/'>
      <Navbar.Brand>kleitos</Navbar.Brand>
      </LinkContainer>
        
      </Container>

      </Navbar>
       
      </header>
      <main>
      <Container>
      <Routes>
        <Route path="/" element={< Homepage />} />
        <Route path="/product/:slug" element={<Productpage/>} />
      </Routes>
      </Container>  
      </main>
      <footer>
        <div className='text-center'>All rights reserved</div>
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
