import React from "react";
import "../styles/styles.css";

class Estrato extends React.Component{
render(){
  return(
    <div className="container-fluid fondo">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="row">
              <div className="col-sm-4 col-md-4 col-lg-4">
              <div class="form-group">
              <label for="exampleInputEmail1">Codigo</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" class="form-text text-muted"></small>
    <label for="exampleInputEmail1">Nombre</label>
    <br/>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" class="form-text text-muted"></small>

    </div>
    <div className="container-fluid fondo">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="row">
              <div className="col-sm-4 col-md-4 col-lg-4">
              <div class="form-group">
              <button
               type="button"
              className="btn btn-outline-dark boton">
              <a href="/crear_estrato">Crear</a> 
              </button>
              <br/>
              <button
               type="button"
              className="btn btn-outline-dark boton">
              <a href="/crear_estrato">Eliminar</a> 
              </button>
                



              </div>
                </div>
              </div>
            </div>
            </div>
            </div>
              
          
    
              
                      <div className="col-sm-4 col-md-4 col-lg-4 fondo"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
  );

}


}

export default Estrato;