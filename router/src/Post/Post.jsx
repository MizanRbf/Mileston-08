import React from 'react';
import { NavLink } from 'react-router';
const Post = ({post}) => {
  

  const {title,body,id} = post;
  const postStyle = {
    border:'1px solid green',
    padding: '10 px',
    borderRadius: '10px',
    marginBottom: '10px'
  }
  return (
    <div style={postStyle}>
      <h3>{title}</h3>
      <p>{body}</p>
      <NavLink to={`/posts/${id}`}>Post Detail</NavLink>
    </div>
  );
};

export default Post;