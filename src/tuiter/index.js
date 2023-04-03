import React from "react";
import ExploreComponent from "./explore-component";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import TuitsList from "./tuits-list";
import {Routes, Route} from "react-router";
import whoReducer
    from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import ProfileComponent from "./profile-component";
import profileReducer from "./reducers/profile-reducer";
import EditProfile from "./profile-component/edit-profile";
const store = configureStore(
    {reducer: {who: whoReducer, tuitsData: tuitsReducer, profile: profileReducer}});

function Tuiter() {
    return (
        <Provider store={store}>
            <div className="container mt-1">
                <div className="row gx-4">
                    <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 p-1">
                        <NavigationSidebar/>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 col-10 p-1">
                        <Routes>
                            <Route path="/"    element={<TuitsList/>}/>
                            <Route path="explore" element={<ExploreComponent/>}/>
                            <Route path="profile" element={<ProfileComponent/>}/>
                            <Route path="edit-profile" element={<EditProfile/>}/>
                        </Routes>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block p-1">
                        <Routes>
                            <Route path="/"    element={<WhoToFollowList/>}/>
                            <Route path="explore" element={<WhoToFollowList/>}/>
                            <Route path="profile" element={<WhoToFollowList/>}/>
                            <Route path="edit-profile" element={<WhoToFollowList/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </Provider>
    );
}

export default Tuiter