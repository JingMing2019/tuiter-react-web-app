// import {Link} from "react-router-dom"
import Nav from "../nav"
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import PostSummaryListItem from "./post-summary-list/post-summary-list-item";

function Tuiter() {
    return(
        <div>
            <Nav/>
            <NavigationSidebar active={"home"}/>
            <WhoToFollowList/>
            <PostSummaryListItem/>
            <h1>Tuiter</h1>
        </div>
    )
}

export default Tuiter;