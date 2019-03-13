import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Home";
import AddContact from "./AddContact";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/new" component={AddContact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
