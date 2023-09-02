import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Aparelhos from './Aparelhos';
import VisualizarAparelho from './VisualizarAparelho';
import NotFound from './NotFound';

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
