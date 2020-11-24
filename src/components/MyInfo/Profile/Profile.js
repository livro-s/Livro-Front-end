import React from 'react';
import './Profile.scss';

const Profile = ({ User, setUser }) => {

    console.log(User);
    return (
        <div className="myPage-profile">
            <div className="myPage-profile-circle"/>
            <div className="myPage-profile-number">{User.name} {User.studentNo}</div>
        </div>
    );
}

export default Profile;