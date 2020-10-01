import React from "react";
import "../styles/styles.css";
import Swal from "sweetalert2";
class Inicio_sesion extends React.Component {
  _Alerta() {
    Swal.fire(
      "Inicio sesion exitoso",
      "Haz clink en el boton",
      "sucess"
    );
  }
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
                <h1>Usuario</h1>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Nombre usuario"
                  readonly
                />
                <br />
                <br />
                <h1>Contraseña</h1>
                <input
                  class="form-control"
                  type="password"
                  placeholder="Contraseña"
                  readonly
                />
                <div className="row">
                  <div className="col text-center">
                    <br />

                    <button  onClick={this._Alerta}
                      type="button"
                      className="btn btn-outline-dark boton "
                    >
                      <a href="/perfiles">Ingresar</a>
                    </button>
                    <br />
                    <br />
                    <div className="col text-center">
                      <br />

                      <button
                        type="button"
                        className="btn btn-outline-dark boton"
                      >
                        <a href="/">Regresar</a>
                      </button>
                      <br />
                      <br />
                      <br />
                      <button
                        type="button"
                        className="btn btn-darkcontainer-fluid fondo boton"
                      >
                        <a href="/contra">¿Olvidaste tu contraseña?</a>
                      </button>
                      <br />
                      <br />
                      <div className="container-fluid fondo boton">
                        <div className="row">
                          <div className="col text-center "></div>
                        </div>
                      </div>
                      <div className="col-sm-4 col-md-4 col-lg-4 fondo"></div>
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
