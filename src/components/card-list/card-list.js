import React from 'react';
import CardListItem from '../card-list-item';
import './card-list.css';

const CardList = ({posts})=> {
    const elements = posts.map((item) => {

        const {id} = item;
        return(
            <div key={id} className="">
                <CardListItem {...item}/> 
            </div>
        )
    });

    return(
        <div className="cardlist app-list list-group ">
            {elements}
        </div>
    )
}

export default CardList;

