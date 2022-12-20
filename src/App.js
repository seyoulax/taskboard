import { RouterProvider } from 'react-router-dom';
import Router from './utils/router';
import React from 'react'

import './App.css';


class App extends React.Component {
  constructor(){
    super();
  }
  render(){
    return (
      <div className="App">
        <RouterProvider router={Router}></RouterProvider>
      </div>
    )
  }
}

export default App;
