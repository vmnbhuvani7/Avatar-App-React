import React, { useState } from 'react'
import AvatarForm from './AvatarForm'

function Avatar(props) {

    const [edit, setEdit] = useState({
        id: null,
        value: '',
        value1: ''
    })

    const submitUpdate = value => {
        props.updateAvatar(edit.id, value);
        setEdit({
            id: null,
            value: '',
            value1: ''
        });
    };

    if (edit.id) {
        return <AvatarForm edit={edit} onSubmit={submitUpdate}></AvatarForm>
    }

    return props.avatars.map((avatar) => (
        <div key={avatar.id} className="card-group avtarStyle ma4 bg-light-purple pa4  dib shadow-5 ">
            <img src={`https://joeschmoe.io/api/v1/${avatar.name}`} alt="Avatar" />
            <h5 className="pt-3 text-center" key={avatar.id} >{avatar.name}</h5>
            <h5 className="pt-3 text-center" key={(avatar.id +1)} >{avatar.work}</h5>

            <button className="btn btn-danger" value="Delete"
                onClick={() => props.removeAvatar(avatar.id)}>Delete</button>
            <button className="btn btn-success ml-4" value="Edit"
                onClick={() => setEdit({ id: avatar.id, value: avatar.name, value1:avatar.work })}>Edit</button>
        </div>
    ))  
}

export default Avatar
