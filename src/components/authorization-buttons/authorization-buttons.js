import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import './authorization-buttons.module.css';

const AuthButtons = (props) =>{
    const autorized = false,
        username = 'Петро Столеваров'
    if (autorized){
        return(
            <>
                <span><a href="/">{username}</a></span>
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