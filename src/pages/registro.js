import React from "react";
import "../styles/styles.css";

class Registro extends React.Component {
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
                <h1>cedula</h1>
                <br />

                <h1>nombre</h1>
                <br />

                <h1>apellido</h1>
                <br />

                <h1>usuario</h1>
                <br />
                <h1>contraseña</h1>
                <br />

                <h1>estrato</h1>
                <div className="row">
                  <div className="col text-center">
                    <br />

                    <button type="button" className="btn btn-outline-dark">
                      <a href="/perfiles">Guardar</a>
                    </button>
                    <br />
                    <br />
                    <div className="col text-center fondo">
                      <br />

                      <button
                        type="button"
                        className="btn btn-outline-dark fondo"
                      >
                        <a className="container-fluid fondo" href="/">
                          Regresar
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
      </div>
    );
  }
}

export default Registro;
