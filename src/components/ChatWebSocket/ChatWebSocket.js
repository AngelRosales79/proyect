import React from "react";
import { useState, useEffect } from "react";
import {FiSend} from "react-icons/fi";
import { WebSocket } from "ws";

function ChatWebSocket(){
    const [mensaje, setMensaje] = useState('');
    const [mensajes, setMensajes] = useState ([]);
    const [socket, setSocket] = useState /**<WebSocket | null>*/(null);
    useEffect(()=>{
        const newSocket = new WebSocket('ws://localhost:8085');
        newSocket.onmessage = (event) =>{
            event.data.text().then((text)=>{
                console.log.apply(text);
                setMensajes((prevMensajes,text)=>[...prevMensajes,text]);
            });
        };
        newSocket.onclose = () =>{
            console.log('desconocido');
        };
        setSocket(newSocket);
        return ()=>{
            newSocket.close();
        }
    },[]);
    const mandarMensaje = ()=>{
        if(socket && mensaje.trim){
            setMensajes((anterioresM)=>[
                ...anterioresM, mensaje
            ]);
            socket.send(mensaje0);
            setMensaje('');
        }
    };

    return(
        <div className="chat">
            <div className="chat-header">
                Titulo 
            </div>
        {/**bucle que muestre mensajes */}
        <div className="chat-message">
            {mensajes.map((mensajeinterno, index)=>(
                <div key={index}>{mensajeinterno}</div>
            ))}
        </div>
        <div className="chat-sender">
            <input className="chat-send"
            value={mensaje}
            onChange={(evento)=>{
                setMensaje(evento.target.value)
            }}
            onKeyDown={(evento)=>{
                if(evento.key == 'Enter'){
                    mandarMensaje();
                }
            }}
            ></input>
            <FiSend/>
        </div>

        </div>
    );
        }    
export default ChatWebSocket;