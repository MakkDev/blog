import "./single.css";
import { doc, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState, } from "react";
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase'
import Sidebar from '../../components/sidebar/Sidebar'
import SinglePost from "../../components/singlePost/SinglePost";
import { useParams } from "react-router-dom";

export default function Single(props) {

  let {blogID} = useParams();
  const singleCollectionRef = collection(db, "single");
  const singlePostCollectionRef = doc(db, "single", blogID);
  const [postLists, setPostList] = useState([]);
  const [postData, setPostData] = useState({});

  const getSinglePost = async () => {
    const singleData = await getDoc(singlePostCollectionRef);
    setPostData(singleData.data())
    console.log("Post data:",postData)
  };
  
  const getPosts = async () => {
    const data = await getDocs(singleCollectionRef);
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    console.log(postLists)
  };

  useEffect(() => {
    getSinglePost();
  }, [blogID]);
  
  return (
    <div className='single'>
      <div>
          <SinglePost
            title={postData.title}
            postDate={postData.postDate}
            postThumbnail={postData.thumbnailUrl}
            firstParagraph={postData.postText1}
            secondParagraph={postData.postText2}
            thirdParagraph={postData.postText3}
            fourthParagraph={postData.postText4}
            postImg1={postData.postImg1}
            postImg2={postData.postImg2}
            postImg3={postData.postImg3}
            imgDesc1={postData.imgDesc1}
            imgDesc2={postData.imgDesc2}
            imgDesc3={postData.imgDesc2}
          />
        </div> 
    </div>
  )
}

{/* {postLists.map((post, i) => {
  return ( 
  <div key={post.id}>
    <SinglePost
      title={post.title}
      postDate={post.postDate}
      postThumbnail={post.thumbnailUrl}
      firstParagraph={post.postText1}
      secondParagraph={post.postText2}
      thirdParagraph={post.postText3}
      postImg1={post.postImg1}
      postImg2={post.postImg2}
      imgDesc1={post.imgDesc1}
      imgDesc2={post.imgDesc2}
    />
  </div> )
})} */}