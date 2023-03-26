import React from "react";
import HomePostSummaryItem from "./home-post-summary-item"
import tuitsReducer from "../tuits/tuits-reducer";
import { configureStore }
    from '@reduxjs/toolkit';
import {useSelector} from "react-redux";
import WhatsHappening from "./whats-happening";
const store = configureStore(
    {reducer: {tuits: tuitsReducer}});

const HomePostSummaryList = () => {
    const tuitArray = useSelector(state => state.tuits)
    return(
        <div>
            <WhatsHappening/>
            <ul className="list-group">
                {
                    tuitArray.map(tuit =>
                        <HomePostSummaryItem
                            key={tuit._id} tuit={tuit}/> )
                }
            </ul>
        </div>
    );
};
export default HomePostSummaryList;