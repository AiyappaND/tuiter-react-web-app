import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckCircle, faHeart, faCommentDots, faRetweet, faArrowCircleDown} from "@fortawesome/free-solid-svg-icons";

const HomePostSummaryItem = ({homePost}) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="float-end rounded-pill" height="60px" src={`/images/${homePost.userIcon}`} alt=""/>
                </div>

                <div className="col-10">
                    <div>
                        <span className="fw-bolder">{homePost.user}</span>
                        <FontAwesomeIcon icon={faCheckCircle} className="p-1"/>
                        <span className="text-secondary"> {homePost.handle} - {homePost.time}</span>
                    </div>

                    <div className="mb-1">{homePost.title}</div>

                    <div className="mb-2 p-1 rounded border-secondary">
                        <img alt="" className="float-end rounded mb-2" width="100%" src={`/images/${homePost.image}`}/>
                            <div className="mb-1 text-muted">
                                {homePost.content ? homePost.content : "No content available"}
                            </div>
                    </div>

                    <div className="row flex-fill">
                        <div className="col-3"><FontAwesomeIcon icon={faHeart} className="p-1"/>{homePost.likes}</div>
                        <div className="col-3"><FontAwesomeIcon icon={faCommentDots} className="p-1"/>{homePost.comments}</div>
                        <div className="col-3"><FontAwesomeIcon icon={faRetweet} className="p-1"/>{homePost.retuits}</div>
                        <div className="col-3">
                            <FontAwesomeIcon icon={faArrowCircleDown} className="p-1"/>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default HomePostSummaryItem;