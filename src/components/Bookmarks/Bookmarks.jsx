import Bookmark from "../Bookmark/Bookmark";
import PropTypes from "prop-types";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div>
      <div className="mb-4">
        <h3 className="font-bold text-2xl text-purple-800 py-5 px-10 border border-purple-800 bg-purple-50 rounded-lg">
          Spent time on read: {readingTime} min
        </h3>
      </div>
      <div className="bg-gray-100 rounded-lg pb-5">
        <h3 className="font-bold text-2xl ml-8 pt-9">
          Bookmarked Blogs: {bookmarks.length}
        </h3>
        <div>
          {bookmarks.map((bookmark, idx) => (
            <Bookmark key={idx} bookmark={bookmark}></Bookmark>
          ))}
        </div>
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};

export default Bookmarks;
