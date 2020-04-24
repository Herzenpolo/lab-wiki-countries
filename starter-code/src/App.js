import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import countries from "./countries.json";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Country from "./components/Country";
import About from "./components/About";
import Home from "./components/Home";

class App extends Component {
  componentDidMount() {
    console.log(this);
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div class="country-container">
          <div class="row">
            <div class="col-5">
              <Home />
              
            </div>
            <div class="col-7">
              <Switch>
                {/* <Route
                  exact
                  path="/"
                  component={(props) => <Home {...props} />}
                ></Route> */}
                <Route
                  exact
                  path="/about"
                  component={(props) => <About {...props} />}
                ></Route>
                <Route
                  exact
                  path="/contact"
                  component={(props) => <Contact {...props} />}
                ></Route>
                <Route
                  path="/Country/:id"
                  render={(props) => (
                    <Country {...props} idName={countries} />
                  )}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
