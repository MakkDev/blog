import Home from "./pages/home/home";
import TopBar from "./components/topbar/TopBar";
import { Route, Routes, } from 'react-router-dom';
import Posts from "./components/posts/Posts";
import Blog from "./pages/blog/Blog";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import {useContext, useState} from 'react';
import { urlContext, blogUrlContext } from "./context";
import VideosPage from "./pages/videosPage/VideosPage";
import Contact from "./pages/contact/Contact";
import NewTopbar from "./components/NewTopbar";




function App() {
  const [url, setUrl] = useState([]);
  const [blogUrl, setBlogUrl] = useState([]);

  return (
    <>
      <blogUrlContext.Provider value={{blogUrl, setBlogUrl}}> 
      <urlContext.Provider value={{url, setUrl}}> 
      <NewTopbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/blog/:blogID" element={<Single/>} />
        <Route path="/write" element={<Write/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/videos" element={<VideosPage/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      </urlContext.Provider>
      </blogUrlContext.Provider>
    </>
  );
}

export default App;
