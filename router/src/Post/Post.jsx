import React from 'react';
import { NavLink, useNavigate } from 'react-router';
const Post = ({post}) => {
  const navigate = useNavigate();
  const handleNavigate = ()=> {
       navigate(`/posts/${id}`);
  }

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
      <button onClick={handleNavigate}>Details of {id}</button>
    </div>
  );
};

export default Post;