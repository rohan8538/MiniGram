import { useDispatch } from 'react-redux';
import Avatar from '../avatar/Avatar'
import './Post.scss'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { likeAndUnlikePost } from '../../redux/slices/postsSlice';


function Post({post}) {

    const dispatch = useDispatch();

    async function handlePostLike() {
        dispatch(likeAndUnlikePost({
            postId: post._id
        }))
    }
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
            <div className='like' onClick={handlePostLike}>
                {post.isLiked ? <AiFillHeart style={{color: 'red'}} className='icon animated'/> : <AiOutlineHeart className='icon animated' />}
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