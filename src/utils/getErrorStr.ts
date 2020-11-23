export default function getErrorStr(
    error: any,
    defaultMsg = "An error occurred"
) {
    if (typeof error === "string") {
        return error;
    } else if (error instanceof Error) {
        return error.message;
    } else {
        return defaultMsg;
    }
}
