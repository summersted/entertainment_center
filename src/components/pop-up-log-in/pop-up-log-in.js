import React from 'react';

const PopUpLogIn = (props) =>{
    return(
    <div className="modal__dialog">
        <div className="modal__content">
            <form action="#">
                <div data-close onClick={props.openModalLogIn} className="modal__close">&times;</div>
                <div className="modal__title">Вхід</div>
                <input required placeholder="Введіть ваш email" name="email" type="email" className="modal__input"/>
                <input required placeholder="Введіть ваш пароль" name="password" type="password" className="modal__input"/>
                <button className="btn btn-outline-primary">Увійти!</button>
            </form>
        </div>
    </div>
    )
}

export default PopUpLogIn;