import React from 'react';
import './Write.css'


// import { useState } from "react";
// import axios from "axios";

export default function Write() {

  // //for API
  // const [postDetails, setPostDetails] = useState({
  //   title: "",
  //   image: "",
  //   content: "",
  //   // author_name: "",
  // });

  // // const { id } = useParams();

  // const addPost = () => {
  //   try {
  //     var config = {
  //       method: "post",
  //       url: `http://127.0.0.1:3000/post/add`,
  //       headers: {
  //         "Content-Type": "application/json",
  //         'Access-Control-Allow-Origin': '*'
  //       },
  //       data: postDetails,
  //     };
  //     axios(config).then(function (response) {
  //       console.log(JSON.stringify(response.data));
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };





  return (
    <div className="write">
    <img
      className="writeImg"
      src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      alt=""
    />
    <form className="writeForm">
      <div className="writeFormGroup">
        <label htmlFor="fileInput">
          <i className="writeIcon fas fa-plus"></i>
        </label>
        <input id="fileInput" type="file" style={{ display: "none" }} />
        <input

          // /*value={postDetails.title}
          // onChange={(e) => {
          //   setPostDetails({
          //     ...postDetails,
          //     title: e.target.value,
          //   });
          // }}

          className="writeInput"
          placeholder="Title"
          type="text"
          autoFocus={true}
        />
      </div>
      <div className="writeFormGroup">
        <textarea

          // value={postDetails.content}
          // onChange={(e) => {
          //   setPostDetails({
          //     ...postDetails,
          //     content: e.target.value,
          //   });
          // }}  
          

          className="writeInput writeText"
          placeholder="Tell your story..."
          type="text"
          autoFocus={true}
        />
      </div>
      <button className="writeSubmit" type="submit" 
      // {onClick={addPost} }}
      >
        Publish
      </button>
    </form>
  </div>
);
}