import './App.css';
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import React from 'react';
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage';
import DisplayAllLocation from './pages/Locations/DisplayAllLocations/DisplayAllLocations';
import AddLocation from './pages/Locations/AddLocation/AddLocation';
import DisplayAllEmployees from './pages/Employees/DisplayAllEmployees/DisplayAllEmployees';
import AddEmployee from './pages/Employees/AddEmployee/AddEmployee';
import DisplayAllCustomers from './pages/Customers/DisplayAllCustomers/DisplayAllCustomers';
import AddCustomer from './pages/Customers/AddCustomer/AddCustomer';
import EquipmentListPage from './pages/Equipment/DisplayAllEquipment/EquipmentListPage';
import AddEquipment from './pages/Equipment/AddEquipment/AddEquipment';
import EquipmentDetail from './pages/Equipment/EquipmentDetail/EquipmentDetail';
import CustomerDetail from './pages/Customers/CustomerDetail/CustomerDetail';
import LocationDetail from './pages/Locations/LocationDetail/LocationDetail';
import EmployeeDetail from './pages/Employees/EmployeeDetail/EmployeeDetail';
import LoginPage from './pages/LoginPage/LoginPage';
import EditEquipment from './pages/Equipment/EditEquipment/EditEquipment';
import EditCustomer from './pages/Customers/EditCustomer/EditCustomer';
import EditLocation from './pages/Locations/EditLocation/EditLocation';
import EditEmployee from './pages/Employees/EditEmployee/EditEmployee';
import Footer from './Footer';


function App() {

  return (
    <Router>
      <div className="container">
        <NavBar />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} exact />
          <Route path="/displayAllEquipment" component={EquipmentListPage} exact />
          <Route path="/addEquipment" component={AddEquipment} exact />
          <Route path="/displayAllLocations" component={DisplayAllLocation} exact />
          <Route path="/addLocation" component={AddLocation} exact />
          <Route path="/displayAllEmployees" component={DisplayAllEmployees} exact />
          <Route path="/addEmployee" component={AddEmployee} exact />
          <Route path="/displayAllCustomers" component={DisplayAllCustomers} exact />
          <Route path="/addCustomer" component={AddCustomer} exact />
          <Route path="/login" component={LoginPage} exact />
          <Route path="/locationDetail/:id" component={LocationDetail} exact />
          <Route path="/employeeDetail/:id" component={EmployeeDetail} exact />
          <Route path="/equipmentDetail/:id" component={EquipmentDetail} exact />
          <Route path="/customerDetail/:id" component={CustomerDetail} exact />
          <Route path="/editEquipment/:id" component={EditEquipment} exact />
          <Route path="/editCustomer/:id" component={EditCustomer} exact />
          <Route path="/editLocation/:id" component={EditLocation} exact />
          <Route path="/editEmployee/:id" component={EditEmployee} exact />

          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;