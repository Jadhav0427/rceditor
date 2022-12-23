import React from 'react';
import Avatar from 'react-avatar';

const Client = ({ username }) => {
    return ( // username ke name ke under ke first letter Box mai dikhege, Avatar use kiya
        <div className="client">
            <Avatar name={username} size={50} round="14px" /> 
            <span className="userName">{username}</span>
        </div>
    );
}; 

export default Client;
