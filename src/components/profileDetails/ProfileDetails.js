import React from 'react'
import './ProfileDetails.scss'
import profile_pic from '../../assets/profile.gif'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react';
import { updateMyProfile } from "../../redux/slices/appConfig";

function ProfileDetails() {
    const myProfile = useSelector(state => state.appConfigReducer.myProfile);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bio, setBio] = useState('');
    const [userImg, setUserImg] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
      setFirstName(myProfile?.firstName || '');
      setLastName(myProfile?.lastName || '');
      setBio(myProfile?.bio || '');
      setUserImg(myProfile?.avatar?.url || profile_pic);
    }, [myProfile]);

    function handleImageChange(e) {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            if(fileReader.readyState === fileReader.DONE) {
                setUserImg(fileReader.result)
                //console.log('img data', fileReader.result);
            }
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(updateMyProfile({
            firstName,
            lastName,
            bio,
            userImg
        }));
    }
    
  return (
    <div>
        <div className='profileDetails'>
            <div className='container'>
                <div className='left-part'>
                    <div className='profile-img-section'>
                        <label htmlFor='userImg' className='labelImg'>
                            <img src={userImg}  alt={firstName + " " + lastName} className='profile-img'/>
                        </label>
                        <input type="file" id='userImg' className='userImg' accept='image/*' onChange={handleImageChange}/>
                    </div>   
                </div>
                <div className='right-part'>
                    <form  onSubmit={handleSubmit}>
                        <input value={firstName} id="name" type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
                        <input value={lastName} id="name" type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
                        <input value={bio} type="text" placeholder="Bio"  onChange={(e) => setBio(e.target.value)}/>

                        <input type="submit" className='btn-primary' value="submit" />
                    </form>
                    <button className='delete-btn btn-primary'>Delete Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileDetails