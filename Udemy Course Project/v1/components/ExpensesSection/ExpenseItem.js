import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UIComponents/Card';

function ExpenseItem(props) { //can also use object destructuring

    return (
        <Card className='expense-item'>
            <div className='expense-item__description'>
                <ExpenseDate date={props.date}></ExpenseDate>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;