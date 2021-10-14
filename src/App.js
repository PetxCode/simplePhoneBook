import React from "react";
import { BuildHome } from "./GlobalCall/BuildHome";
import { HeaderBuild } from "./GlobalCall/HeaderBuild";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { FriendScreen } from "./GlobalCall/FriensPage";
import { BusinessScreen } from "./GlobalCall/BusinessPage";
import AddContact from "./GlobalCall/AddContact";

const App = () => {
  return (
    <BrowserRouter>
      <HeaderBuild />
      <Switch>
        <Route path="/" exact component={BuildHome} />
        <Route path="/friend" exact component={FriendScreen} />
        <Route path="/business" exact component={BusinessScreen} />
        <Route path="/add" exact component={AddContact} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
