import React from 'react';
import ReactDOM from 'react-dom';
// create a new component
// some HTML
const parentNode = document.querySelector('.container')
const App = () => {
    return <div>Hi</div>;
}
// Take this componenets generated HTML and put it
// on the page (in the DOM)

// to make the above class into instance wrap in JSX TAGS 


ReactDOM.render(<App/>, parentNode);

// ReactDOM.render expects two elements, component and the parentNode

