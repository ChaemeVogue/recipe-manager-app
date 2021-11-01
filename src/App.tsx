import React from "react";
import {Route, Switch} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/search/:searchTerm/:healthLabel?" component={Search} />
            <Route path="/recipe/:selectedRecipe" component={Recipe} />
        </Switch>
    </div>
  );
}

export default App;
