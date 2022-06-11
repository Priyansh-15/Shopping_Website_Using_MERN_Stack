import Home from './pages/Home';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import cartscreen from './pages/cartscreen';
import productscreen from './pages/productscreen';
import login from './pages/login';
import signup from './pages/signup';


const App= () => {
  return(
  <Router>
      <main className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={cartscreen} />
          <Route exact path="/product/:id" component={productscreen}/>
          <Route exact path="/logi" component={login}/>
          <Route exact path="/signu" component={signup}/>
        </Switch>
      </main>
    </Router>
  )
}
export default App;