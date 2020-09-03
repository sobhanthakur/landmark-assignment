import React from "react";
import { Route, Switch } from "react-router-dom";

import dashboard from "../layout/Dashboard";
import Register from "../layout/Register";

const Routes = () => {
  
  return (
    <div className="container">
      {/* <AlertComponent></AlertComponent> */}
      <Switch>
        <Route exact path="/" component={dashboard} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </div>
  );
};

export default Routes;
