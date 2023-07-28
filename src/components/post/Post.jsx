import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import {Users} from "../../dummyData";
import { useState } from "react";
export default function Post({post}) {
    const[like,setLike] =useState(post.like)
     const[isLiked,setIsLiked] =useState(false)
     const likeHandler=()=>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
     }
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={Users.filter((u)=>u.id === post?.userId)[0].profilePicture} alt=""/>
                    <span className="postUserName">{Users.filter((u)=>u.id === post?.userId[0]).username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImg" src={post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <FavoriteIcon className="likeIcon" onClick={likeHandler}/>
                    <ThumbUpIcon className="likeIcon" onClick={likeHandler}/>
                    <span className="postLikeCounter">{like} people liked it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>
        </div>
      
    </div>
  )
}
