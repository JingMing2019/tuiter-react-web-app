import React from "react";

const NavigationSidebar = (
    // Convert all parameters into an object deconstructor and provide default value
    {
        active = "explore"
    }
) => {
    // React.js function components can only return a single HTML element, can use <></> to replace
    return(
        // The HTML class attribute is commonly used to associate CSS transformation rules to an HTML element.
        // In JavaScript class is a keyword so we can't use it, use className instead
        <div className="list-group">
            <a className="list-group-item">Tuiter</a>
            <a className="list-group-item">Home</a>
            <a className="list-group-item">Explore</a>
            <a className="list-group-item">Notifications</a>
            <a className="list-group-item">Messages</a>
            <a className="list-group-item">Bookmarks</a>
            <a className="list-group-item">Lists</a>
            <a className="list-group-item">Profile</a>
            <a className="list-group-item">More</a>
        </div>
    );
}

export default NavigationSidebar;