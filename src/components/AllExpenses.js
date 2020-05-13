import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { EXPENSES } from '../graphql/queries';



const AllExpenses = () => {
    const { loading, error, data } = useQuery(EXPENSES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <ul>
            {data.getExpenses.map((expense, index) => (
                <li key={expense.id}>{expense.description}</li>
            ))}
        </ul>
    );
}

export default AllExpenses;