import * as React from 'react'
import EmptyState from './EmptyState'
import { createHttpBackendServer } from '../helpers'

const { useEffect, useState } = React

const Owners = () => {
  const [owners, setOwners] = useState([])

  useEffect(() => {
    createHttpBackendServer()
      .get('owners')
      .then(({ data }) => {
        setOwners(data.results)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const TransactionsCard = ({ owner }: any) => {
    const { first_name, id, last_name, phone_number, second_last_name } = owner

    return (
      <div className='card'>
        <p>
          <span>Id:</span>
          {id}
        </p>
        <p>
          <span>Name:</span>
          {`${first_name} ${last_name} ${second_last_name}`}
        </p>
        <p>
          <span>Phone Number:</span>
          {phone_number}
        </p>
      </div>
    )
  }

  return (
    <div>
      <p>Owners</p>
      {owners.length ? (
        owners.map((owner, idx) => (
          <TransactionsCard {...{ owner }} key={idx} />
        ))
      ) : (
        <EmptyState list='owners' />
      )}
    </div>
  )
}

export default Owners
