import * as React from 'react'
import Accounts from './components/Accounts'
import axios from 'axios'
import Balances from './components/Balances'
import Header from './components/Header'
import Home from './components/Home'
import Owners from './components/Owners'
import Transactions from './components/Transactions'
import { Route, Switch } from 'react-router-dom'
import './App.css'

const { useEffect, useState } = React

function App() {
  const [accessToken, setAccessToken] = useState<string>('')
  const [errMessage, setErrMessage] = useState<string>('')
  const [institution, setInstitution] = useState<string>('')
  const [linkId, setLinkId] = useState<string>('')
  const [links, setLinks] = useState<any[]>([])

  const handleGetAccessTokenFromServer = () => {
    axios
      .get(`${process.env.REACT_APP_OPEN_BANKING_SERVER_URL}/access-key`)
      .then(({ data }) => {
        setAccessToken(data.access)
        setErrMessage('')
      })
      .catch(error => {
        setErrMessage(error.message)
      })
  }

  useEffect(() => {
    handleGetAccessTokenFromServer()
  }, [])

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.belvo.io/belvo-widget-1-stable.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className='App'>
      <Header
        {...{ institution, linkId, links, setInstitution, setLinkId, setLinks }}
      />
      <div className='App__main-content'>
        <Switch>
          <Route exact path='/'>
            <Home
              {...{
                accessToken,
                errMessage,
                linkId,
                setInstitution,
                setLinkId
              }}
            />
          </Route>
          <Route path='/accounts' component={Accounts} />
          <Route path='/balances' exact component={Balances} />
          <Route path='/owners' exact component={Owners} />
          <Route path='/transactions' exact component={Transactions} />
        </Switch>
      </div>
    </div>
  )
}

export default App
