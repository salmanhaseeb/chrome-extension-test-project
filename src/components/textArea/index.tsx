import MagicIcon from "data-base64:~assets/magic-icon.svg"
import React, { useState } from "react"

import Modal from "~components/modal"

const TextArea = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleFocus = () => {
    setIsFocused(true)
  }

  // const handleBlur = () => {
  //   setIsFocused(false)
  // }

  const handleIconClick = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  return (
    <div className="" style={{ height: 350 }}>
      <div
        className={`textarea-wrapper textAreaMain ${isFocused ? "focused" : ""}`}>
        <textarea
          className="textarea"
          rows={5}
          onFocus={handleFocus}
          // onBlur={handleBlur}
          placeholder="Write a message..."
        />
        {isFocused && ( // Conditionally render the icon when the textarea is focused
          <div className="icon" onClick={handleIconClick}>
            <img src={MagicIcon} alt="icon12" />
          </div>
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

export default TextArea
