import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TextSlider from './Components/TextSlider/TextSlider';
import HtmlEditor from './Components/htmlEditor/Htmleditor';
import GetApiCall from './Components/FetchApiCall/GetApiCall';
import DynamicInput from './Components/Loading/Loading';

ReactDOM.render(
    <DynamicInput />,
  document.getElementById('root')
);