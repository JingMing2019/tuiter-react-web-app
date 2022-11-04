import React from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile)

    const font_size = {
        "fontSize": "13px"
    }

    const nudge_up = {
        "marginTop" : "-80px",
        "left" : "16px"
    }

    const bornDate = new Date(profile.dateOfBirth).toLocaleString('en-CA', {month: 'short', day: 'numeric', year: 'numeric'});

    const [month, year] = profile.dateJoined.split("/");
    const joinedDate = new Date(parseInt(year), parseInt(month)).toLocaleString('en-CA', {month: 'long', year: 'numeric'});

    const  navigate = useNavigate();

    return(
        <>
            {/* Username and back button */}
            <div className="row align-items-center">
                <div className="col-auto">
                    <button type="button" className="btn" title="back" onClick={() => navigate(-1)}>
                        <i className="bi bi-arrow-left" />
                    </button>
                </div>
                <div className="col-10">
                    <h5 className="fw-bold mb-0">{profile.firstName}{" "}{profile.lastName}</h5>
                    <div className="text-secondary" style={font_size}>
                        {profile.tuits}{" "}Tuits
                    </div>
                </div>
            </div>
            {/* banner picture and avatar */}
            <img src={`/images/${profile.bannerPicture}`} className="w-100" height="250" alt="banner" />
            <img src={`/images/${profile.profilePicture}`} className="rounded-circle img-thumbnail position-relative mb-2" style={nudge_up} width={160} alt="banner" />
            <button type="button" className="border border-gray px-3 py-2 bg-white rounded-pill float-end my-3 mx-3 fw-bold">Edit Profile</button>
            <div className="px-3">
                {/* User Name */}
                <h5 className="fw-bold mb-0 mt-3 ">{profile.firstName}{" "}{profile.lastName}</h5>
                <div className="text-secondary" style={font_size}>
                    {profile.handle}
                </div>
                {/* Bio */}
                <div className="mt-2">
                    {profile.bio}
                </div>
                {/* Information */}
                <div className="text-secondary mt-2">
                    <span className="pe-3">
                        <i className="bi bi-geo-alt pe-2" />
                        {profile.location}
                    </span>
                    <span className="pe-3">
                        {/* TODO: convert date format */}
                        <i className="bi bi-balloon pe-2" />
                        Born {bornDate}
                    </span>
                    <span className="pe-3">
                        <i className="bi bi-calendar3 pe-2" />
                        Joined {joinedDate}
                    </span>
                </div>
                {/* Following and Followers */}
                <div className="mt-2">
                    <span className="pe-3">
                        <span className="fw-bold">{profile.followingCount}{" "}</span>
                        <span className="text-secondary">Following</span>
                    </span>
                    <span className="pe-3">
                        <span className="fw-bold">{profile.followersCount}{" "}</span>
                        <span className="text-secondary">Followers</span>
                    </span>
                </div>
            </div>
        </>
    );
};
export default ProfileComponent;