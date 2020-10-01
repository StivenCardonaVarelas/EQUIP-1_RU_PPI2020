import React from "react";
import logo from "../imagenes/logo.png";
import "../styles/styles.css";

class Inicio extends React.Component {
  render() {
    return (
      <div className="container-fluid fondo">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="row">
              <div className="col text-center">
                <br />
                <br />
                <br />
                <img src={logo} alt="" className="img-thumbnail border-right" />
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <br />
                <br />
                <br />
                <h3> !!Bienvenidos!! </h3>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <br />
      <button type="button" className="btn btn-outline-dark boton">
                  <a href="/iniciosesion">Inicio</a>
                </button>
                <br />
                <br />
                <div className="col text-center">
                  <br />

                  <button
                    onClick={this._Alerta}
                    type="button"
                    className="btn btn-outline-dark  boton"
                  >
                    <a href="/registro">Regístrate</a>
                  </button>
                  <br />
                  <br />
                </div>
                <br />
              </div>
            </div>
            <div className="container-fluid fondo">
              <div className="row">
                <div className="col text-center "></div>
              </div>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4 fondo"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Inicio;
