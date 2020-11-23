import { ITradeProgram, ITradeProgramsMap } from "../models/tradeProgram";
import { normalize } from "path";

// import tradeProgramsJSON from "../models/tradePrograms.json";

const baseURL = "https://api.wetradeup.com";
const defaultHeaders = new Headers();

defaultHeaders.append("Content-Type", "application/json");

function getURL(path: string) {
    return `${baseURL}${normalize("/" + path)}`;
}

const programsURL = getURL("/terms");
const paymentCalculatorURL = getURL("/calculator");

export type IFetchTradeProgramAPIResult = ITradeProgramsMap;

function processIncomingTrageProgram(program: any, programName: string) {
    program.name = programName;

    // TODO: calculate monthly payment
    program.monthlyPayment = 240;
    program.isa_cap = Number(program.isa_cap);
    program.isa_length = Number(program.isa_length);
    program.isa_take = Number(program.isa_take);
    program.isa_threshold = Number(program.isa_threshold);
    program.loan_interest = Number(program.loan_interest);
    program.tuition = Number(program.tuition);
    program.typical_salary = Number(program.typical_salary);

    return program;
}

async function fetchTradePrograms(): Promise<IFetchTradeProgramAPIResult> {
    const result = await fetch(programsURL, {
        headers: defaultHeaders,
        method: "GET",
        mode: "cors",
    });

    if (result.ok) {
        const programs = await result.json();

        // modify the programs and add the names in-place
        Object.keys(programs).forEach((programName) => {
            const program: ITradeProgram = programs[programName];
            return processIncomingTrageProgram(program, programName);
        });

        return programs;
    } else {
        throw new Error("Error fetching trade programs");
    }

    // const programs = tradeProgramsJSON as any;

    // // modify the programs and add the names in-place
    // Object.keys(programs).forEach((programName) => {
    //     const program: ITradeProgram = programs[programName];
    //    return processIncomingTrageProgram(program, programName)
    // });

    // return programs;
}

export interface ICalculateLoanPaymentAPIParams {
    principal: number;
    interest: number; // decimal percentage
    months: number;
}

export interface ICalculateLoanPaymentAPIResult {
    payment: number;
}

async function calculateLoanPayment(
    params: ICalculateLoanPaymentAPIParams
): Promise<ICalculateLoanPaymentAPIResult> {
    const result = await fetch(paymentCalculatorURL, {
        headers: defaultHeaders,
        method: "POST",
        mode: "cors",
        body: JSON.stringify(params),
    });

    if (result.ok) {
        const jsonResult = await result.json();
        return jsonResult;
    } else {
        throw new Error("Error calculating loan payment");
    }
}

export default class TradeUpAPI {
    public static fetchTradePrograms = fetchTradePrograms;
    public static calculateLoanPayment = calculateLoanPayment;
}
