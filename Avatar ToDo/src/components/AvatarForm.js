import React, { useState } from 'react'

function AvatarForm(props) {

    const [input, setInput] = useState(props.edit ? props.edit.value : '')
    const [input1, setInput1] = useState(props.edit ? props.edit.value1 : '')

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            name: input,
            work: input1
        })
        setInput('')
        setInput1('')
    }



    return (
        <form onSubmit={handleSubmit}>

            {props.edit ? (
                <div className="container text-center" >
                    <br />
                    <label> Avatar Update Name:</label>
                    <input type="text" placeholder="Update Name" name="text"
                        className="Avatar-input ml-3" value={input || ''}
                        onChange={(e) => setInput(e.target.value)}
                    ></input>
                    
                    <label className="ml-4"> Avatar Update Work:</label>
                    <input type="text" placeholder="Update Work" name="text"
                        className="Avatar-input ml-3" value={input1 || ''}
                        onChange={(e) => setInput1(e.target.value)}
                    ></input>
                    
                    <button className="btn btn-primary ml-4 " onClick={handleSubmit}>Update Avatar</button>
                </div>
            ) : (
                    <div className="container text-center">
                        <label>Avatar Name:</label>
                        <input type="text" placeholder="Add Name" name="text"
                            className="Avatar-input ml-3" value={input || ''}
                            onChange={(e) => setInput(e.target.value)}
                        ></input>

                        <label className="ml-4">Avatar Work:</label>
                        <input type="text" placeholder="Add Work" name="text"
                            className="Avatar-input ml-3" value={input1 || ''}
                            onChange={(e) => { setInput1(e.target.value) }}
                        ></input>

                        <button className="btn btn-success ml-4" onClick={handleSubmit}>Add Avatar</button>
                    </div>
                )}
        </form>
    )
}

export default AvatarForm
