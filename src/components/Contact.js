import React from 'react';
import './Contact.css';


function Contact(props) {

    return (
        <div className="Contact">
            <img className="avatar" src={props.avatar} />
            <div className="Name">{props.name}</div>
            <div className="">
                <p className="text">{props.online ? 'Online' : 'Offline'}</p>
                    <div className="status">
                    </div>
            </div>
        </div>
}




export defaut Contact;