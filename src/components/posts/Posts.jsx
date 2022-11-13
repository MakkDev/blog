import { doc, getDoc, getDocs } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { addDoc, collection } from 'firebase/firestore'
import { db, storage } from '../../firebase'
import Post from "../post/Post";
import "./posts.css"
import { v4 } from "uuid";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { blogUrlContext } from '../../context';
import { Link } from "react-router-dom";

export default function Posts() {

  const singleCollectionRef = collection(db, "single");
  const blogThumbnailRef = ref(storage, `/blogThumbnails/` + v4()  + "-blog thumbnail")
  
  const [postLists, setPostList] = useState([]);

    useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(singleCollectionRef);
      setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    };
    getPosts();
  });

  const {blogUrl, setBlogUrl} = useContext(blogUrlContext);

  const blogThumbListRef = ref(storage, "/blogThumbnails/")

  useEffect(() => {
    listAll(blogThumbListRef)
    .then((response) => {response.items
    .forEach((item) => {getDownloadURL(item)
    .then((url) => {
          setBlogUrl((prev) => [...prev, url]);
          console.log(blogUrl);
        });
      });
    });
  }, []);

  return <>
  
  <div className="posts">
    
    {postLists.map((post) => {
        return ( <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/blog/${post.id}`}> <div key={post.title}> 
         <Post
        postTitle = {post.title}
        postDate ={post.postDate}
        postCategory = {post.postCategory}
        postThumbnail = {post.thumbnailUrl}
        firstParagraph ={post.postText1}
        secondParagraph ={post.postText2}
        thirdParagraph ={post.postText3}
        />
        
        </div> </Link> )})}  
    
      
      </div> 
     </>
}
