import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import BottomNavBar from "./components/BottomNavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/search'>
            <SearchPage />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <Footer />
        <BottomNavBar />
      </Router>
    </div>
  );
}

export default App;
