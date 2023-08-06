import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';
const Currency = () => {
    const {dispatch, currency} = useContext(AppContext);
    const updateCurrency = (newValue) => {
        console.log(newValue);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newValue
        })
    }
    return (
        <div className='alert alert-secondary'>
            <span>
                <select
                    value={currency}
                    onChange={(event) => updateCurrency(event.target.value)}
                >
                    <option value="$">$ Dollar</option>
                    <option value="£">£ Pound</option>
                    <option value="€">€ Euro</option>
                    <option value="₹">₹ Ruppee</option>
                </select>
            </span>
        </div>
    )
}
export default Currency;