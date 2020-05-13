import { gql } from 'apollo-boost';

export const EXPENSES = gql`
{
  getExpenses{
      id
      description
      date
      currency
      amount
  }
}`;

export const ADD_EXPENSE = gql`
  mutation addExpense($amount: String!, $description: String!, $paymentMethod: String!, $currency: String!, $date: String!){
    addExpense(amount: $amount, description: $description, paymentMethod: $paymentMethod, currency: $currency, date: $date){
      amount
      description
      paymentMethod
      currency
      date
    }
  }
`;