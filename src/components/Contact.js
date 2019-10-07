import React from 'react';
import './Contact.css';


function Contact(props) {

    return (
        <div className="Contact">
            <img className="avatar" src={props.avatar} alt='toto'/>
            <div className="name">{props.name}</div><br></br>
            
            <div className="infos">
                <p className="text">{props.online ? 'Online' : 'Offline'}</p>
                 
                 if (props.online) {
                    return <div className="statut-online"></div>;
                 } else {
                    return <div lassName="statut-offline"></div>;
                 }
 
                 
                <div className="status">

                </div>
                
            </div>
        </div>
    );
}




export default Contact;