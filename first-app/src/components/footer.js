import React, { Component } from 'react';
import { CtxConsumer } from '../index';

class  Footer extends Component{

    // changed(){      //event using class
    //     console.log('changed value');
    // }

    //state in class 
    state = {
        name : 'vmn',
        age: 20,
        isLogin: false
    }

    changed = evt => {              //Using arrow
        this.setState({name : evt.target.value});
        console.log(this.state.name);
    }
   // lifecycle of react
        // metod of React
        // componentDidCatch
        // componentDidUpdate
        // componentDidMount
        // componentWillMount
        // componentWillReceiveProps
        // componentWillUnmount
        // componentWillUpdate

    render(){

        // const animals = ['Cat', 'Dog', 'Horse']; //using to loop and key.

        return (
        <CtxConsumer>
                { (context) =>(
                    <div>
                        {context.animals.map ( animal => {            
                            return(
                                <div key={animal}>
                                    <h1>{ animal }</h1>
                                </div>
                            );
                        } ) }
                    </div>
                )}
        </CtxConsumer>
        )
    }
}

export default Footer;