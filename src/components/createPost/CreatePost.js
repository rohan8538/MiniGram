import React from 'react'
import Avatar from '../avatar/Avatar'
import { useState } from 'react'
import {BsCardImage} from 'react-icons/bs'
import './CreatePost.scss'
import { useDispatch, useSelector } from 'react-redux'
import { axiosClient } from '../../utils/axiosClient'
import { setLoading } from '../../redux/slices/appConfig'

function CreatePost() {

    const myProfile = useSelector(state => state.appConfigReducer.myProfile);
    const dispatch = useDispatch();

    const [postImg, setPostImg] = useState('');
    const [caption, setCaption] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            if(fileReader.readyState === fileReader.DONE) {
                setPostImg(fileReader.result);
                console.log('img data', fileReader.result);
            }
        };
    };

    const handleSubmit = async() => {
        try {
            dispatch(setLoading(true));
            const result = await axiosClient.post('/createPost', {caption, postImg});
            console.log("this is result", result);
        } catch (error) {
            console.log("this is error", error);
        } finally {
            dispatch(setLoading(false));
            setCaption('');
            setPostImg('');
        }
    }
  return (
    <div className='CreatePost'>
        <div className='left-part'>
            <Avatar src={myProfile?.avatar?.url}/>
        </div>
        <div className='right-part'>
            <input type='text' value={caption} className='captionInput' placeholder="What's on your mind?" onChange={e => setCaption(e.target.value)}/>
            {postImg && <div className='img-container'>
                <img src={postImg} className='post-img' alt='post-img'/>
            </div>}
            <div className='bottom-part'>
                <div className='input-post-img'>
                    <label htmlFor='inputImg' className='labelImg'>
                        <BsCardImage />
                    </label>
                    <input
                        className='inputImg'
                        id='inputImg'
                        type='file'
                        accept='image/*'
                        onChange={handleImageChange}
                    />
                </div>
                <button className='post btn-primary' onClick={handleSubmit}>Post</button>
            </div>
        </div>
     </div>
  )
}

export default CreatePost