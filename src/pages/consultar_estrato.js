import React from "react";
import "../styles/styles.css";
import Swal from "sweetalert2";
class Consultar_estrato extends React.Component {
  _Alerta() {
    Swal.fire(
      "Estrato econtrado  con exito",
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
              <div className=" col-lg-12">
                <div className="form-group">
                  <div className="col text-center">
                    <h1> Buscar estrato</h1>
                    <br />
                    <br />

                    <nav className="navbar ">
                      <form className="form-inline">
                        <input
                          onClick={this._Alerta}
                          className="form-control mr-sm-2"
                          type="search"
                          placeholder="Estrato"
                          aria-label="Search"
                        />
                        <button
                        onClick={this._Alerta}
                          className="btn btn-outline-success my-2 my-sm-0"
                          type="submit"
                        >
                          Buscar
                        </button>
                      </form>
                    </nav>

                    <div className=" col-xl-8">
                      <br />
                      <br />
                      <br />
                      <button
                        type="button"
                        className="btn btn-outline-dark boton"
                      >
                        <a href="/estrato">Atras</a>
                      </button>
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
export default Consultar_estrato;