import React, { useState } from 'react';
// import Signup from './component/signup/signup';
// import Signin from './component/signin/signin';
import Signin from './containers/signIn'
import Signup from './containers/signUp'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Route } from 'react-router-dom';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Assignment</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/signin" >SignIn</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signup">SignUp</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </div>
      <br></br>
    </div>

  );
}

export default App;
