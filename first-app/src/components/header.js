import React from 'react';

function Header(props){
    function change(){
        console.log('changed');
    }
    return (
        <div>
            <h2>{props.info}</h2>
            <input type="text" onChange={change} />
        </div>
    )
}

export default Header;