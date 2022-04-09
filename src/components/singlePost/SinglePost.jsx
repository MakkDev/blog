import "./singlePost.css";

export default function SinglePost(props) {
    return (
        <div className="singlePost">
            <h1 className="singlePostTitle">
                    {props.title}
                </h1>
                <img src={props.postThumbnail} alt="" className="singlePostImg" />
            <div className="singlePostWrapper">
                <div className="singlePostEdit">
                </div>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        <b>Author: Abdullah Makkieh</b>
                    </span>
                    <span className="singlePostDate">
                        {props.postDate}
                    </span>
                </div>
                <p className="singlePostFirstParagraph">
                {props.firstParagraph}
                </p>
                <br/>
                <p className="singlePostOtherParagraphs">
                {props.secondParagraph}
                </p>
                <br/>
                <p className="singlePostOtherParagraphs">
                {props.thirdParagraph}
                </p>
            </div>
        </div>
    )
}
