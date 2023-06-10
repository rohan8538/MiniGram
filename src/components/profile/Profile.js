import { React, useEffect, useState } from 'react'
import './Profile.scss'
import Post from '../post/Post'
import { useNavigate, useParams } from 'react-router-dom'
import CreatePost from '../createPost/CreatePost'
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfile } from '../../redux/slices/postsSlice'


function Profile() {

  const navigate = useNavigate();

  const params = useParams();
  const dispatch = useDispatch();
  const userProfile = useSelector(state => state.postsReducer.userProfile);
  const myProfile = useSelector(state => state.appConfigReducer.myProfile);
  const [isMyProfile, setIsMyProfile] = useState(false);

  useEffect(() => {
    dispatch(getUserProfile({
      userId: params.userId
    }))
    setIsMyProfile(myProfile?._id === params.userId);
  }, [myProfile]);
  

  return (
    <div className='profile'>
      <div className='container'>
        <div className='left-part'>
          <CreatePost />
          {userProfile?.posts?.map(post => <Post key={post._id} post={post}/>)}
        </div>
        <div className='right-part'>
          <div className='profile-card'>
            <img className='user-img' src={userProfile?.avatar?.url} alt="profile pic" />
            <div className='user-name'>{userProfile?.name}</div>
            <div className='follower-info'>
              <h4>{`${userProfile?.followers?.length} Followers`}</h4>
              <h4>{`${userProfile?.following?.length} Following`}</h4>
            </div>
            {!isMyProfile && <button className='follow btn-primary' id='follow' onClick={() => {
              if(document.getElementById('follow').innerHTML === 'Follow') {
                document.getElementById('follow').innerHTML = 'Following';
              }
              else {
                document.getElementById('follow').innerHTML = 'Follow';
              }
            }}>Follow</button>}
            {isMyProfile && <button className='update-profile btn-secondary' onClick={() => navigate('/updateProfile')}>Update Profile</button>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile