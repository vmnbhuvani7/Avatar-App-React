import React from 'react'
import './AvatarList.css'

function AvatarList(props) {
    // const avatar = props.avatar;
    const avatarList =  props.avatar.map(avatar=>{
        return (
        <div key={avatar.id} className="card-group avtarStyle ma4 bg-light-purple pa4 grow dib shadow-5 ">
            <img src={`https://joeschmoe.io/api/v1/${avatar.name}`} alt="Avtar" />
            <h5 className="pt-3">
                <input  id={avatar.id} value={avatar.name} onChange={
                    (e)=>{
                        props.setUpdate(e.target.value, avatar.id)
                    }
                } ></input>
            </h5>
            {/* <p>{avatar.work}</p> */}
            <button className="btn btn-success ml-4" onClick={()=>props.deleteAvatar(avatar.id)}>Delete</button>
            <button className="btn btn-success  ml-4" >Edit</button>
        </div>
        )
    })
    
    return (
        <div>
            {avatarList}
        </div>
        // <div className="card-group avtarStyle m-4 p-4 d-inline-block text-center">
        //     <div className="card avtarStyle  " >
        //         <img className="card-img-top avtarStyle" src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avtar" />
        //         <div className="card-body avtarStyle" >
        //             <h5 className="card-title">{props.name}</h5>
        //             <p className="card-text">{props.work}</p>
        //         </div>
        //     </div>
        // </div>

    //     <div className="card-group avtarStyle ma4 bg-light-purple pa4 grow dib shadow-5 ">
    //          <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avtar" />
    //                  <h5 className="pt-3">{props.name}</h5>
    //                  <p>{props.work}</p>
    //    </div>
    )
}
export default AvatarList
