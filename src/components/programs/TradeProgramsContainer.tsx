import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TradeProgramActions from "../../store/programs/actions";
import TradeProgramsSelectors from "../../store/programs/selectors";
import DisplayError from "../utils/DisplayError";
import Loading from "../utils/Loading";
import TradePrograms from "./TradePrograms";

const TradeProgramsContainer: React.FC<{}> = () => {
    const dispatch = useDispatch();

    const programsState = useSelector(
        TradeProgramsSelectors.getTradeProgramsState
    );
    const areProgramsLoaded = !!programsState.programs;
    const isLoading = !!programsState.loading;
    const error = programsState.error;

    const getPrograms = React.useCallback(() => {
        if (!areProgramsLoaded) {
            dispatch(TradeProgramActions.getTradePrograms());
        }
    }, [areProgramsLoaded, dispatch]);

    React.useEffect(() => {
        getPrograms();
    }, [getPrograms]);

    if (isLoading || !programsState.programs) {
        return <Loading message="Loading programs..." />;
    }

    if (error) {
        return <DisplayError message={error} onReload={getPrograms} />;
    }

    return <TradePrograms programsMap={programsState.programs!} />;
};

export default TradeProgramsContainer;
