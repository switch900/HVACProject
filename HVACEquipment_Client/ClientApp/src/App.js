import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import NavBar from "./components/NavBar";


//import './custom.css'

////export default class App extends Component {
////  static displayName = App.name;

////  render () {
////    return (
////      <Layout>
////        <Route exact path='/' component={Home} />
////        <Route path='/counter' component={Counter} />
////        <Route path='/fetch-data' component={FetchData} />
////      </Layout>
////    );
////  }
////}

class App extends Component {
    render() {
        return (
            <div className="App">
                <div class="Header">
                    <h1>Andrew Hewitson</h1>
                    <h3>React Portfolio</h3>
                </div>
                <NavBar />
            </div>
        );
    }
}

export default App;