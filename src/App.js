import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Header />
          <Navbar />
          <HomePage />
          <Footer />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
