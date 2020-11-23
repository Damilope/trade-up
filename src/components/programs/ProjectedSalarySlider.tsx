import { Slider } from "antd";
import React from "react";

export interface IProjectedSalarySliderProps {
    programAnnualIncome: number;
    projectedSalary: number;
    onChangeProjectedSalary: (projectedSalary: number) => void;
}

const kMaxProjectedSalary = 250000;

function tipFormatter(value?: number) {
    return `$${value}`;
}

const ProjectedSalarySlider: React.FC<IProjectedSalarySliderProps> = (
    props
) => {
    const {
        projectedSalary,
        programAnnualIncome,
        onChangeProjectedSalary,
    } = props;

    const min = 0;
    const max =
        kMaxProjectedSalary > projectedSalary
            ? kMaxProjectedSalary
            : projectedSalary;

    return (
        <Slider
            included={false}
            value={projectedSalary}
            onChange={onChangeProjectedSalary}
            marks={{
                0: "$0",
                [programAnnualIncome]: `$${programAnnualIncome}`,
                [max]: `$${max}`,
            }}
            min={min}
            max={max}
            tipFormatter={tipFormatter}
        />
    );
};

export default ProjectedSalarySlider;
