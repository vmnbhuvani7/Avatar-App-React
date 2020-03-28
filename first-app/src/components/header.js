import React from 'react';

function Header(props){
    return (
            <React.Fragment>
                <h2>{props.info}</h2>
                <h2>value of the header is {props.value} </h2>
            </React.Fragment>
        )
}

export default Header;