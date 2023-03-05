import React from "react";
import postsArray from './homePosts.json';
import HomePostSummaryItem from "./home-post-summary-item"

const HomePostSummaryList = () => {
    return(
        <ul className="list-group">
            {
                postsArray.map(homePost =>
                    <HomePostSummaryItem
                        key={homePost._id} homePost={homePost}/> )
            }
        </ul>
    );
};
export default HomePostSummaryList;