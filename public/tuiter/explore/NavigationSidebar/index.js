const NavigationSidebar = (activeClass) => {
    return (`
    <div class="mb-3 list-group">
        <div class="list-group-item">
            <i class="fas fa-hand-peace"></i>
        </div>
        <a href="../explore/index.html" id="explore-sidebar" class="list-group-item list-group-item-action ${activeClass === "explore"? "active": ""}">
            <i class="fas fa-hashtag"></i>
            <div class="d-none d-xl-inline m-lg-1">Explore</div>
        </a>

        <a href="../home/index.html" id="home-sidebar" class="list-group-item list-group-item-action ${activeClass === "home"? "active": ""}"">
            <i class="fas fa-home"></i>
            <div class="d-none d-xl-inline m-lg-1">Home</div>
        </a>

        <a href="#" id="messages-sidebar" class="list-group-item list-group-item-action ${activeClass === "messages"? "active": ""}"">
            <i class="fas fa-envelope"></i>
            <div class="d-none d-xl-inline m-lg-1">Messages</div>
        </a>

        <a href="#" id="notifications-sidebar" class="list-group-item list-group-item-action ${activeClass === "notifications"? "active": ""}"">
            <i class="fas fa-bell"></i>
            <div class="d-none d-xl-inline m-lg-1">Notifications</div>
        </a>

        <a href="#" id="bookmarks-sidebar" class="list-group-item list-group-item-action ${activeClass === "bookmarks"? "active": ""}"">
            <i class="fas fa-bookmark"></i>
            <div class="d-none d-xl-inline m-lg-1">Bookmarks</div>
        </a>

        <a href="#" id="lists-sidebar" class="list-group-item list-group-item-action ${activeClass === "lists"? "active": ""}"">
            <i class="fas fa-list"></i>
            <div class="d-none d-xl-inline m-lg-1">Lists</div>
        </a>

        <a href="#" id="profile-sidebar" class="list-group-item list-group-item-action ${activeClass === "profile"? "active": ""}"">
            <i class="fas fa-user"></i>
            <div class="d-none d-xl-inline m-lg-1">Profile</div>
        </a>

        <a href="#" id="more-sidebar" class="list-group-item list-group-item-action ${activeClass === "more"? "active": ""}"">
            <i class="fas fa-circle-notch"></i>
            <div class="d-none d-xl-inline m-lg-1">More</div>
        </a>
    </div>

    <div class="d-grid">
        <button type="button" class="btn btn-primary rounded-pill">
            Tuit
        </button>
    </div>
 `);

}
export default NavigationSidebar;