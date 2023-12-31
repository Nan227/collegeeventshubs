import  "./post.css";
import {Users} from "../../userData";
import {useState} from "react";

export default function Post({post}) {
  const [like,setLike] = useState(post.like)
  const [isLiked,setIsLiked] = useState(false)

  const likeHandler =() => {
    setLike(isLiked ? like-1 : like +1)
    setIsLiked(!isLiked)
  }
  return (
    <div className ="post">
    < div className ="postWrapper">
    <div className ="postTop">
      <div div className ="postTopLeft">
        <img className="postProflieImg" scr = {Users.filter(u=>u.id ===post?.userId)[0].profilePicture}alt= ""/>
        
        <span className="postUsername">{Users.filter(u=>u.id ===post?.userId)[0].username}</span>
        <span className="postDate">{post.date}</span>
      </div>
      < div className ="postTopRight">

    </div>
    <div className ="postCenter">
      <span className="postText"> {post?.desc}</span>
      <img className="postProflieImg" scr = {post.photo} alt= ""/>
    <div className ="postBottom"> 
      <div className ="postBottomLeft"> 
      <img className="likeIcon" scr = "/assets/icons/like-48-2.png" onClick={likeHandler} alt= ""/>
      <img className="likeIcon" scr = "/assets/icons/like-48.png"  onClick={likeHandler} alt= ""/>
      <span className="postLikeCounter">{like} people like it</span>
      </div>
      <div className ="postBottomRight"> 
      <span className="postCommentText">{post.comment}comments</span>
      </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}
