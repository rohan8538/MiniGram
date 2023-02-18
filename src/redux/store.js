import { configureStore } from "@reduxjs/toolkit";
import appConfigReducer from "./slices/appConfig";

export default configureStore({
    reducer: {
        appConfigReducer
    }
})