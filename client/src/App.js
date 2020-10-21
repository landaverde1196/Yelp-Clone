import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import RestaurantDetailPage from "./routes/RestaurantDetailPage";
import UpdatePage from "./routes/UpdatePage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/restaurants/:id/update" component={UpdatePage} />
          <Route path="/restaurants/:id" component={RestaurantDetailPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
