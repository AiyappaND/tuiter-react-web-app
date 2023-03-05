import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

const PostSummaryItem = (
    {
        post
    }
) => {
    return(
        <li className="list-group-item">
            <div className="border-secondary">
                <div className="row">
                    <div className="col-9">
                        <div className="fs-6 text-secondary">{post.topic}</div>
                        <div className="fs-6">
                            <span className="fw-bold">{post.userName}</span>
                            <FontAwesomeIcon icon={faCheckCircle} className="p-1" />
                            <span className="text-secondary m-lg-1">{post.time}</span>
                        </div>
                        <div className="fw-bold">
                            {post.title}
                        </div>
                        <div className="text-secondary">
                            {post.tuits}
                        </div>
                    </div>
                    <div className="col-3">
                        <img className="float-end rounded" width={75} src={`/images/${post.image}`} alt=""/>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;