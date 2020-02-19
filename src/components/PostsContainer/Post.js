// You will add code in this file
import React, {useState} from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = props => {
  // set up state for the likes
  let [likes, setLikes] = useState(props.users.likes);
//  console.log("This is post", props);
 const incrementLikes = () => {
  setLikes(likes => likes + 1);
};

  return (
    <div className="post-border">
      <PostHeader
        username={props.users.username}
        thumbnailUrl={
          props.users.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.users.imageUrl}
        />
      </div>
      <LikeSection 
        likesVar = {likes}
        incrementLikes ={incrementLikes} 
      />
      <CommentSection
        //postId={props.users.imageUrl}
        foo ={props.users.comments}
      />
    </div>
  );
};

export default Post;


