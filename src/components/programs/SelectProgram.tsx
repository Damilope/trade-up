import { Select } from "antd";
import React from "react";
import { ITradeProgramsMap } from "../../models/tradeProgram";

export interface ISelectProgramProps {
    selectedProgramName?: string;
    programsMap: ITradeProgramsMap;
    onSelectProgram: (name: string) => void;
}

const SelectProgram: React.FC<ISelectProgramProps> = (props) => {
    const { selectedProgramName, programsMap, onSelectProgram } = props;

    const options = Object.keys(programsMap).map((name) => {
        return (
            <Select.Option key={name} value={name}>
                {name}
            </Select.Option>
        );
    });

    return (
        <Select
            allowClear
            value={selectedProgramName}
            onChange={onSelectProgram}
            placeholder="Select program"
            style={{ width: "100%" }}
        >
            {options}
        </Select>
    );
};

export default SelectProgram;
