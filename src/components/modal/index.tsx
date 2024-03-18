import RightIcon from "data-base64:~assets/rightArrow.svg"
import React, { useState } from "react"

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null
  const [msg, setMsg] = useState("")
  const [msgData, setMsgData] = useState([
    {
      id: 1,
      sender: "Reply thanking for the opportunity",
      receiver:
        "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask."
    }
  ])
  const onSend = () => {
    const newMsg = {
      id: msgData.length + 1,
      sender: msg,
      receiver:
        "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask."
    }
    setMsgData([...msgData, newMsg])
    setMsg("")
  }
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="message-area-main">
          {msgData.map((msg) => {
            return (
              <>
                <div className="message sender">
                  {msg.sender != undefined ? msg.sender : null}
                </div>
                <div className="message receiver">
                  {msg.receiver != undefined ? msg.receiver : null}
                </div>
              </>
            )
          })}

          {/* <div className="message sender">
            Reply thanking for the opportunity
          </div>
          <div className="message receiver">
            Thank you for the opportunity! If you have any more questions or if
            there's anything else I can help you with, feel free to ask.
          </div> */}
        </div>
        <input
          type="text"
          className="generate-input"
          placeholder="Your prompt"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button className="generateBtn" onClick={onSend}>
          <img
            src={RightIcon}
            style={{ marginRight: 6 }}
            width={20}
            height={20}
          />
          Generate
        </button>
      </div>
    </div>
  )
}

export default Modal
