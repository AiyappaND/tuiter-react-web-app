import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCommentDots} from "@fortawesome/free-regular-svg-icons";
import {faRetweet, faHeart, faCheckCircle, faShare, faThumbsDown} from "@fortawesome/free-solid-svg-icons"
import {useDispatch} from "react-redux";
import {deleteTuitThunk, updateTuitThunk} from "../../services/tuits-thunks";

const TuitItem = ({tuit}) => {
    const liked = {
        color: "",
    };

    const disliked = {
        color: "",
    };

    if(tuit.liked === true) {
        liked.color = "red"
    }

    if(tuit.disliked === true) {
        disliked.color = "blue"
    }

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="float-end rounded-pill" height="60px" src={`/images/${tuit.userIcon}`} alt=""/>
                </div>

                <div className="col-10">
                    <div>
                        <span className="fw-bolder">{tuit.userName}</span>
                        <FontAwesomeIcon icon={faCheckCircle} className="p-1" color={"blue"}/>
                        <span className="text-dark"> {tuit.handle} - {tuit.time}</span>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}></i>
                    </div>

                    <div className="mb-2 p-1 rounded border-secondary">
                        <div className="mb-1 text-secondary">
                            {tuit.tuit}
                        </div>
                    </div>

                    <div className="row flex-fill">

                        <div className="col-2"><FontAwesomeIcon icon={faHeart} onClick={() => dispatch(updateTuitThunk({
                            ...tuit,
                            likes: tuit.liked? tuit.likes - 1: tuit.likes + 1,
                            liked: !tuit.liked
                        }))} className="p-1" {...liked} />{tuit.likes}</div>

                        <div className="col-2"><FontAwesomeIcon icon={faThumbsDown} onClick={() => dispatch(updateTuitThunk({
                            ...tuit,
                            dislikes: tuit.disliked? tuit.dislikes - 1: tuit.dislikes + 1,
                            disliked: !tuit.disliked
                        }))} className="p-1" {...disliked} />{tuit.dislikes}</div>

                        <div className="col-2"><FontAwesomeIcon icon={faCommentDots} className="p-1"/>{tuit.replies}</div>

                        <div className="col-2"><FontAwesomeIcon icon={faRetweet} className="p-1"/>{tuit.retuits}</div>

                        <div className="col-2">
                            <FontAwesomeIcon icon={faShare} className="p-1"/>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;