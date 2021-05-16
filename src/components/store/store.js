import React, {Component} from 'react';
import { useParams } from 'react-router';

const Store = ({data}) => {
    const {id} = useParams(); 

    const {textHeader, description, canReserve} = data.find(item => item.id === id);
    return(
        <>
            <h1>{textHeader}</h1>
            <p>{description}</p>
        </>
    );
}
export default Store;