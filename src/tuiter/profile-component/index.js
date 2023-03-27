import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import {faArrowLeft, faCalendar, faCalendarAlt, faMap} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ViewProfileComponent = () => {

    const profile = useSelector(state => state.profile)

    return (
        <div>

            <div className="container row mb-2">
                <div className="col-1 d-flex align-items-center">
                    <Link to="/tuiter/">
                        <FontAwesomeIcon icon={faArrowLeft} className="p-1"/>
                    </Link>
                </div>
                <div className="col-11 d-inline">
                    <h5 className="mb-0">{profile.firstName} {profile.lastName}</h5>
                </div>
            </div>

            <img height="200px" width="100%" src={profile.bannerPicture} alt=""/>

            <div className="container mb-5">
                <img className="rounded-circle position-absolute translate-middle-y border border-dark border-thin" height="120px" width="120px" src={profile.profilePicture} alt="" />
                <Link to="/tuiter/edit-profile">
                    <span className="float-end mt-3 pt-1 pb-1 ps-3 pe-3 rounded-pill border">Edit Profile</span>
                </Link>
            </div>

            <div className="container pt-4 mb-2">
                <div className="mb-0 fw-bold">{profile.firstName} {profile.lastName}</div>
                <small className="text-secondary">{profile.handle}</small>
                <p>{profile.bio}</p>
            </div>

            <div className="container mb-2 text-secondary">
                <FontAwesomeIcon icon={faMap} className="p-1"/>
                <small className="me-4 ps-2">{profile.location}</small>
                <FontAwesomeIcon icon={faCalendarAlt} className="p-1"/>
                <small className="me-4 ps-2">Born {profile.dateOfBirth}</small>
                <FontAwesomeIcon icon={faCalendar} className="p-1"/>
                <small className="me-4 ps-2">Joined {profile.dateJoined}</small>
            </div>

            <div className="container mb-2 text-secondary">
                <span className="text-dark text">{profile.followingCount}</span>
                <small className="me-4 ps-2">Following</small>
                <span className="text-dark">{profile.followersCount}</span>
                <small className="me-4 ps-2">Followers</small>
            </div>
        </div>
    )
}

export default ViewProfileComponent