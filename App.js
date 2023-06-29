import React from "react"
import ReactDOM from "react-dom/client";

const heading = React.createElement('h1', {style:{color:"red"}, id:"heading",key:"1"}, 'Hello React !');
const head1 = React.createElement('h2', {key:"2"}, 'heading 1');
const head2 = React.createElement('h2', {key:"3"}, 'heading 2');

const cont=React.createElement('div',{id:"container"},[heading,head1,head2])


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(cont)