import React from 'react'
import './Profile.scss'
import Post from '../post/Post'
import Profile_pic from '../../assets/profile.gif'


function Profile( {src} ) {
  return (
    <div className='profile'>
      <div className='container'>
        <div className='left-part'>
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <div className='right-part'>
          <div className='profile-card'>
            <img className='user-img' src={src ? src : Profile_pic} alt="profile pic" />
            <div className='user-name'>Rohan Bhalotia</div>
            <div className='follower-info'>
              <h4>291 followers</h4>
              <h4>216 following</h4>
            </div>
            <button className='follow btn-primary'>Follow</button>
            <button className='update-profile btn-secondary'>Update Profile</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile