import React from "react";
import "../styles/styles.css";

class Calculo_usuario extends React.Component {
  render() {
    return (
      <div className="container-fluid fondo">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="row">
              <div className="col-lg-12">
                <br />
                <br />
                <h1> Electrodomestico</h1>
                <br />

                <input
                  class="form-control"
                  type="text"
                  placeholder="Ingresa el electrodomestico"
                  ón
                  readonly
                />
                <br />
                <h1> Cantidad </h1>
                <br />
                <input
                  class="form-control"
                  type="text"
                  placeholder="Cantidad de electrodomesticos "
                  readonly
                />
                <br />

                <h1>Potencia</h1>
                <br />
                <input
                  class="form-control"
                  type="text"
                  placeholder="K/h"
                  readonly
                />
                <br />
                <h1>Horas de uso</h1>
                <br />
                <input
                  class="form-control"
                  type="text"
                  placeholder="Tiempo activos"
                  readonly
                />
                <br />
                <h1>Consumo diario</h1>
                <br />
                <input
                  class="form-control"
                  type="text"
                  placeholder=""
                  readonly
                />
                <br />
                <br />

                <div className="col text-center fondo ">
                  <button type="button" className="btn btn-outline-dark boton">
                    <a href="/consumo_total">Consultar consumo mensual</a>
                  </button>
                  <br />
                  <br />
                  <div className="col text-center fondo ">
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
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculo_usuario;
