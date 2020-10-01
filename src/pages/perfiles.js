import React from "react";

import "../styles/styles.css";

class Perfiles extends React.Component {
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
                <h1 className="etiqueta1per"> Perfiles usuario</h1>
                <br />
                <br />

                <div className="row">
                  <div className="col text-center">
                    <br />

                    <button type="button" className="btn btn-outline-dark">
                      <a href="/calculo">Usuario</a>
                    </button>
                    <br />
                    <br />
                    <div className="col text-center">
                      <br />

                      <button type="button" className="btn btn-outline-dark">
                        <a href="/menu">Administrador</a>
                      </button>
                      <br />
                      <br />
                      <br />
                      <button type="button" className="btn btn-outline-dark">
                        <a href="/">Atras</a>
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

export default Perfiles;
