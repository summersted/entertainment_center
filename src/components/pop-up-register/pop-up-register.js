import React from 'react';

const PopUpReg = (props) =>{
    return(
    <div className="modal__dialog">
        <div className="modal__content">
            <form action="#">
                <div data-close onClick={props.openModalReg} className="modal__close">&times;</div>
                <div className="modal__title">Зареєструватись</div>
                <input required placeholder="Введіть ваш email" name="email" type="email" className="modal__input"/>
                <input required placeholder="Введіть вашe ім'я" name="name" type="name" className="modal__input"/>
                <input required placeholder="Введіть ваш пароль" name="password" type="password" className="modal__input"/>
                <button className="btn btn-outline-primary">Зареєструватись!</button>
            </form>
        </div>
    </div>
    )
}

export default PopUpReg;