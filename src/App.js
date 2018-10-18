import React, { Component } from 'react';
import Search from './components/Search';
import ResultList from './components/ResultList';
import SideList from './components/SideList';
import './App.css';


class App extends Component {
  render() {
    return (
      
      <div className="container">
        <div className="row">

          <div className="col-md-8">
            <Search />
            <ResultList />
          </div>

          <div className="col-md-4">
            <SideList />
          </div>

        </div>
      </div>

    );
  }
}

export default App;
