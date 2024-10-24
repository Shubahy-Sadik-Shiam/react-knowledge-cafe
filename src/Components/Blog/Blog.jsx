import PropTypes from 'prop-types';
import { FaRegBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmarks, handleMarkAsRead}) => {
    const {title, cover_pic, author, author_pic, posted_date, reading_time, hashtag} = blog
    return (
        <div className='shadow-md p-5 my-5'>
            <img src={cover_pic} alt="" />
            <div className='flex justify-between items-center mt-3'>
                <div className='flex items-center gap-4'>
                    <div><img className='w-14 h-14 rounded-full' src={author_pic} alt="" /></div>
                    <div>
                        <h1 className='font-bold'>{author}</h1>
                        <h1>{posted_date}</h1>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <p className='text-gray-500'>{reading_time} Min read</p>
                    <button onClick={()=>handleAddToBookmarks(blog)} className='text-xl'><FaRegBookmark/></button>
                </div>
            </div>
            <h1 className="text-2xl font-bold my-2">{title}</h1>
            <div className='flex gap-2'>
            {
                hashtag.map((tag, idx) => <p key={idx} className='text-gray-400'><a href="">{tag}</a></p>)
            }
            </div>
            <button onClick={()=>handleMarkAsRead(reading_time)} className='text-blue-700 mt-5 font-semibold underline'> Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object,
    handleAddToBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;