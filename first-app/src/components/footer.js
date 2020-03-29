import React, { Component } from 'react';

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

        const animals = ['Cat', 'Dog', 'Horse']; //using to loop and key.

        return (

            <div>
                { this.state.age === 20 ? "yes age is 20." : "age is not 20." }  {/* conditional */}
                  
                { this.state.isLogin ? ( 
                    <div>
                        <h2 onClick={this.props.myAlert}>Author is {this.props.author}</h2>
                        <input value={this.state.name} onChange={this.changed} type="text" />
                    </div>
                    ) : (
                        <React.Fragment>
                            <h2>You can't show this content.</h2>
                            <h2>You must be Login.</h2>
                        </React.Fragment>
                    ) }
               
               {/* Loop and key */}
                { animals.map ( animal => {            
                    return(
                        <div key={animal}>
                            <h1>{ animal }</h1>
                            {/* <h1>{ animal }</h1> */}
                        </div>

                    );
                } ) }
                
            </div>
        )
    }
}

export default Footer;