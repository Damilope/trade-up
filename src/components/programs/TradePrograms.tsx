import { Alert, Space } from "antd";
import React from "react";
import { ITradeProgramsMap } from "../../models/tradeProgram";
import SelectProgram from "./SelectProgram";
import TradeProgram from "./TradeProgram";

export interface ITradeProgramsProps {
    programsMap: ITradeProgramsMap;
}

const TradePrograms: React.FC<ITradeProgramsProps> = (props) => {
    const { programsMap } = props;

    const [selectedProgramName, setSelectedProgramName] = React.useState<
        string | undefined
    >(undefined);

    const selectedProgram = selectedProgramName
        ? programsMap[selectedProgramName]
        : undefined;

    return (
        <Space direction="vertical" size={32} style={{ width: "100%" }}>
            <Alert type="warning" message="Data may be inaccurate" />
            <SelectProgram
                selectedProgramName={selectedProgramName}
                programsMap={programsMap}
                onSelectProgram={setSelectedProgramName}
            />
            {selectedProgram && <TradeProgram program={selectedProgram} />}
        </Space>
    );
};

export default TradePrograms;
