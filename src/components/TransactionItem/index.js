// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, transactionDelete} = props
  const {id, title, amount, type} = transactionDetails

  const deleteTransaction = () => {
    transactionDelete(id)
  }

  return (
    <li key={id} className="transaction-history-lists">
      <p className="table-inputs"> {title}</p>
      <p className="table-inputs"> {`Rs ${amount}`}</p>
      <p className="table-inputs"> {type}</p>
      <div className="delete-container">
        <button
          type="button"
          className="delete-btn"
          data-testid="delete"
          onClick={deleteTransaction}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
