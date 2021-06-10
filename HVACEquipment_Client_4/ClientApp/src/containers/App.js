import React, { Component } from 'react';
import './App.css';
import Layout from '../components/Layout/Layout';
import Home from '../components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from '../components/ErrorPages/NotFound/NotFound';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route Path="/" exact component={Home} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;