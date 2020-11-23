import { createAsyncThunk } from "@reduxjs/toolkit";
import TradeUpAPI, {
    ICalculateLoanPaymentAPIParams,
    ICalculateLoanPaymentAPIResult,
    IFetchTradeProgramAPIResult,
} from "../../api/api";
import { IAppAsyncThunkConfig } from "../types";
import { rejectAsyncAction } from "../utils";

enum TradeProgramActionKeys {
    GetTradePrograms = "tradePrograms/getTradePrograms",
}

const getTradePrograms = createAsyncThunk<
    IFetchTradeProgramAPIResult | undefined,
    void,
    IAppAsyncThunkConfig
>(TradeProgramActionKeys.GetTradePrograms, async (args, thunkAPI) => {
    try {
        return await TradeUpAPI.fetchTradePrograms();
    } catch (error) {
        rejectAsyncAction(thunkAPI, error);
    }
});

const calculateLoanPayment = createAsyncThunk<
    ICalculateLoanPaymentAPIResult | undefined,
    ICalculateLoanPaymentAPIParams,
    IAppAsyncThunkConfig
>(TradeProgramActionKeys.GetTradePrograms, async (args, thunkAPI) => {
    try {
        return await TradeUpAPI.calculateLoanPayment(args);
    } catch (error) {
        rejectAsyncAction(thunkAPI, error);
    }
});

export default class TradeProgramActions {
    public static getTradePrograms = getTradePrograms;
    public static calculateLoanPayment = calculateLoanPayment;
}
