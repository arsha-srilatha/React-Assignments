//The first code to be executed when app starts running.
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); //where to place the content in index.html file - loaded to browser.
root.render(<App />);//tells what should be rendered in the html file - App is the root component.
