import React from 'react';
import './App.css';
import Header from './components/Header'
import routes from './routes'


function App() {
  return (
    <div className="App">
      <Header/>
      {routes}
    </div>
  );
}

export default App;
