import React, {Component} from 'react';
import { useParams } from 'react-router';
import {Link} from 'react-router-dom';
import './store.css';

const Store = ({data}) => {
    const {id} = useParams(); 

    const {textHeader, label, description, url, canReserve} = data.find(item => item.id === id);
    if (!canReserve){
        return(
            <div className="store_container">
                <div className="d-flex">
                    <img className="store_img" src={url} alt="" />
                    <div className="store_col">
                        <h1>{textHeader}</h1>
                        <p>{label}</p>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        );
    } else {
        return(
            <div className="store_container">
                <div className="d-flex">
                    <img className="store_img" src={url} alt="" />
                    <div className="store_col">
                        <h1>{textHeader}</h1>
                        <p>{label}</p>
                        <p>{description}</p>
                    </div>
                </div>
                <Link to={{pathname: `/order`}} className="store_btn btn btn-primary">Замовити квиток</Link>
            </div>
        );
    }
    
}
export default Store;