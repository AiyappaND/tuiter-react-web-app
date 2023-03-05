import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
const WhoToFollowListItem = ({who}) => {
    return(
        <div className="list-group-item p-lg-2 d-flex flex-row align-items-center">
            <div className="pe-xxl-2 pe-xl-2 pe-lg-1">
                <img className="rounded-circle" height={48}
                     src={`/images/${who.avatarIcon}`} alt=""/>
            </div>
            <div className="flex-grow-1 px-xxl-3 px-xl-3">
                <div className="fw-bold">
                    {who.userName}
                    <FontAwesomeIcon icon={faCheckCircle} className="p-1" />
                </div>
                <div className="text-secondary">@{who.handle}</div>
            </div>
            <div className="align-items-lg-end">
                <a className="btn btn-primary rounded-pill px-3" href="/#">Follow</a>
            </div>
        </div>
    );
};
export default WhoToFollowListItem;