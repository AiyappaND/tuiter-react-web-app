const NavigationSidebar = () => {
    return(`
   <div class="mb-3 list-group">
        <div class="list-group-item">
            <i class="fas fa-hand-peace"></i>
        </div>
        <a href="#" class="list-group-item list-group-item-action active">
            <i class="fas fa-hashtag"></i>
            <div class="d-none d-xl-inline m-lg-1">Explore</div>
        </a>

        <a href="#" class="list-group-item list-group-item-action">
            <i class="fas fa-home"></i>
            <div class="d-none d-xl-inline m-lg-1">Home</div>
        </a>

        <a href="#" class="list-group-item list-group-item-action">
            <i class="fas fa-envelope"></i>
            <div class="d-none d-xl-inline m-lg-1">Messages</div>
        </a>

        <a href="#" class="list-group-item list-group-item-action">
            <i class="fas fa-bell"></i>
            <div class="d-none d-xl-inline m-lg-1">Notifications</div>
        </a>

        <a href="#" class="list-group-item list-group-item-action">
            <i class="fas fa-bookmark"></i>
            <div class="d-none d-xl-inline m-lg-1">Bookmarks</div>
        </a>

        <a href="#" class="list-group-item list-group-item-action">
            <i class="fas fa-list"></i>
            <div class="d-none d-xl-inline m-lg-1">Lists</div>
        </a>

        <a href="#" class="list-group-item list-group-item-action">
            <i class="fas fa-user"></i>
            <div class="d-none d-xl-inline m-lg-1">Profile</div>
        </a>

        <a href="#" class="list-group-item list-group-item-action">
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