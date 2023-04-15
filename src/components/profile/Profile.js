import React from 'react'
import './Profile.scss'
import Post from '../post/Post'
import Profile_pic from '../../assets/profile.gif'
import { useNavigate } from 'react-router-dom'
import CreatePost from '../createPost/CreatePost'


function Profile( {src} ) {

  const navigate = useNavigate();

  return (
    <div className='profile'>
      <div className='container'>
        <div className='left-part'>
          <CreatePost />
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
            <button className='follow btn-primary' id='follow' onClick={() => {
              if(document.getElementById('follow').innerHTML === 'Follow') {
                document.getElementById('follow').innerHTML = 'Following';
              }
              else {
                document.getElementById('follow').innerHTML = 'Follow';
              }
            }}>Follow</button>
            <button className='update-profile btn-secondary' onClick={() => navigate('/updateProfile')}>Update Profile</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile