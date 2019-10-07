import React from 'react';
import './Contact.css';


function Contact(props) {

    return (
        <div className="Contact">
            <img className="avatar" src={props.avatar} alt='toto'/>
            <div className="Box">
                <div className="name">{props.name}</div>
            
                 <div className="status">
                    {props.online ?
                     <div className="status-online"></div> :
                    <div className="status-offline"></div>
                     }
                     <p className="text">{props.online ? 'Online' : 'Offline'}</p> 
                </div>
            </div>
        </div>
    );
}




export default Contact;