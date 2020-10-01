import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "../pages/inicio";
import Registro from "../pages/registro";
import Iniciosesion from "../pages/iniciosesion";
import Perfiles from "../pages/perfiles";
import Contra from "../pages/contra";
import Menu from "../pages/menu";
import Calculo from "../pages/calculo_usuario";
import Estrato from "../pages/estrato";
import Crear_estrato from "../pages/crear_estrato";
import Edit_estrato from "../pages/edit_estrato";
import Consultar_estrato from "../pages/consultar_estrato";
import Electrodo from "../pages/electrodo";
import Consumo from "../pages/consumo";
import Crear_elec from "../pages/crear_electro";
import Consultar_electro from "../pages/consultar_electro";

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
        <Route exact path="/estrato" component={Estrato} />
        <Route exact path="/crear_estrato" component={Crear_estrato} />
        <Route exact path="/edit_estrato" component={Edit_estrato} />
        <Route exact path="/consultar_estrato" component={Consultar_estrato} />
        <Route exact path="/electrodo" component={Electrodo} />
        <Route exact path="/consumo" component={Consumo} />
        <Route exact path="/crear_electro" component={Crear_elec} />
        <Route exact path="/consultar_electro" component={Consultar_electro} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
