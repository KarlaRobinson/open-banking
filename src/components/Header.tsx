import * as React from 'react'
import logo from '../logo.png'
import { createHttpBackendServer } from '../helpers'

const { useEffect } = React

const Header = ({
  institution,
  linkId,
  links,
  setInstitution,
  setLinkId,
  setLinks
}: any) => {
  const handleReset = () => {
    createHttpBackendServer().delete(`links/${linkId}`)
    location.assign('/')
  }

  useEffect(() => {
    createHttpBackendServer()
      .get('links')
      .then(({ data }) => {
        setLinks(data.results)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    if (links.length) {
      const { id, institution } = links[0]
      setLinkId(id)
      setInstitution(institution)
    }
  }, [links])

  return (
    <header className='Header'>
      <div className='Header__left'>
        <img src={logo} className='Header__left--logo' alt='logo' />
        <p>Open Banking</p>
        <div>
          <a className='Header__left--link' onClick={handleReset}>
            Reset
          </a>
        </div>
        {location.pathname !== '/' && (
          <div>
            <a className='Header__left--link' href={'/'}>
              Home
            </a>
          </div>
        )}
      </div>
      <div className='Header__right'>
        <p>{institution}</p>
        <p>{linkId}</p>
      </div>
    </header>
  )
}

export default Header
