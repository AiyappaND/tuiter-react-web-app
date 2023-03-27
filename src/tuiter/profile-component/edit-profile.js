import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { editProfile } from "../reducers/profile-reducer"
import {faArrowRight, faClose} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const EditProfile = () => {

    const profile = useSelector(state => state.profile)


    const [firstName, setFirstName] = useState(profile.firstName)
    const [lastName, setLastName] = useState(profile.lastName)
    const [bio, setBio] = useState(profile.bio)
    const [location, setLocation] = useState(profile.location)
    const [website, setWebsite] = useState(profile.website)
    const [dateOfBirth, setDateOfBirth] = useState(profile.dateOfBirth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleBioChange = (data) => {
        const newBio = data.target.value
        setBio(newBio)
    }

    const handleNameChange = (data) => {
        const newFirstName = data.target.value.split(" ")[0]
        const newLastName = data.target.value.split(" ")[1]
        setFirstName(newFirstName)
        setLastName(newLastName)
    }

    const handleLocationChange = (data) => {
        const newLocation = data.target.value
        setLocation(newLocation)
    }

    const handleWebsiteChange = (data) => {
        const newWebsite = data.target.value
        setWebsite(newWebsite)
    }

    const handleDateOfBirthChange = (data) => {
        const newDateOfBirth = data.target.value
        setDateOfBirth(newDateOfBirth)
    }

    const saveProfileHandler = async () => {
        const newProfile = {
            firstName,
            lastName,
            bio,
            location,
            website,
            dateOfBirth
        }
        await dispatch(editProfile(newProfile))
        navigate("/tuiter/profile")
    };

    return (
        <div>
            <div className="container p-3">
                <Link to="/tuiter/profile">
                    <FontAwesomeIcon icon={faClose} className="p-1"/>
                </Link>
                <span className="ms-5 fw-bold">Edit Profile</span>
                <Link onClick={saveProfileHandler} to="">
                    <span className="float-end p-2 pe-4 ps-4 rounded-pill text-blue border">Save</span>
                </Link>
            </div>

            <img height="200px" width="100%" src={profile.bannerPicture} alt=""/>

            <div className="container mb-5">
                <img className="rounded-circle position-absolute translate-middle-y border border-dark border-thin"
                     height="120px" width="120px" src={profile.profilePicture} alt="" />
            </div>


            <div className="container pt-5">
                <div className="form-floating mb-4">
                    <textarea className="form-control"
                              onChange={handleNameChange}
                              value={`${firstName} ${lastName}`} id="name"></textarea>
                    <label htmlFor="name">Name</label>
                </div>

                <div className="form-floating mb-4">
                    <textarea className="form-control"
                              onChange={handleBioChange}
                              value={bio} id="bio" rows="5" style={{ height: "25%" }}></textarea>
                    <label htmlFor="bio">Bio</label>
                </div>

                <div className="form-floating mb-4">
                    <textarea className="form-control"
                              onChange={handleLocationChange}
                              value={location} id="location"></textarea>
                    <label htmlFor="location">Location</label>
                </div>

                <div className="form-floating mb-4">
                    <textarea className="form-control"
                              onChange={handleWebsiteChange}
                              value={website} id="website"></textarea>
                    <label htmlFor="website">Website</label>
                </div>

                <div className="form-floating mb-4">
                    <textarea className="form-control"
                              onChange={handleDateOfBirthChange}
                              value={dateOfBirth} id="dateOfBirth"></textarea>
                    <label htmlFor="dateOfBirth">Birth date</label>
                </div>

                <div className="container mb-4">
                    <span>Switch to Professional</span>
                    <div className="float-end d-flex align-items-center">
                        <FontAwesomeIcon icon={faArrowRight} className="p-1"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile