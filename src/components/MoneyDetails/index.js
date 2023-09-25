// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {income, expenses} = props
  const balance = income - expenses

  return (
    <>
      <li>
        <div className="money-details-box balance-bg-color">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png "
            alt="balance"
            className="balance-image"
          />
          <div className="balance-sec">
            <p className="balance-title">Your Balance</p>
            <p className="amount-Rs" data-testid="balanceAmount">
              Rs {balance}
            </p>
          </div>
        </div>
      </li>
      <li>
        <div className="money-details-box income-bg-color">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
            alt="income"
            className="balance-image"
          />
          <div className="balance-sec">
            <p className="balance-title">Your Income</p>
            <p className="amount-Rs" data-testid="incomeAmount">
              Rs {income}
            </p>
          </div>
        </div>
      </li>
      <li>
        <div className="money-details-box expenses-bg-color">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
            alt="expenses"
            className="balance-image"
          />
          <div className="balance-sec">
            <p className="balance-title">Your Expenses</p>
            <p className="amount-Rs" data-testid="expensesAmount">
              Rs {expenses}
            </p>
          </div>
        </div>
      </li>
    </>
  )
}

export default MoneyDetails
