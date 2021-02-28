import * as React from 'react'
import EmptyState from './EmptyState'
import { createHttpBackendServer } from '../helpers'

const { useEffect, useState } = React

const Transactions = () => {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    createHttpBackendServer()
      .get('transactions')
      .then(({ data }) => {
        setTransactions(data.results)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const TransactionsCard = (transaction: any) => {
    const { amount, category, currency, id } = transaction.transaction

    return (
      <div className='card'>
        <p>
          <span>Id:</span>
          {id}
        </p>
        <p>
          <span>Amount:</span>
          {`${amount} ${currency}`}
        </p>
        <p>
          <span>Category:</span>
          {category}
        </p>
      </div>
    )
  }

  return (
    <div>
      <p>Transactions</p>
      {transactions.length ? (
        transactions.map((transaction, idx) => (
          <TransactionsCard {...{ transaction }} key={idx} />
        ))
      ) : (
        <EmptyState list='transactions' />
      )}
    </div>
  )
}

export default Transactions
