import NavigationSidebar from "../explore/NavigationSidebar/index.js";
import PostSummaryList from "../explore/PostSummaryList/index.js";
import HomeTuitSummaryList from "./HomeTuitSummaryList/index.js";

function exploreComponent() {
    $('#wd-home').append(`
      <div class="container mt-1">
        <div class="row gx-4">
           <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 p-1">
                ${NavigationSidebar("home")}
            </div>
            
           <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 col-10 p-lg-2">
                ${HomeTuitSummaryList()}
           </div>
           
           <div class="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block p-1">
                ${PostSummaryList()}
            </div>
        </div>
       </div>
   `);
}
$(exploreComponent);
