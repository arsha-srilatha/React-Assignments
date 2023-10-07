import Expenses from "./components/ExpensesSection/Expenses";

function App() {
  const _expenseItems = [
    {
      title: 'Grocery',
      amount: '2000',
      date: new Date('06-03-2023')
    },
    {
      title: 'Petrol',
      amount: '1000',
      date: new Date('06-03-2023')
    }
  ];
  return (
    <div>
      <Expenses data={_expenseItems}></Expenses>
    </div>
  );
}

export default App;
