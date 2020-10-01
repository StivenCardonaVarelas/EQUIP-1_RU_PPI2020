import React from "react";
import "../styles/styles.css";

class Inicio_sesion extends React.Component {
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
                <h1>usuario</h1>
                <br />
                <br />
                <h1>contraseña</h1>
                <div className="row">
                  <div className="col text-center">
                    <br />

                    <button type="button" className="btn btn-outline-dark">
                      <a href="/perfiles">Ingresar</a>
                    </button>
                    <br />
                    <br />
                    <div className="col text-center">
                      <br />

                      <button type="button" className="btn btn-outline-dark">
                        <a href="/">Regresar</a>
                      </button>
                      <br />
                      <br />
                      <br />
                      <button
                        type="button"
                        className="btn btn-darkcontainer-fluid fondo"
                      >
                        <a href="/contra">¿Olvidaste tu contraseña?</a>
                      </button>
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Inicio_sesion;
