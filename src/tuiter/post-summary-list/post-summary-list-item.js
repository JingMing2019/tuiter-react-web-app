import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla-logo.png"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-9 col-lg-10 wd-post-left">
                    <div className="text-secondary">{post.topic}</div>
                    <div>
                        <span className="fw-bolder">{post.userName}</span>
                        <sapn><FontAwesomeIcon icon="fa-solid fa-circle-check"/></sapn>
                        <span className="text-secondary"> - {post.time}</span>
                    </div>
                    <div className="fw-bolder">
                        {post.title}
                    </div>
                    <div className="text-secondary">{post.tweets ? post.tweets + ' Tweets' : ''}</div>
                </div>
                <div className="col-3 col-lg-2 wd-post-right">
                    <img width={70} className="rounded-3 float-end wd-post-summary-image" src={`/images/${post.image}`} alt={post.userName}/>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;