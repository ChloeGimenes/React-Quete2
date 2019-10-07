import React from 'react';
import './Contact.css';


function Contact(props) {

    return (
        <div className="Contact">
            <img className="avatar" src={props.avatar} alt='toto'/>
            <div className="name">{props.name}</div><br></br>
            
            <div className="statut">
                <p className="text">{props.online ? 'Online' : 'Offline'}</p> 
                 {props.online ?
                 <div className="statut-online"></div> :
                 <div lassName="statut-offline"></div>
                 }
            </div>
        </div>
    );
}




export default Contact;