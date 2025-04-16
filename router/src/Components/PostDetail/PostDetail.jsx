import React from 'react';
import { useNavigate, useParams } from 'react-router';


const PostDetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  return(
    <div>
      <h3>postDetail here</h3>
      <button onClick={()=>navigate(-1)}>Go back</button>
    </div>
  ); 
};

export default PostDetail;