import React, { useState } from 'react'

function AvatarForm(props) {

    const [input, setInput] = useState(props.edit ? props.edit.value : '')
    const [input1, setInput1] = useState(props.edit ? props.edit.value : '')

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
                <div className="container" >
                    <br />
                    Avatar Update Name:
                    <input type="text" placeholder="Update Avatar" name="text"
                        className="Avatar-input ml-3" value={input || ''}
                        onChange={(e)=> setInput(e.target.value)}
                    ></input>
                    <input type="text" placeholder="Update Avatar" name="text"
                        className="Avatar-input ml-3" value={input1 || ''}
                        onChange={(e)=> setInput1(e.target.value)}
                    ></input>
                    <button className="btn btn-primary ml-4 " onClick={handleSubmit}>Update Avatar</button>
                </div>
            ) : (
                    <div className="container">
                        Avatar Name:
                        <input type="text" placeholder="Add Avatar" name="text"
                            className="Avatar-input ml-3" value={input || ''}
                            onChange={(e)=>setInput(e.target.value)}
                        ></input>
                        <input type="text" placeholder="Add Avatar" name="text"
                            className="Avatar-input ml-3" value={input1 || ''}
                            onChange={(e)=>{setInput1(e.target.value)}}
                        ></input>
                        <button className="btn btn-success ml-4" onClick={handleSubmit}>Add Avatar</button>
                    </div>
                )}
        </form>
    )
}

export default AvatarForm
