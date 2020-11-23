import { AnyAction, Dispatch, ThunkDispatch } from "@reduxjs/toolkit";
import { ITradeProgramsState } from "./programs/types";

export interface IAppState {
    tradePrograms: ITradeProgramsState;
}

export interface IAppAsyncThunkConfig {
    state: IAppState;
    dispatch: Dispatch;
    extra?: unknown;
    rejectValue?: string;
}

export type AppDispatch = ThunkDispatch<IAppState, void, AnyAction>;

export interface IStoreLikeObject {
    getState: () => IAppState;
    dispatch: (action: any) => void;
}

export interface IAsyncThunkAPI extends IStoreLikeObject {
    rejectWithValue(value: string): any;
}
