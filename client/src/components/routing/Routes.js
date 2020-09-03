import React from "react";
import { Route, Switch } from "react-router-dom";

import dashboard from "../layout/Dashboard";

const Routes = () => {
  
  return (
    <div className="container">
      {/* <AlertComponent></AlertComponent> */}
      {/* <NavbarComponent></NavbarComponent> */}
      <Switch>
        <Route exact path="/" component={dashboard} />
      </Switch>
    </div>
  );
};

export default Routes;
