import axios from 'axios';

const apiEndpoint = '17mubt8b59.execute-api.us-east-1.amazonaws.com/deploy/calculateMortgage';

export async function calculateMortgage(principal, annualInterestRate, years) {
    const response = await axios.post(apiEndpoint, {
        principal: principal,
        annualInterestRate: annualInterestRate,
        years: years
    });
    return response.data.monthlyPayment;
}