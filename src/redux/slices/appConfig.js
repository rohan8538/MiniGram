import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axiosClient";

export const myInfo = createAsyncThunk('user/Info', async (_, thunkAPI) => {
    try {
        thunkAPI.dispatch(setLoading(true));

        const details = await axiosClient.get('/user/myDetails');
        console.log("Rohan", details);

        return details.response;
    } catch (e) {
        return Promise.reject(e);
    } finally {
        thunkAPI.dispatch(setLoading(false));
    }
})

export const updateMyProfile = createAsyncThunk(
    "user/updateMyProfile",
    async (body, thunkAPI) => {
        try {
            thunkAPI.dispatch(setLoading(true));
            const details = await axiosClient.put("/user/", body);
            return details.response;
        } catch (error) {
            return Promise.reject(error);
        } finally {
            thunkAPI.dispatch(setLoading(false));
        }
    }
);

const appConfig = createSlice({
    name: 'appConfig',
    initialState: {
        isLoading: false,
        myProfile: {}
    },
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(myInfo.fulfilled, (state, action) => {
            //console.log('success', action);
            state.myProfile = action.payload.user;
            //console.log('success', state.myProfile);
        })
        .addCase(updateMyProfile.fulfilled, (state, action) => {
            //console.log('success', action);
            state.myProfile = action.payload.user;
            //console.log('success', state.myProfile);
        })
    }
})

export default appConfig.reducer;

export const {setLoading} = appConfig.actions;