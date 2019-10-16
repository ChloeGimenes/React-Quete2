import React from "react";
import "./Contact.css";
import Welcome from './Welcome';




class Contact extends React.Component {

      constructor(props) {
        super(props);
        this.state = {
          online : props.online,
      };
    }

    render() {
        
      return (

    <div className="Contact">
      <img
        className="avatar"
        id={this.props.star && "star"}
        src={
          this.props.avatar
            ? this.props.avatar
            : "https://www.drupal.org/files/issues/default-avatar.png" 
            }
        alt="toto"
      />
      <div className="hard">
          <div className="status">
              <div className="name">{this.props.name}</div>
              <span
                   className={this.state.online ? 'online' : ''}
                   onClick={event => {
                   const newOnline = !this.state.online;
                   this.setState({ online: newOnline });
                   }}
                   >
                   &#9733;
                </span>
             </div>

          <div>       
             <Welcome />
          </div>
        </div>

      </div>
    
  );
}
}

export default Contact;
