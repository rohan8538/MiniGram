import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axiosClient";
import { setLoading } from "./appConfig";

export const getUserProfile = createAsyncThunk('user/getUserProfile', async (body, thunkAPI) => {
    try {
        thunkAPI.dispatch(setLoading(true));

        const details = await axiosClient.post('/user/getUserProfile', body);
        console.log("USerProfileDetails", details);

        return details.response;
    } catch (e) {
        return Promise.reject(e);
    } finally {
        thunkAPI.dispatch(setLoading(false));
    }
})

export const likeAndUnlikePost = createAsyncThunk('post/likeAndUnlikePost', async (body, thunkAPI) => {
    try {
        thunkAPI.dispatch(setLoading(true));

        const details = await axiosClient.post('/post/likePost/likeUnlike', body);
        console.log("likeDetails", details);

        return details.response.post;
    } catch (e) {
        return Promise.reject(e);
    } finally {
        thunkAPI.dispatch(setLoading(false));
    }
})

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState: {
        userProfile: {}
    },
    extraReducers: (builder) => {
        builder.addCase(getUserProfile.fulfilled, (state, action) => {
            //console.log('success', action);
            state.userProfile = action.payload;
            //console.log('success', state.myProfile);
        })
        .addCase(likeAndUnlikePost.fulfilled, (state, action) => {
            const post = action.payload;
            const index = state.userProfile.posts.findIndex(item => item._id === post._id);
            if(index !== -1) {
                state.userProfile.posts[index] = post;
            }
        })
    },
})

export default postsSlice.reducer;