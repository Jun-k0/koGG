import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import History from "./components/History"

function App() {
  return(
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/history/userName=:name" component={History} />
    </HashRouter>
  )
}

export default App;
