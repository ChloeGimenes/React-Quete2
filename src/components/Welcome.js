import React, { Component } from 'react';
import "./Welcome.css";


class Welcome extends Component {
    constructor() {
        super();
        this.state = {
            count:0
        } 

    }

        addOne() {

        this.setState ({
            count: this.setState + 1
        });

    }

    render () {
 
        return (
            <div>
                <p> {this.props.state}</p>
                <button class="action-button shadow animate blue" onClick={() => this.addOne()}>Add me !</button>
            </div>
        )



    }




    
}

export default Welcome;