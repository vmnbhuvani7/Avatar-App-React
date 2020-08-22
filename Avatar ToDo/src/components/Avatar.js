import React, {useState, useEffect} from 'react'
import AvatarList from './AvatarList';
// import axios from 'axios';

const Avatar=()=> {
    const [avatar1, setAvatar] = useState({
      avatar:[],
      currentAvatar:{
        id:'',
        name:'',
        // work:''
      }
    })
  
    const handleInput=(e)=>{
      setAvatar({
        currentAvatar:{
          id:Date.now(),
          name:e.target.value,
          // work:e.target.value,
        }
      })
    }

    const addAvatar=(e)=>{
      e.preventDefault();
      const newAvatar = avatar1.currentAvatar;
      if(newAvatar !== ''){
        const newAvatars = [...avatar1.avatar, newAvatar]
        setAvatar({
          avatar:newAvatars,
          currentAvatar:{
            id:'',
            name:''
          }
        })
      }
    }
    return (
      <div >
        <h2 className="text-center">Welcome to Web World</h2>
        <input type="text" value={avatar1.name} onChange={handleInput} />
        {/* <input type="text" value={this.state.work} onChange={this.handleInput} /> */}
        <button className="btn btn-success ml-5" onClick={addAvatar} >Add Avatar</button>
        <AvatarList avatar={avatar1.avatar} name={avatar1.name}></AvatarList>
      </div>
    );
}

export default Avatar