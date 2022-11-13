import Single from '../../pages/single/Single';
import './post.css'
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import { ref, listAll, list, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase';
import { blogUrlContext } from '../../context';
import { useContext, useEffect } from 'react';


export default function Post(props) {

  const {blogUrl, setBlogUrl} = useContext(blogUrlContext);

  const blogThumbListRef = ref(storage, "/blogThumbnails/")

  useEffect(() => {
    listAll(blogThumbListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setBlogUrl((prev) => [...prev, url]);
        });
      });
    });
  }, []);


  return <div className="post">
    
   <a> <img className="postImg" src={props.postThumbnail} /> 
</a>    

    <div className="postInfo">
      <div className="postCats">
        <span className="postCat"> {props.postCategory} </span>
      </div>
      <br />
      <div className="postTitle" style={{ textDecoration: 'none', color: 'inherit' }} >{props.postTitle}</div>
      <span className="postDate">{props.postDate}</span>
    </div>
    <p className="postDesc">
     {props.firstParagraph}
    </p>
  </div>;
}
