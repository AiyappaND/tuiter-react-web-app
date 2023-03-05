import React from "react";
import ExploreComponent from "./explore-component";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";

function Tuiter() {
    return (
        <div className="container mt-1">
            <div className="row gx-4">
                <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 p-1">
                    <NavigationSidebar/>
                </div>

                <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 col-10 p-1">
                    <ExploreComponent/>
                </div>

                <div className="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block p-1">
                    <WhoToFollowList/>
                </div>
            </div>
        </div>
    );
}

export default Tuiter