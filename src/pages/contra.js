import React from "react";
import "../styles/styles.css";
class Contra extends React.Component {
  render() {
    return (
      <div className="container-fluid fondoIniciosesion">
        <div className="row container-fluid fondoIniciosesion">
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="row">
              <div className="col-lg-12">
                <form>
                  <div className="form-group" />
                  <label for="exampleInputEmail1">Correo electronico</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    Le llegara un correo de verificación
                  </small>
                  <button type="submit" className="btn btn-outline-dark">
                    {" "}
                    <a href="/iniciosesion"> Enviar </a>{" "}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contra;
