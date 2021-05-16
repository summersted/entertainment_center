import React, { useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
// UncontrolledDropdown,
// DropdownToggle,
// DropdownMenu,
// DropdownItem,

import './header.css';
import PopUpReg from '../pop-up-register';
import PopUpLogIn from '../pop-up-log-in';
import AuthButtons from '../authorization-buttons';

import Contact from '../contacts';
import CardList from '../card-list';
import MainPage from '../main-page';
import Store from '../store';


const Header = ({posts}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    function ToggleModalForm(modalBlock) {
      if (modalBlock.classList.contains('hide')){
        modalBlock.classList.remove('hide');
        modalBlock.classList.add('show');
      } else{
        modalBlock.classList.remove('show');
        modalBlock.classList.add('hide');
      }
    }
    
    function ToggleRegForm(){
      const modalRegBlock = document.querySelector('.modalReg');
      ToggleModalForm(modalRegBlock);
    }
    function ToggleLogInForm(){
      const modalLogInBlock = document.querySelector('.modalLogIn');
      ToggleModalForm(modalLogInBlock);
    }
  

    const WrappedCardList = function (props) {
      return (<CardList {...props} posts ={posts}/>);
    }
    return (
        <>
          <Router>
              <Navbar color="dark" light expand="md">
                <NavbarBrand href="/main">Розважальний центр</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                  <Nav className="mr-auto" navbar>
                    <NavItem>
                      <NavLink href="/institutions">Заклади</NavLink>
                    </NavItem> 
                    <NavItem>
                      <NavLink href="/contacts">Контакти</NavLink>
                    </NavItem> 
                  </Nav>
                  <NavbarText><AuthButtons openModalReg={ToggleRegForm} openModalLogIn={ToggleLogInForm}/></NavbarText>
                </Collapse>
              </Navbar>

              <Route path='/store/:id' render={() => <Store data = {posts}/>} />
              <Route path='/contacts' component={Contact} />
              <Route path='/institutions' component={WrappedCardList} />
              <Route path='/main' component={MainPage} />
              <Route path='/' exact component={MainPage} />
              
            </Router>

            <div className='modal modalReg hide'>  
              <PopUpReg openModalReg={ToggleRegForm}/>
            </div>
            <div className='modal modalLogIn hide'>  
              <PopUpLogIn openModalLogIn={ToggleLogInForm}/>
            </div>
      </>
      );
}

export default Header;