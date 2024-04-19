import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar'; 
import Tablero from './components/Tablero/Tablero';
import ChatWebSocket from './components/ChatWebSocket/ChatWebSocket';

function App() {
  return (
    <>
    <ChatWebSocket/>
    </>
  );
}

export default App;
