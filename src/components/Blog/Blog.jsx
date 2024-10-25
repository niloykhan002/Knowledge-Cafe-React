import PropTypes from "prop-types";
import { PiBookmarkSimple } from "react-icons/pi";
const Blog = ({ blog, handleAddBookmark, handleMarkAsRead }) => {
  const {
    id,
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="space-y-5 mb-5">
      <img className="rounded-lg" src={cover} alt="" />
      <div className="flex justify-between">
        <div className="flex gap-5">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h3 className="font-bold text-2xl">{author}</h3>
            <p className="font-semibold text-base text-gray-500">
              {posted_date}
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <p className="font-medium text-gray-500">{reading_time} min read</p>
          <button
            onClick={() => handleAddBookmark(blog)}
            className="font-medium text-red-700"
          >
            <PiBookmarkSimple />
          </button>
        </div>
      </div>
      <h1 className="font-bold text-4xl">{title}</h1>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx} className="mr-4 text-gray-400">
            <a>#{hash}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(id, reading_time)}
        className="font-semibold text-xl text-purple-800 underline"
      >
        Mark as read
      </button>
      <hr />
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blog;
