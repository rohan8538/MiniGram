import React from 'react'
import './ProfileDetails.scss'
import profile_pic from '../../assets/profile.gif'

function ProfileDetails() {
  return (
    <div>
        <div className='profileDetails'>
            <div className='container'>
                <div className='left-part'>
                    <img src={profile_pic} alt='user Profile pic' className='profile-img' />
                </div>
                <div className='right-part'>
                    <form>
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Bio" />

                        <input type="submit" className='btn-primary' />
                    </form>

                    <button className='delete-btn btn-primary'>Delete Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileDetails