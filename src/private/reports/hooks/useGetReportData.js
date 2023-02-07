import { API_REPORT_BY_FILTER } from "../../../helper/routes";

export const useGetReportData= async (datafilter) => {
    const bearer = JSON.parse(localStorage.getItem('jwt'));
    const response = await fetch(API_REPORT_BY_FILTER, {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": 'Bearer '+ bearer.sessiontoken,
        },
        body:datafilter,
    });
    const statusReportData = response.status
    const reportData = await response.json();
    return {reportData , statusReportData};
}