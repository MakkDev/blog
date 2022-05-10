import "./single.css";
import { doc, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState, } from "react";
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase'
import Sidebar from '../../components/sidebar/Sidebar'
import SinglePost from "../../components/singlePost/SinglePost";
import { useParams } from "react-router-dom";

export default function Single(props) {

  const singleCollectionRef = collection(db, "single");
  const [postLists, setPostList] = useState([]);
  let blogID = useParams();

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(singleCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };
    getPosts();
  });

  return (
    <div className='single'>

      {postLists.map((post) => {
        return (<div>
          <SinglePost
            title={post.title}
            postDate={post.postDate}
            postThumbnail={"/images/blogHotvsColdthumbnail.png"}
            firstParagraph={post.postText1}
            secondParagraph={post.postText2}
            thirdParagraph={post.postText3}
          />

        </div>)
      })}
    </div>
  )
}
