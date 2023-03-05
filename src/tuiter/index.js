import React from "react";
import ExploreComponent from "./explore-component";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import HomePostSummaryList from "./home-post-summary-list";
import {Routes, Route} from "react-router";
import PostSummaryList from "./post-summary-list";

function Tuiter() {
    return (
        <div className="container mt-1">
            <div className="row gx-4">
                <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 p-1">
                    <NavigationSidebar/>
                </div>

                <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 col-10 p-1">
                    <Routes>
                        <Route path="home"    element={<HomePostSummaryList/>}/>
                        <Route path="explore" element={<ExploreComponent/>}/>
                    </Routes>
                </div>

                <div className="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block p-1">
                    <Routes>
                        <Route path="home"    element={<PostSummaryList/>}/>
                        <Route path="explore" element={<WhoToFollowList/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Tuiter