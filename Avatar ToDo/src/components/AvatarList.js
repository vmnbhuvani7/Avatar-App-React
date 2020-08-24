import React, { useState } from 'react'
import AvatarForm from './AvatarForm'
import Avatar from './Avatar'

function AvatarList() {

    const [avatars, setAvatars] = useState([])

    const addAvatar = avatar => {
        if (!avatar.name) {
            return;
        }
        const newAvatar = [avatar, ...avatars]
        setAvatars(newAvatar)
    }

    const removeAvatar = id => {
        const removeArr = [...avatars].filter(avatar => avatar.id !== id);
        setAvatars(removeArr)
    }

    const updateAvatar = (avatarId, newValue) => {
        if (!newValue.name) {
            return;
        }
        setAvatars(prev => prev.map(item => (item.id === avatarId ? newValue : item)));
    }

    return (
        <div className="container">
            <h2 className="text-center">Welcome to Web World</h2>

            <AvatarForm onSubmit={addAvatar}></AvatarForm>
            <Avatar
                avatars={avatars}
                removeAvatar={removeAvatar}
                updateAvatar={updateAvatar} >
            </Avatar>
        </div>
    )
}

export default AvatarList
