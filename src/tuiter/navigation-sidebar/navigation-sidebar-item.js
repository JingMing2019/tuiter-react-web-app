import {Link} from "react-router-dom";
import React from "react";
import Icon from "./icon";

const NavigationSideBarItem = ({
    sidebar = {
        stack: false,
        source: "/",
        iconMain: "fa-brands fa-twitter",
        iconSub: "",
        name: ""
    },
    active = "home"
}) => {
    return(
        <Link to={`/tuiter/${sidebar.name}`} className={`list-group-item ${sidebar.name && active === sidebar.name?'active':''}`}>
            <div className="row">
                <div className="col-xl-2">
                    <Icon isStack={sidebar.stack} iconMain={sidebar.iconMain} iconSub={sidebar.iconSub}/>
                </div>
                <div className="d-none d-xl-inline col-xl-10">
                    {sidebar.name ? sidebar.name[0].toUpperCase() + sidebar.name.slice(1) : ""}
                </div>
            </div>
        </Link>
    )
}

export default NavigationSideBarItem;