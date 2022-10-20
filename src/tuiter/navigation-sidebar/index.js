import React from "react";
import {useLocation} from "react-router";
import NavigationSidebarItem from "./navigation-sidebar-item";
import sidebars from "./sidebars.json";

const NavigationSidebar = (
    // // Convert all parameters into an object deconstructor and provide default value
    // {
    //     active = "explore"
    // }
) => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    // React.js function components can only return a single HTML element, can use <></> to replace
    return(
        // The HTML class attribute is commonly used to associate CSS transformation rules to an HTML element.
        // In JavaScript class is a keyword so we can't use it, use className instead
        <div className="list-group">
            {
                sidebars.map(sidebar => {
                return(<NavigationSidebarItem sidebar={sidebar} active={active}/>)
                })
            }
        </div>
    );
}

export default NavigationSidebar;