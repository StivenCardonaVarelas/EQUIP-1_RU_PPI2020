
import React from "react";
import "../styles/styles.css";

class Menu extends React.Component {
render(){
return(
<div className="container-fluid fondo">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="row">
              <div className="col-lg-12">
              <button type="button" className="btn btn-outline-dark boton">
                        <a href="/electrodo">Electrodomésticos</a>
                      </button>
                      <br />
                      <br />
                      <br />
                      <button
                        type="button"
                        className="btn btn-darkcontainer-fluid fondo boton">
                        <a href="/estrato">Es</a>
                        
                      </button>


                

                      <div className="col-sm-4 col-md-4 col-lg-4 fondo"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
        
);

}
}

export default Menu;