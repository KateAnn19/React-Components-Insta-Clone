//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
//----------------------------------------------------------------
// my work
//----------------------------------------------------------------
import dummyData from "../../dummy-data"; 
// import data 

const PostsPage = () => {
  // set up state for your data
  const [foo] = useState(dummyData);
  console.log("This is dummy data", foo)
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {foo.map(post => (
        <Post key={post.username} users = {post}/>
      ))}
      {/* have to open curly braces */}
    </div>
  );
};

export default PostsPage;




