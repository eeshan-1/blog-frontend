import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios";
import EmptyList from '../../components/Home/Header/Common/Chip/EmptyList/EmptyList'
import BlogList from './BlogList/BlogList'
import Header from '../../components/Home/Header/Header'
import Searchbar from '../../components/Home/Header/SearchBar/Searchbar'
//import { blogList } from '../../config/data'

// import BlogList from './BlogList/BlogList'
// import { blogList } from '../../config/data'
const Home = () => {

    // incase using direct JSON instead of API
    //const [blogs, setBlogs] = useState(blogList);




    const [blogs, setBlogs] = useState([]);

    //for own API
    const fetchBlogDetails = () =>{
      try {
        axios
          .get("http://127.0.0.1:3000/post/all",{
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          })
          .then((response) => {
            let result =JSON.parse(JSON.stringify(response));
            let {data} = result
            //console.log(data)
            setBlogs(data);
          
          });
      } catch (err) {
        console.log(err);
      }
    }
    useEffect(()=>{
      fetchBlogDetails();
    },[])
    



    // const [users, setUsers] = useState([]);

    // //for own API
    // const fetchUserDetails = () =>{
    //   try {
    //     axios
    //       .get("http://127.0.0.1:3000/user/all",{
    //         headers: {
    //           'Content-Type': 'application/json',
    //           'Access-Control-Allow-Origin': '*'
    //         }
    //       })
    //       .then((response) => {
    //         let result =JSON.parse(JSON.stringify(response));
    //         let {data} = result
    //         //console.log(data)
    //         setUsers(data);
          
    //       });
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
    // useEffect(()=>{
    //   fetchUserDetails();
    // },[])







    const [searchKey, setSearchKey] = useState('');
  
    // Search submit
    const handleSearchBar = (e) => {
      e.preventDefault();
      handleSearchResults();
    };
  
    // Search for blog by category
    const handleSearchResults = () => {
      const allBlogs = blogs;
      const filteredBlogs = allBlogs.filter((blog) =>
        blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
      );
      setBlogs(filteredBlogs);
    };
  
    // Clear search and show all blogs
    const handleClearSearch = () => {
      setBlogs(blogs);
      setSearchKey('');
    };
  
    return (
      <div>
        {/* Page Header */}
        <Header />
  
        {/* Search Bar */}
        <Searchbar
          value={searchKey}
          clearSearch={handleClearSearch}
          formSubmit={handleSearchBar}
          handleSearchKey={(e) => setSearchKey(e.target.value)}
        />
  
        {/* Blog List & Empty View */}
        {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
      </div>
    );




//   return (
//     <div>
//       <h1> Home page</h1>
//       {/* page header */}
//         <Header />

//       {/* search bar */}
//         <Searchbar />
//       {/* bolg list and empty list */}

//       <BlogList blogs={blogList} />

//     </div>
//   )

}

export default Home
