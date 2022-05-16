import React, {useRef} from 'react';
import IframeResizer from 'iframe-resizer-react'

const Iframe = ({src, setCollapsedState}) => {
  const iframeRef = useRef(null)

  const onMessage = (messageData) => {
    // iframeRef.current.sendMessage('Hello back from the parent page')
    if(messageData.message === "getParentHeight") {
      // alert(messageData.message)
      iframeRef.current.sendMessage({type: 'setParentHeight', value: window.innerHeight}, '*')
    }
    else if(messageData.message === "enterFullScreen") {
      // alert(messageData.message)
      iframeRef.current.style.position = "fixed";
      iframeRef.current.style.zIndex = "9999";
      document.querySelector('html').style.overflow = "hidden";
      document.querySelector('body').style.maxHeight = "100vh";
      document.querySelector('body').style.overflow = "hidden";
    }
    else if(messageData.message === "clicked") {
      console.log('Data has been reciived')
      const newWindow = document.getElementById("myIframe").contentWindow
      newWindow.alert('messageData.message')

    }
    else if(messageData.message === "exitFullScreen") {
      // alert(messageData.message)
      iframeRef.current.style.position = "relative";
      document.querySelector('html').style.overflow = "unset";
      document.querySelector('body').style.maxHeight = "auto";
      document.querySelector('body').style.overflow = "unset";

    }
    else if(messageData.message.includes("setCollapsedState")) {
      try {
        const data = JSON.parse(messageData.message)
        console.log('data = ', data, data.collapsedState)
        setCollapsedState(data.collapsedState)
        // alert(`Collapsed state = ${data.collapsedState.toString()}`)
      }
      catch (e) {
        console.error('Err = ', e)
      }
      // alert(`setCollapsedState = ${messageData.message}`)
    }
  }

  function collapseIframe() {
    sendMessageToIframe('collapseIframe')
  }
  function openIframe() {
    sendMessageToIframe('openIframe')
  }
  function selectArtwork() {
    sendMessageToIframe('selectArtwork')
  }
  function getCollapsedState() {
    sendMessageToIframe('getCollapsedState')
  }
  function gotToArtwork() {
    sendMessageToIframe(JSON.stringify({type: 'gotToArtwork', artworkId: 9053}))
  }
  function gotoArtworkandOpenIframe() {
    sendMessageToIframe(JSON.stringify({type: 'gotoArtworkandOpenIframe', artworkId: 9053}))
  }
  function sendMessageToIframe(message){
    const newWindow = document.getElementById("myIframe").contentWindow
    newWindow.window.postMessage(message,"*")
  }

  return (
    <div>
      <div className="btn-wrapper">
        <button onClick={selectArtwork}>Select first artwork</button>
        <button onClick={collapseIframe}>Collapse Iframe</button>
        <button onClick={openIframe}>Open Iframe</button>
        <button onClick={gotToArtwork}>Go to artwork</button>
        <button onClick={gotoArtworkandOpenIframe}>Go to artwork openIframe</button>
        <button onClick={getCollapsedState}>Get collapsed state</button>

      </div>
      <h1>Iframe</h1>
      <IframeResizer
        id="myIframe"
        forwardRef={iframeRef}
        inPageLinks
        autoResize={false}
        enablePublicMethods={true}
        log
        onMessage={onMessage}
        src={src}
        style={{ width: '1px', minWidth: '100%', border: '1px solid red', top:0, left: 0, minHeight: '49px', maxHeight: '100vh'}}
      />
    </div>
  )
}
export default Iframe;
