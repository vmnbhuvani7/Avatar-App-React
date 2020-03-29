import React, {useState, useEffect} from 'react';

const Numbers = () =>{
    const [numbers, setNumbers] = useState(['one','two','three'])
    const [letters, setLetters] = useState(['a','b','c'])
    
    const addNumber = () => {
        setNumbers([...numbers,'four'])
    }
    const addLetter = () => {
        setLetters([...letters,'d'])
    }
    useEffect(()=>{
        console.log('our us eeffect triggers')
    },[numbers,letters])
    return(
        <div>
            <h1>Numbers</h1>
            {numbers.map( num => {
                return (
                    <div>
                        <h4>{num}</h4>
                    </div>
                );
            })}
            <h1>Letters</h1>
            {letters.map( letter => {
                return (
                    <div>
                        <h4>{letter}</h4>
                    </div>
                );
            })}
            <button onClick={addNumber} >Add a number</button>
            <button onClick={addLetter} >Add a letter</button>
        </div>
    );
}
export default Numbers