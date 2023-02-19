import NavigationSidebar from "./NavigationSidebar/index.js";
import WhoToFollowList from "./WhoToFollowList/index.js";
import ExploreComponent from "./ExploreScreen/ExploreComponent.js"

function exploreComponent() {
    $('#wd-explore').append(`
      <div class="container mt-1">
        <div class="row gx-4">
           <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 p-1">
                ${NavigationSidebar("explore")}
            </div>
            
           <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 col-10 p-1">
                ${ExploreComponent()}
           </div>
           
           <div class="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block p-1">
                ${WhoToFollowList()}
            </div>
        </div>
       </div>
   `);
}
$(exploreComponent);