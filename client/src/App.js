import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { RestaurantsContextProvider } from "./context/RestaurantsContext";
import Home from "./routes/Home";
import RestaurantDetailPage from "./routes/RestaurantDetailPage";
import UpdatePage from "./routes/UpdatePage";

const App = () => {
  return (
    <RestaurantsContextProvider>
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/restaurants/:id/update" component={UpdatePage} />
            <Route path="/restaurants/:id" component={RestaurantDetailPage} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </div>
    </RestaurantsContextProvider>
  );
};

export default App;
