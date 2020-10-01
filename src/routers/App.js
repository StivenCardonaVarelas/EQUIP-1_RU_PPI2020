import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "../pages/inicio";
import Registro from "../pages/registro";
import Iniciosesion from "../pages/iniciosesion";
import Perfiles from "../pages/perfiles";
import Contra from "../pages/contra";
import Menu from "../pages/menu";
import Calculo from "../pages/calculo";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/iniciosesion" component={Iniciosesion} />
        <Route exact path="/perfiles" component={Perfiles} />
        <Route exact path="/contra" component={Contra} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/calculo" component={Calculo} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
