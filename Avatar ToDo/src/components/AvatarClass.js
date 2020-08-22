import React, { Component } from 'react';
import AvatarList from './AvatarList';

export class AvatarClass extends Component {
          
    constructor(props){
      super(props);
      this.state = {
        avatar:[],
        currentAvatar:{
          id:'',
          name:'',
          // work:''
        }
      }
      this.handleInput = this.handleInput.bind(this); 
      this.addAvatar = this.addAvatar.bind(this); 
      this.deleteAvatar = this.deleteAvatar.bind(this); 
    }

    handleInput(e){
      this.setState({
        currentAvatar:{
          id:Math.floor(Math.random()*200),
          name:e.target.value,
          // work:e.target.value,
        },
      })
    }

    addAvatar(e){
      e.preventDefault();
      const newAvatar = this.state.currentAvatar;
      if(this.newAvatar !== ''){
        const newAvatars = [...this.state.avatar, newAvatar]
        this.setState({
          avatar:newAvatars,
          currentAvatar:{
            id:'',
            name:'',
            // work:''
          }
        })
      }
    }
    deleteAvatar(id){
      const filterAvatar = this.state.avatar.filter(avatar => avatar.id!== id);
      console.log(filterAvatar);
      console.log(this.state.avatar.id);
      debugger;
      this.setState({
        avatar:filterAvatar
      })
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Welcome to Web World</h2>
                Name:
                <input type="text" value={this.state.work} onChange={this.handleInput} />
                {/* Work:
                <input type="text" value={this.state.name} onChange={this.handleInput} /> */}
                <button className="btn btn-success ml-5" onClick={this.addAvatar} >Add Avatar</button>
                <AvatarList avatar={this.state.avatar} deleteAvatar={this.deleteAvatar}></AvatarList>
            </div>
      );
    }
}

export default AvatarClass