import { IAppState } from "../types";

function isLoadingTradePrograms(state: IAppState) {
    return !!state.tradePrograms.loading;
}

function getTradeProgramsState(state: IAppState) {
    return state.tradePrograms;
}

export default class TradeProgramsSelectors {
    public static isLoadingTradePrograms = isLoadingTradePrograms;
    public static getTradeProgramsState = getTradeProgramsState;
}
