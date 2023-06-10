import Avatar from '../avatar/Avatar'
import './Post.scss'
import { AiOutlineHeart } from 'react-icons/ai';


function Post({post}) {
  return (
    <div className='post'>
        <div className='heading'>
                <Avatar src={post?.owner?.avatar?.url}/>
            <h4>{post?.owner?.name}</h4>
        </div>
        <div className='content'>
            <img src={post?.image?.url} alt='Temporary'></img>
        </div>
        <div className='footer'>
            <div className='like'>
                <AiOutlineHeart className='icon hover-link' />
                <h4>{`${post?.likesCount} likes`}</h4>
            </div>
            <p className='caption'>
                {post?.caption}
            </p>
            <p className='time-ago'>
                {post?.timeAgo}
            </p>
        </div>
    </div>
  )
}

export default Post