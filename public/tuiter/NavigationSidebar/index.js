const NavigationSidebar = () => {
    return(`
        <div class="list-group">
            <a class="list-group-item" href="/">
                <i class="d-inline fab fa-twitter"></i>
                <!-- continue rest of list, e.g., Home, Explore, Notifications,  Messages, etc. -->
                <span class="d-none d-xl-inline"></span>
            </a>
            <a class="list-group-item" href="../HomeScreen/index.html">
                <i class="d-inline fas fa-home"></i>
                <span class="d-none d-xl-inline">Home</span>
            </a>
            <a class="list-group-item active" href="../ExploreScreen/index.html">
                <i class="d-inline fas fa-hashtag"></i>
                <span class="d-none d-xl-inline">Explore</span>
            </a>
            <a href="/" class="list-group-item">
                <i class="d-inline fas fa-bell"></i>
                <span class="d-none d-xl-inline">Notifications</span>
            </a>
            <a href="/" class="list-group-item">
                <i class="d-inline fas fa-envelope"></i>
                <span class="d-none d-xl-inline">Messages</span>
            </a>
            <a href="/" class="list-group-item">
                <i class="d-inline fas fa-bookmark"></i>
                <span class="d-none d-xl-inline">Bookmarks</span>
            </a>
            <a href="/" class="list-group-item">
                <i class="d-inline fas fa-list"></i>
                <span class="d-none d-xl-inline">Lists</span>
            </a>
            <a href="/" class="list-group-item">
                <i class="d-inline fas fa-user"></i>
                <span class="d-none d-xl-inline">Profile</span>
            </a>
            <a href="/" class="list-group-item">
                <div class="d-inline">
                    <span class="fa-stack wd-small">
                        <i class="fas fa-circle fa-stack-2x"></i>
                        <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                    </span>
                </div>
                <span class="d-none d-xl-inline">More</span>
            </a>
        </div>
        <div class="d-grid mt-2">
        <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">Tweet</a></div>
    `);
}

export default NavigationSidebar;

// only used for single page test
// $('#wd-nav').append(`${NavigationSidebar()}`)