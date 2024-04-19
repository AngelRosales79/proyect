import React from "react";
import '.Tablero.css';
import CustomButton from "../CustomButton/CustomButton";

function Tablero(){
    return(
        <>
        <div className="filaTTC">
           < CustomButton posicion={0} texto=""/>
           < CustomButton posicion={2} texto=""/>
           < CustomButton posicion={3} texto=""/>
           </div>
           <div className="filaTTC">
           < CustomButton posicion={4} texto=""/>
           < CustomButton posicion={5} texto=""/>
           < CustomButton posicion={6} texto=""/>
           </div>
           <div className="filaTTC">
           < CustomButton posicion={7} texto=""/>
           < CustomButton posicion={8} texto=""/>
           < CustomButton posicion={9} texto=""/>
           </div>
           </>
    );
}
export default Tablero;
