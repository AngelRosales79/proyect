import React from "react";
import { useState } from "react";
import './CustomButton.css';
//interface Valores{
   // texto:String
//}

//<CustomButton/>
let movimientos=[];
let tableroData = ['0','1','2',
                    '3','4','5',
                    '6','7','8'];
                            let combos=['0','3','6',
                                        '1','4','7',
                                        '2','5','8',
                                        '0','1','2',
                                        '3','4','5',
                                        '6','7','8',
                                        '0','4','8',
                                        '6','4','2'];

                                        const checarGanador=() =>{
                                            let contador = 0;
                                            movimientos.forEach(movimientoChild =>{
                                                if(tableroData[movimientoChild[0]]=='X'){contador++}
                                                if(tableroData[movimientoChild[1]]=='X'){contador++}
                                                if(tableroData[movimientoChild[2]]=='X'){contador++}
                                                if(contador== 3){return "el ganador es X"}
                                                contador =0;
                                                if(tableroData[movimientoChild[0]]=='X'){contador++}
                                                if(tableroData[movimientoChild[1]]=='X'){contador++}
                                                if(tableroData[movimientoChild[2]]=='X'){contador++}
                                                if(contador == 3){return "el ganador es O"}
                                                return "";
                                            });
                                        }

function CustomButton(props){
    const [contador, setContador]=useState(0);
    const sumar=() =>{
        setContador(variable=>{
            return variable+1;
        });
    };
    const [estadoGato, setEstadoGato] = useState('-');
    const funciones = (n)=>{
        cambiarEstado(n);
        agregarMovimiento(n);
    };
    const agregarMovimiento =(n)=>{
        movimientos.push(n);
        console.log(movimientos);
    };
    };
    const cambiarEstado = (posicion)=>{
        setEstadoGato(estado=>{
            const nuevoEstado = estado === '-'? 'X':
            estado === 'X' ? 'O': '-';
            tableroData[posicion]=nuevoEstado;
            return nuevoEstado;

        });
    };
    return(
        <div onClick={()=>{funciones(props.posicion)}} className="custom-button">
            {estadoGato}
        </div>
    );


export default CustomButton;