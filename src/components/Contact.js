import React from 'react';
import './Contact.css';


function Contact(props) {

    return (
        <div className="Contact">
            <img className="avatar" src={props.avatar} alt='toto'/>
            <div className="Name">{props.name}</div>
            <div className="infos">
                <p className="text">{props.online ? 'Online' : 'Offline'}</p>
                <div className="status">
                    <div className="status-online"></div>
                    <div className="status-offline"></div>
                </div>
                
            </div>
        </div>
    );
}




export default Contact;