// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const[commentsArray, setComments] = useState(props.foo);
 //console.log(commentsArray)

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      
      {commentsArray.map(x => (
        <Comment key={x.username} comment = {x}/>
      ))}
      <CommentInput />
    </div>
  );
};

export default CommentSection;






