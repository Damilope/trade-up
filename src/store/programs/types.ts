import { ITradeProgram } from "../../models/tradeProgram";

export interface ITradeProgramsState {
    loading?: boolean;
    error?: string;
    programs?: { [key: string]: ITradeProgram };
}
