import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

import './custom.css'
import { EmployeeAddNew } from './components/EmployeeAddNew';
import { EmployeeDelete } from './components/EmployeeDelete';
import { EmployeeDisplay } from './components/EmployeeDisplay';
import { EmployeeDisplayAll } from './components/EmployeeDisplayAll';
import { EmployeeSearch } from './components/EmployeeSearch';
import { CustomerAddNew } from './components/CustomerAddNew';
import { CustomerDelete } from './components/CustomerDelete';
import { CustomerDisplay } from './components/CustomerDisplay';
import { CustomerDisplayAll } from './components/CustomerDisplayAll';
import { CustomerSearch } from './components/CustomerSearch';
import { LocationAddNew } from './components/LocationAddNew';
import { LocationDelete } from './components/LocationDelete';
import { LocationDisplay } from './components/LocationDisplay';
import { LocationDisplayAll } from './components/LocationDisplayAll';
import { LocationSearch } from './components/LocationSearch';
import { EquipmentAddNew } from './components/EquipmentAddNew';
import { EquipmentDelete } from './components/EquipmentDelete';
import { EquipmentDisplay } from './components/EquipmentDisplay';
import { EquipmentDisplayAll } from './components/EquipmentDisplayAll';
import { EquipmentSearch } from './components/EquipmentSearch';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <Layout>        
            <Route exact path='/' component={Home} />
            <Route path='/customer-add-new' component={CustomerAddNew} />
            <Route path='/customer-delete' component={CustomerDelete} />
            <Route path='/customer-display' component={CustomerDisplay} />
            <Route path='/customer-display-all' component={CustomerDisplayAll} />
            <Route path='/customer-search' component={CustomerSearch} />
            <Route path='/employee-add-new' component={EmployeeAddNew} />
            <Route path='/employee-delete' component={EmployeeDelete} />
            <Route path='/employee-display' component={EmployeeDisplay} />
            <Route path='/employee-display-all' component={EmployeeDisplayAll} />
            <Route path='/employee-search' component={EmployeeSearch} />
            <Route path='/location-add-new' component={LocationAddNew} />
            <Route path='/location-delete' component={LocationDelete} />
            <Route path='/location-display' component={LocationDisplay} />
            <Route path='/location-display-all' component={LocationDisplayAll} />
            <Route path='/location-search' component={LocationSearch} />
            <Route path='/equipment-add-new' component={EquipmentAddNew} />
            <Route path='/equipment-delete' component={EquipmentDelete} />
            <Route path='/equipment-display' component={EquipmentDisplay} />
            <Route path='/equipment-display-all' component={EquipmentDisplayAll} />
            <Route path='/equipment-search' component={EquipmentSearch} />
            <AppFooter />
      </Layout>
    );
  }
}
