import PropTypes from "prop-types";
const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div >
            <h1 className="bg-white p-5 rounded-xl mx-10 mb-5">{title}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}
export default Bookmark;