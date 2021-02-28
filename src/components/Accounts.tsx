import * as React from 'react'
import EmptyState from './EmptyState'
import { createHttpBackendServer } from '../helpers'

const { useState, useEffect } = React

const Accounts = () => {
  const [accounts, setAccounts] = useState([])

  useEffect(() => {
    createHttpBackendServer()
      .get('accounts')
      .then(({ data }) => {
        setAccounts(data.results)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const AccountCard = ({ account }: any) => {
    const { category, id, bank_product_id } = account
    return (
      <div className='card'>
        <p>
          <span>Id</span>
          {id}
        </p>
        <p>
          <span>Category</span>
          {category}
        </p>
        <p>
          <span>Bank Product Id</span>
          {bank_product_id}
        </p>
      </div>
    )
  }

  return (
    <div>
      <p>Accounts</p>
      {accounts.length ? (
        accounts.map((account, idx) => (
          <AccountCard {...{ account }} key={idx} />
        ))
      ) : (
        <EmptyState list='accounts' />
      )}
    </div>
  )
}

export default Accounts
