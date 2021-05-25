import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import './authorization-buttons.module.css';
import {Link} from 'react-router-dom';

const AuthButtons = (props) =>{
    const autorized = true,
    // const autorized = false,
        username = 'Сидорчук Роман '
    if (autorized){
        return(
            <>
                <span><Link to={{pathname: `/profile`}} >{username}</Link></span>
                <Button color="primary">Вийти</Button>{' '}
            </>
            );
    } else {
        return(
            <ButtonGroup>
              <button data-modal onClick={props.openModalReg} className="btn btn-secondary">Зареєструватися</button>
              <button data-modal onClick={props.openModalLogIn} className="btn btn-primary">Увійти</button>
            </ButtonGroup>
            );
    }
}

export default AuthButtons;