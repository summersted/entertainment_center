import React, {Component} from 'react';
import './card-list-item.css';
import {Link} from 'react-router-dom';


export default class CardListItem extends Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        const {textHeader, label, id} = this.props;

        return(
            <div class="card">
                <h5 class="card-header">{textHeader}</h5>
                <div class="card-body">
                    <p class="card-text">{label}</p>
                    <Link to={{pathname: `/store/${id}`}} class="btn btn-primary">Детальніше</Link>
                </div>
            </div>
        );
    }
}
