import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div class="row align-items-center mx-0 ">
        <!-- search field and cog -->
            <div class="col-11 px-0">
                <label for="search-tuiter" class="form-label w-100 mb-0">
                <div class="input-group">
                    <span class="input-group-text bg-transparent border-end-0 rounded-end rounded-pill">
                        <i class="fas fa-search"></i>
                    </span>
                    <input type="text"
                           id="search-tuiter"
                           class="form-control border-start-0 rounded-start rounded-pill"
                           placeholder="Search Twitter" />
                </div>
                </label>
            </div>
            <div class="col-1 wd-cog">
                <a href="explore-settings.html" class="fas fa-cog fa-2x text-decoration-none"></a>
            </div>
        </div>
        <ul class="nav mb-2 nav-tabs mt-2">
        <!-- tabs -->
            <li class="nav-item">
                <a class="nav-link active" href="for-you.html">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="nav-item d-none d-md-block">
                <a class="nav-link" href="entertainment.html">Entertainment</a>
            </li>
        </ul>
        <!-- image with overlaid text -->
        <div class="position-relative mb-2">
            <img src="../images/spacex-starship-mk1.webp" class="card-img w-100" alt="...">
            <h2 class="text-white position-absolute bottom-0 ps-2">SpaceX's Starship</h2>
        </div>
        ${PostSummaryList()}
    `);
}
export default ExploreComponent;
