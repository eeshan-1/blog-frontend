import React from 'react'
import {useEffect, useState} from 'react';
import { useParams } from 'react-router';
// import { useParams } from 'react-router-dom';
import axios from "axios";

//import { blogList } from '../../config/data';
import Chip from '../../components/Home/Header/Common/Chip/Chip';
import EmptyList from '../../components/Home/Header/Common/Chip/EmptyList/EmptyList';
import { Link } from 'react-router-dom';


const Blog = () => {
  const { id } = useParams();

  const [blog, setBlogs] = useState([]);

    //for own API
    const fetchBlogDetails = () =>{
      try {
        axios
          .get(`http://127.0.0.1:3000/post/${id}`,{
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          })
          .then((response) => {
            let result =JSON.parse(JSON.stringify(response));
            let {data} = result
            console.log(data)
            setBlogs(data);
          
          });
      } catch (err) {
        console.log(err);
      }
    }
    useEffect(()=>{
      console.log("jhhhhhh");
      fetchBlogDetails();
    },[])

    
    
    //


  


// const [blog, setBlog] = useState(null);

// useEffect(() => {
//   let blog = blogList.find((blog) => blog.id === parseInt(id));
//   if (blog) {
//     setBlog(blog);
//   }
// }, []);

return (
  <>
    <Link className='blog-goBack' to='/'>
      <span> &#8592;</span> <span>Go Back</span>
    </Link>
    {blog ? (
      <div className='blog-wrap'>
        <header>
          <p className='blog-date'>Published {blog.created_at}</p>
          <h1>{blog.title}</h1>
          {/*<div className='blog-subCategory'>
            {blog.subCategory.map((category, i) => (
              <div key={i}>
                <Chip label={category} />
              </div>
            ))}
          </div>   */}
          <div>
            <img src={blog.image} alt="" className="src" />
          </div>
          <div>
            <p className='blog-desc'>{blog.content}</p>
          </div>
        </header>
        
        <footer>
        <div className='blogItem-author'>
          <img src={blog?.user?.avatar} alt='avatar' />
          <div>
            <h6>{blog?.user?.name}</h6>
            <p>{blog?.user?.about}</p>
          </div>
        </div> 
        </footer>
        
      </div>
    ) : (
      <EmptyList />
    )}    
  </>
);

}

export default Blog
