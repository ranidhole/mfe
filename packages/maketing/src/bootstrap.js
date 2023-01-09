import React from 'react';
import ReactDOM from 'react-dom';
import App from'./app';

const mount= (ele)=>{
   ReactDOM.render(
    <App />,
    ele
   )
}

if(process.env.NODE_ENV === 'development'){

    const devroot = document.querySelector('#doc');
    if(devroot){
        mount(devroot)
    }
}

export { mount };