import React from "react";
import PostSummaryList from "../post-summary-list";
const ExploreComponent = () => {
    return(
        <>
            <form>
                <div className="flex-row d-flex align-items-center mb-2">
                    <div className="flex-grow-1 flex-row d-flex align-items-center border rounded-pill py-1">
                        <label htmlFor="explore-search" className="px-2">
                            <i className="fas fa-search"></i>
                        </label>
                        <input type="text" id="explore-search"
                               className="flex-grow-1 border-0 rounded-pill ps-2" placeholder="Search Tuiter"/>
                    </div>
                    <div className="ps-4">
                        <a href="/#">
                            <i className="fas fa-2x align-middle fa-cog"></i>
                        </a>
                    </div>
                </div>
            </form>

            <div className="nav nav-tabs mb-0">
                <div className="nav-item">
                    <a href="/#" className="nav-link active">For you</a>
                </div>

                <div className="nav-item">
                    <a href="/#" className="nav-link">Trending</a>
                </div>

                <div className="nav-item">
                    <a href="/#" className="nav-link">News</a>
                </div>

                <div className="nav-item">
                    <a href="/#" className="nav-link">Sports</a>
                </div>

                <div className="nav-item d-none d-md-block">
                    <a href="/#" className="nav-link">Entertainment</a>
                </div>
            </div>

            <a href="/#" className="card text-white rounded-0">
                <img src="/images/alien-ship.jpg" className="card-img rounded-0" alt=""/>
                <div className="card-img-overlay d-flex flex-column ps-2 pb-0">
                    <h2 className="card-title mt-auto mb-1 text-black">Alien Invasion Imminent</h2>
                </div>
            </a>

            <PostSummaryList/>
        </>
    );
};
export default ExploreComponent;