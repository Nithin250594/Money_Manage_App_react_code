import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    transactionList: [],
    title: '',
    amount: '',
    typeId: transactionTypeOptions[0].optionId,
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({typeId: event.target.value})
  }

  addTransaction = event => {
    event.preventDefault()
    const {title, amount, typeId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachType => eachType.optionId === typeId,
    )

    const {displayText} = typeOption

    const newTransaction = {
      id: uuidv4(),
      title,
      amount: parseInt(amount),
      type: displayText,
    }
    this.setState(prevStat => ({
      transactionList: [...prevStat.transactionList, newTransaction],
      title: '',
      amount: '',
      typeId: transactionTypeOptions[0].optionId,
    }))
  }

  transactionDelete = id => {
    this.setState(prevStat => ({
      transactionList: prevStat.transactionList.filter(
        eachItem => eachItem.id !== id,
      ),
    }))
  }

  render() {
    const {transactionList, title, amount, typeId} = this.state

    let income = 0
    let expenses = 0

    transactionList.forEach(eachItem => {
      if (eachItem.type === 'Income') {
        income += eachItem.amount
      } else {
        expenses += eachItem.amount
      }
    })

    return (
      <div className="money-manger-bg">
        <div className="money-manger-top-section">
          <h1 className="person-name">Hi, Richard</h1>
          <p className="message">
            Welcome back to your <span className="span-text">Money Manger</span>
          </p>
        </div>
        <ul className="money-details-Container">
          <MoneyDetails income={income} expenses={expenses} />
        </ul>
        <div className="money-manager-bottom-section">
          <form onSubmit={this.addTransaction}>
            <div className="transaction-section">
              <h1 className="transaction-title"> Add Transaction</h1>
              <label htmlFor="title" className="transaction-labels">
                TITLE
              </label>
              <input
                type="text"
                id="title"
                className="input-box"
                placeholder="TITLE"
                value={title}
                onChange={this.onChangeTitle}
              />

              <label htmlFor="amount" className="transaction-labels">
                AMOUNT
              </label>
              <input
                type="text"
                id="amount"
                value={amount}
                className="input-box"
                placeholder="AMOUNT"
                onChange={this.onChangeAmount}
              />

              <label htmlFor="type" className="transaction-labels">
                TYPE
              </label>
              <select
                id="type"
                className="input-box"
                onChange={this.onChangeType}
                value={typeId}
              >
                {transactionTypeOptions.map(eachType => (
                  <option value={eachType.optionId} key={eachType.optionId}>
                    {eachType.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="add-button">
                Add
              </button>
            </div>
          </form>

          <div className="transaction-history-container">
            <h1 className="transaction-title">History</h1>
            <div className="transaction-history-table">
              <ul className="Table-inputs-list">
                <li className="Table-titles-list">
                  <p className="table-titles"> Title </p>
                  <p className="table-titles"> Amount </p>
                  <p className="table-titles"> Type </p>
                </li>

                {transactionList.map(eachTransaction => (
                  <TransactionItem
                    key={eachTransaction.id}
                    transactionDetails={eachTransaction}
                    transactionDelete={this.transactionDelete}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
