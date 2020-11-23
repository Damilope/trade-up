import { createReducer } from "@reduxjs/toolkit";
import TradeProgramActions from "./actions";
import { ITradeProgramsState } from "./types";

const tradeProgramsReducer = createReducer<ITradeProgramsState>(
    {},
    (builder) => {
        builder.addCase(
            TradeProgramActions.getTradePrograms.pending,
            (state) => {
                state.loading = true;
                state.programs = undefined;
                state.error = undefined;
            }
        );

        builder.addCase(
            TradeProgramActions.getTradePrograms.fulfilled,
            (state, action) => {
                state.loading = false;
                state.programs = action.payload;
                state.error = undefined;
            }
        );

        builder.addCase(
            TradeProgramActions.getTradePrograms.rejected,
            (state, action) => {
                state.error = action.error.message;
                state.loading = false;
                state.programs = undefined;
            }
        );
    }
);

export default tradeProgramsReducer;
