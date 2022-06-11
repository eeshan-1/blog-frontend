
import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../../components/Home/Header/Common/Chip/Chip';
import './BlogItem.css';

const BlogItem = ({
  // blog: {
  //   description,
  //   title,
  //   createdAt,
  //   authorName,
  //   authorAvatar,
  //   cover,
  //   category,
  //   id,
  // },
  blog: {
    id,
    content,
    title,
    image,
    category,
    created_at,
    user
  }
}) => {
  /*
  return (
    <div className='blogItem-wrap'>
      <img className='blogItem-cover' src={cover} alt='cover' />
      <Chip label={category} />
      <h3>{title}</h3>
      <p className='blogItem-desc'>{description}</p>
      <footer>
        <div className='blogItem-author'>
          <img src={authorAvatar} alt='avatar' />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className='blogItem-link' to={`/blog/${id}`}>
          ➝
        </Link>
      </footer>
    </div>
  );   */
  return (
    <div className='blogItem-wrap'>
      <img className='blogItem-cover' src={image} alt='cover' />
      <Chip label={category} />
      <h3>{title}</h3>
      <p className='blogItem-desc'>{content}</p>
      <footer>
        <div className='blogItem-author'>
          <img src={user.avatar} alt='avatar' />
          <div>
            <h6>{user.name}</h6>
            {/* <p>{created_at}</p> */}
            <p>{user.about}</p>
          </div>
        </div>
        <Link className='blogItem-link' to={`/blog/${id}`}>
          ➝
  </Link>
  </footer> 
    </div>
  );
};

export default BlogItem;