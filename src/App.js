import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import{Navbar, Nav} from 'react-bootstrap'

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import { Create } from './components/create';
import { Read } from './components/read';
import { Edit } from './components/edit';

class App extends Component {
  render() {
  return (
    <Router>
    <div className="App">
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/read">List of Games</Nav.Link>
      <Nav.Link href="/create">Add Game to list</Nav.Link>
    </Nav>
  </Navbar>
  <br />
  <Switch>
    <Route path='/' component={Content} exact/>
    <Route path='/create' component={Create} />
    <Route path='/read' component={Read} />
    <Route path='/edit/:id' component={Edit} />
  </Switch>
    </div>
    </Router>
  );
}
}

export default App;
