import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = ()  => {
    return (`
        
        <form>
            <div class="flex-row d-flex align-items-center mb-2">
                <div class="flex-grow-1 flex-row d-flex align-items-center border rounded-pill py-1">
                    <label for="explore-search" class="px-2">
                        <i class="fas fa-search"></i>
                    </label>
                    <input type="text" id="explore-search"
                           class="flex-grow-1 border-0 rounded-pill ps-2" placeholder="Search Tuiter"/>
                </div>
                <div class="ps-4">
                    <a href="explore-settings.html">
                        <i class="fas fa-2x align-middle fa-cog"></i>
                    </a>
                </div>
            </div>
        </form>

        <div class="nav nav-tabs mb-0">
            <div class="nav-item">
                <a class="nav-link active" href="for-you.html">For you</a>
            </div>

            <div class="nav-item">
                <a class="nav-link" href="trending.html">Trending</a>
            </div>

            <div class="nav-item">
                <a class="nav-link" href="news.html">News</a>
            </div>

            <div class="nav-item">
                <a class="nav-link" href="sports.html">Sports</a>
            </div>

            <div class="nav-item d-none d-md-block">
                <a class="nav-link" href="entertainment.html">Entertainment</a>
            </div>
        </div>

        <a href="#" class="card text-white rounded-0">
            <img src="../assets/img/alien-ship.jpg" class="card-img rounded-0" alt=""/>
            <div class="card-img-overlay d-flex flex-column ps-2 pb-0">
                <h2 class="card-title mt-auto mb-1 text-black">Alien Invasion Imminent</h2>
            </div>
        </a>
        
        ${PostSummaryList()}
        
    `);
}

export default ExploreComponent;