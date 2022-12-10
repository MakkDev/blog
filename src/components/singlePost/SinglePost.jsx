import "./singlePost.css";
import cartoonFace from "../../images/cartoonFaceFull.png";
import { useState } from "react";
import ImageModal from "../ImageModal/ImageModal";
export default function SinglePost(props) {
  const [clickedImage, setClickedImage] = useState(null);

  return (
    <>
      <div className="singlePost">
        <h1 className="singlePostTitle">{props.title}</h1>
        <img src={props.postThumbnail} alt="" className="singlePostThumbnail" />
        <div className="singlePostWrapper">
          <div className="singlePostEdit"></div>
          <p className="singlePostFirstParagraph">{props.firstParagraph}</p>
          <img
            onClick={() => setClickedImage(props.postImg1.toString())}
            src={props.postImg1}
            className="singlePostImg"
            style={{
              display: props.postImg1 ? "unset" : "none",
              cursor: "zoom-in",
            }}
          />
          <span className="imgDescription">{props.imgDesc1}</span>
          <br />
          <p className="singlePostOtherParagraphs">{props.secondParagraph}</p>
          <img
            onClick={() => setClickedImage(props.postImg2.toString())}
            src={props.postImg2}
            className="singlePostImg"
            style={{
              display: props.postImg2 ? "unset" : "none",
              cursor: "zoom-in",
            }}
          />
          <span className="imgDescription">{props.imgDesc2}</span>
          <br />
          <p className="singlePostOtherParagraphs">{props.thirdParagraph}</p>
          <img
            onClick={() => setClickedImage(props.postImg3.toString())}
            src={props.postImg3}
            className="singlePostImg"
            style={{
              display: props.postImg3 ? "unset" : "none",
              cursor: "zoom-in",
            }}
          />
          <span className="imgDescription">{props.imgDesc3}</span>
          <br />
          <p className="singlePostOtherParagraphs">{props.fourthParagraph}</p>
          <hr />
          <div className="singlePostInfoContainer">
            <img className="faceImg" src={cartoonFace} />
            <div className="singlePostInfo">
              <span className="singlePostAuthor">
                <b> Written By Abdullah Makkieh</b>
              </span>
              <span className="singlePostDate">{props.postDate}</span>
            </div>
          </div>
        </div>
        {clickedImage && (
          <ImageModal
            onClick={() => setClickedImage(null)}
            imageSource={clickedImage}
          />
        )}
      </div>

      {/* Modal */}
      {console.log("Clicked Image", clickedImage)}
    </>
  );
}
