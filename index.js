import React from 'react';
//import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import Media from './src/playlist/components/media.js';

const app = document.getElementById('app')
// const holaMundo=<h1>Hola Mundo...!</h1>;
// ReactDOM.render(que voy a renderizar, donde lo haré);
//ReactDOM.render(holaMundo, app);

//ReactDOM.render(<Media/>,app);
//render(<Media/>,app);     METODO HARD
render(<Media title="¿Que es responsive Desing?" autor="RoxanaJudith" image="./images/covers/responsive.jpg" type="video"/>,app);
//render(<Media title={25} autor={()=>{}} image="./images/covers/responsive.jpg"/>,app);//ejemplo para numeros y funciones


