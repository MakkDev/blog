import "./singlePost.css";

export default function SinglePost(props) {
    return (
        <div className="singlePost">
            <h1 className="singlePostTitle">
                    {props.title}
                </h1>
                <img src={props.postThumbnail} alt="" className="singlePostThumbnail" />
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        <b>Author: Abdullah Makkieh</b>
                    </span>
                    <span className="singlePostDate">
                        {props.postDate}
                    </span>
                </div>
            <div className="singlePostWrapper">
                <div className="singlePostEdit">
                </div>
                <p className="singlePostFirstParagraph">
                {props.firstParagraph}
                </p>
                <img src={props.postImg1} className="singlePostImg" style={{display: props.postImg1 ? "unset" : "none"}}/>
                <span className="imgDescription">{props.imgDesc1}</span>
                <br/>
                <p className="singlePostOtherParagraphs">
                {props.secondParagraph}
                </p>
                <img src={props.postImg2} className="singlePostImg" style={{display: props.postImg2 ? "unset" : "none"}}/>
                <span className="imgDescription">{props.imgDesc2}</span>
                <br/>
                <p className="singlePostOtherParagraphs">
                {props.thirdParagraph}
                </p>
                <img src={props.postImg3} className="singlePostImg" style={{display: props.postImg3 ? "unset" : "none"}}/>
                <span className="imgDescription">{props.imgDesc3}</span>
                <br/>
                <p className="singlePostOtherParagraphs">
                {props.fourthParagraph}
                </p>
            </div>
        </div>
    )
}
