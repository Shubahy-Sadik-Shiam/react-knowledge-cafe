import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const handleAddToBookmarks = blog => {
    console.log("Bookmarks adding soon...!");
  }
return (
    <>
    <Header></Header>
     <main className='flex justify-between items-center'>
     <Blogs handleAddToBookmarks ={handleAddToBookmarks}></Blogs>
     <Bookmarks></Bookmarks>
     </main>
    </>
  )
}

export default App
