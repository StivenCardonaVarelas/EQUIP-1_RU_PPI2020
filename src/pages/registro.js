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
                <h1>Cedula</h1>

                <input
                  class="form-control"
                  type="text"
                  placeholder="Identificación"
                ón
                  readonly
                />
                <h1>Nombre</h1>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Nombre "
                  readonly
                />

                <h1>Apellido</h1>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Apellido"
                  readonly
                />

                <h1>Usuario</h1>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Nombre usuario"
                  readonly
                />
                <h1>Contraseña</h1>
                <input
                  class="form-control"
                  type="password"
                  placeholder="Contraseña"
                  readonly
                />

                <h1>Estrato</h1>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">
                    Selecciona tu estrato
                  </label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>Estrato 1 </option>
                    <option> Estrato 2</option>
                    <option>Estrato 3 </option>
                    <option>Estrato 4 </option>
                    <option>Estrato 5 </option>
                  </select>
                </div>
                <br />
                <div className="col text-center fondo ">
                  <button type="button" className="btn btn-outline-dark boton">
                    <a href="/perfiles">Guardar</a>
                  </button>
                  <br />
                  <br />
                  <div className="col text-center fondo ">
                    <br />

                    <button
                      type="button"
                      className="btn btn-outline-dark fondo boton"
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
    );
  }
}

export default Registro;
