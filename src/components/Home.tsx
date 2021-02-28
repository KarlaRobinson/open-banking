import * as React from 'react'
import LinkCreate from './LinkCreate'

const Home = ({
  accessToken,
  errMessage,
  linkId,
  setInstitution,
  setLinkId
}: any) => (
  <div className='Home'>
    {errMessage && <p className='error'>{errMessage}</p>}
    {accessToken && !linkId && (
      <LinkCreate {...{ accessToken, linkId, setInstitution, setLinkId }} />
    )}
    {linkId && (
      <div>
        <a href={'/accounts'}>Accounts</a>
        <a href={'/transactions'}>Transactions</a>
        <a href={'/balances'}>Balances</a>
        <a href={'/owners'}>Owners</a>
      </div>
    )}
  </div>
)

export default Home
