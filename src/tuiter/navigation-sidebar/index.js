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
            <a className="list-group-item">
                <span><i className="bi bi-twitter"/></span>
                Tuiter
            </a>
            <a className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                Home
            </a>
            <a className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                Explore
            </a>
            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                Notifications
            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                Messages
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                Bookmarks
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                Lists
            </a>
            <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                Profile
            </a>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                More
            </a>

        </div>
    );
}

export default NavigationSidebar;