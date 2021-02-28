import * as React from 'react'
declare const window: any

const LinkCreate = ({
  accessToken,
  linkId,
  setInstitution,
  setLinkId
}: any) => {
  const onEventCallbackFunction = (data: any) => {
    console.log('onEventCallbackFunction', data)
  }

  const onExitCallbackFunction = (data: any) => {
    console.log('onExitCallbackFunction', data)
  }

  const successCallbackFunction = (linkId: string, institution: string) => {
    setLinkId(linkId)
    setInstitution(institution)
  }

  const handleCreateBelvoWidget = () => {
    window.belvoSDK
      .createWidget(accessToken, {
        callback: (link: string, institution: string) =>
          successCallbackFunction(link, institution),
        onExit: (data: any) => onExitCallbackFunction(data),
        onEvent: (data: any) => onEventCallbackFunction(data)
      })
      .build()
  }

  return linkId ? null : (
    <button onClick={handleCreateBelvoWidget}>
      Connect a new bank account
    </button>
  )
}

export default LinkCreate
