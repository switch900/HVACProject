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
import EquipmentListPage from './pages/EquipmentListPage';
import EquipmentDetailPage from './pages/EquipmentDetailPage';
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage';
import DisplayAllLocation from './pages/Locations/DisplayAllLocations/DisplayAllLocations';
import AddLocation from './pages/Locations/AddLocation/AddLocation';
import DisplayAllEmployees from './pages/Employees/DisplayAllEmployees/DisplayAllEmployees';
import AddEmployee from './pages/Employees/AddEmployee/AddEmployee';

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} exact />
          <Route path="/list" component={EquipmentListPage} exact />
          <Route path="/detail/:id" component={EquipmentDetailPage} exact />
          <Route path="/displayAllLocations" component={DisplayAllLocation} exact />
          <Route path="/addLocation" component={AddLocation} exact />
          <Route path="/displayAllEmployees" component={DisplayAllEmployees} exact />
          <Route path="/addEmployee" component={AddEmployee} exact />

          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
