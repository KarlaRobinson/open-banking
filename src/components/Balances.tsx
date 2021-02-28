import * as React from 'react'
import EmptyState from './EmptyState'
import { createHttpBackendServer } from '../helpers'

const { useEffect, useState } = React

const Balances = () => {
  const [balances, setBalances] = useState([])

  useEffect(() => {
    createHttpBackendServer()
      .get('balances')
      .then(({ data }) => {
        setBalances(data.results)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const BalanceCard = ({ balance }: any) => {
    const { balance: balanceAmount, id, value_date } = balance

    return (
      <div className='card'>
        <p>
          <span>Id:</span>
          {id}
        </p>
        <p>
          <span>Balance:</span>
          {balanceAmount}
        </p>
        <p>
          <span>Value Date:</span>
          {value_date}
        </p>
      </div>
    )
  }

  return (
    <div>
      <p>Balances</p>
      {balances.length ? (
        balances.map((balance, idx) => (
          <BalanceCard {...{ balance }} key={idx} />
        ))
      ) : (
        <EmptyState list='balances' />
      )}
    </div>
  )
}

export default Balances
