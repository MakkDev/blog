import Home from "./pages/home/home";
import TopBar from "./components/topbar/TopBar";
import { Route, Routes, } from 'react-router-dom';
import Posts from "./components/posts/Posts";
import Blog from "./pages/blog/Blog";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";




function App() {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/single" element={<Single/>} />
        <Route path="/write" element={<Write/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
        
      </Routes>
    </>
  );
}

export default App;
