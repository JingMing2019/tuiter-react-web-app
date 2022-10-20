import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa-logo.jpg' }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row align-items-center justify-content-xl-around">
                <div className="col-lg-2 col-xl-2 col-xxl-2">
                    <img className="rounded-circle" height={48} src={`/images/${who.avatarIcon}`} alt={"Nasa Logo"}/>
                </div>
                <div className="col-lg-6 col-xl-5 col-xxl-7 text-nowrap">
                    <div className="fw-bold">
                        {who.userName}
                        <FontAwesomeIcon icon="fa-solid, fa-circle-check"/>
                    </div>
                    <div>@{who.handle}</div>
                </div>
                <div className="col-lg-1 col-xl-4 col-xxl-3">
                    <button className="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;