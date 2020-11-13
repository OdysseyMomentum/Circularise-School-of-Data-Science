import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./routes/Homepage";
import Share from "./routes/Share";
import NotFound from "./routes/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/share" component={Share} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
