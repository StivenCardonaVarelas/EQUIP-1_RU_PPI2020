import React from "react";
import "../styles/styles.css";

class Electro extends React.Component {
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
                    <h1> Buscar consumo</h1>
                    <br />
                    <br />

                    <nav className="navbar ">
                      <form className="form-inline">
                        <input
                          className="form-control mr-sm-2"
                          type="search"
                          placeholder="Ingresa consumo"
                          aria-label="Search"
                        />
                        <button
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
                        <a href="/consumo">Atras</a>
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
export default Electro;
