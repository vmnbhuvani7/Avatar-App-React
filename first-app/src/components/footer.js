import React, { Component } from 'react';

class  Footer extends Component{

    // changed(){      //event using class
    //     console.log('changed value');
    // }

    //state in class 
    state = {
        name : 'vmn'
    }
    changed = evt => {              //Using arrow
        this.setState({name : evt.target.value});
        console.log(this.state.name);
    }
   
    render(){
        return (
            <div>
                <h2 onClick={this.props.myAlert}>Author is {this.props.author}</h2>
                <input value={this.state.name} onChange={this.changed} type="text" />
            </div>
        )
    }
}

export default Footer;