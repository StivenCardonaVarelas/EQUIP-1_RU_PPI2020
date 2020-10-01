import React from "react";
import "../styles/styles.css";
class Consumo_total extends React.Component {
  render() {
    return (
      <div className="container-fluid fondo">
        <div className="row container-fluid fondoIniciosesion">
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="container fluid">
              <div className="col-lg-12">
                <h1> Total consumo mensual </h1>
                <input
                  class="form-control"
                  type="text"
                  placeholder="XXXXXX"
                  readonly
                />
              </div>
              <br />
              <br />
              <button
                type="button"
                className="btn btn-outline-dark fondo boton"
              >
                <a className="container-fluid " href="/">
                  Salir
                </a>
              </button>
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Consumo_total;
