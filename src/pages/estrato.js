import React from "react";
import "../styles/styles.css";
import Swal from "sweetalert2";

class Estrato extends React.Component {
  _Alerta() {
    Swal.fire(
      "Estrato eliminado con exito",
      "Haz clink en el boton",
      "success"
    );
  }
  render() {
    return (
      <div className="container-fluid fondo">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4"></div>
          <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <div className="row">
              <div className=" col-lg-12 ">
                <div className="form-group">
                  <label for="exampleInputEmail1">Código</label>
                  <input
                    type="text"
                    className="form-control campo"
                    id="text"
                    aria-describedby=""
                  />
                  <small id="text" className="form-text text-muted"></small>
                  <label for="text">Nombre</label>
                  <br />
                  <input
                    type="text"
                    className="form-control campo"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <small id="text" className="form-text text-muted"></small>
                </div>
                <div className="col text-center">
                  <br />
                  <button type="button" className="btn btn-outline-dark boton">
                    <a href="/crear_estrato">Crear</a>
                  </button>
                  <br />
                  <br />
                  <button type="button" className="btn btn-outline-dark boton">
                    <a href="/consultar_estrato">Consultar</a>
                  </button>
                  <br />
                  <br />
                  <button
                    onClick={this._Alerta}
                    type="button"
                    className="btn btn-outline-dark boton"
                  >
                    <a href="/menu">Eliminar</a>
                  </button>
                  <br />
                  <br />
                  <button type="button" className="btn btn-outline-dark boton">
                    <a href="/edit_estrato">Editar</a>
                  </button>
                  <br />
                  <br />
                  <button type="button" className="btn btn-outline-dark boton">
                    <a href="/menu">Atras</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Estrato;
