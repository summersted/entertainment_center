import React from 'react';
import './order.css';

const Order = () =>{
    return(
        <div className="order_container">
            <div className="order_bill">
                <h1>Ви успішно придбали квиток!</h1>
                <p>Ваше місце 1 ряд 5 місце</p>
                <div className="bill_footer">
                    <p>З вашої картки автоматично спишеться 50грн. 00 коп.</p>
                    <p>приємного перегляду!</p>
                </div>
            </div>
        </div>
    )
}
export default Order;