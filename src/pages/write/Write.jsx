import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { storage } from "../../firebase";
import "./write.css";
import { useNavigate } from "react-router-dom";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  getMetadata,
} from "firebase/storage";
import { v4 } from "uuid";
import { useEffect } from "react";

export default function Write() {
  const [title, setTitle] = useState("");
  const [postText1, setPostText1] = useState("");
  const [postText2, setPostText2] = useState("");
  const [postText3, setPostText3] = useState("");
  const [postText4, setPostText4] = useState("");
  const [postImg1, setPostImg1] = useState("");
  const [postImg2, setPostImg2] = useState("");
  const [postImg3, setPostImg3] = useState("");
  const [imgDesc1, setImgDesc1] = useState("");
  const [imgDesc2, setImgDesc2] = useState("");
  const [imgDesc3, setImgDesc3] = useState("");
  const [postDate, setPostDate] = useState("");
  const [postCategory, setPostCategory] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [imageUploaded, setImageUploaded] = useState(false);
  const [imageObject, setImageObject] = useState(null);

  let navigate = useNavigate();

  const singleCollectionRef = collection(db, "single");
  const blogThumbnailRef = ref(
    storage,
    `/blogThumbnails/` + v4() + "-blog thumbnail"
  );
  const blogImageRef = ref(storage, `/blogPostImages/` + v4() + "-blog image");
  const blogImageRef2 = ref(
    storage,
    `/blogPostImages2/` + v4() + "-blog image"
  );
  const blogImageRef3 = ref(
    storage,
    `/blogPostImages3/` + v4() + "-blog image"
  );

  const handleImageObject = (e) => {
    if (e.target.files[0]) {
      setImageObject(e.target.files[0]);
    } else setImageObject(null);
  };

  const handleImg1Submit = () => {
    uploadBytes(blogImageRef, imageObject).then(() => {
      getDownloadURL(blogImageRef).then((url) => {
        setPostImg1(url);
      });
      setImageObject(null);
      setImageUploaded(true);
    });
  };
  const handleImg2Submit = () => {
    uploadBytes(blogImageRef2, imageObject).then(() => {
      getDownloadURL(blogImageRef2).then((url) => {
        setPostImg2(url);
      });
      setImageObject(null);
      setImageUploaded(true);
    });
  };
  const handleImg3Submit = () => {
    uploadBytes(blogImageRef3, imageObject).then(() => {
      getDownloadURL(blogImageRef3).then((url) => {
        setPostImg3(url);
      });
      setImageObject(null);
      setImageUploaded(true);
    });
  };
  const handleThumbnailSubmit = () => {
    uploadBytes(blogThumbnailRef, imageObject).then(() => {
      getDownloadURL(blogThumbnailRef).then((url) => {
        setThumbnailUrl(url);
      });
      setImageObject(null);
      setImageUploaded(true);
    });
  };

  const createPost = async () => {
    await addDoc(singleCollectionRef, {
      title,
      postText1,
      postText2,
      postText3,
      postText4,
      postDate,
      postCategory,
      thumbnailUrl,
      postImg1,
      postImg2,
      postImg3,
      imgDesc1,
      imgDesc2,
      imgDesc3,
    });
    navigate("/");
    setImageUploaded(false);
  };

  return (
    <>
      <div className="write">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            {imageObject ? (
              <div style={{ color: "whitesmoke" }}> Submitted</div>
            ) : (
              <i className="writeIcon fa-solid fa-plus"></i>
            )}
          </label>
          <input
            id="fileInput"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => handleImageObject(e)}
          />
          <button
            className="submitButton"
            onClick={() => handleThumbnailSubmit()}
          >
            <div className="submitButtonText">
              {thumbnailUrl ? "Submitted!" : "Submit Thumbnail"}
            </div>
          </button>
          <input
            className="textInputTitle"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="paragraphs">
          <div className="paragraph1">
            <textarea
              className="textInput"
              placeholder="Paragraph 1"
              type="text"
              onChange={(event) => {
                setPostText1(event.target.value);
              }}
            ></textarea>
          </div>
          <input type="file" onChange={(e) => handleImageObject(e)} />
          <button className="submitButton" onClick={() => handleImg1Submit()}>
            <div className="submitButtonText">
              {" "}
              {postImg1 ? "Submitted!" : "Submit Image 1"}{" "}
            </div>
          </button>
          <input
            type="text"
            onChange={(event) => {
              setImgDesc1(event.target.value);
            }}
            placeholder="Image Description"
          />

          <div className="paragraph2">
            <textarea
              className="textInput"
              placeholder="Paragraph 2"
              type="text"
              onChange={(event) => {
                setPostText2(event.target.value);
              }}
            ></textarea>
          </div>
          <input type="file" onChange={(e) => handleImageObject(e)} />
          <button className="submitButton" onClick={() => handleImg2Submit()}>
            <div className="submitButtonText">
              {" "}
              {postImg2 ? "Submitted!" : "Submit Image 2"}{" "}
            </div>
          </button>
          <input
            type="text"
            onChange={(event) => {
              setImgDesc2(event.target.value);
            }}
            placeholder="Image Description"
          />

          <div className="paragraph3">
            <textarea
              className="textInput"
              placeholder="Paragraph 3"
              type="text"
              onChange={(event) => {
                setPostText3(event.target.value);
              }}
            ></textarea>
          </div>
          <input type="file" onChange={(e) => handleImageObject(e)} />
          <button className="submitButton" onClick={() => handleImg3Submit()}>
            <div className="submitButtonText">
              {" "}
              {postImg3 ? "Submitted!" : "Submit Image 3"}{" "}
            </div>
          </button>
          <input
            type="text"
            onChange={(event) => {
              setImgDesc3(event.target.value);
            }}
            placeholder="Image Description"
          />
          <div className="paragraph4">
            <textarea
              className="textInput"
              placeholder="Paragraph 4"
              type="text"
              onChange={(event) => {
                setPostText4(event.target.value);
              }}
            ></textarea>
          </div>
        </div>

        <input
          type="text"
          placeholder="Category"
          onChange={(event) => {
            setPostCategory(event.target.value);
          }}
        />
        <br />
        <br />
        <input
          type="date"
          onChange={(event) => {
            setPostDate(event.target.value);
          }}
        />
        <br />
        <br />
        <button className="submitButton" onClick={() => createPost()}>
          {" "}
          Submit{" "}
        </button>
      </div>
    </>
  );
}
