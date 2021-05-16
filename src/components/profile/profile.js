import React from 'react';
import './profile.css';

const Profile = () => {
    return(
        <div className="profile_container">
            <div className="d-flex">
                    <img className="profile_img" src='media/profile.png' alt="" />
                    <div className="profile_col">
                        <h1>Сидорчук Роман</h1>
                        <p>Зареєстрований 01/04/2021</p>
                    </div>
                </div>
        </div>
    )
}

export default Profile;