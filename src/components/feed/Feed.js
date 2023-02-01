import React from 'react'
import Post from '../post/Post'
import './Feed.scss'
function Feed() {
  return (
    <div>
        <div className='feed'>
            <div className='container'>
                <div className='left-part'>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
                <div className='right-part'></div>
            </div>
        </div>
    </div>
  )
}

export default Feed