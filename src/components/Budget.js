
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch,budget,expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);//taken from ExpenseTotal.js
    const updateBudget = (newValue) => {
        console.log('Budget: ' + budget + '\n' +
        'ExpensesTotal: ' + totalExpenses+ '\n' +
        'NewValue: ' + newValue);
        if(newValue > 20000){
            alert("Budget cannot exceed £20000");
            return;
        }
        if(newValue < totalExpenses){
            alert("Budget cannot be lower than expenses.")
            return;
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: newValue
        })
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £
                <input
                    type='number'
                    id='budget'
                    value={budget}
                    step='10'
                    onChange={(event) => updateBudget(event.target.value)}
                >
                </input>
            </span>
        </div>
    );
};
export default Budget;