import React, { Component } from 'react';

class  Footer extends Component{

    changed(){
        console.log('changed value');
    }
   
    render(){
        return (
            <div>
                <h2 onClick={this.props.myAlert}>Author is {this.props.author}</h2>
                <input onChange={this.changed} type="text" />
            </div>
        )
    }
}

export default Footer;