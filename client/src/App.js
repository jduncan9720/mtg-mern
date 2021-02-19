import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Logo from './components/Logo'
import Wrapper from './components/Wrapper'
import About from './pages/About'
import Artists from './pages/Artists'
import Contact from './pages/Contact'
import Events from './pages/Events'
import Home from './pages/Home'
import Admin from './pages/Admin'
import { Container } from "react-bootstrap";


function App() {
  return (
    <Router>
      <Container>
        <Logo />
        <Navbar />
        <br />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/artists" component={Artists} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/admin" component={Admin} />
        </Wrapper>
      </Container>
    </Router>
  );
}

export default App;

