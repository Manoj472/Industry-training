import React from 'react';
import ReactDOM from 'react-dom/client';

function Car (){
  return <h2>hi,iam a car component!</h2>
}
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Car />)