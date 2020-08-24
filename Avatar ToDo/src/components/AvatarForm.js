import React, { useState } from 'react'

function AvatarForm(props) {

    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            name: input,
        })
        setInput('')
    }

    const handleChange = e => {
        setInput(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>

            {props.edit ? (
                <div className="container" >
                    <br />
                    Avatar Update Name:
                    <input type="text" placeholder="Update Avatar" name="text"
                        className="Avatar-input ml-3" value={input || ''}
                        onChange={handleChange}
                    ></input>
                    <button className="btn btn-primary ml-4 " onClick={handleSubmit}>Update Avatar</button>
                </div>
            ) : (
                    <div className="container">
                        Avatar Name:
                        <input type="text" placeholder="Add Avatar" name="text"
                            className="Avatar-input ml-3" value={input || ''}
                            onChange={handleChange}
                        ></input>
                        <button className="btn btn-success ml-4" onClick={handleSubmit}>Add Avatar</button>
                    </div>
                )}
        </form>
    )
}

export default AvatarForm
