import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UIComponents/Card';

function Expenses(props) {
    return (
        <Card className='expenses'>
            <ExpenseItem
                title={props.data[0].title}
                amount={props.data[0].amount}
                date={props.data[0].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.data[1].title}
                amount={props.data[1].amount}
                date={props.data[1].date}
            ></ExpenseItem>
        </Card>
    );
}

export default Expenses