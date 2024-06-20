import React from "react";
import { useNavigate } from "react-router-dom";
import "./Blog.css";

const Blog = ({ BlogData }) => {
  const navigate = useNavigate();

  const readMore = (here) => {
    navigate(here);
  };

  return (
    <>
      <div className="blog-head">
        <h1>My Blogs</h1>
        <div className="blog-cards">
        {BlogData.map((props) => (
          <div className="blog-card">
            <h3>{props.title}</h3>
            <img
              src={`/${props.img}`}
              alt="img"
              width="250px"
            />
            <p>{props.desc}</p>
            <p>Posted on: {props.date}</p>
            <button onClick={() => readMore(props.pageLink)}>Read More</button>
          </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
