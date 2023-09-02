import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Aparelhos from './components/Aparelhos';
import VisualizarAparelho from './components/VisualizarAparelho';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aparelhos" component={Aparelhos} />
        <Route path="/aparelho/:id" component={VisualizarAparelho} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
