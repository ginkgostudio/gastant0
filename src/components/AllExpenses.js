import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';


const EXPENSES = gql`
  {
    getExpenses{
        id
        description
        date
        currency
        amount
    }
  }
`;


const AllExpenses = () => {
    const { loading, error, data } = useQuery(EXPENSES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <ul>
            {data.getExpenses.map((item, index) => (
                <li key={item.id}>{item.description}</li>
            ))}
        </ul>
    );
}

export default AllExpenses;