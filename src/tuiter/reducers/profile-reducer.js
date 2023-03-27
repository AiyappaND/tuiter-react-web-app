import { createSlice } from "@reduxjs/toolkit";
import profileData from "../data/profile.json";

const profileSlice = createSlice({
    name: "profile",
    initialState: profileData,
    reducers: {
        editProfile(state, action) {
            return {
                ...state,
                ...action.payload
            }
        }
    }
});

export const {editProfile} = profileSlice.actions
export default profileSlice.reducer;
