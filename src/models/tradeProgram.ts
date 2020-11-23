export interface ITradeProgram {
    name: string;

    isa_cap: number;
    isa_length: number;
    isa_take: number;
    isa_threshold: number;
    loan_interest: number;
    tuition: number;
    typical_salary: number;

    monthlyPayment: number;
}

export type ITradeProgramsMap = {
    [key: string]: ITradeProgram;
};

const kMonthsInAYear = 12;

export function monthsToYears(months: number) {
    return Math.ceil(months / kMonthsInAYear);
}

export function yearsToMonths(yrs: number) {
    return yrs * kMonthsInAYear;
}
