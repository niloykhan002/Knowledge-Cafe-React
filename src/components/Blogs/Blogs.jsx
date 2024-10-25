import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleAddBookmark, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="col-span-2">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          handleAddBookmark={handleAddBookmark}
          handleMarkAsRead={handleMarkAsRead}
          blog={blog}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleAddBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blogs;
