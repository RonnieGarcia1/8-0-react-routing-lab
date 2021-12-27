import React from "react";

/*
  Components
*/
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import PetsList from "./components/pets/PetsList";
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

/*
  Data
  ---------------
  Note: Normally this data would be pulled from an API. It is not necessary, however, for this application.
*/
import { employees } from "./data/employees.js";
import { owners } from "./data/owners";
import { pets } from "./data/pets";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees,
      owners,
      pets,
    };
  }

  render() {
    const { employees, owners, pets } = this.state;
    return (
      <Router>
      <div className="wrapper">
        <Nav />
        <Link to="/"></Link>
        <Link to="/staff"></Link>
        <Link to="/pets"></Link>
        <Switch>
        <Route exact path="/">
        <Home employees={employees} owners={owners} pets={pets} />
        </Route>
        <Route path="/staff">
        <StaffList employees={employees} />
        </Route>
        <Route path="/pets">
        <PetsList pets={pets} />
        </Route>
        </Switch>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
