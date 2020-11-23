import getErrorStr from "../utils/getErrorStr";
import { IAsyncThunkAPI } from "./types";

export function rejectAsyncAction(thunkAPI: IAsyncThunkAPI, error: any) {
    thunkAPI.rejectWithValue(getErrorStr(error));
}
