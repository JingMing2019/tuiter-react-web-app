import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
import NavigationTab from "../navigation-tab";

const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                <div className="col-11 position-relative">
                    <input placeholder="Search Tuiter"
                           className="form-control rounded-pill ps-5"/>
                    <i className="bi bi-search position-absolute wd-nudge-up"/>
                </div>
                <div className="col-1">
                    <i className="wd-bottom-4 text-primary float-end bi bi-gear-fill fs-2 position-relative"/>
                </div>
            </div>
            <NavigationTab active={"for you"}/>
            <div className="position-relative mb-2">
                <img src="../images/spacex-starship-mk1.webp" className="w-100" alt={"title"}/>
                <h1 className="position-absolute wd-nudge-up text-white">SpaceX Starship</h1>
            </div>
            <PostSummaryList/>
        </>
    );
};
export default ExploreComponent;