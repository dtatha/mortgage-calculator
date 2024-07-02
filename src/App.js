import React, { useState } from 'react';
import { calculateMortgage } from './api'; // import your API function

function App() {
    const [principal, setPrincipal] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [years, setYears] = useState('');
    const [monthlyPayment, setMonthlyPayment] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const payment = await calculateMortgage(principal, interestRate, years);
        setMonthlyPayment(payment);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    value={principal}
                    onChange={e => setPrincipal(e.target.value)}
                    placeholder="Principal"
                />
                <input
                    type="number"
                    value={interestRate}
                    onChange={e => setInterestRate(e.target.value)}
                    placeholder="Annual Interest Rate"
                />
                <input
                    type="number"
                    value={years}
                    onChange={e => setYears(e.target.value)}
                    placeholder="Years"
                />
                <button type="submit">Calculate</button>
            </form>
            {monthlyPayment && <p>Monthly Payment: ${monthlyPayment}</p>}
        </div>
    );
}

export default App;