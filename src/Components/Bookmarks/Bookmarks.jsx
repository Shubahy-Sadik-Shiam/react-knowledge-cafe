import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 text-center bg-gray-100 mt-24">
            <div className="border-2 rounded-lg border-blue-700 bg-blue-200 p-5">
            <h1 className="text-blue-700 text-xl font-bold">Spend time on read: {readingTime}</h1>
            </div>
            <h1 className="text-xl my-5 font-bold">Bookmarked Blogs: {bookmarks.length}</h1>
            {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark} key={bookmark.id}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;